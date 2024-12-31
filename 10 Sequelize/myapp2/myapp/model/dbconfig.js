import { DataTypes, Sequelize } from 'sequelize';
import mysql from 'mysql2';

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
    console.log("connected to database");
}).catch((error)=>{
    console.log("error ",error);
});

export default sequelize;