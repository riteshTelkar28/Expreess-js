// example showing the concept of built in middleware

var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(__dirname));

app.get("/",(request,response)=>{
    response.sendFile(path.join(__dirname,"./myHome.html"));
});

app.listen(3000,()=>{
    console.log("Server connection established");
});