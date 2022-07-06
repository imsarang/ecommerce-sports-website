const jwt = require('jsonwebtoken')

exports.generateToken = (id)=>{
    return jwt.sign({id},process.env.ACCESS_JWT_SECRET_KEY,{
        expiresIn:process.env.ACCESS_JWT_EXPIRES_IN
    })
}