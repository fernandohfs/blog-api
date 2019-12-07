import { notFound } from "@hapi/boom";

export async function getObjectOr404(model, options) {
  const instance = await model.findOne(options);

  if (!instance) {
    throw notFound();
  }

  return instance;
}
