const express = require("express");
const {
  getAllProducts,
  getAllProductStatic,
} = require("../Controller/product");
const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductStatic);

module.exports = router;
