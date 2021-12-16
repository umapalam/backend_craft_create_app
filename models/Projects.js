const mongoose = require('mongoose'); 

const projectSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    idea: {
        type: String, 
        required: true
    }, 
    time: {
        type: Number, 
        default: 0 
    }, 
    notes: {
        type: String, 
    }, 
    complete: {
        type: Boolean, 
        default: false
    }
}); 

const Projects = mongoose.model('Projects', projectSchema); 

module.exports = Projects;