const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const {testConnection} =require('./config/db')
dotenv.config();
const app=express();
app.use(express.json());
const crudroutes=require('./routes/crudroutes');
app.use(cors())
//api routes
app.use('/',crudroutes)
app.use('/uploads', express.static('uploads'));
testConnection();
const PORT= process.env.PORT || 9000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})