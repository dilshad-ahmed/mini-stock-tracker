const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    unique: true,
    required: [true, "Stock symbol is required"],
  },
  name: {
    type: String,
    required: [true, "Stock name is required"],
  },
  price: {
    type: Number,
    required: [true, "Stock price is required"],
  },
});

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;
