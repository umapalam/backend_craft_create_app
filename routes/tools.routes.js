const express = require('express'); 
const router = express.Router(); 

// CTRLS 
const ctrls = require('../controllers')

router.get('/', ctrls.tools.index); 
router.post('/', ctrls.tools.create); 
router.put('/:id', ctrls.tools.update);
router.delete('/:id', ctrls.tools.destroy);

module.exports = router; 