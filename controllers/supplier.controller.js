const mongoose = require('mongoose');
const Supplier = require('../models/supplier.model');

exports.supplier_list = (req, res) => {
    Supplier.find((err, suppliers) => {
        
        res.render('supplier_list', {
            page: 'Show All Suppliers',
            menuId: 'supplier_list',
            suppliers: suppliers
        });
    });
}

exports.supplier_updateform=(req, res)=>{
    Supplier.findById(req.params.id,(err, supplier)=>{
        if(err) return next(err);
        res.render('supplier_updateform',{
            page: 'Update supplier',
            menuId: 'update_supplier',
            supplier:supplier
        })
    });
}

exports.supplier_update=(req, res)=>{
    Supplier.findByIdAndUpdate(req.params.id,{$set: req.body},(err, supplier)=>{
         if(err) return next(err);
         res.redirect('/suppliers/list');
    });
}

exports.supplier_delete=(req, res)=>{
    Supplier.findByIdAndRemove(req.params.id,(err, supplier)=>{
        if(err) return next();
        res.redirect('/suppliers/list');
    });
}

exports.supplier_createform=(req, res)=>{
    res.render('supplier_createform', {
        page: 'New Supplier',
        menuId: 'new_supplier'
    });
}

exports.supplier_create=(req, res)=>{
    let supplier= new Supplier({
        profileid: req.body.profileid,
        supplierid: req.body.supplierid,
        name: req.body.name,
        gender: req.body.gender,
        age:req.body.age,
        email:req.body.email,
        contactnumber:req.body.contactnumber,
        address:req.body.address,
        product:req.body.product

    });
    supplier.save(err=>{
       if(err) return next(err);
       res.redirect('/suppliers/list');
    });
}

