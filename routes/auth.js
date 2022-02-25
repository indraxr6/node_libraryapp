const express = require('express')
const { sign } = require('jsonwebtoken') // <--
const router = express.Router()

router.post('/login', function (req, res) {
    let credentials = {
        username: req.body.username,
        password: req.body.password
    }

    if (!credentials.username || !credentials.password) {
        return res.send('Username dan/atau Password harus diisi!')
    }

    if (credentials.username != 'admin' || credentials.password != 'admin') {
        return res.send('Username dan/atau Password tidak sesuai')
    }

    token = sign(credentials, 'verysecretkey') // <--
    
    return res.send({ // <--
        token: token,
        data: credentials
    })
})

module.exports = router 