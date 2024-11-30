import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const NavBar = () => {
  // Destructure authUser and isLoggedIn from the AuthContext
  const { setAuthUser, setIsLoggenIn, isLoggedIn } = useAuth();
  const [redirect, setRedirect] = useState(false);
  const handleLogout = () => {
    axios.get("/auth/logout").then(() => {
      setAuthUser(null);
      setIsLoggenIn(false);
      setRedirect(true);
    });
  };
  if (redirect) {
    <Navigate to={"/login"} />;
  }

  return (
    // Navbar container with styling
    <div className="bg-gray-850 border-b-[0.075rem] font-mono border-b-gray-100/10 text-white flex justify-between h-[10vh]">
      {/* Logo Section */}
      <div className="flex justify-center items-center w-[200px] text-2xl">
        FocusFlow
      </div>

      {/* Login button or User name display based on authentication status */}
      <div className="flex justify-center items-center w-[200px]">
        {/* Display Login button if not logged in */}
        {!isLoggedIn && (
          <Link to={"/login"}>
            <button className="bg-[#238636] px-3 p-2 font-semibold rounded-md">
              Login
            </button>
          </Link>
        )}
        {/* Display User name if logged in */}
        {isLoggedIn && (
          <button
            className="bg-[#238636] px-3 p-2 font-semibold rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
