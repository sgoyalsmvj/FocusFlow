import React, { useState } from "react";

const SignUp = () => {
  const [role, setRole] = useState("");

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0d1117]">
      <div className="bg-[#161b22] p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Create Your Account
        </h2>

        {/* Role Selection */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => handleRoleSelection("Student")}
            className={`w-1/2 px-4 py-2 font-semibold border ${
              role === "Student"
                ? "bg-blue-600 text-white"
                : "bg-[#0d1117] text-gray-400 hover:bg-gray-800"
            } rounded-l-lg transition duration-300`}
          >
            Student
          </button>
          <button
            onClick={() => handleRoleSelection("Creator")}
            className={`w-1/2 px-4 py-2 font-semibold border ${
              role === "Creator"
                ? "bg-blue-600 text-white"
                : "bg-[#0d1117] text-gray-400 hover:bg-gray-800"
            } rounded-r-lg transition duration-300`}
          >
            Creator
          </button>
        </div>

        {/* Sign Up Form */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-400"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-400"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-400"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 mt-2 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-sm text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
