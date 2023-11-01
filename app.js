const express = require('express')
const app = express()
const router = require('./app/router')

app.use('/api', router)

module.exports = app
