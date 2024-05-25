import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <div className="text-white text-center flex flex-col justify-center items-center">
      <div className="m-20 w-max">
        <h1 className="text-3xl mb-7">Sign In To FocusFlow</h1>
        <form className="flex flex-col items-start m-5 p-5 rounded-lg font-light h-max w-[350px] bg-[#161b22] border border-gray-700 outline-[1px]">
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

          <button
            className="bg-[#238636] w-full my-3 p-1 font-semibold rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="border border-gray-700 rounded-md m-5 py-5 w-[350px]">
          <p className="text-blue-500 font-semibold">Sign in with Google</p>
          New to FocusFlow?{" "}
          <a className="font-normal text-blue-500" href="/register">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
