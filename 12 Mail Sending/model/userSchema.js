import mongoose from "mongoose";
import url from "../database/dbConfig.js";

mongoose.connect(url);

const userSchema = mongoose.Schema({
    username:{
        type : String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    hobbies:{
        type:[String],
        required:true
    },
    status:{
        type:String,
        default:"Not Verified"
    }
});

export default mongoose.model('userSchema',userSchema,'mailRecord');
// export default userSchema;


