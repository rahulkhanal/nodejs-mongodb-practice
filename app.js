require("dotenv").config();
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./Database/connect");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URI;

app.get("/", (req, resp) => {
  resp.send("Hello World");
});

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(URL);
    app.listen(PORT, console.log(`connected to server ${PORT}....`));
  } catch (error) {
    console.log(error);
  }
};
start();
