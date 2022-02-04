const { User } = require('../models');

const userdata = [
  {
    first_name: 'valerie',
    last_name: 'alesmonde0',
    email: 'val@val.com',
    password: 'password123'
  },
  {
    first_name: 'calvin',
    last_name: 'a',
    email: 'val@val.com',
    password: 'password123'
  },
  {
    first_name: 'aanyah',
    last_name: 'b',
    email: 'val@val.com',
    password: 'password123'
  },
  {
    first_name: 'ken',
    last_name: 'c',
    email: 'val@val.com',
    password: 'password123'
  },
  {
    first_name: 'mathew',
    last_name: 'd',
    email: 'val@val.com',
    password: 'password123'
  }  
];



const seedUsers = () => User.bulkCreate(userdata);
console.log(seedUsers());

module.exports = seedUsers;
