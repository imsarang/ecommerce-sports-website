const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
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
        firstname:{type:String},
        lastname:{type:String},
        contact:{type:String,maxlength:10},
        address1:{type:String},
        address2:{type:String},
        address3:{type:String},
        pincode:{type:Number},
        city:{type:String},
    },
    delivery:{
        firstname:{type:String},
        lastname:{type:String},
        contact:{type:String,maxlength:10},
        address1:{type:String},
        address2:{type:String},
        address3:{type:String},
        pincode:{type:Number},
        city:{type:String},
    },
    address:[{
        firstname:{type:String,required:true},
        lastname:{type:String,required:true},
        contact:{type:String,maxlength:10},
        address1:{type:String},
        address2:{type:String},
        address3:{type:String},
        pincode:{type:Number},
        city:{type:String},
        // active:{type:Boolean}
    },],
    order:[{
        imageUrl:{type:String},
        name:{type:String},
        quantity:{type:Number},
        price:{type:Number},
        size:{type:String},
        dateOfPurchase:{
            day:{type:Number,required:true},
            month:{type:Number,required:true},
            year:{type:Number,required:true}
        }
    }],
    return:[{
        imageUrl:{type:String},
        name:{type:String},
        quantity:{type:Number},
        price:{type:Number},
        size:{type:String},
        dateOfPurchase:{type:Date,required:true}
    }],
    review:[{
        rate:{type:Number,required:true},
        title:{type:String},
        comment:{type:String},
        recommend:{type:Boolean},
        used_since:{type:String},
        email:{type:String,required:true},
        firstname:{type:String},
        lastname:{type:String},
        userGender:{type:String},
        age:{type:String},
        productName:{type:String,required:true},
        dateOfReview:{
            day:{type:Number,required:true},
            month:{type:Number,required:true},
            year:{type:Number,required:true}
        }
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
module.exports = mongoose.model("User",userSchema)