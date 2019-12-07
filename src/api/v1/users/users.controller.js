import { CREATED } from "http-status";

import UsersDao from "./users.dao";

class UsersController {
  async store(request, h) {
    const { payload } = request;

    const user = await UsersDao.create(payload);

    return h.response(user).code(CREATED);
  }
}

export default new UsersController();
