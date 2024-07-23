var express = require("express");
var app = express();
var url = require("url");

app.get("/",(request,response)=>{
    //response.send("request.url : "+request.url);
    //response.send("typeof request.url : "+typeof request.url);
    
    //response.send("request.query : "+request.query);
    //response.send("typeof request.query : "+typeof request.query);
    
    //var x = url.parse(request.url).query;
    //response.send(x);
    //response.send(typeof x);

    var x = url.parse(request.url,true).query;
    //response.send(x);
    //response.send(typeof x);
    response.send("Username : "+x.username);
});

app.listen("3000",()=>{
    console.log("Server connection established");
});
