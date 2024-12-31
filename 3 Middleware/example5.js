// example showing the concept of error handling middleware

var app = require("express")();
app.get("/",(request,response,next)=>{
    var err = new Error(" Occured");
    next(err);
});

app.use((error,request,response,next)=>{
    response.status(500).send("Error : "+error);
});
app.listen(3000,()=>{
    console.log("Connection established successfully");
});
