import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Improve Your Resume with 
              <span className="text-blue-600"> AI Analysis</span>
            </h1>

            <p className="text-gray-600 mb-6 text-lg">
              GhostPanda helps you analyze your resume, improve ATS score,
              and get AI-powered suggestions to land your dream job faster.
            </p>

            <div className="space-x-4">
              <Link
                to="/upload"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Upload Resume
              </Link>

              <Link
                to="/about"
                className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Resume Score
            </h2>

            <div className="w-full bg-gray-200 h-4 rounded mb-4">
              <div className="bg-green-500 h-4 rounded w-3/4"></div>
            </div>

            <p className="text-gray-600 mb-2">✔ Skills Matched</p>
            <p className="text-gray-600 mb-2">✔ ATS Friendly</p>
            <p className="text-gray-600">✔ Formatting Good</p>
          </div>

        </div>
      </section>


      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Resume Analysis",
                desc: "Get detailed resume analysis and improvement suggestions.",
              },
              {
                title: "AI Suggestions",
                desc: "AI will suggest skills, keywords, and improvements.",
              },
              {
                title: "ATS Score",
                desc: "Check how ATS-friendly your resume is.",
              },
              {
                title: "Resume Builder",
                desc: "Create professional resumes with AI assistance.",
              },
              {
                title: "Job Match Score",
                desc: "See how well your resume matches a job description.",
              },
              {
                title: "Keyword Optimization",
                desc: "Improve your resume keywords for better visibility.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Step 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-2">
                Upload Resume
              </h3>
              <p className="text-gray-600">
                Upload your resume in PDF or DOC format securely.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">
                AI Analysis
              </h3>
              <p className="text-gray-600">
                Our AI analyzes your resume and checks ATS score,
                skills, and formatting.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">
                Get Results
              </h3>
              <p className="text-gray-600">
                Get resume score, suggestions, and improvements instantly.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Improve Your Resume?
          </h2>

          <p className="text-gray-300 mb-8">
            Upload your resume and get AI-powered feedback instantly.
          </p>

          <Link
            to="/upload"
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Upload Resume
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;