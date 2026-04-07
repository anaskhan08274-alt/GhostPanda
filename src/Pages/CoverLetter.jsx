import { useState } from "react";

const CoverLetter = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const [form, setForm] = useState({
    role: "",
    company: "",
    tone: "Professional",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateLetter = () => {
    setLoading(true);

    // Dummy AI Response (Replace with API later)
    setTimeout(() => {
      setResult(`
Dear Hiring Manager,

I am excited to apply for the ${form.role} position at ${form.company}. 
With my skills and experience, I am confident in my ability to contribute effectively to your team.

I have a strong background in relevant technologies and a passion for delivering high-quality work. 
I would welcome the opportunity to discuss how I can add value to your organization.

Thank you for your time and consideration.

Sincerely,
Your Name
      `);
      setLoading(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert("Copied ✅");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">

      {/* 🔥 Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Cover Letter Generator ✍️
        </h1>
        <p className="text-gray-600">
          Generate professional cover letters instantly using AI
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* 🧾 FORM SECTION */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border">

          <h2 className="text-xl font-semibold mb-6">
            Enter Job Details
          </h2>

          <div className="space-y-4">

            <input
              name="role"
              placeholder="Job Role (e.g. Frontend Developer)"
              value={form.role}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />

            <input
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />

            <select
              name="tone"
              value={form.tone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option>Professional</option>
              <option>Friendly</option>
              <option>Confident</option>
            </select>

          </div>

          {/* 🔥 Generate Button */}
          <button
            onClick={generateLetter}
            className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            {loading ? "Generating..." : "Generate Cover Letter"}
          </button>
        </div>

        {/* 📄 RESULT SECTION */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border flex flex-col">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Generated Letter
            </h2>

            {result && (
              <button
                onClick={copyToClipboard}
                className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                Copy
              </button>
            )}
          </div>

          <div className="flex-1 bg-gray-50 p-4 rounded-lg border overflow-auto whitespace-pre-line text-gray-700">
            {loading && "⏳ Generating your cover letter..."}

            {!loading && !result && (
              <p className="text-gray-400">
                Your generated cover letter will appear here...
              </p>
            )}

            {result}
          </div>

        </div>

      </div>
    </div>
  );
};

export default CoverLetter;