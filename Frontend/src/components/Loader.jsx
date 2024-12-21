import React from "react";

const Loader = () => (
  <div className="flex justify-center items-center min-h-screen bg-[#0d1117]">
    <div className="flex space-x-2">
      <div className="w-6 h-6 bg-blue-600 rounded-full animate-bounce"></div>
      <div className="w-6 h-6 bg-blue-600 rounded-full animate-bounce delay-200"></div>
      <div className="w-6 h-6 bg-blue-600 rounded-full animate-bounce delay-400"></div>
    </div>
  </div>
);

export default Loader;
