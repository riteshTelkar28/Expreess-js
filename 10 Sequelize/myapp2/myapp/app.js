import express from 'express';

import indexRouter from './router/indexRouter.js';


var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("views","views");
app.set("view engine","ejs");

app.use("/",indexRouter);


app.listen(3000,()=>{
  console.log("server connection successfull");  
})