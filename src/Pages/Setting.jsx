import { useState } from "react";

const Settings = () => {
  const [emailNotif, setEmailNotif] = useState(true);

  return (
    <div className="bg-gray-50 min-h-screen py-16 transition">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-12">
          Settings ⚙️
        </h1>

        {/* Profile */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition mb-6">
          <h2 className="text-xl font-semibold mb-6">
            Profile Settings
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg border focus:ring-2 focus:ring-black outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg border focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Save Changes
          </button>
        </div>

        {/* Appearance */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition mb-6">
          <h2 className="text-xl font-semibold mb-6">
            Appearance
          </h2>

          <div className="flex justify-between items-center">
            <p className="text-lg">Dark Mode</p>

            {/* Toggle Switch UI Only */}
            <div className="w-14 h-7 flex items-center rounded-full p-1 cursor-pointer bg-gray-300">
              <div className="bg-white w-5 h-5 rounded-full shadow-md" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition mb-6">
          <h2 className="text-xl font-semibold mb-6">
            Notifications
          </h2>

          <div className="flex justify-between items-center">
            <p className="text-lg">Email Notifications</p>

            <div
              onClick={() => setEmailNotif(!emailNotif)}
              className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition 
              ${emailNotif ? "bg-blue-500" : "bg-gray-300"}`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition 
                ${emailNotif ? "translate-x-7" : ""}`}
              />
            </div>
          </div>
        </div>

        {/* AI Tools */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-6">
            AI Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              { title: "Resume Analyzer" },
              { title: "Cover Letter Generator" },
              { title: "Job Match AI" },
              { title: "Resume Builder AI" },
            ].map((tool, i) => (
              <div
                key={i}
                className="group p-5 rounded-xl border 
                           hover:bg-gradient-to-r hover:from-black hover:to-gray-800 
                           hover:text-white hover:shadow-xl hover:-translate-y-1 
                           transition duration-300 cursor-pointer"
              >
                <h3 className="font-semibold text-lg mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-200">
                  AI powered feature
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-red-600">
            Danger Zone
          </h2>

          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;