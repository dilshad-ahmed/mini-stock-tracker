const express = require("express");
const {
  getStocksList,
  getStockDetails,
  addStockDetails,
} = require("../controllers/stockControllers");

const stockRouter = express.Router();

stockRouter.get("/api/stocks-list", getStocksList);
stockRouter.get("/api/stock/:symbol", getStockDetails);
stockRouter.post("/api/set-stock", addStockDetails);

module.exports = stockRouter;
