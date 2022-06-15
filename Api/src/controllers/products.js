const { readProducts, readProductsByCategory } = require("../queries/products");
const { pool } = require("../../dbConfig");

const getProducts = (req, res) => {
    const { name } = req.query;
    if (name) {
        readProducts(pool, (result) => {
            // traemos todos los productos que contengan el nombre pasado por query
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
            // devuelve todos los productos de la base de datos
            res.json(result);
        });
    }
}
const getProductsByDiscount = (req, res) => {
    const { value, sort } = req.query;
    if (value == "true") {// obtenemos los productos con descuento
        switch (sort) {
            case "asc": // obtenemos los productos ordenados con descuento ascendente
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
            case "des": // obtenemos los productos ordenados con descuento descendente
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
        if (value == "false") { // obtenemos los productos sin descuento
            readProducts(pool, (result) => {
                let resultNoDiscount = result.filter(product => product.discount == 0);
                res.json(resultNoDiscount);
            });
        }
        else {// en caso no se indique la query value o no sea ni true ni false
            res.status(404).send("value query is missing or its value is incorrect");
        }
    }
}
const getProductsByNameSort = (req, res) => {
    const { sort } = req.query;
    if (sort) {
        switch (sort) {
            case "asc": // sort tiene este valor si queremos obtener los productos ordenados por su nombre de forma ascendente
                readProducts(pool, (result) => {
                    result.sort(function (a, b) {
                        if (a.name < b.name) return -1
                        if (a.name > b.name) return 1
                        return 0
                    });
                    res.json(result);
                });
                break;
            case "des": // sort tiene este valor si queremos obtener los productos ordenados por su nombre de forma descendente
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
        // en caso no se indique la query sort
        res.status(404).send("missing sort query");
    }
}
const getProductsByPriceSort = (req, res) => {
    const { sort } = req.query;
    if (sort) {
        switch (sort) {
            case "asc": // sort tiene este valor si queremos obtener los productos ordenados por su precio de forma ascendente
                readProducts(pool, (result) => {
                    result.sort(function (a, b) {
                        if (a.price < b.price) return -1
                        if (a.price > b.price) return 1
                        return 0
                    });
                    res.json(result);
                });
                break;
            case "des": // sort tiene este valor si queremos obtener los productos ordenados por su precio de forma descendente
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
                res.status(404).send("incorrect sort query");// en caso sort no sea ninguno de los valores de arriba
        }
    }
    else {
        // en caso no se indique la query sort
        res.status(404).send("missing sort query");
    }
}
const getProductsByNameCategory = (req, res) => {
    const { id } = req.query;
    if (id) {
        readProductsByCategory(pool, { id }, (result) => {
            if (result.length == 0) {
                res.status(404).send("incorrect id query ");// en caso no tenga productos la categoria indicada mediante el id por query
            }
            else {
                res.json(result);// devuelve todos los productos relacionados a la categoria indicada con el id por query
            }
        });
    }
    else {
        // en caso no se especifique ninguna query
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