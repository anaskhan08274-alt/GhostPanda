import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          GhostPanda 🐼
        </h1>

        {/* Links */}
        <div className="flex items-center space-x-6">

          <Link
            to="/"
            className="relative group text-gray-700 font-medium"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="relative group text-gray-700 font-medium"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </Link>

          {/* Dashboard */}
          <Link
            to="/dashboard"
            className="relative group text-gray-700 font-medium"
          >
            Dashboard
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
          >
            Login
          </Link>

          {/* Upload Button */}
          <Link
            to="/upload"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Upload Resume
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;