const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">
            GhostPanda 🐼
          </h2>
          <p className="text-sm">
            AI-powered resume analyzer to help you improve your resume
            and increase your chances of getting hired.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Upload Resume</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-white font-semibold mb-3">Features</h3>
          <ul className="space-y-2">
            <li>Resume Analysis</li>
            <li>ATS Score</li>
            <li>AI Suggestions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p>Email: support@ghostpanda.com</p>
          <p>Phone: +91 9116244250</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-8">
        © 2026 GhostPanda. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;