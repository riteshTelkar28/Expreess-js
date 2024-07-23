// example showing the concept of third party middleware

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/register.html");
});

app.post("/viewInfo",(request,response)=>{
    response.writeHead("200","{'Content-Type':'text/html'}");
    console.log("request.body : ",request.body);
    response.write("<br>Username : "+request.body.username);
    response.write("<br>Email : "+request.body.email);
    response.write("<br>Password : "+request.body.password);
    response.write("<br>Address : "+request.body.address);
    response.end();
});

app.listen(3000,()=>{
    console.log("Server connection established");
});