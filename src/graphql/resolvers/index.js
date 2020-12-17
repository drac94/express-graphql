const { getUser, getUsers, createUser } = require('./user');

const resolvers = {
  user: getUser,
  users: getUsers,
  createUser: createUser,
};

module.exports = resolvers;