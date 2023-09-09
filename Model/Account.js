const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    "type" : {
        type : String
    },
    createdAt : { 
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('Account',accountSchema)