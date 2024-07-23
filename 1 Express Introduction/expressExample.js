// program showing the concept of express js

var express = require("express");
var app = express();
/*
app.get("/",(request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("Example of Express Js");
    response.write("<h3>Example of Express Js</h3>");
    response.write("<h2>Example of Express Js</h2>");
    response.end();
});
*/
app.get("/",(request,response)=>{
    response.send("Example of Express Js <h3>Example of Express Js</h3> <h2>Example of Express Js</h2>");
});

app.listen("3000",()=>{
    console.log("Server connection successfully");
});