// var express = require('express');
import express from 'express';
import { studentSaveController,viewStudentController,searchStudentController,searchStudentByIdController } from '../controller/indexController.js';
var indexRouter = express.Router();

indexRouter.get("/",(request,response)=>{
    response.render("index",{msg:""});
});

indexRouter.post("/save",studentSaveController)
indexRouter.get("/viewStudent",viewStudentController);
indexRouter.get("/searchStudent",searchStudentController);
indexRouter.post("/searchStudentById",searchStudentByIdController);

export default indexRouter;