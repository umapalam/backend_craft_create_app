// require models 
const db = require('../models'); 

// Index
const index = (req, res) => {
    // res.send('route is working')
    db.projects.find({}, (error, projects) => {
        if(error) return res.status(400).json({error: error.message}); 
 
        return res.status(200).json(projects)
    }); 
}

// Create
const create = (req, res) => {
    db.projects.create(req.body, (error, createdProject) => {
        if(error) return res.status(400).json({error: error.message}); 

        return res.status(201).json(createdProject); 
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