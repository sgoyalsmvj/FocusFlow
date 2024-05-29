import axios from "axios"; // Import axios for making HTTP requests
import React, { useState, useEffect, useContext, createContext } from "react";

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component to provide authentication state and functions to its children
export function AuthProvider({ children }) {
  // State to hold authenticated user data
  const [authUser, setAuthUser] = useState(null);
  // State to check if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect hook to fetch the authenticated user's profile when the component mounts
  useEffect(() => {
    // Make a GET request to fetch the user's profile
    axios
      .get("/auth/profile")
      .then((res) => {
        setAuthUser(res.data); // Set the authenticated user's data
        setIsLoggedIn(true); // Set isLoggedIn to true
      })
      .catch((error) => {
        console.error("Error fetching profile:", error); // Log any errors
      });
  }, []);

  // Value to be provided by AuthContext, including states and their setters
  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  // Return the provider component with the value prop
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
