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

module.exports = router;