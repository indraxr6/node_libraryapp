const express = require('express')

const verifyToken = require('./../verify-token')
const controller = require('./../controllers/home') // <--

const router = express.Router()

router.get('/', controller.index) // <--

router.get('/home', verifyToken, function (req, res) {
    res.send({
        user: req.user
    })
})

module.exports = router