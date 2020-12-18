import { User } from '../data/models/user';
import { UserInput } from '../types';

// TODO connect to a database
const users = [
  {
    id: 1,
    name: 'User 1',
  },
  {
    id: 2,
    name: 'User 2',
  },
  {
    id: 3,
    name: 'User 3',
  },
  {
    id: 4,
    name: 'User 4',
  },
];

const get = (id: number): User | undefined => users.find((user) => user.id === id);

const getAll = (): User[] => users;

const create = (args: UserInput): User => ({
  id: 0,
  name: args.userData.name,
});

export { get, getAll, create };
