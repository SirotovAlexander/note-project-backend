const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const registerUserValidationSchema = Joi.object({
  name: Joi.string().trim().empty().required(),
  email: Joi.string().trim().empty().email().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

module.exports = registerUserValidationSchema;
