const Joi = require("joi");

const dateRegexp =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g;

const registerUserValidationSchema = Joi.object({
  title: Joi.string().empty().required(),
  date: Joi.string().empty().trim().pattern(dateRegexp).required(),
  text: Joi.string().required(),
});

module.exports = registerUserValidationSchema;
