import express from 'express';
import { DataTypes, Sequelize, where } from 'sequelize';
import mysql from 'mysql2';

var app = express();

var sequelize = new Sequelize(
    'sequelizedb',
    'root',
    'root',
    {
        host:'localhost',
        dialect:'mysql'
    }
);

sequelize.authenticate().then(()=>{
    console.log("database connection established");
}).catch((error)=>{
    console.log(error);
});

var student = sequelize.define("student",{
    sid:{
        type:DataTypes.INTEGER,
        allowNull:true,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName:"student"});

student.sequelize.sync().then(()=>{
console.log("table created successfully");
// const payload = {
//     name:"andrew",
//     email:"andrew@gmail.com",
//     password:"andrew@123"
// }

// student.create(payload).then(()=>{
//     console.log("data inserted successfully");
// }).catch((error)=>{
//     console.log("error while inserting data");
// });

const bulkPayload = [
    {
        name:"andrew",
        email:"andrew@gmail.com",
        password:"andrew@123"
    },
    {
        name:"peter",
        email:"peter@gmail.com",
        password:"andrew@123"
    },
    {
        name:"maria",
        email:"maria@gmail.com",
        password:"andrew@123"
    },
    {
        name:"jack",
        email:"jack@gmail.com",
        password:"andrew@123"
    }
    
]
//bulk data create
// student.bulkCreate(bulkPayload).then(()=>{
//     console.log("data inserted successfully");
// }).catch((error)=>{
//     console.log("error while inserting data");
// });

// find one data
// student.findOne().then((result)=>{
//     console.log("data :",result.get({plain:true}));
// }).catch((error)=>{
//     console.log("error while inserting data");
// });

//find all data
// student.findAll().then((result)=>{
//     console.log("data :",result);
// }).catch((error)=>{
//     console.log("error while inserting data");
// });

// student.findOne(
//     {
//         where:{
//             sid : 3
//         }
//     }
// ).then((result)=>{
//     console.log("data :",result.get({plain:true}));
// }).catch((error)=>{
//     console.log("error while inserting data");
// });

student.update(
    {
        email:"abc@gmail.com",
        password:"123"
    },
    {
        where:{
            sid : 2
        }
    }
).then((result)=>{
    console.log("data :",result);
}).catch((error)=>{
    console.log("error while inserting data");
});



}).catch((error)=>{
    console.log("error occured");
});

app.listen(3000,()=>{
    console.log("server connection successfull");
    
});