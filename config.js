const mysql = require("mysql")

//database credential
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "valorant_agent"
})

//integreting
connection.connect((error) =>{
    if(error) throw error
    console.log('database connected')
})

module.exports = connection