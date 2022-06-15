const express = require("express");
const morgan = require('morgan');
const parseJson = express.json();

const routes = require("./src/routes/index");
const cors = require("cors"); // utilizamos cors para permitir las peticiones a nuestra api

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(parseJson);
app.use(routes);


module.exports = app;