const mysql = require("mysql")
require("dotenv").config({path : ("./.env")})
var dbase = process.env.DB_DATABASE

var connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    charset : process.env.DB_CHARSET,
    database : process.env.DB_DATABASE

})

connection.connect(function(err, res){
    if(err){
        console.log("Errors:---", err)
    }
    else{
        console.log(`Database is connected named as ${dbase}`)
    }
})
module.exports = connection