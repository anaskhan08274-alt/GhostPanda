import { Link } from "react-router-dom";

const AITools = () => {
  const tools = [
    {
      title: "Resume Analyzer",
      desc: "Analyze resume ATS score and suggestions",
      color: "from-blue-500 to-indigo-500",
      link: "/upload"
    },
    {
      title: "Resume Builder",
      desc: "Create professional resumes with AI",
      color: "from-purple-500 to-pink-500",
      link: "/resume-builder"
    },
    {
      title: "Cover Letter Generator",
      desc: "Generate AI cover letters instantly",
      color: "from-green-500 to-emerald-500",
      link: "/cover-letter"
    },
    {
      title: "Job Match AI",
      desc: "Match resume with job descriptions",
      color: "from-orange-500 to-red-500",
      link: "/job-match"
    },
    {
      title: "Interview Questions AI",
      desc: "Get interview questions based on resume",
      color: "from-cyan-500 to-blue-500",
      link: "/interview"
    },
    {
      title: "Skill Gap Analyzer",
      desc: "Find missing skills for your career",
      color: "from-yellow-500 to-orange-500",
      link: "/skillgap"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white p-6 md:p-10">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-10">
        AI Tools 🤖
      </h1>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {tools.map((tool, index) => (
          <Link
            key={index}
            to={tool.link}
            className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow
                       hover:shadow-2xl hover:-translate-y-2 hover:scale-105
                       transition duration-300 cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-lg mb-4 bg-gradient-to-r ${tool.color}`}></div>

            <h3 className="text-xl font-semibold mb-2">
              {tool.title}
            </h3>

            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {tool.desc}
            </p>

            <div className="mt-4 text-sm font-medium text-blue-600 group-hover:underline">
              Open Tool →
            </div>
          </Link>
        ))}

      </div>

    </div>
  );
};

export default AITools;