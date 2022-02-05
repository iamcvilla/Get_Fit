const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercises extends Model {};

// create fields/columns for ExerciseEvent model
Exercises.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    segment_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    cardio_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: 'cardio',
        key: 'id'
      }
    },
    strength_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: 'strength',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercises'
  }

);

module.exports = Exercises;
