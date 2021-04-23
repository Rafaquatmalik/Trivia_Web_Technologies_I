const express=require('express');
const router=express.Router();

const transaction_controller=require('../controllers/transaction.controller');

router.get('/list', transaction_controller.transaction_list);
router.post('/createform', transaction_controller.transaction_createform);
router.post('/create', transaction_controller.transaction_create);
router.post('/:id/delete', transaction_controller.transaction_delete);
router.post('/updateform/:id', transaction_controller.transaction_updateform);
router.post('/:id/update', transaction_controller.transaction_update);
module.exports=router;