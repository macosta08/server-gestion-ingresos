import { Prisma, PrismaClient } from '@prisma/client';

// Aquí se define un tipo alias db que es una instancia de PrismaClient configurada con opciones específicas:

// Prisma.PrismaClientOptions: Las opciones que puedes pasar al crear una instancia de PrismaClient.
// never: Un tipo que indica que no se permite ningún middleware.

type db = PrismaClient<
  Prisma.PrismaClientOptions,
  never
>;

// La interfaz Context define el contexto que se pasará a los resolutores de GraphQL. 
// En este caso, el contexto incluye un db que es de tipo db (la instancia de PrismaClient).

interface Context {
  db: db;
}

// La interfaz ResolverFunction define una función resolutora de GraphQL. Cada clave es un string (el nombre del resolutor) que mapea a una función que toma los siguientes parámetros:

// parent: El objeto padre, normalmente utilizado en resolutores de campos.
// args: Los argumentos pasados a la consulta/mutación.
// context: El contexto de GraphQL, que incluye la instancia de PrismaClient.

// Esta función devuelve una promesa (Promise<any>).

interface ResolverFunction {
  [key: string]: (parent: any, args: any, context:Context) => Promise<any>;
}

// La interfaz Resolver define el objeto que contiene todos los resolutores de GraphQL para consultas (Query) y mutaciones (Mutation). 
// Además, puede contener otros resolutores de campos si es necesario.

interface Resolver {
  Query: ResolverFunction;
  Mutation: ResolverFunction;
  [key: string]: ResolverFunction;
}

export { Resolver, db };
