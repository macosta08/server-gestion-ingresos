import { getResolvers } from './resolverMapper';
import { getDB } from './db';
// todavía no me queda claro el uso de este archivo 
export const handler = async (event: any, context: any) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { resolvers } = getResolvers();

  try {
    if (
      Object.keys(resolvers).includes(event.info.parentTypeName) &&
      Object.keys(resolvers[event.info.parentTypeName]).includes(event.info.fieldName)
    ) {
      const db = await getDB();
      return await resolvers[event.info.parentTypeName][event.info.fieldName](
        event.source,
        event.arguments,
        { db }
      );
    } else {
      return null;
    }
  } catch (e) {
    console.log('Error executing resolver: ', e);
  }
};
