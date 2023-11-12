const express = require("express");
const ctrl = require("../../controllers/notes");
const { validateBody, authenticate } = require("../../middlewares");
const { noteValidationSchema } = require("../../utils/joiSchemas");

router.get(
  "/notes",
  authenticate,
  validateBody(noteValidationSchema),
  ctrl.getAllNotes
);

router.get(
  "/notes:date",
  authenticate,
  validateBody(noteValidationSchema),
  ctrl.getByDate
);

router.delete(
  "/notes:id",
  authenticate,
  validateBody(noteValidationSchema),
  ctrl.deleteById
);

router.post(
  "/notes",
  authenticate,
  validateBody(noteValidationSchema),
  ctrl.addNote
);

const router = express.Router();

module.exports = router;
