// adminRoute

var express = require("express");
var adminRouter = express.Router();
//console.log("typeof adminRouter : ",typeof adminRouter);

adminRouter.use((request,response,next)=>{
    console.log("adminRoute executes");
    next();
});

adminRouter.get("/",(request,response)=>{
    response.sendFile(__dirname+"/adminHome.html");
});
adminRouter.get("/adminProfile",(request,response)=>{
    response.sendFile(__dirname+"/adminProfile.html");
});
adminRouter.get("/adminBack",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});

module.exports = adminRouter;