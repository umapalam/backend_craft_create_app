const express = require('express'); 

const PORT = process.env.PORT || 4000; 

const app = express(); 

// DB Connection 

// Middlewares

// Routes 
app.get('/', function (req, res){
    res.send('Hello World')
})

// Server Bind
app.listen(PORT, () => {
    console.log(`Working in http://localhost:${PORT}`)
})