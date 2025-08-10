const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    Fullname : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type : String
    },
    city : {
        type : String
    },
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;