const mongoose = require('mongoose');
const Inventory = require('../models/inventory.model');

exports.inventory_list = (req, res) => {
    Inventory.find((err, inventories) => {
        
        res.render('inventory_list', {
            page: 'Show All Inventories',
            menuId: 'inventory_list',
            inventories: inventories
        });
    });
}

exports.inventory_updateform=(req, res)=>{
    Inventory.findById(req.params.id,(err, inventory)=>{
        if(err) return next(err);
        res.render('inventory_updateform',{
            page: 'Update Inventory',
            menuId: 'update_inventory',
            inventory:inventory
        })
    });
}

exports.inventory_update=(req, res)=>{
    Inventory.findByIdAndUpdate(req.params.id,{$set: req.body},(err, inventory)=>{
         if(err) return next(err);
         res.redirect('/inventories/list');
    });
}

exports.inventory_delete=(req, res)=>{
    Inventory.findByIdAndRemove(req.params.id,(err, inventory)=>{
        if(err) return next();
        res.redirect('/inventories/list');
    });
}

exports.inventory_createform=(req, res)=>{
    res.render('inventory_createform', {
        page: 'New Inventory',
        menuId: 'new_inventory'
    });
}

exports.inventory_create=(req, res)=>{
    let inventory= new Inventory({
        profileid: req.body.profileid,
        inventoryid: req.body.inventoryid,
        product: req.body.product,
        price: req.body.price,
        quantity:req.body.quantity
    });
    inventory.save(err=>{
       if(err) return next(err);
       res.redirect('/inventories/list');
    });
}

