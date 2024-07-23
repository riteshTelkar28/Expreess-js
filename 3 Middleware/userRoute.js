// userRoute

var express = require("express");
var userRouter = express.Router();
//console.log("typeof userRouter : ",typeof userRouter);

userRouter.use((request,response,next)=>{
    console.log("userRoute executes");
    next();
});

userRouter.get("/",(request,response)=>{
    response.sendFile(__dirname+"/userHome.html");
});
userRouter.get("/userProfile",(request,response)=>{
    response.sendFile(__dirname+"/userProfile.html");
});
userRouter.get("/userBack",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});

module.exports = userRouter;