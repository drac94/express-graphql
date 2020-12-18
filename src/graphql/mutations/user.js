const { GraphQLObjectType, GraphQLNonNull } = require('graphql');
const { userType, userInput } = require('../types/user');

const userMutation = new GraphQLObjectType({
  name: 'UserMutation',
  fields: {
    createUser: {
      type: userType,
      args: {
        userData: {
          type: new GraphQLNonNull(userInput),
        },
      },
    },
  },
});

module.exports = userMutation;
