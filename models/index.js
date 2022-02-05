
const User = require('./User');
const Exercises = require('./Exercises');
const Cardio = require('./Cardio');
const Strength = require('./Strength');

// create associations
User.hasMany(Exercises, {
  foreignKey: 'user_id'
});

User.belongsToMany(Cardio, {
  through: Exercises,
  as: 'user_cardio',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Strength, {
  through: Exercises,
  as: 'user_strength',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Strength, {
  foreignKey: 'user_id'
});
 
Exercises.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Exercises.hasMany(Cardio, {
  foreignKey: 'cardio_id'
});

Exercises.hasMany(Strength, {
  foreignKey: 'strength_id'
});


Cardio.belongsTo(Exercises, {
  foreignKey: 'exercises_id',
  onDelete: 'SET NULL'
});

Strength.belongsTo(Exercises, {
  foreignKey: 'exercises_id',
  onDelete: 'SET NULL'
});

// Post.belongsTo(User, {
//   foreignKey: 'user_id',


//   onDelete: 'SET NULL'
// });

// User.belongsToMany(Post, {
//   through: Vote,
//   as: 'voted_posts',

//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Post.belongsToMany(User, {
//   through: Vote,
//   as: 'voted_posts',
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Vote, {
//   foreignKey: 'user_id'
// });

// Post.hasMany(Vote, {
//   foreignKey: 'post_id'
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Post.hasMany(Comment, {
//   foreignKey: 'post_id'
// });

module.exports = { User, Exercises, Cardio, Strength };
