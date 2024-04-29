import { Router } from "express";
import {
  addNewTask,
  getTasks,
  getVideo,
  getVideosRelatedToTask,
  deleteTask,
} from "../controllers/studentControllers.controllers.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
const studentRoutes = Router();

studentRoutes.post("/addnewtask",isAuthenticated, addNewTask);
studentRoutes.get("/gettasks",isAuthenticated, getTasks);
studentRoutes.delete("/deletetask/:id",isAuthenticated, deleteTask);

studentRoutes.get("/getVideos/:task",isAuthenticated, getVideosRelatedToTask);
studentRoutes.get("/getVideo/:id",isAuthenticated, getVideo);

export default studentRoutes;
