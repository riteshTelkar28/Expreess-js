// Handling dynamic routes
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

// handle single route
app.get("/example",(request,response)=>{
    var id = request.query.id;
    response.send(`your Id : ${id}`);
});

// handle multiple routes
app.get("/example/:name/:id",(request,response)=>{
    var name = request.params.name;
    var id = request.params.id;
    response.send(`Hello ${name} your Id is ${id}`);
});

// handle optional route
app.get("/example/:name?",(request,response)=>{
    var name = (request.params.name) ? request.params.name : "John Deo";
    response.send(`Hello ${name}`);
});

// route with regex
app.get("/example1/:name",(request,response)=>{
    var name = request.params.name;
    var regex = /^[0-9A-Za-z]+$/;
    console.log("===================",regex.test(name));
    if(regex.test(name))
        response.send(`Hello ${name} ${regex.test(name)}`);
    else
        response.send("Not matched");
});

// wild card
app.get("/example2/*",(request,response)=>{
    var name = request.params[0];
        response.send(`Hello ${name}`);
});

app.listen(3000,()=>{
    console.log("Server conncetion successfull");
});