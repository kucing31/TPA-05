const dotenv = require('dotenv').config();
const db = require("../models");
const {Todos} = db;

module.exports = {
    getAlltodo: async (req, res) => {
        const todos = await Todos.findAll();
        res.json({
            message : "Berhasil memanggil data Todo",
            data : todos,
            status : 200
        })
    },

    gettodoByID: async (req, res) => {
        const {id} = req.params
        const todo = await Todos.findbypk(id)
        res.json({
            message : "Berhasil memanggil data Todo",
            data : user
          })
    },

    createtodo: async (req, res) => {
        try{
            const { title, desc, isCompleted } = req.body;
            const newTodoData = {
                title: title,
                desc: desc,
                isCompleted: isCompleted
            };

            const todoData = await Todos.create(newTodoData);
            console.log(todoData);
            res.status(201).json({
                message: 'Berhasil membuat Todo baru',
                todoData
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || 'Kegagalan Server',
            });
        }
    },

    updatetodo: async (req, res) => {
        try {
            const { title, desc, isCompleted } = req.body;

            const updateTodoData = {
                title: title,
                desc: desc,
                isCompleted: isCompleted,
            };

            const updateTodo = await Todos.update(updateTodoData, {
                where: {
                    id: req.params.id
                }
            }); 

            res.status(200).json({
                message: 'Berhasil merubah Todo',
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || 'Kegagalan Server',
            });
        }
    },

    deletetodoByID: async (req, res) => {
        try {
            const deleteTodo = await Todos.destroy({
                where: {
                    id: req.params.id,
                }
            })
            res.status(200).json({
                message: 'Berhasil menghapus Todo',
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || 'Kegagalan Server',
            })
        }
    },

    deleteAlltodo: async (res) => {
        res.send();
    }
}

