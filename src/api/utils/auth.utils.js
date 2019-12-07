import { instances } from "hapi-sequelizejs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { notFound } from "@hapi/boom";

import { getObjectOr404 } from "../utils/database.utils";

export function getToken(payload, options = {}) {
  return jwt.sign(payload, "stubJWT", {
    expiresIn: "24h",
    ...options
  });
}

export async function authenticate({ email, password }) {
  const model = instances.getModel("User");
  const user = await getObjectOr404(model, { where: { email } });
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw notFound();
  }

  return user;
}
