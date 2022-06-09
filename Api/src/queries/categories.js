function readCategories(pool, callback) {
    pool.getConnection(function (err, connection) {
        if(err) throw err;
        connection.query("SELECT * FROM category", function (err, result) {
            if (err) throw err;
            callback(result);

            connection.release();
        });
    })
}

module.exports = {
    readCategories
};
