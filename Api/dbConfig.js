var mysql = require("mysql");
const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env

var db_config = {
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
}
const pool = mysql.createPool(db_config);

module.exports = {
    pool,
}