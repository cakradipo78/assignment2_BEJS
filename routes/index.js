const express = require("express")
const routes = express.Router()
const autehenticationUser = require("../middlewares/authentication")
// const{users} = require("../models")

const db = require("../db")
const UserContoller = require("../controllers/userController")



// routes.get("/movies",UserContoller.movies)


routes.post("/register",UserContoller.registerUser)

routes.post("/login",UserContoller.loginUser)

routes.get("/user", UserContoller.getAllData)

routes.use(autehenticationUser)




routes.get("/movies",UserContoller.movies)




module.exports = routes 