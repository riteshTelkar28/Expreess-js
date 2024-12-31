import express from 'express';
import { check,validationResult } from 'express-validator';
var app = express();
app.set("views","views");
app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(request,response)=>{
    response.render("index");
});

app.post("/viewDetails",[
    check("username","Enter username").not().isEmpty(),
    check("email","Enter email").not().isEmpty(),
    check("password","Enter password").not().isEmpty().isLength({max:8,min:4}),
    check("contact","Enter contact").custom((value)=>{
        console.log("inside custom");
        
        var regex = /^[6789][0-9]{9}$/;
        if(regex.test(value)){
            console.log("gets entry"); 
            return true;
        }
        else{
            return;
        }
    })
    
],(request,response)=>{
    var error = validationResult(request);
    if(!error.isEmpty()){
        response.send("error")
    }
    else{
        response.send("success");
    }
});

app.listen(3000,()=>{
    console.log("server connection successful");
    
})