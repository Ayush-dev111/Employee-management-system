const express = require('express');
const router = express.Router();

const Employee = require('../models/employee');

router.get('/add-employee', (req, res) => {
    res.render('add-emp');
});

router.post('/save-employee', async (req,res)=>{
    try {
        const employee = new Employee({
        Fullname: req.body.Fullname,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city
    });
    await employee.save()
    } catch (error) {
        console.error(error);
    }
    res.redirect('/');
})

router.get('/view-employee', async (req, res) =>{
   try {
     const employee = await Employee.find().lean();
    res.render('show-emp', { list: employee });
   } catch (error) {
    console.error(error);
   }
})

router.get('/delete-employee', async (req,res)=>{
    try {
        const employee = await Employee.find().lean();
        res.render('delete-emp', { list: employee });
    } catch (error) {
        console.log(error);
    }
})


router.get('/delete/:id', async (req, res)=>{
    try{
        const employeeId = req.params.id;
        await Employee.findByIdAndDelete(employeeId);
        res.redirect('/employee/delete-employee');
    }catch(error){
        console.log(error);
    }
})

router.get('/update-employee/', async (req, res) => {
      try {
        const employee = await Employee.find().lean();
        res.render('update-emp', { list: employee });
    } catch (error) {
        console.log(error);
    }
})

router.get('/edit-employee/:id', async (req, res) => {
    try{
        const employeeId = req.params.id;
        const employee = await Employee.findById(employeeId).lean();
        res.render('edit-emp', { employee });
    }catch(error){
        console.log(error);
    }
})

router.post('/update-emp/:id', async (req, res) => {
   try{
     await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
   } catch (error){
       console.log(error);
   }
})


module.exports = router;