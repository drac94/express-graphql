const { buildSchema } = require('graphql');

const types = require('./types');
const userQuery = require('./queries/user');
const userMutation = require('./mutations/user');

const schema = buildSchema(`
  ${userQuery} ${userMutation} ${types}
`);

// const queries = require('./queries');
// const mutations = require('./mutations');
/* const schema = buildSchema(`
  type Query {
    user(id: Int!): User
  }
  type User {
    id: Int
    name: String
    age: Int
    shark: String
  }
`); */

/* const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'queries',
    fields: queries,
  }),
  mutation: new GraphQLObjectType({
    name: 'mutations',
    fields: mutations,
  }),
}); */

module.exports = schema;
