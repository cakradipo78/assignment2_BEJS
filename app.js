const express = require("express")
const app = express()
const port = 3000
// const{users} = require("./models")
// const db = require("./db")

const routes = require("./routes")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.use(routes)




app.listen(port,()=> {
console.log(`Runing on Port ${port}`);


})