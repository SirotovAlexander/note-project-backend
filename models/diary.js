const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
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
      select: false,
    },
  },
  { versionKey: false, timestamps: true }
);

noteSchema.post("save", handleMongooseError);

const Note = model("note", noteSchema);

module.exports = Note;
