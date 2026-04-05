import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          GhostPanda 🐼
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 font-medium hover:text-black">
            Home
          </Link>

          <Link to="/about" className="text-gray-700 font-medium hover:text-black">
            About
          </Link>

          <Link to="/dashboard" className="text-gray-700 font-medium hover:text-black">
            Dashboard
          </Link>

          <Link
            to="/login"
            className="border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/upload"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Upload Resume
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
          <Link to="/" className="block">Home</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/dashboard" className="block">Dashboard</Link>
          <Link to="/login" className="block">Login</Link>
          <Link
            to="/upload"
            className="block bg-black text-white px-4 py-2 rounded-lg text-center"
          >
            Upload Resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;