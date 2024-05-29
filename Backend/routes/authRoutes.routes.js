import { Router } from "express";
import {
  register,
  login,
  logout,
  getProfile,
} from "../controllers/authControllers.controllers.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
const authRoutes = Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.get("/profile", isAuthenticated, getProfile);
export default authRoutes;
