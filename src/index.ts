// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';

// // Un esquema es una colección de definiciones de tipos (de ahí "typeDefs")
// // que en conjunto definen la "forma" de las consultas que se ejecutan en
// // tu información.
// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//     {
//       title: 'The Awakening',
//       author: 'Kate Chopin',
//     },
//     {
//       title: 'City of Glass',
//       author: 'Paul Auster',
//     },
//   ];

//   // Resolvers define how to fetch the types defined in your schema.
// // This resolver retrieves books from the "books" array above.
// const resolvers = {
//     Query: {
//       books: () => books,
//     },
//   };

//   // The ApolloServer constructor requires two parameters: your schema
// // definition and your set of resolvers.
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });
  
//   // Passing an ApolloServer instance to the `startStandaloneServer` function:
//   //  1. creates an Express app
//   //  2. installs your ApolloServer instance as middleware
//   //  3. prepares your app to handle incoming requests
//   const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
//   });
  
//   console.log(`🚀  Server ready at: ${url}`);



import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })