const express = require('express');
const router = express.Router();

const profile_controller = require('../controllers/profile.controller');

router.get('/list', profile_controller.profile_list);
router.post('/updateform/:id', profile_controller.profile_updateform);
router.post('/user/:username', profile_controller.user_updateform);
router.post('/user/:id/update', profile_controller.user_update);
router.post('/:id/update', profile_controller.profile_update);
module.exports = router;
