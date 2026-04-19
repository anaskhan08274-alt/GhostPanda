import { Link, useLocation } from "react-router-dom";
import ProgressRing from "./ProgressRing";

const Result = () => {
  const { state } = useLocation();

  // ✅ SAFE fallback data (BIG FIX)
  const data = state || {
    score: 0,
    skills: [],
    missingSkills: [],
    suggestions: [],
  };

  const { score, skills, missingSkills, suggestions } = data;

  console.log("Suggestions:", suggestions); // ✅ debug

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white p-6 md:p-10 overflow-hidden">

      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Resume Analysis 📊
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center mb-10">

          <h2 className="text-xl mb-6 text-gray-300">ATS Score</h2>

          <ProgressRing score={score} />

          <p className="text-gray-400 text-base md:text-xl">
            Your resume is performing {score > 70 ? "well 👍" : "needs improvement ⚠️"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-5 text-green-400">
              ✅ Skills Found
            </h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full text-xl bg-green-500/10 text-green-300 border border-green-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-5 text-red-400">
              ⚠ Missing Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {missingSkills.map((skill, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full text-xl bg-red-500/10 text-red-300 border border-red-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* 🔥 MAIN FIX HERE */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">

          <h2 className="text-xl font-semibold mb-5 text-yellow-400">
            💡 Suggestions
          </h2>

          <ul className="space-y-4 text-gray-300 text-base md:text-xl">
            {(suggestions || []).slice(0, 5).map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-yellow-400 font-semibold">
                  {i + 1}.
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

        <div className="flex gap-4 justify-center">

          <Link to="/upload" className="px-6 py-3 rounded-xl bg-purple-500">
            Re-Upload Resume
          </Link>

          <Link to="/resume-builder" className="px-6 py-3 rounded-xl border border-white/20">
            Improve Resume
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Result;