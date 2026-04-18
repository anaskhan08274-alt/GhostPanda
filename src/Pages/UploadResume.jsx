import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadResume = () => {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔥 Dummy AI Generator
  const generateDummyData = (fileName) => {
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

    // shuffle skills (random feel)
    const shuffled = [...allSkills].sort(() => 0.5 - Math.random());

    const skills = shuffled.slice(0, 4);
    const missingSkills = shuffled.slice(4);

    return {
      score,
      skills,
      missingSkills,
      suggestions: [
        "Add measurable achievements",
        "Improve ATS keywords",
        "Enhance project descriptions",
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
      const data = generateDummyData(fileName); // 🔥 dynamic data

      setLoading(false);
      navigate("/result", { state: data });
    }, 2500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-500/30 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* ✨ Loader */}
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

          {/* Heading */}
          <h1 className="text-4xl font-bold text-white mb-3">
            Upload Resume
          </h1>

          <p className="text-gray-400 mb-8">
            Get instant AI-powered analysis 🚀
          </p>

          {/* Upload Box */}
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

          {/* File Name */}
          {fileName && (
            <p className="mt-5 text-green-400 text-sm">
              ✅ {fileName}
            </p>
          )}

          {/* Button */}
          <button
            onClick={handleUpload}
            className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition-all duration-300"
          >
            Analyze Resume
          </button>

        </div>
      )}
    </div>
  );
};

export default UploadResume;