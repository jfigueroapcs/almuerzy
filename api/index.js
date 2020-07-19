const express = require('express')
const app = express()

app.get('*', (req, res) => {
    console.log('hola mundo! mi primera aplicacion serverless')
    res.send({ mesaje: 'Chanchito Feliz'})
})

module.exports = app