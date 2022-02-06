const { Vote } = require('../models');

const votedata = [
  {
    user_id: 4,
    post_id: 1
  },
  {
    user_id: 1,
    post_id: 5
  },
  {
    user_id: 4,
    post_id: 6
  },
  {
    user_id: 3,
    post_id: 1
  },
  {
    user_id: 6,
    post_id: 3
  },

  {
    user_id: 4,
    post_id: 4
  },
  {
    user_id: 1,
    post_id: 6
  }
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
