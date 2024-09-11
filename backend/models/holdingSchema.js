const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const holdingSchema = new Schema({
  name: {
    type: String,
  },
  qty: {
    type: Number,
  },
  avg: {
    type: Number,
  },
  price: {
    type: Number,
  },
  net: {
    type: String,
  },
  day: {
    type: String,
  },
});

const Holding = mongoose.model("Holding", holdingSchema);

module.exports = { Holding };
