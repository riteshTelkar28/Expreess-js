// example showing the concept of express

const express = require("express");
const app = express();

app.get("/",(request,response)=>{
    response.send("<h2>Landing Page</h2>");
});
app.post("/home",(request,response)=>{
    response.send("<h2>Home Page</h2>");
});
app.put("/about",(request,response)=>{
    response.send("<h2>About Page</h2>");
});
app.delete("/contact",(request,response)=>{
    response.send("<h2>Contact Page</h2>");
});
app.patch("/feedback",(request,response)=>{
    response.send("<h2>Feedback Page</h2>");
});
app.all("/faq",(request,response)=>{
    response.send("<h2>FAQ Page</h2>");
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
})