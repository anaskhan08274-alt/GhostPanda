import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-10">GhostPanda 🐼</h1>

        <nav className="space-y-4">
          <Link to="/dashboard" className="block hover:text-gray-300">
            Dashboard
          </Link>

          <Link to="/upload" className="block hover:text-gray-300">
            Upload Resume
          </Link>

          <Link to="/History" className="block hover:text-gray-300">
            Resume History
          </Link>

          <Link to="/ai-tools" className="block hover:text-gray-300">
            AI Tools
          </Link>

          <Link to="/Setting" className="block hover:text-gray-300">
            Setting
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Dashboard</h2>

          <Link
            to="/upload"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
          >
            Upload Resume
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">

  <div className="bg-white p-6 rounded-xl shadow
                  hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500
                  hover:text-white
                  hover:shadow-2xl hover:-translate-y-2 hover:scale-105
                  transition duration-300">
    <h3>Total Resumes</h3>
    <p className="text-3xl font-bold">12</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow
                  hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500
                  hover:text-white
                  hover:shadow-2xl hover:-translate-y-2 hover:scale-105
                  transition duration-300">
    <h3>ATS Score</h3>
    <p className="text-3xl font-bold">78%</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow
                  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                  hover:text-white
                  hover:shadow-2xl hover:-translate-y-2 hover:scale-105
                  transition duration-300">
    <h3>Job Matches</h3>
    <p className="text-3xl font-bold">5</p>
  </div>

</div>
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h3 className="text-xl font-semibold mb-4">
            Recent Resume Analysis
          </h3>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Resume Name</th>
                <th>Score</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-2">Frontend_Resume.pdf</td>
                <td>82</td>
                <td>12 Mar 2026</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Backend_Resume.pdf</td>
                <td>74</td>
                <td>10 Mar 2026</td>
              </tr>

              <tr>
                <td className="py-2">Internship_Resume.pdf</td>
                <td>69</td>
                <td>05 Mar 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Coming Soon Tools */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="group bg-white p-6 rounded-xl shadow
           hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-50
           hover:shadow-2xl hover:-translate-y-9 hover:scale-105
           transition duration-300 cursor-pointer">
            <h3 className="font-semibold mb-2">
              Resume Builder
            </h3>
            <p className="text-gray-500 text-sm">
              Create professional resumes easily.
            </p>
            <span className="text-xs text-gray-100">
              Coming Soon
            </span>
          </div>

          <div className="group bg-white p-6 rounded-xl shadow
           hover:bg-gradient-to-r hover:from-pink-500 hover:to-indigo-50
           hover:shadow-2xl hover:-translate-y-9 hover:scale-105
           transition duration-300 cursor-pointer">
            <h3 className="font-semibold mb-2">
              Job Matcher
            </h3>
            <p className="text-gray-500 text-sm">
              Match resume with job descriptions.
            </p>
            <span className="text-xs text-gray-100">
              Coming Soon
            </span>
          </div>

          <div className="group bg-white p-6 rounded-xl shadow
           hover:bg-gradient-to-r hover:from-green-500 hover:to-indigo-50
           hover:shadow-2xl hover:-translate-y-9 hover:scale-105
           transition duration-300 cursor-pointer">
            <h3 className="font-semibold mb-2">
              Cover Letter Generator
            </h3>
            <p className="text-gray-500 text-sm">
              Generate AI cover letters.
            </p>
            <span className="text-xs text-gray-100">
              Coming Soon
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;