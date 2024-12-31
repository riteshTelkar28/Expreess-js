import express from 'express';
import { adminDeleteUserController, adminLogoutController, adminUpdateUserController, adminUserUpdateController, adminViewUsersController } from '../controller/adminController.js';


var adminRouter = express.Router();
adminRouter.get("/home",(request,response)=>{
    response.render("adminProfile",{email:request.session.email});
});

adminRouter.get("/viewUsers",adminViewUsersController);
adminRouter.get("/logout",adminLogoutController);
adminRouter.get("/delete/:email",adminDeleteUserController);
adminRouter.get("/update/:email",adminUpdateUserController);
adminRouter.post("/updateUser",adminUserUpdateController);
export default adminRouter;