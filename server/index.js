const express = require('express');
const bodyParser = require('body-parser');
const {Server} = require('socket.io')

//initialize the servers
const io = new Server() //making a socket server
const  app = express() //mkaing a node server

//middlewares
app.use(bodyParser.json()) //will help in parsing the json from the request body

//listening to first request of the client and that req name is connection
io.on('connection',socket => {

})  
app.get('/', (req,res) => {
    res.send('Hello')
})


//listening to servers
app.listen(8000,() => console.log("Server listening at Port 8000")) //listening node server
io.listen(8001)//listening socket server