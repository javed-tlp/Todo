const express = require("express")
require("dotenv").config({path : ("./.env")})
const cors = require("cors")
const indexwebrouter = require("./routes/index")


const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", indexwebrouter)


app.get("/", function(err, res){
    res.send("Hello from HOME Side")
})
app.listen(port, function(){
    console.log(`Listening on PORT ${port}`)
})