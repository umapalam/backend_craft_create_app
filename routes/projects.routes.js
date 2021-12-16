const express = require('express'); 
const router = express.Router(); 

// CTRLS 
const ctrls = require('../controllers')

router.get('/', ctrls.projects.index); 
router.post('/', ctrls.projects.create); 
router.put('/:id', ctrls.projects.update);
router.delete('/:id', ctrls.projects.destroy);

module.exports = router; 