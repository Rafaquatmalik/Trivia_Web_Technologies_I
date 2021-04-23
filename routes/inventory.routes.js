const express=require('express');
const router=express.Router();

const inventory_controller=require('../controllers/inventory.controller');

router.get('/list', inventory_controller.inventory_list);
router.post('/createform', inventory_controller.inventory_createform);
router.post('/create', inventory_controller.inventory_create);
router.post('/:id/delete', inventory_controller.inventory_delete);
router.post('/updateform/:id', inventory_controller.inventory_updateform);
router.post('/:id/update', inventory_controller.inventory_update);
module.exports=router;