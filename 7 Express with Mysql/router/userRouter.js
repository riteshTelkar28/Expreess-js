import express from 'express';
import { userLoginController,userLogoutController, userRegistrationController,userUpdateController,updateUserController } from '../controller/userController.js';

var userRouter = express.Router();


userRouter.get("/register",(request,response)=>{
    response.render("register",{msg:""});
});

userRouter.get("/login",(request,response)=>{
    response.render("login",{msg:""});
});

userRouter.post("/register",userRegistrationController);
userRouter.post("/login",userLoginController);
userRouter.get("/home",(request,response)=>{
    response.render("userProfile",{email:request.session.email});
});
userRouter.get("/logout",userLogoutController);
userRouter.get("/viewProfile/:email",userUpdateController);
userRouter.post("/updateUser",updateUserController);


export default userRouter;