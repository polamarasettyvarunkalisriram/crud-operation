const express=require('express');
const router=express.Router();
const crudcontroller=require('../controller/curdcontroller');
const uploads=require('../config/configmulter')

router.get('/list',crudcontroller.getstudent);
router.post('/addstudent',uploads.single('photo'),crudcontroller.addlist)
router.get('/student/:id', crudcontroller.StudentById); 
router.put('/updatestudent/:id',crudcontroller.updatestudent);
router.delete('/deleteitem',crudcontroller.deletelist);
module.exports=router