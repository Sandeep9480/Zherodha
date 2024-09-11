const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: {
    type: String,
  },
  qty: {
    type: Number,
  },
  price: {
    type: Number,
  },
  mode: {
    type: String,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order };
