const express = require('express');
const router = express.Router();


const {buatRole} = require('../controllers/roles');

router.post('/create', buatRole)

module.exports = router;
