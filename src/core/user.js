class UserService {
  // TODO connect to a database
  get = (id) => {
    return users.find((user) => user.id === id);
  };

  get_all = () => users;

  create = (args) => console.log(args.userData.name);
}

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

module.exports = UserService;
