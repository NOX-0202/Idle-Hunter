const express = require("express");
const routes = express.Router();


const serviceControle = require('./Control/service.js')

routes.post("/register", serviceControle.storeUser)
routes.post("/login", serviceControle.checkUser)
//routes.get("/show/:id", serviceControle.showUser)
//routes.post("/delete/:id", serviceControle.deleteUser)
//routes.post("/update/:id", serviceControle.updateUser)

module.exports = routes;