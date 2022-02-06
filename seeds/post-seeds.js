const { Post } = require('../models');
const postdata = [
  {
    title: 'Running',
    distance: 10,
    time: 67,
    weight: 145,
    sets: 0,
    reps:0,
    user_id: 1
  },
  {
    title: 'Crunches',
    distance:0,
    time:0,
    weight:0,
    sets: 3,
    reps: 25,
    user_id: 2
  },
  {
    title: 'Cycling',
    distance: 15,
    time: 45,
    weight:0,
    sets:0,
    reps:0,
    user_id: 3
  },
  {
    title: 'Yoga',
    distance:0,
    time: 60,
    weight:0,
    sets:0,
    reps:0,
    user_id: 4
  },
  {
    title: 'Stretching',
    distance:0,
    time: 10,
    weight:0,
    sets:0,
    reps:0,
    user_id: 5
  },
  {
    title: 'Bench Press',
    distance:0,
    time:0,
    weight: 175,
    sets: 3,
    reps: 5,
    user_id: 6
  },
];
const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;
