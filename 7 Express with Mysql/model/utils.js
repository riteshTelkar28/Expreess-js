import con from "./connection.js";

export const connectDb = (request,response,next)=>{
    console.log("gets entry");
    var checkQuery = "SELECT count(*) as exist FROM information_schema.tables WHERE table_schema = 'expressDb' AND table_name = 'users'"
    con.query(checkQuery,(error,result)=>{
        if(error)
            console.log("error");
        else{
            console.log("result :",result);
            if(result[0].exist == 0 ){
                    const createTable = "create table users(username varchar(255) not null , email varchar(255) not null primary key, password varchar(255) not null, address varchar(255) not null)";
                    con.query(createTable,(error,result)=>{
                        if(error)
                            console.log("error while creating table ");
                        else{
                            console.log(result); 
                            console.log("table created successufully");
                        }
                            
                    })
            }
            else{
                console.log("table already exits");
                
            }
            
        }
            
    })
    next();
}
