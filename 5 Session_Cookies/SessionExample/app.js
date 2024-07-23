// example showing the concept of session in express js

var express = require("express");
var app = express();
var url = require("url");
var expressSession = require("express-session");
app.use(expressSession({ secret: 'qwertyuiopasdfghjklzxcvbnm', resave: true, saveUninitialized: true }));
app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("index", { email: "", message: "" });
});
app.get("/login", (request, response) => {
    response.render("login", { msg: "" });
});
app.get("/home", (request, response) => {
    // var data = url.parse(request.url,true).query;
    var data = request.query;
    //response.send(data.email+" "+data.password);
    if (data.email === "andrew@gmail.com" && data.password == "andrew@12345") {
        //console.log(request.session);
        request.session.email = data.email;
        request.session.save();
        //console.log(request.session);   
        response.render("index", { email: request.session.email, message: "" });
    } else {
        response.render("login", { msg: "Email Id or Password is wrong" });
    }
});

app.get("/logout", (request, response) => {
    request.session.email = "";
    request.session.destroy((error) => {
        if (error) {
            console.log("Error occured");
        } else {
            response.render("index", { email: "", message: "Logout Successfully" });
        }
    });
});
app.listen(3000, () => {
    console.log("Server connection successfull");
});