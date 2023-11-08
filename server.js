const app = require("./app.js");
const connectMongoDb = require("./utility/db");
const dotenv = require("dotenv");
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
  connectMongoDb();
});
