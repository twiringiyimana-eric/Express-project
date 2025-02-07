const mysql=require ('mysql');
const connection=mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'',
     database:"fridayDemo_db"
});
connection.connect((err)=>{
    if(err) err;
    console.log('connection established successfully');

})

module.export=connection;