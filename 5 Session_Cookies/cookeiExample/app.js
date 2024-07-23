// example showing the concept of cookie

var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
app.use(cookieParser());

app.get("/",(request,response)=>{
    response.cookie("myCookie","demoCookie",{expire:360000+Date.now()});
    response.send("Cookie set successfully");
});
app.get("/showCookies",(request,response)=>{
    console.log("cookies : ",request.cookies);
    response.send("Cookies : "+request.cookies);
});
app.get("/deleteCookie",(request,response)=>{
    response.clearCookie("myCookie");
    response.send("Cookie deleted successfully");
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});