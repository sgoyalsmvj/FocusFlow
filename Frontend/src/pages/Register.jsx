import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  // State variables to hold form inputs and redirect status
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  
  // Destructure context methods from AuthContext
  const { setAuthUser, setIsLoggedIn } = useAuth();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to register endpoint with form data
    const response = await axios.post("/auth/register", {
      name,
      email,
      password,
      role,
    });

    // Check the role of the registered user and set the appropriate state
    if (response.data.student == null) {
      console.log("no student");
      setIsLoggedIn(true);
      setAuthUser(response.data.creator);
      setRedirect("/creator/profile"); // Redirect to creator profile page
    } else if (response.data.creator == null) {
      console.log("no creator");
      setIsLoggedIn(true);
      setAuthUser(response.data.student);
      setRedirect("/"); // Redirect to landing page
    }
  };

  // Handlers for setting the role
  const creatorRole = (ev) => {
    ev.preventDefault();
    setRole("creator");
  };

  const studentRole = (ev) => {
    ev.preventDefault();
    setRole("student");
  };

  // Redirect to the specified path if redirect state is set
  if (redirect) {
    return <Navigate to={`${redirect}`} />;
  }

  return (
    <div className="text-white text-center flex flex-col justify-center items-center font-mono">
      <div className="m-20 w-max">
        <h1 className="text-3xl mb-7">Sign Up To FocusFlow</h1>
        
        {/* Registration form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start m-5 p-5 rounded-lg font-light h-max w-[350px] bg-[#161b22] border border-gray-700 outline-[1px]"
        >
          <label className="my-2">Name</label>
          <input
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />

          <label className="my-2">Username or Email Address</label>
          <input
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="my-2">Password</label>
          <input
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="my-2">Role</label>
          <div className="flex flex-row mb-2 space-x-3 w-full">
            {/* Button for selecting Creator role */}
            <button
              onClick={creatorRole}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-mono font-bold text-lg"
            >
              Creator
            </button>
            {/* Button for selecting Student role */}
            <button
              onClick={studentRole}
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-mono font-bold text-lg"
            >
              Student
            </button>
          </div>

          {/* Register button */}
          <button
            className="bg-[#238636] w-full my-3 p-1 font-semibold rounded-md"
            type="submit"
          >
            Register
          </button>
        </form>

        {/* Additional options */}
        <div className="border border-gray-700 rounded-md m-5 py-5 w-[350px]">
          <p className="text-blue-500 font-semibold">Sign in with Google</p>
          Already have an account?{" "}
          <a className="font-normal text-blue-500" href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
