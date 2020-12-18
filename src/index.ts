import express, { Request } from 'express';
import { graphqlHTTP } from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';

import schema from './graphql/schema';
import resolvers from './graphql/resolvers';

const context = async (req: Request) => {
  const { authorization: token } = req.headers;

  return { token };
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP(async (request: any) => ({
    schema,
    rootValue: resolvers,
    context: () => context(request),
  }))
);
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
app.listen(4000);

console.log('🚀 Server ready at http://localhost:4000/graphql');
