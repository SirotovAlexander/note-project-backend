const express = require("express");
const ctrl = require("../../controllers/authentication");
const { validateBody, authenticate } = require("../../middlewares");
const {
  registerUserValidationSchema,
  loginUserValidationSchema,
} = require("../../utils/joiSchemas");

const router = express.Router();

router.post(
  "/register",
  validateBody(registerUserValidationSchema),
  ctrl.register
);

router.post("/login", validateBody(loginUserValidationSchema), ctrl.login);
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
