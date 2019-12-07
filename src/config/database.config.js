import Env from "./environment.config";

export default {
  host: Env.DB_HOST,
  database: Env.DB_NAME,
  username: Env.DB_USER,
  password: Env.DB_PASS,
  dialect: Env.DB_DIALECT,
  logging: Env.ENV === "development" ? true : false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
