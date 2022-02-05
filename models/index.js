// import all models
const User = require('./User');
const Exercises = require('./Exercises');
const Cardio = require('./Cardio');
const Strength = require('./Strength');

// create associations
User.hasMany(Exercises, {
  foreignKey: 'user_id'
});

User.hasMany(Cardio, {
  foreignKey: 'user_id'
});

User.hasMany(Strength, {
  foreignKey: 'user_id'
});

Exercises.belongsToMany(User, {
  foreignKey: 'User_id',
  onDelete: 'SET NULL'
});

Exercises.hasMany(Cardio, {
  foreignKey: 'exercise_id'
});

Exercises.hasMany(Strength, {
  foreignKey: 'exercise_id'
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
