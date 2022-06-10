const express = require("express");
const router = express.Router();
const { getProducts,
    getProductsByDiscount,
    getProductsByNameSort,
    getProductsByPriceSort,
    getProductsByNameCategory,
    getPagination
} = require("../controllers/products");

router.get("/", getProducts);
router.get("/discount", getProductsByDiscount);
router.get("/name", getProductsByNameSort);
router.get("/price", getProductsByPriceSort);
router.get("/category", getProductsByNameCategory);
router.get("/pagination", getPagination);

module.exports = router;