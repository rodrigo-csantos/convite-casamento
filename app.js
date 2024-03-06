const express = require('express')

const app = express()

const path = require('path');

app.use(express.json())

app.use(express.static(path.join(__dirname, 'frontend')));

require('./routes/app.routes')(app)

module.exports = app