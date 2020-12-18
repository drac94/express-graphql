const isTokenValid = require('../../validate');
const UserService = require('../../core/user');

const getUser = async (args, context) => {
  const { token } = await context();
  const { error } = await isTokenValid(token);
  return !error ? new UserService().get(args.id) : new Error('Unauthorized');
};

const getUsers = async (_, context) => {
  const { token } = await context();
  const { error } = await isTokenValid(token);
  return !error ? new UserService().get_all() : new Error('Unauthorized');
};

const createUser = async (args, context) => {
  const { token } = await context();
  const { error } = await isTokenValid(token);
  return !error ? new UserService().create(args) : new Error('Unauthorized');
};

module.exports = { getUser, getUsers, createUser };
