const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

// /admin/add-product => GET
router.get('/val', userController.allUsers);


router.get('/', userController.newVal);

// /admin/add-product => POST
router.post('/join-val', userController.newValData);

module.exports = router;