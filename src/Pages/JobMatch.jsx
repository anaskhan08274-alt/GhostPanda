import { useState, useEffect } from "react";

const JobMatch = () => {
  const [jobDesc, setJobDesc] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);

  // 🔥 Animate score
  useEffect(() => {
    if (result) {
      let current = 0;
      const interval = setInterval(() => {
        current += 2;
        if (current >= result.score) {
          current = result.score;
          clearInterval(interval);
        }
        setScore(current);
      }, 20);
    }
  }, [result]);

  const handleFileUpload = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const analyzeMatch = () => {
    setLoading(true);

    // Dummy AI logic
    setTimeout(() => {
      setResult({
        score: 76,
        keywords: ["React", "JavaScript", "CSS"],
        missing: ["Node.js", "MongoDB"],
        suggestions: [
          "Add backend skills like Node.js",
          "Include measurable achievements",
          "Improve ATS keywords",
        ],
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">

      {/* 🔥 HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Job Match AI 🎯
        </h1>
        <p className="text-gray-600">
          Upload resume & match with job description
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* 🧾 INPUT SECTION */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border space-y-5">

          <h2 className="text-xl font-semibold">
            Upload & Analyze
          </h2>

          {/* 📄 Resume Upload */}
          <div className="border-2 border-dashed p-6 rounded-lg text-center">
            <input type="file" onChange={handleFileUpload} />
            <p className="text-gray-500 mt-2 text-sm">
              Upload PDF / DOC resume
            </p>
          </div>

          {/* 📋 Job Description */}
          <textarea
            placeholder="Paste job description..."
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            className="w-full h-32 border p-3 rounded-lg"
          />

          <button
            onClick={analyzeMatch}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            {loading ? "Analyzing..." : "Analyze Match"}
          </button>

        </div>

        {/* 📊 RESULT SECTION */}
        <div className="space-y-6">

          {/* Score */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <h3 className="font-semibold mb-4">
              Match Score
            </h3>

            {loading && <p>⏳ Processing...</p>}

            {result && (
              <>
                <div className="w-full bg-gray-200 h-4 rounded-full mb-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${score}%` }}
                  />
                </div>

                <p className="text-2xl font-bold">
                  {score}%
                </p>
              </>
            )}
          </div>

          {/* Keywords */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <h3 className="font-semibold mb-3">
              Matched Keywords
            </h3>

            {result && (
              <div className="flex flex-wrap gap-2">
                {result.keywords.map((k, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {k}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Missing */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <h3 className="font-semibold mb-3">
              Missing Keywords
            </h3>

            {result && (
              <div className="flex flex-wrap gap-2">
                {result.missing.map((k, i) => (
                  <span
                    key={i}
                    className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                  >
                    {k}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Suggestions */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <h3 className="font-semibold mb-3">
              Suggestions
            </h3>

            {result && (
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                {result.suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default JobMatch;