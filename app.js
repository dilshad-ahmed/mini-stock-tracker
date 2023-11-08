const express = require("express");
const cors = require("cors");
const Stock = require("./model/stockModel");
const stockRouter = require("./routes/stockRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const stocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 150.23 },
  { symbol: "AMAZON", name: "Amazon.com, Inc.", price: 450.45 },
];

async function insertPredefinedStocks() {
  try {
    await Stock.insertMany(stocks);
    console.log("Predefined stocks inserted successfully.");
  } catch (error) {
    console.error("Error inserting predefined stocks:", error);
  }
}

// insertPredefinedStocks();
//we are not using this "insertPredefinedStocks" because we implemented to add stock from frontend

app.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Api is working.",
  });
});

app.use(stockRouter);

module.exports = app;
