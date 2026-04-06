const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            About GhostPanda 🐼
          </h1>
          <p className="text-gray-300 text-lg">
            AI-powered platform to analyze resumes and help you get hired faster.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* What is GhostPanda */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What is GhostPanda?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              GhostPanda is an AI-powered resume analysis platform designed to help
              job seekers improve their resumes and increase their chances of getting hired.
              Our platform analyzes resumes, checks ATS compatibility, identifies missing
              skills, and provides intelligent suggestions to make resumes more professional
              and job-ready.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Platform Features</h3>
            <ul className="text-gray-600 space-y-2">
              <li>✔ Resume Analysis</li>
              <li>✔ ATS Score</li>
              <li>✔ AI Suggestions</li>
              <li>✔ Resume Builder</li>
            </ul>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to simplify the job application process by using Artificial
              Intelligence to help candidates build stronger resumes and improve their
              chances of getting hired.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600">
              Our vision is to build a complete AI-powered career platform where users can
              analyze resumes, build resumes, match jobs, track applications, and improve
              their professional profiles — all in one place.
            </p>
          </div>

        </div>

        {/* What We Offer */}
        <div className="bg-white p-10 rounded-xl shadow mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="group bg-purple-500 to-pink-500 p-6 rounded-xl shadow
           hover:bg-gradient-to-r hover:from-purple-500 to-pink-500 hover:to-indigo-400
           hover:shadow-2xl hover:-translate-y-5 hover:scale-105
           transition duration-300 cursor-pointer">
              <h3 className="font-semibold mb-2">AI Resume Analysis</h3>
              <p className="text-gray-600 text-sm">
                Analyze resumes using AI and improve quality.
              </p>
            </div>

            <div className="bg-yellow-500 to-pink-500 p-6 rounded-xl shadow
           hover:bg-gradient-to-r hover:from-yellow-500 to-pink-500 hover:to-indigo-400
           hover:shadow-2xl hover:-translate-y-5 hover:scale-105
           transition duration-300 cursor-pointer">
              <h3 className="font-semibold mb-2">ATS Score Checker</h3>
              <p className="text-gray-600 text-sm">
                Check ATS compatibility and resume score.
              </p>
            </div>

            <div className="bg-purple-500 to-pink-500 p-6 rounded-xl shadow
           hover:bg-gradient-to-r hover:from-purple-500 to-pink-500 hover:to-indigo-400
           hover:shadow-2xl hover:-translate-y-5 hover:scale-105
           transition duration-300 cursor-pointer">
              <h3 className="font-semibold mb-2">Resume Builder</h3>
              <p className="text-gray-600 text-sm">
                Build professional resumes easily.
              </p>
            </div>

          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-black text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold">10K+</h2>
            <p className="text-gray-300">Resumes Analyzed</p>
          </div>

          <div className="bg-black text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold">5K+</h2>
            <p className="text-gray-300">Users</p>
          </div>

          <div className="bg-black text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold">95%</h2>
            <p className="text-gray-300">Success Rate</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;