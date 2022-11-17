const db = require("../db/models");
const {Roles} = db;

module.exports = {
    buatRole: async (req, res) => {
        try {
            const { name,description } = req.body;

            const newRoleData = {
                name,
                description
            }

            const roleData = await Roles.create(newRoleData);

            res.status(201).json({
                message: 'Berhasil membuat Role baru',
                data: roleData
            })
        } catch (err) {
            res.status(500).json({
                message: err.message || 'Kegagalan Server'
            })
        }
        // console.log("perkuntulan") 
    }
};