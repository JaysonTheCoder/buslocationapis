const express = require('express')
const app = express()
const cors = require('cors')
const io = require('socket.io')
const { request } = require('http')
const port = 2020

app.use(cors())
app.use(express.json())

app.listen(port, function() {
    console.log('Listening...');
})

app.post('/', (request, response) =>{
    response.json({found: false})
})

app.post('/coords', (request, response) => {
    const body = request.body
    io.on('connection', (socket) => {
        const loc = []
        loc.push(body)
        socket.emit('coords', body)
        response.json(body)
    })
})