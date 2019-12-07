import { instances } from "hapi-sequelizejs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { getObjectOr404 } from "../../utils/database.utils";
import { notFound } from "@hapi/boom";

class UsersDao {
  constructor() {
    this.model = instances.getModel("User");
  }

  async create(payload) {
    return await this.model.create(payload);
  }

  async authenticate({ email, password }) {
    const user = await getObjectOr404(this.model, { where: { email } });
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw notFound();
    }

    const token = jwt.sign({ id: user.id, email }, "stubJWT", {
      expiresIn: "24h"
    });

    return { user, token };
  }
}

export default new UsersDao();
