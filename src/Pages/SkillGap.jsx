import { useState } from "react";

const CareerPath = () => {
  const [skillsInput, setSkillsInput] = useState("");
  const [results, setResults] = useState([]);

  const careers = [
    { role: "Frontend Developer", skills: ["html","css","javascript","react"] },
    { role: "Backend Developer", skills: ["node.js","express","mongodb","api"] },
    { role: "Full Stack Developer", skills: ["react","node.js","mongodb","api"] },
    { role: "Data Analyst", skills: ["python","sql","excel","powerbi"] },
    { role: "UI/UX Designer", skills: ["figma","design","prototype","ui"] },
  ];

  const analyzeCareer = () => {
    const userSkills = skillsInput.toLowerCase().split(",").map(s => s.trim());

    const output = careers.map(career => {
      const matched = career.skills.filter(s => userSkills.includes(s));
      const missing = career.skills.filter(s => !userSkills.includes(s));
      const score = Math.round((matched.length / career.skills.length) * 100);

      return { ...career, matched, missing, score };
    });

    output.sort((a,b) => b.score - a.score);
    setResults(output);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6 md:p-10">

      {/* 🔥 HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Skill Gap Analyzer 🚀
        </h1>
        <p className="text-gray-600 text-lg">
          Discover your best career path based on your skills
        </p>
      </div>

      {/* 🧾 INPUT CARD */}
      <div className="max-w-3xl mx-auto backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl rounded-2xl p-6 mb-12">

        <textarea
          placeholder="Enter your skills (React, Node.js, Python...)"
          value={skillsInput}
          onChange={(e) => setSkillsInput(e.target.value)}
          className="w-full h-28 p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          onClick={analyzeCareer}
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Analyze Career 🚀
        </button>

      </div>

      {/* 📊 RESULTS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {results.map((item, i) => (
          <div
            key={i}
            className={`relative p-6 rounded-2xl shadow-lg border backdrop-blur-md 
            transition duration-300 hover:-translate-y-3 hover:shadow-2xl
            ${i === 0 ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-105" : "bg-white/70"}`}
          >

            {/* 🔥 BEST BADGE */}
            {i === 0 && (
              <span className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 text-xs rounded-full font-bold">
                Best Match
              </span>
            )}

            <h3 className="text-xl font-bold mb-3">
              {item.role}
            </h3>

            {/* Progress */}
            <div className="w-full bg-gray-200 h-3 rounded-full mb-3">
              <div
                className={`h-3 rounded-full ${
                  i === 0 ? "bg-white" : "bg-blue-500"
                }`}
                style={{ width: `${item.score}%` }}
              />
            </div>

            <p className="font-semibold mb-4">
              {item.score}% Match
            </p>

            {/* Matched */}
            <div className="mb-3">
              <p className={`text-sm font-semibold ${i === 0 ? "text-white" : "text-green-600"}`}>
                Matched Skills
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {item.matched.map((s, j) => (
                  <span
                    key={j}
                    className={`px-2 py-1 rounded text-xs ${
                      i === 0
                        ? "bg-white text-black"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Missing */}
            <div>
              <p className={`text-sm font-semibold ${i === 0 ? "text-white" : "text-red-600"}`}>
                Missing Skills
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {item.missing.map((s, j) => (
                  <span
                    key={j}
                    className={`px-2 py-1 rounded text-xs ${
                      i === 0
                        ? "bg-black/30 text-white"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default CareerPath;