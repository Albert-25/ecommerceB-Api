const { readProducts, readProductsByCategory } = require("../queries/products");
const { pool } = require("../../dbConfig");
const axios = require("axios");

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
    const { name } = req.query;
    if (name) {
        readProductsByCategory(pool, { name }, (result) => {
            // let resultByCategory = result.filter(product => product.category.toLowerCase() == name.toLowerCase());
            if (result.length == 0) {
                res.status(404).send("incorrect name query ");
            }
            else {
                res.json(result);
            }
        });
    }
    else {
        res.status(404).send("missing name query");
    }
}

module.exports = {
    getProducts,
    getProductsByDiscount,
    getProductsByNameSort,
    getProductsByPriceSort,
    getProductsByNameCategory,
}







// const getProductsByName = (req, res) => {
//     const { name } = req.query;
//     readProducts(pool, (result) => {
//         let resultByName = result.filter(product => product.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(product.name.toLowerCase()));
//         res.json(resultByName);
//     })
// }






// function insert(connection, callback){
//     let insertQuery = "INSERT INTO lenguajes (name) VALUES ('Javascript')";
//     connection.query(insertQuery, function (err, result) {
//         if(err) {console.log( "ERROR EN OPERATIONS!!!")
//         throw err};
//         callback(result);
//         connection.end();
//     })
// }