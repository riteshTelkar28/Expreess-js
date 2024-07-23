// example showing the concept of router level middleware

var express = require("express");
var adminRoute = require("./adminRoute.js");
var userRoute = require("./userRoute.js");

var app = express();

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});

app.use("/admin",adminRoute);
app.use("/user",userRoute);

app.listen(3000,()=>{
    console.log("Server connection established");
});