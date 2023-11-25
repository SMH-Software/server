const mongoose = require('mongoose')
const accountSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    username: {
        type: String, required: true,
    },
    password: {
        type: String, required: true,
    },
    website: {
        type: String,
        default: "",
    },
 
 
}, {timestamps: true})

module.exports = mongoose.model('Accounts', accountSchema)