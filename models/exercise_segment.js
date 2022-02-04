const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
// class ExerciseEvent extends Model {
  
// }

// create fields/columns for ExerciseEvent model
ExerciseSegment.init(
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

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'excercise_segment'
  }
);

module.exports = ExerciseSegment;
