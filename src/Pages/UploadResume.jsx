import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadResume = () => {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔥 Dummy AI Generator
  const generateDummyData = () => {
    const score = Math.floor(Math.random() * 30) + 65;

    const allSkills = [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "MongoDB",
      "TypeScript",
    ];

    const shuffled = [...allSkills].sort(() => 0.5 - Math.random());

    const skills = shuffled.slice(0, 4);
    const missingSkills = shuffled.slice(4);

    return {
      id: Date.now(), // 🔥 IMPORTANT FIX
      score,
      skills,
      missingSkills,
      suggestions: [
        "Add action verbs like 'developed', 'built', 'optimized'",
        "Include measurable achievements (e.g. 30% growth)",
        "Improve keyword optimization for ATS",
        "Add more relevant technical skills",
        "Improve project descriptions with impact",
        "Keep formatting clean and consistent",
      ],
    };
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleUpload = () => {
    if (!fileName) {
      alert("Please upload a resume first");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const data = generateDummyData();

      console.log("Sending:", data); // ✅ debug

      setLoading(false);

      navigate("/result", {
        state: data, // 🔥 now always fresh
      });
    }, 2500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">

      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-500/30 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {loading ? (
        <div className="text-center text-white z-10">
          <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

          <h2 className="text-3xl font-semibold mb-2">
            Analyzing Resume...
          </h2>

          <p className="text-gray-400">
            AI is generating insights ⚡
          </p>
        </div>
      ) : (
        <div className="z-10 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-10 w-full max-w-xl text-center">

          <h1 className="text-4xl font-bold text-white mb-3">
            Upload Resume
          </h1>

          <p className="text-gray-400 mb-8">
            Get instant AI-powered analysis 🚀
          </p>

          <label className="group border-2 border-dashed border-white/20 rounded-2xl p-12 cursor-pointer hover:border-purple-500 transition-all duration-300 block">

            <input type="file" className="hidden" onChange={handleFileChange} />

            <div className="text-6xl mb-4 group-hover:scale-110 transition">
              📄
            </div>

            <p className="text-gray-300 text-lg">
              Drag & Drop your resume
            </p>

            <p className="text-sm text-gray-500 mt-1">
              or click to browse
            </p>
          </label>

          {fileName && (
            <p className="mt-5 text-green-400 text-sm">
              ✅ {fileName}
            </p>
          )}

          <button
            onClick={handleUpload}
            className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            Analyze Resume
          </button>

        </div>
      )}
    </div>
  );
};

export default UploadResume;