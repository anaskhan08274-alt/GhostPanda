import { Link } from "react-router-dom";

const Result = () => {

  // 🔹 Dummy Data (later API se aayega)
  const score = 78;

  const skills = ["React", "JavaScript", "HTML", "CSS"];
  const missingSkills = ["Node.js", "MongoDB", "TypeScript"];

  const suggestions = [
    "Add more action verbs like 'developed', 'built', 'optimized'",
    "Include measurable achievements",
    "Improve keyword optimization for ATS",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">

      {/* 🔹 Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Resume Analysis Result 📊
      </h1>

      {/* 🔹 Score Card */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">

        <h2 className="text-xl font-semibold mb-4">
          ATS Score
        </h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${score}%` }}
          ></div>
        </div>

        <p className="text-lg font-bold">
          {score}% Score
        </p>
      </div>

      {/* 🔹 Grid */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* ✅ Skills Found */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-green-600">
            Skills Found ✅
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ❌ Missing Skills */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-red-600">
            Missing Skills ❌
          </h2>

          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill, i) => (
              <span
                key={i}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* 🔹 Suggestions */}
      <div className="bg-white p-6 rounded-xl shadow mt-8">
        <h2 className="text-lg font-semibold mb-4">
          Suggestions 💡
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          {suggestions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 🔹 CTA Buttons */}
      <div className="flex gap-4 mt-8 flex-wrap">

        <Link
          to="/upload"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
        >
          Re-Upload Resume
        </Link>

        <Link
          to="/resume-builder"
          className="border px-6 py-2 rounded-lg hover:bg-gray-100"
        >
          Improve Resume
        </Link>

      </div>

    </div>
  );
};

export default Result;