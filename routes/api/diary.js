const express = require("express");
const ctrl = require("../../controllers/notes");
const { validateBody, authenticate } = require("../../middlewares");
const { noteValidationSchema } = require("../../utils/joiSchemas");

const router = express.Router();

router.get("/notes", authenticate, ctrl.getAllNotes);

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

module.exports = router;
