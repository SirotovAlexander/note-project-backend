const HttpError = (status, massege) => {
  const error = new Error(massege);
  error.status = status;
  return error;
};

module.exports = HttpError;
