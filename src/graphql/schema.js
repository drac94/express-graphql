const { GraphQLSchema } = require('graphql');

const userQuery = require('./queries/user');
const userMutation = require('./mutations/user');

const schema = new GraphQLSchema({
  query: userQuery,
  mutation: userMutation,
});

module.exports = schema;
