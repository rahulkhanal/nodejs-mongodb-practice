require("dotenv").config();
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const app = express();

app.use(express.json());
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 7000;

const start = async () => {
  try {
    app.listen(PORT, console.log(`connected to server ${PORT}....`));
  } catch (error) {
    console.log(error);
  }
};
start();
