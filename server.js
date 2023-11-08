const app = require("./app.js");
const connectMongoDb = require("./utility/db");
const dotenv = require("dotenv");
dotenv.config();

app.listen(process.env.port, () => {
  console.log(`server is running on port ${process.env.port}`);
  connectMongoDb();
});
