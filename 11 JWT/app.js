import express from 'express';
import cookieParser from 'cookie-parser';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

var app = express();

dotenv.config();

app.set("views","views");
app.set("view engine","ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

var key = process.env.SECRET_KEY;

app.get("/",(request,response)=>{
    response.render("main");
});

app.get("/login",(request,response)=>{
    response.render("login");
});

app.post("/login",(request,response)=>{
    // response.render("login");
    var recievedData = request.body;
    var payload = {};
    if(recievedData.email == "admin@gmail.com" && recievedData.password=="admin@123"){
        payload.email = recievedData.email;
        payload.password = recievedData.password;
        payload.role = "admin";
    }
    else{
        payload.email = recievedData.email;
        payload.password = recievedData.password;
        payload.role = "user";
    }
    const expiryTime = {
        expiresIn:"1d"
    }
    const token = jwt.sign(payload,key,expiryTime);
    response.cookie('jwt',token,{httpOnly:true});
    // console.log("token ",token);
    response.redirect("/profile");
});

const authenticateJWT = (request,response,next)=>{
    const token = request.cookies.jwt;
    // console.log(token);
    if(!token)
        response.json({msg:"error with token"});
    jwt.verify(token,key,(error,payload)=>{
        if(error)
            console.log("error while payload");
        else{
            request.payload = payload;
        }
            
    });
    next();
    
}

const authorizeUser = (request,response,next)=>{
    if(request.payload.role=="admin")
        response.render("adminProfile",{email:request.payload.email});
    else if(request.payload.role=="user"){
        response.render("userProfile",{email:request.payload.email});
    }
    next();
}

app.get("/profile",authenticateJWT,authorizeUser,(request,response)=>{
    // response.render("profile");
    console.log("task complete");
    
})

app.listen(process.env.PORT,()=>{
    console.log("server connection successfull");
    
})