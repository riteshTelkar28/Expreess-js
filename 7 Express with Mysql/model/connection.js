import mysql2 from 'mysql2';
const con = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port:"3306",
    database:"expressDb"
})

con.connect((error)=>{
    if(error){
        console.log("error  ",error);   
    }
    else{
        console.log("connected to database");
    }
});

export default con;