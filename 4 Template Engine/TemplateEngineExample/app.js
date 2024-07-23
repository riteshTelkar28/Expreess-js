var express = require("express");
var app = express();

app.use(express.static('public'));
app.set("views","views");
app.set("view engine","ejs");

app.get("/",(request,response)=>{
    response.render("index");
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});