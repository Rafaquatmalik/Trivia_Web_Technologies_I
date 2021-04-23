const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let InventorySchema= new mongoose.Schema({
    profileid: {type:Number,required: true},
    inventoryid: {type: Number, required: true},
    product: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
},);

module.exports=mongoose.model('Inventory',InventorySchema);
