const { model,Schema} = require('mongoose')

const BoookSchema = new Schema({
    body:String,
    title:String,
    description:String,

    Comments :[
        {
            body:String,
            title:String,
        }
    ],
    likes:[
        {
            title:String,
        }
    ],
    user:{
        type:Schema.Types.ObjectId,
        ref:'UserData'
    }
});

module.exports =model('Books',BoookSchema)