const express = require('express')
const app = express()
const router = require('./routes/home') // <--


app.use('/', router) // <--

app.listen(3000, function () {
    console.log(`Running on port 3000`)
})