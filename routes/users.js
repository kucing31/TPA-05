require('dotenv') = require('dotenv').config();
const express = require('express');
const router = express.Router();

const createUser = require('../controllers/users');
const getuserId = require('../controllers/users');
const userlogin = require('../controllers/users');

router.get('/users:id', getuserId);


router.post('/users/register', createUser);

router.post('/users/login', userlogin);

module.exports = router;


