const About = () => {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6 text-center">
        About GhostPanda 🐼
      </h1>

      <p className="text-gray-700 mb-6 text-center">
        GhostPanda is an AI-powered platform designed to help job seekers improve their resumes and increase their chances of getting hired.
      </p>

      <div className="space-y-6">

        <div>
          <h2 className="text-xl font-semibold mb-2">🚀 Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to make resume building smarter, faster, and more effective using AI technology.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">🧠 What We Are Building</h2>
          <p className="text-gray-600">
            We are building an intelligent system that analyzes resumes, provides feedback, and helps users optimize their profiles for better job opportunities.
          </p>
        </div>

      </div>

    </div>
  );
};

export default About;