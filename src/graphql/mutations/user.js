const user = `
  type Mutation {
    createUser(userData:userInput!): User,
  }
`;

module.exports = user;
