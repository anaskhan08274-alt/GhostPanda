import React from "react";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center font-[Poppins]"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/d7/b9/0c/d7b90cc80898e8823455a127945719af.jpg')",
      }}
    >
      {/* Wrapper */}
      <div className="w-[420px] mt-10 p-6 rounded-2xl text-white border border-white/20 backdrop-blur-[15px] shadow-lg">
        
        <form>
          <h1 className="text-3xl text-center font-semibold">Login</h1>

          {/* Username */}
          <div className="relative w-full h-[50px] my-6">
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full h-full bg-transparent border border-white/20 rounded-full text-white text-base px-5 pr-12 outline-none placeholder-white"
            />
            <i className="bx bxs-user absolute right-5 top-1/2 -translate-y-1/2 text-xl"></i>
          </div>

          {/* Password */}
          <div className="relative w-full h-[50px] my-6">
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full h-full bg-transparent border border-white/20 rounded-full text-white text-base px-5 pr-12 outline-none placeholder-white"
            />
            <i className="bx bxs-lock-alt absolute right-5 top-1/2 -translate-y-1/2 text-xl"></i>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between text-sm -mt-3 mb-4">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-white" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-[45px] bg-white text-gray-800 font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-white/30"></div>
            <span className="px-3 text-sm text-white/70">or</span>
            <div className="flex-1 h-px bg-white/30"></div>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Login with Google
          </button>

          {/* Register */}
          <div className="text-center text-sm mt-5">
            <p>
              Don't have an account?{" "}
              <a href="/signup" className="font-semibold hover:underline">
                Register
              </a>
            </p>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;