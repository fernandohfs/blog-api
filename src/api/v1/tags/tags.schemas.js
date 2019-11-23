import * as Joi from "@hapi/joi";

export const params = Joi.object({
  postId: Joi.number().required(),
  id: Joi.number().required()
});

export const payload = Joi.object({
  name: Joi.string()
    .min(2)
    .max(15)
    .required()
});

export const update = {
  params,
  payload
};
