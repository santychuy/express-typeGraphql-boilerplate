import 'reflect-metadata';

import { config } from './config';
import app from './app';
import { initGraphql } from './graphql';

const {
  APP: { PORT },
} = config;

(async () => {
  const appServer = await initGraphql(app);
  appServer.listen(PORT);
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
})();
