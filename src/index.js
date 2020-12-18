const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express').default;
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const context = async (req) => {
  const { authorization: token } = req.headers;

  return { token };
};

const app = express();
app.use(
  '/graphql',
  graphqlHTTP(async (req) => ({
    schema,
    rootValue: resolvers,
    context: () => context(req),
  })),
);
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
app.listen(4000);

console.log('🚀 Server ready at http://localhost:4000/graphql');
