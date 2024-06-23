import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import resolverArray from './src/models';
import { getDB } from './src/db';

const typeDefs = readFileSync(
  require.resolve('./graphql/schema.graphql')
).toString('utf-8');


const main = async () => {
  const db = await getDB();
  const server = new ApolloServer({
    typeDefs: ` ${typeDefs}`,
    resolvers: resolverArray,
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => ({ db }),
  });
  console.log(`🚀 Server ready at ${url}`);
};

main();
