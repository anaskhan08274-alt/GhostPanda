import { Link } from "react-router-dom";

const Result = () => {
  const score = 78;

  const skills = ["React", "JavaScript", "HTML", "CSS"];
  const missingSkills = ["Node.js", "MongoDB", "TypeScript"];

  const suggestions = [
    "Add action verbs like 'developed', 'built', 'optimized'",
    "Include measurable achievements (e.g. 30% growth)",
    "Improve keyword optimization for ATS",
  ];

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white p-6 md:p-10 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* 🔹 Header */}
        <h1 className="text-4xl font-bold mb-10 text-center">
          Resume Analysis 📊
        </h1>

        {/* 🔹 Score Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl text-center mb-10">

          <h2 className="text-xl mb-6 text-gray-300">ATS Score</h2>

          {/* Circular Score */}
          <div className="relative w-40 h-40 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-8 border-gray-700"></div>

            <div
              className="absolute inset-0 rounded-full border-8 border-purple-500 border-t-transparent animate-spin-slow"
              style={{ transform: `rotate(${score * 3.6}deg)` }}
            ></div>

            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
              {score}%
            </div>
          </div>

          <p className="text-gray-400">
            Your resume is performing {score > 70 ? "well 👍" : "needs improvement ⚠️"}
          </p>
        </div>

        {/* 🔹 Skills Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* ✅ Skills Found */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-green-400">
              Skills Found
            </h2>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ❌ Missing Skills */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-red-400">
              Missing Skills
            </h2>

            <div className="flex flex-wrap gap-2">
              {missingSkills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm border border-red-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* 🔹 Suggestions */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg mb-10">
          <h2 className="text-lg font-semibold mb-4 text-yellow-400">
            Suggestions 💡
          </h2>

          <ul className="space-y-3 text-gray-300">
            {suggestions.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span>👉</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">

          <Link
            to="/upload"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition shadow-lg"
          >
            Re-Upload Resume
          </Link>

          <Link
            to="/resume-builder"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Improve Resume
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Result;