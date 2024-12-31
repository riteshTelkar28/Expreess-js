import express, { response } from 'express';
import mailer from './mailer.js';
import userSchema from '../model/userSchema.js';
const userRouter = express.Router();

userRouter.get("/",(request,response)=>{
    console.log("/ route");
    response.render("index");
});

userRouter.get("/registration",(request,response)=>{
    console.log("/ registration route get method");
    response.render("registration",{message:""});
});

userRouter.get("/login",(request,response)=>{
    console.log("/ login route");
    response.render("login",{message:""});
});

userRouter.post("/register",(request,response)=>{
    console.log("/ register route");
    // console.log("data :",request.body);
    try{
        console.log("/ mailer outer try");
        mailer.mailer(request.body.email, async(info)=>{
            try{
                if(info){
                // console.log(info);
                console.log("mailer inner try");
                await userSchema.create(request.body); // entering data in database 
                response.render("login",{message:"mail sent please verify"});
                }else{
                response.render("registration",{message:""});
                }
            }catch(error){
                console.log("inner try catch");
                response.render("registration",{message:"email id already exists"})
            }
        });
    }catch(error){
        console.log("outer try catch");
        console.log("error while sending mail", error);
        response.render("registration",{message:"email id already exists"});
    }
    
});

userRouter.get("/verifyEmail", async (request,response)=>{
    console.log("/ verify email route");
    try{
        var email = request.query.email;
        const updateStatus = {
            $set:{
                status : "Verified"
            }
        }
        var result = await userSchema.updateOne({email:email},updateStatus);
        console.log(result);
        response.render("login",{message:"Email Verified | Now you can login"});
    }
    catch(error){
        console.log("error ",error);
        response.render("login",{message:"something went wrong"})
        
    }
});

userRouter.post("/login", async (request,response)=>{
    console.log("/  login route");
    var email = request.body.email;
    var password = request.body.password;

    var checkLogin = {
        $and:[
            {
                email:email
            },
            {
                password:password
            },
            {
                status:"Verified"
            }
        ]
    }

    var result = await userSchema.find(checkLogin);
    console.log("result :",result);
    if(result[0]){
        response.render("profile",{email:email});
    }else{
        response.render("login",{message:"email/password wrong or you are not verified"});
    }
    
})


export default userRouter;