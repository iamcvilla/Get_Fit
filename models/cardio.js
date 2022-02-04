const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
// class Exercise extends Model {
  
// }

// create fields/columns for Exercise model
Cardio.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cardio_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise'
  }
);

module.exports = Cardio;
