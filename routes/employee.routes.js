const express=require('express');
const router=express.Router();

const employee_controller=require('../controllers/employee.controller');

router.get('/list', employee_controller.employee_list);
router.post('/createform', employee_controller.employee_createform);
router.post('/create', employee_controller.employee_create);
router.post('/:id/delete', employee_controller.employee_delete);
router.post('/updateform/:id', employee_controller.employee_updateform);
router.post('/:id/update', employee_controller.employee_update);
module.exports=router;