import { Router } from "express";
import {getVideos,uploadVideo,deleteVideo} from '../controllers/creatorControllers.controllers.js';
const creatorRoutes = Router();

creatorRoutes.get('/getVideos',getVideos);
creatorRoutes.post('/uploadVideo',uploadVideo);
creatorRoutes.delete('/deleteVideo/:id',deleteVideo);

export default creatorRoutes;