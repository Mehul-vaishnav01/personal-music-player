const jwt =require("jsonwebtoken");

async function authartist(req,res,next) {
    const token=req.cookies.token;

    if(!token)
    {
        return res.status(401).json({message:"Unauthrized"});
    }

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        if(decoded.role!="artist"){
            return res.status(403).json({message:"You dont have access to create album"})
        }
        req.user=decoded;

        next()
    }
    catch(err)
    {
        console.log(err);
        return res.status(401).json({message: "Unauthrized"});
    }
}

module.exports={authartist};