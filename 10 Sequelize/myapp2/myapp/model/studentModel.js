import { DataTypes } from "sequelize";
import sequelize from "./dbconfig.js";


var student = sequelize.define("student",{
    sid:{
        type:DataTypes.INTEGER,
        allowNull:true,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{tableName:"student"});

student.sequelize.sync().then(()=>{
    console.log("table created successfully");
}).catch((error)=>{
    console.log("error while creating table",error);
});

export default student;