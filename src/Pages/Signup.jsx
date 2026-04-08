import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center font-[Poppins]"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/d7/b9/0c/d7b90cc80898e8823455a127945719af.jpg')",
      }}
    >
      <div className="w-[420px] p-6 rounded-2xl text-white border border-white/20 backdrop-blur-[15px] shadow-lg">

        <form>
          <h1 className="text-3xl text-center font-semibold">Registration</h1>

          <div className="relative h-[50px] my-5">
            <input type="text" placeholder="Full Name"
              className="w-full h-full bg-transparent border border-white/20 rounded-full px-5 text-white placeholder-white"
            />
          </div>

          <div className="relative h-[50px] my-5">
            <input type="email" placeholder="Email"
              className="w-full h-full bg-transparent border border-white/20 rounded-full px-5 text-white placeholder-white"
            />
          </div>

          <div className="relative h-[50px] my-5">
            <input type="password" placeholder="Password"
              className="w-full h-full bg-transparent border border-white/20 rounded-full px-5 text-white placeholder-white"
            />
          </div>

          <button className="w-full h-[45px] bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-200">
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signup;