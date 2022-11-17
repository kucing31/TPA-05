const dotenv = require('dotenv').config();
const db = require("../db/models");
const {Todos} = db;
const jwt = require("jsonwebtoken");

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
            const auth = req.headers.authorization; // Bearer tokennn
            const token = auth.split(" ")[1]; // tokennn
            const payload = jwt.verify(token, process.env.SECRET_KEY);
            console.log('auth', auth);
            console.log('token', token);
            console.log('payload', payload);
            const user = payload.data;
            console.log('user', user);

            const { title, description } = req.body;
            const newTodoData = {
                title: title,
                description: description,
                user_id : user.id
            };
            console.log('newTodoData', newTodoData);

            const todoData = await Todos.create(newTodoData);
            console.log(todoData);
            res.status(201).json({
                message: 'Berhasil membuat Todo baru',
                todoData
            });
            console.log(newTodoData);

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

