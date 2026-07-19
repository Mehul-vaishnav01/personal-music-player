const musicmodel=require('../model/music.model');
const albummodel=require('../model/album.model')
const {uploadfile}=require('../services/storage.service')
const jwt=require('jsonwebtoken');

async function createmusic(req,res) {
    

    const {title}=req.body;
    const file=req.file;

    const result=await uploadfile(file.buffer.toString('base64'))

    const music=await musicmodel.create({
        uri:result.url,
        title,
        artist:req.user.id,
    })

    res.status(201).json({
        message:"music created succesfully",
        music:{
            id:music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist,
        }
    })
}

async function createalbum(req,res) {
    

        const{title,musics}=req.body;

        const album = await albummodel.create({
            title,
            artist:req.user.id,
            musics:musics,
        })

        res.status(201).json({
            message:"Album created sucessfully",
            album:{
                id:album._id,
                title:album.title,
                artist:album.artist,
                musics:album.musics,
            }
        })

}
   
async function getallmusic(req,res) {
    const musics=await musicmodel.find()
    
    res.status(200).json({
        message:"musics fetched sucessfully",
        musics:musics,
    })
}

async function getallalbums(req,res) {
    const albums= await albummodel.find();
    
    res.status(200).json({
        message:"albums fetched sucessfully",
        albums:albums,
    })
}


module.exports={createmusic,createalbum,getallmusic,getallalbums};