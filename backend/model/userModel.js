const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    email:{type:String,required:true},
    phone:{type:String,required:true,maxlength:10},
    isAdmin:{type:Boolean,required:true,default:false},
    isSuperAdmin:{type:Boolean,required:true,default:false},
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    gender:{type:String},
    active:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    },
    delivery:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    },
    addresses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    }],
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }],
    returns:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    }]
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))
    {
        const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    }
    next() 
})
userSchema.methods.generateToken = async function(){
    return await jwt.sign({id:this.id},process.env.ACCESS_JWT_SECRET_KEY,{
        expiresIn:process.env.ACCESS_JWT_EXPIRES_IN
    })
}
module.exports = mongoose.model("User",userSchema)