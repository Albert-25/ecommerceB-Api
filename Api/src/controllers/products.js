const { readProducts, readProductsByCategory } = require("../queries/products");
const { pool } = require("../../dbConfig");

const getProducts = (req, res) => {
    const { name } = req.query;
    if (name) {
        readProducts(pool, (result) => {
            let resultByName = result.filter(product => product.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(product.name.toLowerCase()));
            if (result.length == 0) {
                res.status(404).send("incorrect name query");
            }
            else {
                res.json(resultByName);
            }
        });
    }
    else {
        readProducts(pool, (result) => {
            res.json(result);
        });
    }
}
const getProductsByDiscount = (req, res) => {
    const { value, sort } = req.query;
    if (value == "true") {
        switch (sort) {
            case "asc":
                readProducts(pool, (result) => {
                    let resultWithDiscount = result.filter(product => product.discount != 0);
                    resultWithDiscount.sort(function (a, b) {
                        if (a.discount < b.discount) return -1
                        if (a.discount > b.discount) return 1
                        return 0
                    });
                    res.json(resultWithDiscount);
                });
                break;
            case "des":
                readProducts(pool, (result) => {
                    let resultWithDiscount = result.filter(product => product.discount != 0);
                    resultWithDiscount.sort(function (a, b) {
                        if (a.discount > b.discount) return -1
                        if (a.discount < b.discount) return 1
                        return 0
                    });
                    res.json(resultWithDiscount);
                });
                break;
            default:
                res.status(404).send("Error 404");
        }
    }
    else {
        if (value == "false") {
            readProducts(pool, (result) => {
                let resultNoDiscount = result.filter(product => product.discount == 0);
                res.json(resultNoDiscount);
            });
        }
        else {
            res.status(404).send("value query is missing or its value is incorrect");
        }
    }
}
const getProductsByNameSort = (req, res) => {
    const { sort } = req.query;
    if (sort) {
        switch (sort) {
            case "asc":
                readProducts(pool, (result) => {
                    result.sort(function (a, b) {
                        if (a.name < b.name) return -1
                        if (a.name > b.name) return 1
                        return 0
                    });
                    res.json(result);
                });
                break;
            case "des":
                readProducts(pool, (result) => {
                    result.sort(function (a, b) {
                        if (a.name > b.name) return -1
                        if (a.name < b.name) return 1
                        return 0
                    });
                    res.json(result);
                });
                break;
            default:
                res.status(404).send("incorrect sort query");
        }
    }
    else {
        res.status(404).send("missing sort query");
    }
}
const getProductsByPriceSort = (req, res) => {
    const { sort } = req.query;
    if (sort) {
        switch (sort) {
            case "asc":
                readProducts(pool, (result) => {
                    result.sort(function (a, b) {
                        if (a.price < b.price) return -1
                        if (a.price > b.price) return 1
                        return 0
                    });
                    res.json(result);
                });
                break;
            case "des":
                readProducts(pool, (result) => {
                    result.sort(function (a, b) {
                        if (a.price > b.price) return -1
                        if (a.price < b.price) return 1
                        return 0
                    });
                    res.json(result);
                });
                break;
            default:
                res.status(404).send("incorrect sort query");
        }
    }
    else {
        res.status(404).send("missing sort query");
    }
}
const getProductsByNameCategory = (req, res) => {
    const { id } = req.query;
    if (id) {
        readProductsByCategory(pool, { id }, (result) => {
            if (result.length == 0) {
                res.status(404).send("incorrect id query ");
            }
            else {
                res.json(result);
            }
        });
    }
    else {
        res.status(404).send("missing id query");
    }
}

module.exports = {
    getProducts,
    getProductsByDiscount,
    getProductsByNameSort,
    getProductsByPriceSort,
    getProductsByNameCategory,
}