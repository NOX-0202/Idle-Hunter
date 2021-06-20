const express = require("express");
const routes = express.Router();

// const productController = require('./controllers/productController')

routes.get('/',  () => "<h1>Funcionou</h1>");


module.exports = routes;