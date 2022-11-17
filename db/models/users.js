const { Model } = require('sequelize');

class users extends Model{}
function model(sequelize, DataTypes) {
    users.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          role_id: {
            allowNull: true,
            type: DataTypes.INTEGER,
            defaultValue : 2,
            references: {
              model: 'roles',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            field: 'role_id'
          },
          name: {
            allowNull: true,
            type: DataTypes.STRING(50)
          },
          email: {
            allowNull: true,
            type: DataTypes.STRING(50)
          },
          password: {
            allowNull: true,
            type: DataTypes.STRING(20)
          }
        },
        
        {
            sequelize,
            modelName: 'Users',
            tableName: 'users',
            timestamps: false
        });
    return users;
}

module.exports = model;