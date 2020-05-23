import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { PingResolver } from './resolvers/pingResolver';

export const initGraphql = async (app: Application): Promise<Application> => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  server.applyMiddleware({ app });
  return app;
};
