import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

export const DB_REPLICA_SET = process.env.DB_REPLICA_SET || 'localReplicaSet';

console.log("DB_REPLICA_SET: ", DB_REPLICA_SET);

export const ENV = {
  DB_URL: process.env.DB_URL || `mongodb://localhost:27027/Bot?replicaSet=${DB_REPLICA_SET}`,
  TELEGRAF_TOKEN: "5350985690:AAEqW54MDoghqgCmkcpGPD3PlguN71zKc28",
  WEB_HOOK_URL: "http://localhost:4000",
  HOST: process.env.HOST || '0.0.0.0',
  BOT: 4000,
};

