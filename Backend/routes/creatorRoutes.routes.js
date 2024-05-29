import { Router } from "express";
import { upload } from "../middleware/video.middleware.js";
import {
  getVideos,
  uploadVideo,
  deleteVideo,
} from "../controllers/creatorControllers.controllers.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
const creatorRoutes = Router();

creatorRoutes.get("/getVideos", isAuthenticated, getVideos);
creatorRoutes.post(
  "/uploadVideo",
  isAuthenticated,
  upload.fields([{ name: "video" }, { name: "thumbnail" }]),
  uploadVideo
);
creatorRoutes.delete("/deleteVideo/:id", isAuthenticated, deleteVideo);

export default creatorRoutes;
