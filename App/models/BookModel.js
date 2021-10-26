
const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    emailid:{
        type:String
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    topic:{
        type: String,
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('TheBooks', bookSchema);