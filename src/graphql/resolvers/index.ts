import { getUser, getUsers, createUser } from './user';

const resolvers = {
  user: getUser,
  users: getUsers,
  createUser,
};

export default resolvers;
