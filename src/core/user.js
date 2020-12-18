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

const get = (id) => users.find((user) => user.id === id);

const getAll = () => users;

const create = (args) => {
  console.log(args.userData.name);
};

module.exports = { get, getAll, create };
