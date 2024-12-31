import express from 'express';
import userRouter from './router/userRouter.js';

var app = express();

app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(request,response)=>{
    response.render("index");
})
app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("server connection successfull");
    
})