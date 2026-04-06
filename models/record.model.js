const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  type: {
    type: String,
    enum: ["income", "expense"],
  },
  category: String,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Record", recordSchema);