import dotEnv from "dotenv";
dotEnv.config();

export default {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: process.env.DB_DIALECT,
  loggin: process.env.ENV === "development" ? true : false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
