const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mpbend')
mongoose.Promise = global.Promise

module.exports = mongoose