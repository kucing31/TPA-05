require('dotenv') = require('dotenv').config();
const express = require('express');
const router = express.Router();

const getAlltodo = require('../controllers/todos');
const gettodoByID = require('../controllers/todos');
const createtodo = require('../controllers/todos');
const updatetodo = require('../controllers/todos');
const deletetodoByID = require('../controllers/todos');
const deleteAlltodo = require ('../controllers/todos');



router.get('/', getAlltodo);
router.get('/:id', gettodoByID);
router.post('/', createtodo);
router.put('/:id', updatetodo);
router.delete('/:id', deletetodoByID);
router.delete('/', deleteAlltodo);