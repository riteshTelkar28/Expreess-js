// exxample showing the concept of application level middleware(Top level middleware)

var app = require("express")();

var myFun1 = function(request,response,next){
    response.writeHead("200",{"content-type":"text/html"});
    response.write("This is my first middleware function");
    next();
}
var myFun2 = function(request,response,next){
    response.write("<br>This is my second middleware function");
    next();
}

app.use(myFun1);
app.use(myFun2);

app.get("/",(request,response)=>{
    response.write("<br>This is my third middleware function");
    response.end();
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});
