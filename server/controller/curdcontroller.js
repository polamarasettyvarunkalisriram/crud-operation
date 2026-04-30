const curdmodel=require('../model/crudmodel');


const getstudent=async (req,res)=>{
    try{
    const getlist=await curdmodel.studentlist();
    return res.status(200).json({data:getlist,status:1})
    }
    catch(err){
        return res.status(500).json(err)
    }
}
const addlist=async(req,res)=>{
    try{
    const {name,email}=req.body;
    const photo=req.file?req.file.filename:null;
    const studentdata=await curdmodel.newstudent(name,email,photo);
    return res.status(201).json({message:'student add successfully',status:1,data:studentdata.student_id});

    }
    catch(err){
        return res.status(500).json(err);
    }
}
const updatestudent=async(req,res)=>{
    try{
        const id=req.params.id
        const {name,email}=req.body
        const result=await curdmodel.modifystudent(name,email,id);
        return res.status(200).json({message:'updated',status:1,data:result.affectedRows});
    }
    catch(err){
        return res.status(500).json({err,status:0});
    }
}
const deletelist=async(req,res)=>{
    try{
        const id=req.body.id;
        const studentlist=await curdmodel.deletestudent(id);
        return res.status(200).json({message:'delete succesfully',status:1})
    }
    catch(err){
        return res.status(500).json({err,status:0})
    }
}
const StudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const result=await curdmodel.getstudentbyid(id);

    if (result.length === 0) {
      return res.json({
        status: 0,
        message: "No student found"
      });
    }

    return res.json({
      status: 1,
      data: result[0]
    });

  } catch (err) {
    console.log("ERROR:", err);
    return res.status(500).json({
      status: 0,
      message: err.message
    });
  }
};
module.exports={getstudent,deletelist,addlist,updatestudent,StudentById}