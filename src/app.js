const cookieParser = require('cookie-parser');
const express = require('express');
const authrouter=require('./routes/auth.routes');
const musicrouter=require('./routes/music.routes')

const app=express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authrouter);
app.use('/api/music',musicrouter);


module.exports=app;