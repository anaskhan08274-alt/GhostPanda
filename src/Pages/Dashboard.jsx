import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* 🔹 Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-black text-white p-6 transform 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
        transition duration-300 md:translate-x-0 md:static`}
      >
        <h1 className="text-2xl font-bold mb-10">GhostPanda 🐼</h1>

        <nav className="space-y-5 text-sm">
          <Link to="/dashboard" className="block hover:text-gray-300">Dashboard</Link>
          <Link to="/upload" className="block hover:text-gray-300">Upload Resume</Link>
          <Link to="/history" className="block hover:text-gray-300">Resume History</Link>
          <Link to="/ai-tools" className="block hover:text-gray-300">AI Tools</Link>
          <Link to="/setting" className="block hover:text-gray-300">Settings</Link>
        </nav>
      </div>

      {/* 🔹 Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* 🔹 Main Layout */}
      <div className="flex-1 flex flex-col">

        {/* 🔹 Topbar */}
        <div className="sticky top-0 z-30 bg-white shadow px-4 md:px-8 py-4 flex items-center justify-between">

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          <h2 className="text-lg md:text-2xl font-semibold">
            Dashboard
          </h2>

          <Link
            to="/upload"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-gray-800 transition"
          >
            Upload
          </Link>
        </div>

        {/* 🔹 Content */}
        <div className="p-4 md:p-8 space-y-8">

          {/* 🔸 Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              { title: "Total Resumes", value: "12", color: "blue" },
              { title: "ATS Score", value: "78%", color: "green" },
              { title: "Job Matches", value: "5", color: "purple" },
            ].map((card, i) => (
              <div
                key={i}
                className={`bg-white p-6 rounded-xl shadow transition duration-300
                hover:shadow-2xl hover:-translate-y-2 hover:scale-105
                hover:bg-gradient-to-r hover:from-${card.color}-500 hover:to-${card.color}-700
                hover:text-white`}
              >
                <h3 className="text-sm opacity-80">{card.title}</h3>
                <p className="text-3xl font-bold mt-2">{card.value}</p>
              </div>
            ))}

          </div>

          {/* 🔸 Recent Activity */}
          <div className="bg-white rounded-xl shadow p-4 md:p-6">
            <h3 className="text-lg font-semibold mb-4">
              Recent Resume Analysis
            </h3>

            {/* Desktop Table */}
            <div className="hidden md:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Resume</th>
                    <th>Score</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Frontend_Resume.pdf", "82", "12 Mar 2026"],
                    ["Backend_Resume.pdf", "74", "10 Mar 2026"],
                    ["Internship_Resume.pdf", "69", "05 Mar 2026"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-2">{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {[
                ["Frontend_Resume.pdf", "82", "12 Mar 2026"],
                ["Backend_Resume.pdf", "74", "10 Mar 2026"],
                ["Internship_Resume.pdf", "69", "05 Mar 2026"],
              ].map((row, i) => (
                <div key={i} className="border p-4 rounded-lg">
                  <p className="font-semibold">{row[0]}</p>
                  <p className="text-sm text-gray-500">Score: {row[1]}</p>
                  <p className="text-sm text-gray-400">{row[2]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 🔸 Coming Soon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Resume Builder",
              "Job Matcher",
              "Cover Letter Generator",
            ].map((tool, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow transition duration-300
                hover:shadow-2xl hover:-translate-y-2 hover:scale-105
                hover:bg-gradient-to-r hover:from-gray-800 hover:to-black
                hover:text-white cursor-pointer"
              >
                <h3 className="font-semibold mb-2">{tool}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-300">
                  Coming soon feature
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;