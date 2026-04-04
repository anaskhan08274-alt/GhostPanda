const Result = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8">
          Resume Analysis Result
        </h1>

        {/* Score Section */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Resume Score
          </h2>

          <div className="w-full bg-gray-200 h-5 rounded">
            <div className="bg-green-500 h-5 rounded w-3/4"></div>
          </div>

          <p className="mt-2 text-gray-600">
            Your resume ATS score is 75/100
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Skills Found */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">
              Skills Found
            </h2>

            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "HTML", "CSS", "Node.js"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Missing Skills */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">
              Missing Skills
            </h2>

            <div className="flex flex-wrap gap-2">
              {["MongoDB", "Express", "TypeScript", "AWS"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">
              Suggestions
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Add more project details</li>
              <li>Use action verbs in experience section</li>
              <li>Add measurable achievements</li>
              <li>Improve resume summary</li>
            </ul>
          </div>

          {/* Improvements */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">
              Improvements
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Improve formatting</li>
              <li>Add certifications</li>
              <li>Include GitHub portfolio</li>
              <li>Optimize keywords</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Result;