import axios from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get("api/auth/profile")
      .then((res) => {
        setAuthUser(res.data);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  const value = {
    authUser,
    setAuthUser,
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
