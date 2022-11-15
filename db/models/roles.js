const {Model} = require('sequelize');

class roles extends Model{}
function model(sequelize, DataTypes) {
    roles.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          name: {
            allowNull: true,
            type: Sequelize.STRING(50)
          },
          description: {
            allowNull: true,
            type: Sequelize.STRING(100)
          }
        }, 
        
        {
            sequelize,
            modelName: 'Roles',
            tableName: 'roles',
            timestamps: false
        });
    return roles;
}

module.exports = model;