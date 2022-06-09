const express = require("express");
const routes = express.Router();

const products = require("../routes/products");
const categories = require("../routes/categories");

routes.use("/products", products);
routes.use("/categories", categories);

module.exports = routes;