// const { format } = require("date-fns");
const { Note } = require("../models");
const { ctrlWrapper } = require("../helpers/");
const { HttpError } = require("../helpers/");

const getAllNotes = async (req, res) => {
  const result = await Note.find();
  res.json(result);
};

const getByDate = async (req, res) => {
  const { date } = req.params;
  //   format(new Date(date), "dd.MM.yyyy");
  const result = await Note.find(date);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Note.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addNote = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Note.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = {
  getAllNotes: ctrlWrapper(getAllNotes),
  getByDate: ctrlWrapper(getByDate),
  deleteById: ctrlWrapper(deleteById),
  addNote: ctrlWrapper(addNote),
};
