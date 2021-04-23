const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let EmployeeSchema= new mongoose.Schema({
    profileid: {type:Number,required: true},
    employeeid: {type: Number, required: true},
    name: {type: String, required: true},
    gender: {type: String, required: true},
    contactnumber: {type: Number, required: true},
    address: {type: String, required: true},
},);

module.exports=mongoose.model('Employee',EmployeeSchema);
