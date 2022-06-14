const { readCategories } = require("../queries/categories");
const { pool } = require("../../dbConfig");

const getCategories = (req, res) => {
    const {id} = req.query;
    if(id){   
        readCategories(pool, (result) => {
            let resultByName = result.filter(product => product.id == id);
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