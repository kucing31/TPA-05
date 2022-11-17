const express = require('express');
const router = express.Router();

const userRouting = require('./users');
const roleRouting = require('./roles');
const todoRouting = require('./todos');

router.use('/users', userRouting);
router.use('/roles', roleRouting);
router.use('/todos', todoRouting);

module.exports = router;