const express = require('express');
const musiccontroller=require('../controller/music.controller');
const authmiddleware=require("../middlewares/auth.middleware")
const multer = require('multer');

const upload=multer({
    storage:multer.memoryStorage()
})

const router= express.Router();

router.post('/upload',authmiddleware.authartist,upload.single("music"),musiccontroller.createmusic)

router.post('/album',authmiddleware.authartist,musiccontroller.createalbum)

router.get('/',musiccontroller.getallmusic)

router.get('/albums',musiccontroller.getallalbums)

module.exports=router;