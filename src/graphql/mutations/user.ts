import { GraphQLObjectType, GraphQLNonNull } from 'graphql';
import { userType, userInput } from '../types/user';

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

export default userMutation;
