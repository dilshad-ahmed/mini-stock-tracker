const Stock = require("../model/stockModel");

exports.getStocksList = async (req, res) => {
  // getting stock data from db
  const stocks = await Stock.find();
  res.status(200).json({
    success: true,
    stocks,
  });
};

exports.getStockDetails = async (req, res) => {
  const symbol = req.params.symbol;
  const stock = await Stock.findOne({ symbol: symbol });

  if (stock) {
    // random price for each request
    const updatedPrice = stock.price + Math.random() * 10 - 5;
    stock.price = parseFloat(updatedPrice.toFixed(3));
    res.json({ symbol: stock.symbol, price: stock.price });
  } else {
    res.status(404).json({ message: "Stock not found" });
  }
};

exports.addStockDetails = async (req, res) => {
  const stock = await Stock.create(req.body);
  res.status(201).json({
    success: true,
    stock,
  });
};
