const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const dateRegexp =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      // 16.10.2009
      match: dateRegexp,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

noteSchema.post("save", handleMongooseError);

const Note = model("note", noteSchema);

module.exports = Note;
