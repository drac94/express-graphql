const isTokenValid = require('../../auth/validate');
const { get, getAll, create } = require('../../core/user');

const getUser = async (args, context) => {
  const { token } = await context();
  const { error } = await isTokenValid(token);
  if (error) {
    throw new Error(error);
  }
  return get(args.id);
};

const getUsers = async (_, context) => {
  const { token } = await context();
  const { error } = await isTokenValid(token);
  if (error) {
    throw new Error(error);
  }
  return getAll();
};

const createUser = async (args, context) => {
  const { token } = await context();
  const { error } = await isTokenValid(token);
  if (error) {
    throw new Error(error);
  }
  return create(args);
};

module.exports = { getUser, getUsers, createUser };
