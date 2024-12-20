import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState(""); // Default role
  const { setAuthUser, setIsLoggedIn } = useAuth();
  const [redirect, setRedirect] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
      setTimeout(() => {
        setError("");
      }, [1000]);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      setTimeout(() => {
        setError("");
      }, [1000]);
      return;
    }
    // Simulate login (replace with actual API call)
    try {
      // Send a POST request to login endpoint
      const response = await axios.post("api/auth/login", {
        email,
        password,
        selectedRole,
      });
      console.log(response.data);

      // Check the role of the logged-in user and set the appropriate state
      if (response.data.student == null) {
        console.log("no student");
        setIsLoggedIn(true);
        setAuthUser(response.data.creator);
        setRedirect("api/creator/profile"); // Redirect to creator profile page
      } else if (response.data.creator == null) {
        console.log("no creator");
        setIsLoggedIn(true);
        setAuthUser(response.data.student);
        setRedirect("/"); // Redirect to landing page
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    setError(""); // Clear errors if all fields are valid
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0d1117]">
      <div className="bg-[#161b22] p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-6">FocusFlow</h1>

        {/* Error Message */}
        {error && (
          <div className="bg-red-600 text-white p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Role Selection */}
          <div className="flex justify-center space-x-4 mt-4">
            <button
              type="button"
              onClick={() => setSelectedRole("Student")}
              className={`w-1/2 px-4 py-2 font-semibold border ${
                selectedRole === "Student"
                  ? "bg-blue-600 text-white"
                  : "bg-[#0d1117] text-gray-400 hover:bg-gray-800"
              } rounded-lg transition duration-300`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole("Creator")}
              className={`w-1/2 px-4 py-2 font-semibold border ${
                selectedRole === "Creator"
                  ? "bg-blue-600 text-white"
                  : "bg-[#0d1117] text-gray-400 hover:bg-gray-800"
              } rounded-lg transition duration-300`}
            >
              Creator
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white p-3 rounded font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Additional Options */}
        <div className="mt-6 text-center">
          <a
            href="#forgot-password"
            className="text-sm text-gray-400 hover:text-gray-200 transition"
          >
            Forgot Password?
          </a>
          <div className="mt-2">
            <span className="text-sm text-gray-400">
              Don&apos;t have an account?{" "}
            </span>
            <a
              href="#sign-up"
              className="text-sm text-blue-500 hover:text-blue-400 font-semibold transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
