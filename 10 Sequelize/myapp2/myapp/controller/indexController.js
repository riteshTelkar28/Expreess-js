import student from "../model/studentModel.js";

export const studentSaveController = (request,response)=>{
    console.log("in student save controller");
    
    const payload = request.body;
    student.create(payload).then(()=>{
            response.render("index",{msg:"data inserted successfully"});
    }).catch((error)=>{
        response.render("index",{msg:"something went wrong"});
    })
}

export const viewStudentController = (request,response)=>{
    student.findAll().then((result)=>{
        console.log(result);
        response.render("viewStudent",{result:result})
    }).catch((error)=>{
            // response.render("viewStudent",{result:"",msg:"something went wrong"});
            console.log(error);
            
    })
}

export const searchStudentController = (request,response)=>{
    response.render("searchStudentForm",{result:"",status:0});
}

export const searchStudentByIdController = (request,response)=>{
    const sid = request.body.sid;
    student.findOne({
        where:{
            sid:sid
        }
    }).then((result)=>{
        response.render("searchStudentForm",{result:result,status:1})
    }).catch((error)=>{
        console.log(error);
        
    })
}