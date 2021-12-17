// require models 
const db = require('../models'); 

// Index
const index = (req, res) => {
    // res.send('route is working')
    db.tools.find({}, (error, tools) => {
        if(error) return res.status(400).json({ error: error.message}); 
 
        return res.status(200).json(tools)
    }); 
}

// Create
const create = (req, res) => {
    db.tools.create(req.body, (error, createdTool) => {
        if(error) return res.status(400).json({error: error.message}); 

        return res.status(201).json(createdTool); 
    }); 
}

// Update
const update = (req, res) => {
    
}

// Destroy
const destroy = (req, res) => {
    
}

module.exports = {
    index, 
    create,
    update,   
    destroy, 
}