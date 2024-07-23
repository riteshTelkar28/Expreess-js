// exxample showing the concept of application level middleware(Top level middleware)

var app = require("express")();

app.get("/",(request,response,next)=>{
    response.writeHead("200",{"content-type":"text/html"});
    response.write("<br>Default route");
    next();
});
app.get("/home",(request,response)=>{
    response.writeHead("200",{"content-type":"text/html"});
    response.write("<br>Home route");
    response.end();
});

app.use(function(request,response,next){
    response.write("This is my first middleware function");
    next();
});
app.use(function(request,response,next){
    response.write("<br>This is my second middleware function");
    response.end();
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});
