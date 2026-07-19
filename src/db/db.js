const mongoose = require('mongoose');

async function connectdb() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected sucessfully");
    }
    catch{
        console.log("Database connection err: ",err);
    }
}

module.exports=connectdb;