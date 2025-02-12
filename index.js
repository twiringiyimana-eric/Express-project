// importing  modules
const express= require('express');
const app =express();
const port = 3000;
const mysql=require ('mysql');
// const conn = require('./db');
app.use(express.json());
const userRouter=require('./routes/userRoute');

const conn=mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'',
     database:"fridaydemo"
});
conn.connect((err)=>{
    if(err) err;
    console.log('connection established successfully');

})
 app.use('/api',userRouter);

app.post('/users',(req,res)=>{
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
app.get('/users/:id',(req,res)=>{
const id =req.params.id;
const sql='select * from users where userid=?';
   conn.query(sql,id,(err,result)=>{
       if(err)err;
       res.status(200).json({result});
   })
});
// delete users

app.delete('/users/:id',(req,res)=>{
    const id=req.params.id;
    const sql='delete from users where userid=?';
    conn.query(sql,id,(err,result)=>{
        if(err)err;
        res.status(200).json({message:'users deleted successfully'});
    })
})
// update users
app.put('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=req.body;
    const sql='update users set ? where userid=?';
    conn.query(sql,[user,id],(err,result)=>{
        if(err)err;
        res.status(200).json({message:'users updated successfully'});
    })
});

// testing the server
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
