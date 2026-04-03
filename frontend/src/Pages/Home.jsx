import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">
          AI Resume Analyzer 🚀
        </h1>
        <p className="text-gray-600 mb-6">
          Upload your resume and get instant AI-powered feedback to improve your chances of getting hired.
        </p>

        <Link
          to="/upload"
          className="bg-black text-white px-6 py-3 rounded text-lg"
        >
          Upload Resume
        </Link>
      </section>


      {/* Features Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              Resume Analyzer
            </h3>
            <p className="text-gray-600">
              Get detailed insights on your resume including strengths and weaknesses.
            </p>
          </div>

          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              AI Suggestions
            </h3>
            <p className="text-gray-600">
              Improve your resume with smart AI-generated recommendations.
            </p>
          </div>

          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              ATS Optimization
            </h3>
            <p className="text-gray-600">
              Make your resume ATS-friendly and increase your job chances.
            </p>
          </div>

        </div>
      </section>


      {/* How It Works */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-semibold">1. Upload</h3>
            <p className="text-gray-600">
              Upload your resume in PDF format.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">2. Analyze</h3>
            <p className="text-gray-600">
              Our AI analyzes your resume instantly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">3. Get Results</h3>
            <p className="text-gray-600">
              Receive detailed feedback and suggestions.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;