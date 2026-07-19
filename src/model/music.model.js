const mongoose = require('mongoose');

const musicschema= new mongoose.Schema({
    uri: {
        type:String,
        requried:true,
    },
    tittle: {
        type:String,
        requried:true,
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        requried:true,  
    }
})

const musicmodel=mongoose.model("music",musicschema);

module.exports=musicmodel;