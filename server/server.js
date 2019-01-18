const express = require('express')
const calendar = require('./routes/calendar')
const apiRouter = require('./routes/apiRouter')
const server = express()
const path = require('path')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/calendar', calendar)
server.use('/v1/apiRouter', apiRouter)

module.exports = server
