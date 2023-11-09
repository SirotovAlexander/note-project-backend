const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

const app = express();

const {
  contactRouter,
  diaryRouter,
  userRouter,
} = require("./routes/api/index");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRouter);
app.use("/api/diary", diaryRouter);
app.use("/api/user", userRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

module.exports = app;
