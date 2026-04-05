import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-black text-white items-center justify-center">
        <div className="text-center px-10">
          <h1 className="text-4xl font-bold mb-4">
            Join GhostPanda
          </h1>
          <p className="text-gray-300">
            Create an account and start improving your resume today.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="bg-white p-10 rounded-xl shadow w-full max-w-md">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Sign Up
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4"
          />

          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
            Create Account
          </button>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-semibold">
              Login
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Signup;