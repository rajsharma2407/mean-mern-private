const express = require('express')
const router = express.Router();
const userController = require('../controller/userController');
const validation = require('../milddlewares/validation');

router.get('/',userController.getUsers);

router.post('/',validation.form, userController.saveUser);

router.put('/', userController.updateUser);

router.delete('/:email', userController.deleteUser)

module.exports = router;