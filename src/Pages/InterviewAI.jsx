import { useState } from "react";

const InterviewAI = () => {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("Fresher");
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState(null);

  const generateQuestions = () => {
    setLoading(true);

    setTimeout(() => {
      setQuestions({
        hr: [
          "Tell me about yourself",
          "Why do you want this role?",
          "What are your strengths and weaknesses?"
        ],
        technical: [
          "Explain React lifecycle methods",
          "What is REST API?",
          "Difference between SQL and NoSQL?"
        ],
        behavioral: [
          "Describe a challenge you faced",
          "How do you handle deadlines?",
          "Tell me about teamwork experience"
        ]
      });

      setLoading(false);
    }, 1200);
  };

  const copyAll = () => {
    const all = [
      ...questions.hr,
      ...questions.technical,
      ...questions.behavioral
    ].join("\n");

    navigator.clipboard.writeText(all);
    alert("Copied!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Interview Questions AI 🎤
        </h1>
        <p className="text-gray-600">
          Generate smart interview questions based on your role
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* INPUT */}
        <div className="bg-white p-6 rounded-2xl shadow border space-y-5">

          <h2 className="text-xl font-semibold">
            Generate Questions
          </h2>

          <input
            type="text"
            placeholder="Enter Job Role (e.g. Frontend Developer)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full border p-3 rounded-lg"
          >
            <option>Fresher</option>
            <option>Intermediate</option>
            <option>Experienced</option>
          </select>

          <button
            onClick={generateQuestions}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>

        </div>

        {/* OUTPUT */}
        <div className="space-y-6">

          {loading && <p>⏳ AI is generating questions...</p>}

          {questions && (
            <>
              {/* COPY BUTTON */}
              <button
                onClick={copyAll}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Copy All Questions
              </button>

              {/* HR */}
              <div className="bg-white p-6 rounded-2xl shadow border">
                <h3 className="font-semibold mb-3 text-blue-600">
                  HR Questions
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {questions.hr.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>

              {/* TECH */}
              <div className="bg-white p-6 rounded-2xl shadow border">
                <h3 className="font-semibold mb-3 text-green-600">
                  Technical Questions
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {questions.technical.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>

              {/* BEHAVIORAL */}
              <div className="bg-white p-6 rounded-2xl shadow border">
                <h3 className="font-semibold mb-3 text-purple-600">
                  Behavioral Questions
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {questions.behavioral.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
};

export default InterviewAI;