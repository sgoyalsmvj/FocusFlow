import React from "react";

const Navbar = ({ userName, handleLogout, page }) => {
  return (
    <header className="bg-gray-900 p-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">FocusFlow</h1>
        <div className="flex items-center space-x-6">
          {page === "contact" && (
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          )}
          {page === "home" && (
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#features" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#creators" className="hover:underline">
                    Top Educators
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          )}
          {userName && page === "welcome" && (
            <div className="p-6 border-b border-gray-700">
              <h1 className="text-3xl font-bold">Welcome back, {userName}!</h1>
              <p className="text-gray-400 mt-2">
                Continue learning and track your progress.
              </p>
            </div>
          )}
          {userName && handleLogout && page === "addtask" && (
            <>
              <div className="flex items-center space-x-4">
                <p className="text-gray-300">{userName}</p>
                <button
                  className="bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
