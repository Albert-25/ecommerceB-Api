const port = 3000;
var mysql = require("mysql");

var db_config = {
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    database: "bsale_test",
    user: "bsale_test",
    password: "bsale_test",
}
const pool = mysql.createPool(db_config);

module.exports = {
    port,
    pool,
}