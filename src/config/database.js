export default {
  host: "localhost",
  database: "blog",
  username: "root",
  password: "f3rn@ndin",
  dialect: "mysql",
  loggin: process.env.ENV === "development" ? true : false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
