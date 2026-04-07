import { useState, useRef, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumeBuilder = () => {
  const resumeRef = useRef();

  const [template, setTemplate] = useState("modern");
  const [theme, setTheme] = useState("blue");

  const [form, setForm] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
  });

  // 🔹 Load saved data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("resume"));
    if (saved) setForm(saved);
  }, []);

  // 🔹 Input handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Save
  const saveResume = () => {
    localStorage.setItem("resume", JSON.stringify(form));
    alert("Resume Saved ✅");
  };

  // 🔹 Download PDF
  const downloadPDF = () => {
    html2canvas(resumeRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("resume.pdf");
    });
  };

  // 🎨 Theme styles
  const themeStyles = {
    blue: "text-blue-600",
    green: "text-green-600",
    dark: "text-gray-900",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6 md:p-10">

      {/* 🔥 HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Resume Builder 🚀</h1>
        <p className="text-gray-600">
          Create, customize and download your resume
        </p>
      </div>

      {/* 🎨 TEMPLATE GALLERY */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {["modern", "minimal", "professional", "creative"].map((t) => (
          <div
            key={t}
            onClick={() => setTemplate(t)}
            className={`cursor-pointer border rounded-xl p-4 text-center transition
            ${template === t ? "border-black shadow-lg" : "hover:shadow"}`}
          >
            <div className="h-20 bg-gray-200 rounded mb-2"></div>
            <p className="text-sm capitalize">{t}</p>
          </div>
        ))}
      </div>

      {/* 🎨 THEME SWITCHER */}
      <div className="flex gap-3 mb-8">
        {[
          { name: "blue", color: "bg-blue-500" },
          { name: "green", color: "bg-green-500" },
          { name: "dark", color: "bg-black" },
        ].map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`w-10 h-10 rounded-full ${t.color} border-2
            ${theme === t.name ? "scale-110 border-black" : ""}`}
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* 🧾 FORM */}
        <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-xl border">

          <h2 className="text-xl font-semibold mb-6">Enter Details</h2>

          <div className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="skills"
              placeholder="Skills"
              value={form.skills}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="experience"
              placeholder="Experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* 🔥 ACTION BUTTONS */}
          <div className="flex gap-3 mt-6 flex-wrap">
            <button
              onClick={saveResume}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Save 💾
            </button>

            <button
              onClick={downloadPDF}
              className="bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Download PDF 📄
            </button>
          </div>
        </div>

        {/* 📄 PREVIEW */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border">

          <h2 className="text-xl font-semibold mb-6">Live Preview</h2>

          <div ref={resumeRef} className="p-8 bg-white border rounded-lg">

            {/* MODERN */}
            {template === "modern" && (
              <div>
                <h2 className={`text-3xl font-bold ${themeStyles[theme]}`}>
                  {form.name || "Your Name"}
                </h2>
                <p className="text-gray-500 mb-4">
                  {form.email || "email@example.com"}
                </p>

                <h3 className="font-semibold">Skills</h3>
                <p>{form.skills}</p>

                <h3 className="font-semibold mt-4">Experience</h3>
                <p>{form.experience}</p>
              </div>
            )}

            {/* MINIMAL */}
            {template === "minimal" && (
              <div>
                <h2 className="text-xl font-bold border-b pb-2">
                  {form.name}
                </h2>
                <p className="mt-2">{form.email}</p>

                <div className="mt-4">
                  <strong>Skills:</strong>
                  <p>{form.skills}</p>
                </div>

                <div className="mt-4">
                  <strong>Experience:</strong>
                  <p>{form.experience}</p>
                </div>
              </div>
            )}

            {/* PROFESSIONAL */}
            {template === "professional" && (
              <div>
                <h2 className={`text-2xl font-bold ${themeStyles[theme]}`}>
                  {form.name}
                </h2>
                <p>{form.email}</p>

                <h3 className="mt-4 font-semibold border-b">Skills</h3>
                <p>{form.skills}</p>

                <h3 className="mt-4 font-semibold border-b">Experience</h3>
                <p>{form.experience}</p>
              </div>
            )}

            {/* CREATIVE */}
            {template === "creative" && (
              <div className="bg-gray-100 p-4 rounded">
                <h2 className={`text-2xl font-bold ${themeStyles[theme]}`}>
                  {form.name}
                </h2>
                <p>{form.email}</p>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <h3 className="font-semibold">Skills</h3>
                    <p>{form.skills}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Experience</h3>
                    <p>{form.experience}</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeBuilder;