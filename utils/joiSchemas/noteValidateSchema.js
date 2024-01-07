const Joi = require("joi");

const noteValidationSchema = Joi.object({
  title: Joi.string().empty().required(),
  date: Joi.string().empty().trim().required(),
  text: Joi.string().required(),
});

module.exports = noteValidationSchema;
