import { CREATED } from "http-status";

import UsersDao from "./users.dao";
import { authenticate, getToken } from "../../utils/auth.utils";

class UsersController {
  async store(request, h) {
    const { payload } = request;

    const user = await UsersDao.create(payload);

    return h.response(user).code(CREATED);
  }

  async login(request, h) {
    const { payload } = request;
    const user = await authenticate(payload);
    const token = await getToken({
      id: user.id,
      email: user.email
    });

    return { user, token };
  }
}

export default new UsersController();
