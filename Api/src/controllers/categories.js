const { readCategories } = require("../queries/categories");
const { pool } = require("../../dbConfig");

const getCategories = (req, res) => {
    const {name} = req.query;
    if(name){   
        readCategories(pool, (result) => {
            let resultByName = result.filter(product => product.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(product.name.toLowerCase()));
            res.json(resultByName);
        })
    }
    else{
        readCategories(pool, (result) => {
            res.json(result);
        })
    }
}

module.exports = {
    getCategories
}