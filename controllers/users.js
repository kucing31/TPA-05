require('dotenv').config();
const db = require("../db/models");
const {Users} = db;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const KEY = process.env.SECRET_KEY;

module.exports = {

    getuserId: async (req, res) =>  {
      const user = await Users.findAll();
          res.json({
              message : "berhasil memanggil data user",
              data : user,
              status : 200
          })
    },
  
    buatUser: async (req, res) => {
      try {
        const { name, email, password } = req.body;
        const saltRounds = await bcrypt.genSalt(10);
        const hasPassword = await bcrypt.hash(password, saltRounds);
        
        const newDataRegister = {
          name,
          email,
          password: hasPassword, 
          role_id : 1
        }
  
        const users = await Users.create(newDataRegister);
        console.log(users)
        res.status(201).json({
          message: 'Register success',
          data: users
        }) 
      } catch (err) {
        res.status(500).json({
          message: err.message || 'Internal Server Error'
        })
      }
    },
  
    //Login User
    userlogin: async (req, res) => {
      try {
        const { email, password } = req.body;
        const users = await Users.findOne({ where: { email: email } });
        if (!users) {
          return res.status(404).json({
            message: 'Pengguna tidak ditemukan'
          })
        }

    
        bcrypt.compare(password, users.password, function(err, result) {
          if(err){
            return res.status(401).json({
              message: 'Password is incorrect',
            })
          }
        });
    
        const token = jwt.sign({
          data: { 
            id: users.id,
            name : users.name,
            email : users.email,
          }
        }, process.env.SECRET_KEY, { expiresIn: 60 * 60 });
  
        // memberikan token ke client dan menyembunyikan password
        res.status(200).json({
          message: 'Login Successfully',
          accessToken: token,
        });
      } catch (err) {
          res.status(500).json({
          message: err.message || 'Internal Server Error'
        })
      }
    }
  };
