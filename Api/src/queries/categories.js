function readCategories(pool, callback) {
    pool.getConnection(function (err, connection) {
        if(err) throw err;
        connection.query("SELECT * FROM category", function (err, result) {// traemos todas las categorias 
            if (err) throw err;
            callback(result);

            connection.release();
        });
    })
}

module.exports = {
    readCategories
};
