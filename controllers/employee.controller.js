const mongoose = require('mongoose');
const Employee = require('../models/employee.model');

exports.employee_list = (req, res) => {
    Employee.find((err, employees) => {
        
        res.render('employee_list', {
            page: 'Show All Employees',
            menuId: 'employee_list',
            employees: employees
        });
    });
}

exports.employee_updateform=(req, res)=>{
    Employee.findById(req.params.id,(err, employee)=>{
        if(err) return next(err);
        res.render('employee_updateform',{
            page: 'Update Employee',
            menuId: 'update_employee',
            employee:employee
        })
    });
}

exports.employee_update=(req, res)=>{
    Employee.findByIdAndUpdate(req.params.id,{$set: req.body},(err, employee)=>{
         if(err) return next(err);
         res.redirect('/employees/list');
    });
}

exports.employee_delete=(req, res)=>{
    Employee.findByIdAndRemove(req.params.id,(err, employee)=>{
        if(err) return next();
        res.redirect('/employees/list');
    });
}

exports.employee_createform=(req, res)=>{
    res.render('employee_createform', {
        page: 'New Employee',
        menuId: 'new_employee'
    });
}

exports.employee_create=(req, res)=>{
    let employee= new Employee({
        profileid: req.body.profileid,
        employeeid: req.body.employeeid,
        name: req.body.name,
        gender: req.body.gender,
        contactnumber: req.body.contactnumber,
        address:req.body.address
    });
    employee.save(err=>{
       if(err) return next(err);
       res.redirect('/employees/list');
    });
}

