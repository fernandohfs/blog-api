import { Model } from "sequelize";
import bcrypt from "bcryptjs";

export default (sequelize, dataTypes) => {
  class User extends Model {}

  User.init(
    {
      email: dataTypes.STRING,
      password: dataTypes.STRING
    },
    { sequelize, modelName: "User" }
  );

  User.addHook("beforeCreate", async user => {
    user.password = await bcrypt.hash(user.password, 8);
  });

  return User;
};
