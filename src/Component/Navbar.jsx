import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">GhostPanda 🐼</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/upload" className="bg-white text-black px-3 py-1 rounded">
          Upload Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;