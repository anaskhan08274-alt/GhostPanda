import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadResume = () => {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    // Fake AI processing delay
    setTimeout(() => {
      setLoading(false);
      navigate("/result");
    }, 2500); // 2.5 seconds
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">

      {/* Loader Screen */}
      {loading ? (
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

          <h2 className="text-2xl font-semibold mb-2">
            Analyzing Your Resume...
          </h2>

          <p className="text-gray-600">
            Our AI is checking your resume, please wait...
          </p>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-xl text-center">

          <h1 className="text-3xl font-bold mb-4">
            Upload Your Resume
          </h1>

          <p className="text-gray-600 mb-6">
            Upload your resume to get AI-powered analysis.
          </p>

          {/* Upload Box */}
          <label className="border-2 border-dashed border-gray-300 rounded-xl p-10 cursor-pointer hover:border-black transition block">
            <input type="file" className="hidden" onChange={handleFileChange} />

            <div className="text-5xl mb-4">📄</div>
            <p className="text-gray-600">Drag & Drop your resume</p>
            <p className="text-sm text-gray-400">or click to browse</p>
          </label>

          {/* File Name */}
          {fileName && (
            <p className="mt-4 text-green-600">
              Uploaded: {fileName}
            </p>
          )}

          {/* Button */}
          <button
            onClick={handleUpload}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Analyze Resume
          </button>

        </div>
      )}
    </div>
  );
};

export default UploadResume;