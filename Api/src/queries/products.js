const mysql = require("mysql");

function readProducts(pool, callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query("SELECT * FROM product", function (err, result) {
            if (err) throw err;
            callback(result);

            connection.release();
        });
    })
}

function readProductsByCategory(pool, { name }, callback) {
    let insertQuery = "SELECT product.id AS id, product.name AS name, product.url_image AS url_image, product.price AS price, product.discount AS discount, category.name AS category FROM product JOIN category ON product.category = category.id WHERE category.name = ?";
    let query = mysql.format(insertQuery, [name]);
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
    // readProductsByName
};

// function readProductsByName(pool, callback) {
//     pool.getConnection(function (err, connection) {
//         if (err) throw err;
//         connection.query(`SELECT * FROM product WHERE name ="RON HAVAna ESPECIALeee"`, function (err, result) {
//             if (err) throw err;
//             callback(result);

//             connection.release();
//         });
//     })
// }