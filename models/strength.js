const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Strength model
class Strength extends Model {
  // static upvote(body, models) {
  //   return models.Vote.create({
  //     user_id: body.user_id,
  //     post_id: body.post_id
  //   }).then(() => {
  //     return Post.findOne({
  //       where: {
  //         id: body.post_id
  //       },
  //       attributes: [
  //         'id',
  //         'post_url',
  //         'title',
  //         'created_at',
  //         [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
  //       ],
  //       include: [
  //         {
  //           model: models.Comment,
  //           attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
  //           include: {
  //             model: models.User,
  //             attributes: ['username']
  //           }
  //         }
  //       ]
  //     });
  //   });
  // }
}

// create fields/columns for Strength model
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
      allowNull: false
    },
    strength_sets: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    strength_reps: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'excercises',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'strength'
  }
);

module.exports = Strength;
