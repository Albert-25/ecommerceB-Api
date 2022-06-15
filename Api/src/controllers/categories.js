const { readCategories } = require("../queries/categories");
const { pool } = require("../../dbConfig");

const getCategories = (req, res) => {
    const {id} = req.query;
    if(id){   
        readCategories(pool, (result) => {
            let resultByName = result.filter(product => product.id == id);// filtramos la categoria con el id pasado por query
            res.json(resultByName);
        })
    }
    else{
        readCategories(pool, (result) => {
            res.json(result); // devolvemos todas las categorias en caso no hay ninguna query
        })
    }
}

module.exports = {
    getCategories
}