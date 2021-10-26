const mongoose = require('mongoose');
const AdminSchema = mongoose.Schema({
    emailId:{
        
        type:String
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model('AllAdmins', AdminSchema);