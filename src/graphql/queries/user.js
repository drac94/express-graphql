const {
  GraphQLInt, GraphQLObjectType, GraphQLNonNull, GraphQLList,
} = require('graphql');
const { userType } = require('../types/user');

const userQuery = new GraphQLObjectType({
  name: 'UserQuery',
  fields: {
    user: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
    },
    users: {
      type: GraphQLList(userType),
    },
  },
});

module.exports = userQuery;
