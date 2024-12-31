import con from "../model/connection.js";
export const adminViewUsersController = (request,response)=>{
    var userListQuery = "select * from users";
    con.query(userListQuery,(error,result)=>{
        if(error)
            console.log("error ",error);
        else{
            console.log("result ",result);
            response.render("adminViewUserList",{msg:"",userList : result,email: request.session.email});
        }
    })
}

export const adminLogoutController = (request,response)=>{
    request.session.email = "";
    request.session.destroy();
    response.redirect("/");

}

export const adminDeleteUserController = (request,response)=>{
    const email = request.params.email;    
    var deleteQuery = "delete from users where email=?";
    var deleteValue = [email];
    con.query(deleteQuery,deleteValue,(error,result)=>{
        if(error)
            console.log("error ",error);
        else{
            console.log("data deleted successfully");
            if(result.affectedRows !=0){
                var userListQuery = "select * from users";
                con.query(userListQuery,(error,result)=>{
                    if(error)
                        console.log("error ",error);
                    else{
                        console.log("result ",result);
                        response.render("adminViewUserList",{msg:"user deleted successfully",userList : result,email: request.session.email});
                    }
                })                
            }
            else{
                var userListQuery = "select * from users";
                con.query(userListQuery,(error,result)=>{
                    if(error)
                        console.log("error ",error);
                    else{
                        console.log("result ",result);
                        response.render("adminViewUserList",{msg:"error while deleting user",userList : result,email: request.session.email});
                    }
                })                                
            }
        }
            
    })
}

export const adminUpdateUserController = (request,response)=>{
    var email = request.params.email;
    var selectQuery = "select * from users where email = ?"
    var selectedData = [email];
    con.query(selectQuery,selectedData,(error,result)=>{
        if(error)
            console.log("error ",error);
        else{
            console.log(result);
            response.render("adminUserUpdateForm",{userData:result[0],email:request.session.email});
        }
            
    })
}

export const adminUserUpdateController = (request,response)=>{
    const{username,email,password,address} = request.body;
    const updateQuery = "update users set username = ?,password = ?,address=? where email = ?";
    const updateData = [username,password,address,email];
    con.query(updateQuery,updateData,(error,result)=>{
        if(error)
            console.log("error while updating user");
        else{
            if(result.affectedRows ==1){
                var userListQuery = "select * from users";
                con.query(userListQuery,(error,result)=>{
                    if(error)
                        console.log("error ",error);
                    else{
                        console.log("result ",result);
                        response.render("adminViewUserList",{msg:"user updated successfully",userList : result,email: request.session.email});
                    }
                })                
            }
            else{
                var userListQuery = "select * from users";
                con.query(userListQuery,(error,result)=>{
                    if(error)
                        console.log("error ",error);
                    else{
                        console.log("result ",result);
                        response.render("adminViewUserList",{msg:"error while updating user",userList : result,email: request.session.email});
                    }
                })                                
            }
        }
            
    })
}