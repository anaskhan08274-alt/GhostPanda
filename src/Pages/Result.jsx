import { Link, useLocation } from "react-router-dom";
import ProgressRing from "./ProgressRing";

const Result = () => {
  const { state } = useLocation();

  // ✅ Fallback (agar direct page open ho)
  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <p>No data found. Please upload resume first.</p>
      </div>
    );
  }

  // ✅ Dynamic data
  const score = state.score;
  const skills = state.skills;
  const missingSkills = state.missingSkills;
  const suggestions = state.suggestions;

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
         <ProgressRing score={score} />

          <p className="text-gray-400 text-base md:text-xl ml-4">
            Your resume is performing {score > 70 ? "well 👍" : "needs improvement ⚠️"}
          </p>
        </div>

       <div className="grid md:grid-cols-2 gap-6 mb-12">

  {/* ✅ Skills Found */}
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:shadow-green-500/10 transition-all duration-300">

    <h2 className="text-lg font-semibold mb-5 text-green-400 flex items-center gap-2">
      ✅ Skills Found
    </h2>

    <div className="flex flex-wrap gap-3">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="px-4 py-1.5 rounded-full text-xl font-medium
          bg-green-500/10 text-green-300 border border-green-500/20
          hover:bg-green-500/20 transition"
        >
          {skill}
        </span>
      ))}
    </div>

  </div>

  {/* ❌ Missing Skills */}
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg hover:shadow-red-500/10 transition-all duration-300">

    <h2 className="text-lg font-semibold mb-5 text-red-400 flex items-center gap-2">
      ⚠ Missing Skills
    </h2>

    <div className="flex flex-wrap gap-3">
      {missingSkills.map((skill, i) => (
        <span
          key={i}
          className="px-4 py-1.5 rounded-full text-xl font-medium
          bg-red-500/10 text-red-300 border border-red-500/20
          hover:bg-red-500/20 transition"
        >
          {skill}
        </span>
      ))}
    </div>

  </div>

</div>

        {/* 🔹 Suggestions */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg mb-12 hover:shadow-yellow-500/10 transition-all duration-300">

  <h2 className="text-xl font-semibold mb-5 text-yellow-400 flex items-center gap-2">
    💡 Suggestions
  </h2>

  <ul className="space-y-4 text-gray-300 text-base md:text-xl">
    {suggestions.map((item, i) => (
      <li
        key={i}
        className="flex items-start gap-3 hover:translate-x-1 transition"
      >
        <span className="text-yellow-400 font-semibold">
          {i + 1}.
        </span>

        <span className="leading-relaxed">
          {item}
        </span>
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