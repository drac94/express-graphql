const user = `
  type Query {
    user(id: Int!): User,
    users: [User]
  }
`;

module.exports = user;
