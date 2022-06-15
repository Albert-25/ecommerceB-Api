var mysql = require("mysql");
const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env // usamos variables de entorno para los accesos a la base de datos

var db_config = {
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
}
const pool = mysql.createPool(db_config); // creamos una conecion de pool

module.exports = {
    pool,
}