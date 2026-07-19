const mongoose = require('mongoose');

const albumSchema=new mongoose.Schema({
    title:{
        type:String,
        requried:true,
    },
    musics:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"music"
    }],
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        requried:true,
    }
})

const albummodel=mongoose.model("album",albumSchema)

module.exports=albummodel;