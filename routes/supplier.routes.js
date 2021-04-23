const express=require('express');
const router=express.Router();

const supplier_controller=require('../controllers/supplier.controller');

router.get('/list', supplier_controller.supplier_list);
router.post('/createform', supplier_controller.supplier_createform);
router.post('/create', supplier_controller.supplier_create);
router.post('/:id/delete', supplier_controller.supplier_delete);
router.post('/updateform/:id', supplier_controller.supplier_updateform);
router.post('/:id/update', supplier_controller.supplier_update);
module.exports=router;