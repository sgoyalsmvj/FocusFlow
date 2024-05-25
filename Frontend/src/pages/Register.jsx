import React, { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, role);
  };

  const creatorRole = () => {
    setRole("creator");
  };
  const studentRole = () => {
    setRole("student");
  };
  return (
    <div className="text-white text-center flex flex-col justify-center items-center">
      <div className="m-20 w-max">
        <h1 className="text-3xl mb-7">Sign Up To FocusFlow</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-start m-5 p-5 rounded-lg font-light h-max w-[350px] bg-[#161b22] border border-gray-700 outline-[1px]">
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
            <button
              onClick={creatorRole}
              className="bg-gray-600 w-full p-1 font-semibold rounded-md"
            >
              Creator
            </button>
            <button
              onClick={studentRole}
              className="bg-gray-600 w-full p-1 font-semibold rounded-md"
            >
              Student
            </button>
          </div>

          <button
            className="bg-[#238636] w-full my-3 p-1 font-semibold rounded-md"
            type="submit"
          >
            Register
          </button>
        </form>
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
