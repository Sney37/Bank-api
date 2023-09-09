const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    account : {
        type : [mongoose.Schema.Types.ObjectId],
        ref : 'Account'
    },
    
})

module.exports = mongoose.model('customer',customerSchema)