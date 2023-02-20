const express = require('express')
const router = express.Router();
const fileController = require('../controller/fileController');

router.get('/',fileController.getData);

router.post('/', fileController.saveData);

router.put('/:id', fileController.updateData);

router.delete('/:id', fileController.deleteData)

module.exports = router;