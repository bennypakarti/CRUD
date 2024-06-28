const port = 9000; //FE = DIatas 800 biasanya BE = Biasanya 3000
const express = require("express");
const server = express();
const bodyParser = require('body-parser')
const heroController = require("./controller/hero.Controller")

server.use(bodyParser.urlencoded({extended: false}))
server.set('view engine', 'ejs')
server.set('views', 'view')

server.use("/agent", heroController)

server.use("/", (request, response) => {
    response.send("<h1>ERROR 404</h1>")
})

server.listen(port, () => {
    console.log("server running on " + port)
})