const { Model } = require('sequelize');

class todos extends Model {}

function model(sequelize, DataTypes) {
    todos.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'users',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            field: 'user_id'
          },
          title: {
            allowNull: true,
            type: DataTypes.STRING(50)
          },
          description: {
            allowNull: true,
            type: DataTypes.STRING(50)
          },
          created_at: {
            allowNull: true,
            type: DataTypes.DATE
          }
        }, 
        
        {
            sequelize,
            modelName: 'Todos',
            tableName: 'todos',
            timestamps: false
        }); 
    return todos;
}

module.exports = model;
