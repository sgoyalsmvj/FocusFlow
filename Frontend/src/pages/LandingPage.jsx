import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0d1117] text-white min-h-screen">
      <Navbar page="home" />

      <section className="py-16 bg-gradient-to-b from-gray-900 via-[#0d1117] to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Empower Your Learning Journey
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Discover the best educators, manage your time effectively, and stay
            focused with engaging content tailored for your growth.
          </p>
          <button
            className="bg-blue-600 px-6 py-3 rounded-full text-white font-bold hover:bg-blue-700"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
      </section>

      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Key Features of FocusFlow
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Top Educators</h3>
              <p className="text-gray-300">
                Learn from the best minds in various fields. Our platform
                features highly experienced educators with proven expertise.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Engaging Content</h3>
              <p className="text-gray-300">
                Access a wide variety of engaging and interactive video lessons,
                articles, and quizzes designed to keep you motivated.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Focus Management</h3>
              <p className="text-gray-300">
                Use built-in tools to track your progress, set learning goals,
                and maintain focus with time management features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="creators" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Top Educators</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Alice", "Bob", "Charlie", "Diana"].map((name, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-600 mb-4">
                  <img
                    src={`https://via.placeholder.com/150?text=${name}`}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
        <p className="text-gray-300 mb-8">
          Join thousands of learners achieving their goals with FocusFlow.
        </p>
        <button
          className="bg-blue-600 px-6 py-3 rounded-full text-white font-bold hover:bg-blue-700"
          onClick={() => navigate("/signup")}
        >
          Sign Up Now
        </button>
      </section>

      <footer className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} FocusFlow. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
