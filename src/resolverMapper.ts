import { Resolver } from './types';
import resolverArray from './models';

// El propósito de este getResolvers es combinar múltiples resolutores de GraphQL en un único objeto resolvers. 
// Esto se logra iterando sobre un array de resolutores (resolverArray), 
// combinando sus propiedades Query y Mutation, y agregando cualquier otro resolutor directamente al objeto final. 
// La función getResolvers devuelve tanto el objeto combinado como el array original de resolutores para un posible uso adicional.

// Este enfoque modulariza y organiza los resolutores, permitiendo una fácil gestión y escalabilidad del servidor GraphQL.

const getResolvers = () => {
  const resolvers: Resolver = {
    Query: {},
    Mutation: {},
  };

  resolverArray.forEach((r) => {
    Object.keys(r).forEach((key: string) => {
      if (key !== 'Query' && key !== 'Mutation') {
        resolvers[key] = r[key];
      }
    });
    resolvers['Query'] = { ...resolvers['Query'], ...r['Query'] };
    resolvers['Mutation'] = { ...resolvers['Mutation'], ...r['Mutation'] };
  });

  return { resolvers, resolverArray };
};

export { getResolvers };
