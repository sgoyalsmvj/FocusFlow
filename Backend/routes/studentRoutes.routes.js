import { Router } from "express";
import studentController from '../controllers/student.controller.js';
const studentRoutes = Router();

studentRoutes.post('/addnewtask',studentController.addNewTask);
studentRoutes.get('/gettasks',studentController.getTasks);
studentRoutes.put('/updatetask/:id',studentController.updateTask);
studentRoutes.delete('/deletetask/:id',studentController.deleteTask);

studentRoutes.get('/getVideos/:task',studentController.getVideosRelatedToTask);
studentRoutes.get('/getVideo/:id',studentController.getVideo);

export default studentRoutes;
