require("dotenv").config();

const connectDB = require("./Database/connect");
const product = require("./models/product");

const jsonProducts = require("./product.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
  } catch (err) {
    console.log(err);
  }
};
start();
