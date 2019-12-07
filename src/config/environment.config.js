import dotEnv from "dotenv";
dotEnv.config();

const {
  NODE_ENV,
  HOST,
  PORT,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_DIALECT
} = process.env;

export default {
  ENV: NODE_ENV,
  HOST,
  PORT,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_DIALECT
};
