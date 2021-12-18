// External Modules 
const express = require('express'); 

// Internal Modules 
const routes = require('./routes'); 

// Cors
const cors = require('cors')

// Require Session 
const session = require('express-session')

//Require dotenv npm package
require('dotenv').config(); 

// PORT
const PORT = process.env.PORT 

// Express Instance
const app = express(); 

// DB Connection 
require('./config/db.connection'); 

// Middleware (Cors)
const whitelist = ['http://localhost:3000', 'heroku frontend url here']
const corsOptions = {
  origin: (origin, callback) => {
    if(whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }, 
  credentials:true 
}

app.use(cors(corsOptions))

// User Authentication Middleware 
const SESSION_SECRET = process.env.SESSION_SECRET
console.log(SESSION_SECRET)

app.use(
  session({
      secret: SESSION_SECRET, 
      resave: false,
      saveUninitialized: false,
  })
)

const isAuthenticated = (req, res, next) => {
      if (req.session.currentUser) {
          return next()
      } else {
          res.status(403).json({msg:"login required"})
      }
}

// Middlewares
app.use(express.json()); 

// Routes 
app.get('/', function (req, res){
    res.send('Landing Page')
})

app.use('/projects', isAuthenticated, routes.projects)
app.use('/tools', routes.tools)
app.use('/users', routes.users)

// Server Bind
app.listen(PORT, () => {
    console.log(`Working in http://localhost:${PORT}`)
})