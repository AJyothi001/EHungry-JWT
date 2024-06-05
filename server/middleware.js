const jwt=require("jsonwebtoken");
const { exists } = require("./model");
require('dotenv').config();
module.exports=function(req,res,next){
    try{
        let token=req.header('x-token');
        if(!token){
            res.status(400).send("Token not found!");
        }
        let decode=jwt.verify(token,process.env.key);
        req.user=decode.user;
        next();
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Invalid Token");
    }
}