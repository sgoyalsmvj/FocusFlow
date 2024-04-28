import { Router } from "express";
import authController from '../controllers/authControllers.controllers.js';
const authRoutes = Router();    

authRoutes.post('/register',authController.register);
authRoutes.post('/login',authController.login);
authRoutes.post('/logout',authController.logout);

export default authRoutes;