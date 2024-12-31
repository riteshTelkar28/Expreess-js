import con from "../model/connection.js";

export const userRegistrationController = (request,response)=>{
    console.log(request.body);
    const {username,email,password,address} = request.body;  
    const insertQuery = "insert into users(username,email,password,address) values (?,?,?,?)";
    const insertValues = [username,email,password,address];

    con.query(insertQuery,insertValues,(error,result)=>{
        if(error){
            console.log("error ");
            response.render("register",{msg:"error while registering"});
        }
        else{
            console.log(result);
            console.log("Registration successfull");
            response.render("login",{msg:"registration successfull"});
        }
    });
};

export const userLoginController = (request,response)=>{
    // console.log(request.body);
    const email = request.body.email;
    const password = request.body.password;

    if(email == "admin@gmail.com" && password == "admin@123"){
        request.session.email = request.body.email;
        request.session.save();
        response.render("adminProfile",{email:request.session.email});
    }
    else{
        var selectQuery = "select * from users where email = ? and password = ?";
        var selectValues = [email,password];
        con.query(selectQuery,selectValues,(error,result)=>{
            if(error)
                console.log("error while login");
            else{
                request.session.email = request.body.email;
                request.session.save();
                response.render("userProfile",{msg:"",email:request.session.email});
            }
                
        })
    }
    
}

export const userLogoutController = (request,response)=>{
    request.session.email = "";
    request.session.destroy();
    response.redirect("/");

}

export const userUpdateController = (request,response)=>{
    var email = request.params.email;
    var selectQuery = "select * from users where email = ?"
    var selectedData = [email];
    con.query(selectQuery,selectedData,(error,result)=>{
        if(error)
            console.log("error ",error);
        else{
            console.log(result);
            response.render("UserUpdateForm",{userData:result[0],email:request.session.email});
        }
            
    })
}

export const updateUserController = (request,response)=>{
    const{username,email,password,address} = request.body;
    const updateQuery = "update users set username = ?,password = ?,address=? where email = ?";
    const updateData = [username,password,address,email];
    con.query(updateQuery,updateData,(error,result)=>{
        if(error)
            console.log("error while updating user");
        else{
            if(result.affectedRows ==1){
                response.render("userProfile",{msg:"profile updated successfully",email: request.session.email});        
            }
            else{
                response.render("userProfile",{msg:"error while updating profile",email: request.session.email});
            }

}
})
}