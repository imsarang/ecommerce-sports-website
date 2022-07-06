const jwt = require('jsonwebtoken')

exports.refreshToken = (id)=>{
    return jwt.sign({id},process.env.REFRESH_JWT_SECRET_KEY,{
        expiresIn:process.env.REFRESH_JWT_EXPIRES_IN 
    })
}