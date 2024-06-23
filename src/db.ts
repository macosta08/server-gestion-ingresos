import { PrismaClient } from '@prisma/client';

let db: PrismaClient;
export const getDB = () => {
  if (db) return db;

  let url = process.env.DATABASE_URL || '';

  console.log('connection string: ', url);
  db = new PrismaClient({ datasources: { db: { url } } });
  return db;
};
