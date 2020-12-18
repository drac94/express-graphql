const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const userType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
  },
});

const userInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = { userType, userInput };
