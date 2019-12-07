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

  User.addHook("beforeSave", async user => {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 8);
    }
  });

  return User;
};
