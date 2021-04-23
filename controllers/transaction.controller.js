const mongoose = require('mongoose');
const Transaction = require('../models/transaction.model');

exports.transaction_list = (req, res) => {
    Transaction.find((err, transactions) => {
        
        res.render('transaction_list', {
            page: 'Show All Transactions',
            menuId: 'transaction_list',
            transactions: transactions
        });
    });
}

exports.transaction_updateform=(req, res)=>{
    Transaction.findById(req.params.id,(err, transaction)=>{
        if(err) return next(err);
        res.render('transaction_updateform',{
            page: 'Update Transaction',
            menuId: 'update_transaction',
            transaction:transaction
        })
    });
}

exports.transaction_update=(req, res)=>{
    Transaction.findByIdAndUpdate(req.params.id,{$set: req.body},(err, transaction)=>{
         if(err) return next(err);
         res.redirect('/transactions/list');
    });
}

exports.transaction_delete=(req, res)=>{
    Transaction.findByIdAndRemove(req.params.id,(err, transaction)=>{
        if(err) return next();
        res.redirect('/transactions/list');
    });
}

exports.transaction_createform=(req, res)=>{
    res.render('transaction_createform', {
        page: 'New Transaction',
        menuId: 'new_transaction'
    });
}

exports.transaction_create=(req, res)=>{
    let transaction= new Transaction({
        transactionid: req.body.transactionid,
        inventoryid: req.body.inventoryid,
        product: req.body.product,
        price: req.body.price,
        quantity:req.body.quantity
    });
    transaction.save(err=>{
       if(err) return next(err);
       res.redirect('/transactions/list');
    });
}

