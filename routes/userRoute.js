// const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const conn = require('../db');


app.get('/users',(req,res)=>{
    const sql="select * from users ";
    conn.query(sql,(err,result)=>{
       if(err) err;
       res.status(200).json({result});
    })
 
 });

 export default router;