const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().max(15).required(),
    email: Joi.string().email().max(20).required(),
    password: Joi.string().required().min(8).max(20).pattern(new RegExp(/@/)),
    confirmationPassword: Joi.string()
      .required()
      .min(8)
      .max(20)
      .pattern(new RegExp(/@/)),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send({
      ok: false,
      msg: `Bad request :${error.details[0].message}`,
    });
  }

  next();
};
