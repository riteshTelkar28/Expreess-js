import express from 'express';
import dotenv from 'dotenv';
import expressSession from 'express-session';
import adminRouter from './router/adminRouter.js';
import userRouter from './router/userRouter.js';
import { connectDb } from './model/utils.js';


var app = express();
dotenv.config();

app.set("views","views");
app.set("view engine","ejs");

app.use(expressSession({secret:process.env.SECRET,saveUninitialized:true,resave:true}));

// app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/admin",adminRouter);
app.use("/user",userRouter);
app.use(connectDb);

app.get("/",(request,response)=>{
    response.render("index");
});


app.listen(process.env.PORT,()=>{
    console.log("server connection successful");
    
})