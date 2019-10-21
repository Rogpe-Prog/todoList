const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const port = 3003
const allowCors = require('./cors')


server.use(bodyParser.urlencoded({ extended: true }))//submissão de Formularios
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, ()=> {
    console.log(`Backend is running on port ${port}.`)
})

module.exports = server