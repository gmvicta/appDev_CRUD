const express = require('express');
const router = express.Router();
const crud = require('../controller/crudController');

router.get('/', crud.index);
router.get('/add', crud.add);
router.post('/save', crud.save);
router.get('/index', crud.index);

module.exports = router;
