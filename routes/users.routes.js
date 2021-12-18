const express = require('express'); 
const router = express.Router(); 


// http://localhost:4000/users

// CTRLS 
const ctrls = require('../controllers'); 

router.post('/signup', ctrls.users.signup); 
router.post('/login', ctrls.users.login);
router.delete('/logout', ctrls.users.logout);


module.exports = router; 