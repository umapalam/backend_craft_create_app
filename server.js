// External Modules 
const express = require('express'); 

// Internal Modules 
const routes = require('./routes'); 

//Require dotenv npm package
require('dotenv').config(); 

// PORT
const PORT = process.env.PORT || 4000; 

// Express Instance
const app = express(); 

// DB Connection 
require('./config/db.connection'); 

// Middlewares
app.use(express.json()); 

// Routes 
app.get('/', function (req, res){
    res.send('Landing Page')
})

app.use('/projects', routes.projects)
app.use('/tools', routes.tools)
app.use('/users', routes.users)

// Server Bind
app.listen(PORT, () => {
    console.log(`Working in http://localhost:${PORT}`)
})