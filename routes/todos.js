const express = require('express');
const router = express.Router();

const {getAlltodo,
       gettodoByID,
       createtodo,
       updatetodo,
       deleteAlltodo,
       deletetodoByID
    } = require('../controllers/todos');



router.get('/getAll', getAlltodo);
router.get('/:id', gettodoByID);
router.post('/add', createtodo);
router.put('/edit:id', updatetodo);
router.delete('/deletesingle:id', deletetodoByID);
router.delete('/deleteAll', deleteAlltodo);

module.exports = router;