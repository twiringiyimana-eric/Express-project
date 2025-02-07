// importing  modules
const express= require('express');
const app =express();
const port = 3000;
const mysql=require ('mysql');
// const conn = require('./db');
app.use(express.json());

const conn=mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'',
     database:"fridayDemo_db"
});
conn.connect((err)=>{
    if(err) err;
    console.log('connection established successfully');

})
app.get('/users',(req,res)=>{
    res.status(200).json({message:'this is  my first api '});

});
// create post endpoint

app.post('/create',(req,res)=>{
    const user=req.body;
    const sql='insert into users set ?';
    conn.query(sql,user,(err,result) => {
        if(err) err;
        res.status(200).json({message:'user created successfully'});
    })
});

// get all users from the database
app.get('/getUsers',(req,res)=>{
   const sql="select * from users ";
   conn.query(sql,(err,result)=>{
      if(err) err;
      res.status(200).json({result});
   })

})
//  get single users
app.get('/getUsers/:id',(req,res)=>{
const id =req.params.id;
const sql='select * from users where userid=?';
   conn.query(sql,id,(err,result)=>{
       if(err)err;
       res.status(200).json({result});
   })
});

// testing the server
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
