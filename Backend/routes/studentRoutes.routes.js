import { Router } from "express";
import {
  addNewTask,
  getTasks,
  getVideo,
  getVideosRelatedToTask,
  deleteTask,
} from "../controllers/studentControllers.controllers.js";
const studentRoutes = Router();

studentRoutes.post("/addnewtask", addNewTask);
studentRoutes.get("/gettasks", getTasks);
studentRoutes.delete("/deletetask/:id", deleteTask);

studentRoutes.get("/getVideos/:task", getVideosRelatedToTask);
studentRoutes.get("/getVideo/:id", getVideo);

export default studentRoutes;
