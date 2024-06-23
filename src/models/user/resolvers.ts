import { Resolver } from "../../types";


const userResolvers: Resolver = {
  User: {},
  Query: {
    users: async (parent, args, { db }) => {
        return await db.user.findMany();
      },
    user: async (parent, args, { db }) => {
      return await db.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createUser: async (parent, args, { db }) => {
      return await db.user.create({
        data: { ...args.data },
      });
    },
  },
};
export { userResolvers };