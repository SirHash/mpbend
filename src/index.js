const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// Configura expŕess
const app = express()

// Configura o body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Configura morgan
app.use(morgan('dev'))

require('./app/controllers/index')(app)

app.listen(3000)
