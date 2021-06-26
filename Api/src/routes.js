const express = require("express");
const routes = express.Router();

const ApiKeyControle = require('./Control/ApiKeyController.js')
const serviceControle = require('./Control/UserController.js')

routes.use(function (req, res, next) {
    
    next()
})

routes.get("/key/add", ApiKeyControle.StoreKey)
routes.get("/key/check/:key", ApiKeyControle.checkKey)
routes.post("/key/check/delete", ApiKeyControle.deleteKey)
// GET routes


routes.get("/show/:id", serviceControle.showUser)
routes.post("/register", serviceControle.storeUser)
routes.post("/login", serviceControle.checkUser)

//routes.post("/delete/:id", serviceControle.deleteUser)
//routes.post("/update/:id", serviceControle.updateUser)

module.exports = routes;