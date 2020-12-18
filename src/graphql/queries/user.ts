import {
  GraphQLInt, GraphQLObjectType, GraphQLNonNull, GraphQLList,
} from 'graphql';
import { userType } from '../types/user';

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

export default userQuery;
