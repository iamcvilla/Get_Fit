const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
// class Exercise extends Model {
  
// }

// create fields/columns for Exercise model
Strength.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    strength_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    strength_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strength_sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strength_reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise'
  }
);

module.exports = Strength;
