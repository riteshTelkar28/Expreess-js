// exxample showing the concept of middleware

var app = require("express")();

app.get("/",(request,response,next)=>{
    response.writeHead("200",{"content-type":"text/html"});
    response.write("This is my first middleware function");
    next();
},(request,response,next)=>{
    response.write("<br>This is my second middleware function");
    next();
},(request,response)=>{
    response.write("<br>This is my third middleware function");
    response.end();
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});
