const jwt = require('jsonwebtoken')
const RefreshToken = require('../model/refreshTokenModel')
const User = require('../model/userModel')
const { generateToken } = require('../utils/generateToken')

exports.authUser = async(req,res,next)=>{
    let token = req.headers['authorization']
    
    if(!token) return res.status(401)

    token = token.split(' ')[1]
    
    try{
        const decoded = jwt.verify(token,process.env.ACCESS_JWT_SECRET_KEY)
        req.user = await User.findOne({_id:decoded.id}).select("-password")
        next()
    }catch(e){
        return res.status(400).json({
            success:false,
            message:"User Not Logged IN!"
        })
    }

}

exports.handleRefreshToken = async(req,res)=>{
    const cookies = req.cookies
    // checking if the cookie has jwt property:
    if(!cookies.jwt)
        return res.sendStatus(401)
    // console.log(cookies.jwt);
    const refreshToken = cookies.jwt;
    const refToken = await RefreshToken.findOne({
        token:refreshToken
    })
   
    const foundUser = await User.findById({_id:refToken.user})
    if(!refToken) res.sendStatus(403)
    
    // evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_JWT_SECRET_KEY,
        (err,user)=>{

               if(err||foundUser._id != user.id)
               return res.sendStatus(403)
               
               const accessToken = generateToken(refToken.user)
                res.json({success:true,accessToken})
            }
    )
}

exports.checkAdmin = async(req,res,next)=>{
    const cookies = req.cookies

    if(!cookies.jwt) res.sendStatus(401)
    
    const token = cookies.jwt

    const decoded = jwt.verify(token,process.env.ACCESS_JWT_SECRET_KEY)
    try{
        const user = await User.findById({_id:decoded.id})
        if(user.isAdmin)
        {
            next()
        }
        else 
        return res.status(400).json({
            success:false,
            message:"Only Admin Has Access"
        })
    }catch(e){console.log(e)}
}