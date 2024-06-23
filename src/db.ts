import { PrismaClient } from '@prisma/client';

let db: PrismaClient;
export const getDB = () => {
  if (db) return db;

  let url = "postgres://postgres.yktmymgihpytazgtxzeh:LBomRKwBKBhnSfug@aws-0-us-east-1.pooler.supabase.com:5432/postgres?schema=public";

  console.log('connection string: ', url);
  db = new PrismaClient({ datasources: { db: { url } } });
  console.log('444444444444444444 :>> ', db);
  return db;
};
