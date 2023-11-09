const { HttpError } = require("../helpers/index");

const validateBody = (schema) => {
  return (req, res, next) => {
    // Validate the request body using the provided schema
    const { error } = schema.validate(req.body);

    // If validation fails, send a 400 Bad Request response with the validation error message
    if (error) {
      next(HttpError(400, error.message));
    }

    // Continue with the next middleware or route handler if validation succeeds
    next();
  };
};

module.exports = validateBody;
