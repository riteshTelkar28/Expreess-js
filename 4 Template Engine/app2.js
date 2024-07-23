// example of template engine

var app = require("express")();

app.set("views","views");
app.set("view engine","ejs");

const bookDetails = [{
    bookName : "Programming in C",
    authorName : "Dennis Ritchie",
    price : "$123"
},{
    bookName : "Programming in C++",
    authorName : "Bjarne Stroustrup",
    price : "$456"
},{
    bookName : "Programming in Java",
    authorName : "James Gosling",
    price : "$890"
}];
app.get("/",(request,response)=>{
    response.render("page3",{bookDetails});
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
})