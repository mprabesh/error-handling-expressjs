const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./db/dbConnection");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
dbConnection();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", router);
// error Handler middleware should always run at last after all route
app.use(errorHandler);

app.listen(5000, () => {
  console.log(`listening to port ${process.env.PORT}`);
});
