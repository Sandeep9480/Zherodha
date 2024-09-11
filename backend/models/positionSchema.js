const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = new Schema({
  product: {
    type: String,
  },
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
  isLoss: {
    type: Boolean,
  },
});

const Position = mongoose.model("Position", positionSchema);

module.exports = { Position };
