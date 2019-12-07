import UsersController from "./users.controller";
import * as Schemas from "./users.schemas";

export default [
  {
    method: "POST",
    path: "/v1/users",
    config: {
      validate: Schemas.create
    },
    handler: UsersController.store
  },
  {
    method: "POST",
    path: "/v1/users/login",
    config: {
      auth: false,
      validate: Schemas.create
    },
    handler: UsersController.login
  }
];
