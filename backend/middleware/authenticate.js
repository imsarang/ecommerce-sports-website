const jwt = require('jsonwebtoken')
const RefreshToken = require('../model/refreshTokenModel')
const User = require('../model/userModel')
const { generateToken } = require('../utils/generateToken')

exports.authUser = (req,res,next)=>{
    let token = req.headers['authorization']
    
    if(!token) return res.status(401)

    token = token.split(' ')[1]
    jwt.verify(token,process.env.ACCESS_JWT_SECRET_KEY,(err,user)=>{
        if(!err)
        {
            req.user = user
            next()
        }
        else
        // invalid token 
        res.status(403).json({
            success:false,
            message:"LOGIN REQUIRED!"
        })
    })

}

exports.handleRefreshToken = async(req,res)=>{
    const cookies = req.cookies
    // checking if the cookie has jwt property:
    if(!cookies?.jwt)
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

    if(!cookies?.jwt) res.sendStatus(401)
    const refreshToken = cookies.jwt
    const refToken = await RefreshToken.findOne({token:refreshToken})
    const foundUser = await User.findOne({_id:refToken.user})
    if(!refToken) res.sendStatus(403)

    if(!foundUser.isAdmin) res.status(403).json({
        message:"ONLY ADMIN ACCESS!"
    })
    next()
}