const express = require('express')
const bodyParser = require("body-parser")
const connectDB = require('./config/db')
const app = express()
const PORT = 4000

require('./models/user')

app.use(bodyParser.json())

app.use ('/auth', require ('./Routes/auth'));
connectDB();


app.get("/", (req,res) => {
    res.send("Welcome to himadri app")
})


app.listen(PORT, () => {
    console.log("Server Running" + PORT)
})