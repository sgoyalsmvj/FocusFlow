import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("authUser");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    checkAuth();
  }, []);

  useEffect(() => {
    if (authUser && isAuthenticated) {
      sessionStorage.setItem("authUser", JSON.stringify(authUser));
    } else {
      sessionStorage.removeItem("authUser");
    }
  }, [authUser, isAuthenticated]);

  const checkAuth = async () => {
    try {
      const res = await axios.get("api/auth/profile");
      setAuthUser(res.data);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      setAuthUser(null);
      setIsAuthenticated(false);
      sessionStorage.removeItem("authUser");
      console.error("Error fetching profile:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials) => {
    setIsLoading(true);
    try {
      const res = await axios.post("api/auth/login", credentials);
      const userData = res.data.creator || res.data.student;
      setAuthUser(userData);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      setAuthUser(null);
      setIsAuthenticated(false);
      console.error("Login error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await axios.post("api/auth/logout");
      setAuthUser(null);
      setIsAuthenticated(false);
      sessionStorage.removeItem("authUser");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    authUser,
    setAuthUser,
    isAuthenticated,
    setIsAuthenticated,
    isLoading,
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
