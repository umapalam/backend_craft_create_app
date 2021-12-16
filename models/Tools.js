const mongoose = require('mongoose'); 

const toolSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    price: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: true 
    }, 
    rating: {
        type: Number, 
        default: 0
    }, 
}); 

const Tools = mongoose.model('Tools', toolSchema); 

module.exports = Tools;