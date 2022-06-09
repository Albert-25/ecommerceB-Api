const express = require("express");
const router = express.Router();
const { getProducts,
    getProductsByDiscount,
    getProductsByNameSort,
    getProductsByPriceSort,
    getProductsByNameCategory,
    // getProductsByName
} = require("../controllers/products");

router.get("/", getProducts);
router.get("/discount", getProductsByDiscount);
router.get("/name", getProductsByNameSort);
router.get("/price", getProductsByPriceSort);
router.get("/category", getProductsByNameCategory);

module.exports = router;