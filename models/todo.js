const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoSchema = new Schema({
  date: {
    type: String,
    required: "Date is required"
  },
  detail: {
    type: String,
    required: "Detail is required"
  },
  done: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: "Title is required"
  },
  viewDate: {
    type: String,
    required: true
  },
  id: {
    type: Number
 },
});

module.exports = mongoose.model("todo", todoSchema);