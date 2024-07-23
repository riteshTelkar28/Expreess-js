// example showing the concept of express

const express = require("express");
const app = express();
//console.log(express);
//console.log(app);

app.get("/",(request,response)=>{
    response.send("<h2>Landing Page</h2>");
});
app.get("/home",(request,response)=>{
    response.send("<h2>Home Page</h2>");
});
app.get("/about",(request,response)=>{
    response.send("<h2>About Page</h2>");
});
app.get("/contact",(request,response)=>{
    response.send("<h2>Contact Page</h2>");
});
app.get("/feedback",(request,response)=>{
    response.send("<h2>Feedback Page</h2>");
});
app.get("/faq",(request,response)=>{
    response.send("<h2>FAQ Page</h2>");
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
})