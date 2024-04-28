import { Router } from "express";
import creatorController from '../controllers/creatorControllers.controllers.js';
const creatorRoutes = Router();

creatorRoutes.get('/getVideos',creatorController.getVideos);
creatorRoutes.post('/uploadVideo',creatorController.uploadVideo);
creatorRoutes.delete('/deleteVideo/:id',creatorController.deleteVideo);

export default creatorRoutes;