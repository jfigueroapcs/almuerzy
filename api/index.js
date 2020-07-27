const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const meals =  require('./routers/meals')
const orders =  require('./routers/orders')
// const auth =  require('./routers/auth')
const app = express()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

//   app.get('*', (req, res) => {
//     res.send({ message: 'Chanchito Feliz'})
//     // Users.find()
//     //     .then(x => res.send(x))
// })


app.use('/api/meals', meals)
app.use('/api/orders', orders)
// app.use('/api/auth', auth)

module.exports = app
