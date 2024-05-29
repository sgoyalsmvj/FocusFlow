import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  // Destructure authUser and isLoggedIn from the AuthContext
  const { authUser, isLoggedIn } = useAuth();
  
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
          <h1 className="text-2xl font-mono font-semibold">{authUser.name}</h1>
        )}
      </div>
    </div>
  );
};

export default NavBar;
