const express = require("express");
const ctrl = require("../../controllers/authentication");
const { validateBody } = require("../../middlewares/index");
const {
  registerUserValidationSchema,
  loginUserValidationSchema,
} = require("../../utils/joiSchemas/index");

const router = express.Router();

router.post(
  "/register",
  validateBody(registerUserValidationSchema),
  ctrl.register
);

router.post("/login", validateBody(loginUserValidationSchema), ctrl.login);

module.exports = router;
