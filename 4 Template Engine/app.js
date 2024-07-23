// example of template engine

var app = require("express")();

app.set("views","views");
app.set("view engine","ejs");

app.get("/",(request,response)=>{
    response.render("page1");
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
})