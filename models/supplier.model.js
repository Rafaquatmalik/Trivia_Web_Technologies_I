const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let SupplierSchema= new mongoose.Schema({

    profileid: {type:Number,required: true},
    supplierid: {type: Number, required: true},
    name: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    contactnumber:{type: Number, required: true},
    address: {type: String, required: true},
    product:{type: String, required: true},
},);

module.exports=mongoose.model('Supplier',SupplierSchema);
