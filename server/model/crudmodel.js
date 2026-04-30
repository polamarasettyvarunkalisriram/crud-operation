const {db} = require('../config/db');

const studentlist = async () => {
    const sql='select * from student'
    const [rows] = await db.execute(sql);
    return rows;
};
const newstudent=async (name,email,photo)=>{
    const sql='insert into student (name,email,photo) values(?,?,?)';
    const [rows]=await db.execute(sql,[name,email,photo])
    return rows;
}
const modifystudent=async(name,email,id)=>{
    const sql='update student set name=?,email=? where student_id=?'
    const [rows]=await db.execute(sql,[name,email,id]);
    return rows;
}
const deletestudent=async (id)=>{
    const sql='delete from student where student_id=?'
    const [rows]=await db.execute(sql,[id]);
    return rows;
}
const getstudentbyid=async (id)=>{
    const sql='select * from student where student_id=?'
    const [rows]=await db.execute(sql,[id]);
    return rows
}
module.exports = { studentlist,deletestudent,newstudent,modifystudent,getstudentbyid };