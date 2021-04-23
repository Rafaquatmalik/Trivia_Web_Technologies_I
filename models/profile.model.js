const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ProfileSchema= new mongoose.Schema({
    profileid: {type:Number,required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
},);

module.exports=mongoose.model('Profile',ProfileSchema);