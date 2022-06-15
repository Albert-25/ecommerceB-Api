const mysql = require("mysql");

function readProducts(pool, callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query("SELECT * FROM product", function (err, result) { // traemos todos los productos
            if (err) throw err;
            callback(result);

            connection.release();
        });
    })
}

function readProductsByCategory(pool, { id }, callback) {
    // en esta query hacemos un join para traer aquellos productos con determinado id de una categoria
    let insertQuery = "SELECT product.id AS id, product.name AS name, product.url_image AS url_image, product.price AS price, product.discount AS discount, category.name AS category FROM product JOIN category ON product.category = category.id WHERE category.id = ?";
    let query = mysql.format(insertQuery, [id]);
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(query, function (err, result) {
            if (err) throw err;
            callback(result);

            connection.release();
        });
    });
}







module.exports = {
    readProducts,
    readProductsByCategory,
};
