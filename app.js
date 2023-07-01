require("dotenv").config();
const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const app = express();

app.use(express.json());
