import express from 'express'
import { createTask, deleteTask, getAllTask, getSingleTask, getSingleTaskFilter, updateTask } from '../controller/taskController.js';

const taskRoute = express.Router();

taskRoute.post('/create-task', createTask);
taskRoute.get('/get-all-task', getAllTask);
taskRoute.get('/get-single-task/:id', getSingleTask);
taskRoute.get('/get-single-task-filter', getSingleTaskFilter);
taskRoute.put('/update-task/:id', updateTask);
taskRoute.delete('/delete-task/:id', deleteTask)

export default taskRoute;
