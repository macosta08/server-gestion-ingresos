import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import resolverArray from './src/models';
import { getDB } from './src/db';

const typeDefs = readFileSync(
  require.resolve('./src/graphql/schema.graphql')
).toString('utf-8');

// Exportamos una función que inicia el servidor Apollo
export async function handler() {
  const db = await getDB();
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolverArray,
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => ({ db }),
  });

  console.log(`🚀 Server ready at ${url}`);

  // Devolvemos una respuesta exitosa
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Server ready at ${url}` }),
  };
}
handler()