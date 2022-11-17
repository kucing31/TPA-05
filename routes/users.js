const express = require('express');
const router = express.Router();

const {getuserId,
       buatUser,
       userlogin} = require('../controllers/users');

router.get('/:id', getuserId);
router.post('/register', buatUser);
router.post('/login', userlogin);

module.exports = router;


