const moment = require("moment");
const { Note } = require("../models");
const { ctrlWrapper } = require("../helpers/");
const { HttpError } = require("../helpers/");

const getAllNotes = async (req, res) => {
  const result = await Note.find();
  res.json(result);
};

const getByDate = async (req, res) => {
  const date = moment(req.params.date).format("DD.MM.YYYY");
  const result = await Note.find(date);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { _id: owner } = req.user;
  const { id: _id } = req.params;
  const result = await Note.findOneAndDelete({
    _id,
    owner,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    _id: result._id,
    title: result.title,
    date: result.date,
    text: result.text,
  });
};

const addNote = async (req, res) => {
  const { _id: owner } = req.user;

  req.body.date = moment(req.body.date).format("DD.MM.YYYY");

  const result = await Note.create({ ...req.body, owner });
  res.status(201).json({
    _id: result._id,
    title: req.body.title,
    date: req.body.date,
    text: req.body.text,
  });
};

module.exports = {
  getAllNotes: ctrlWrapper(getAllNotes),
  getByDate: ctrlWrapper(getByDate),
  deleteById: ctrlWrapper(deleteById),
  addNote: ctrlWrapper(addNote),
};
