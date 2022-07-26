const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    contact:{type:String,maxlength:10},
    address1:{type:String},
    address2:{type:String},
    address3:{type:String},
    pincode:{type:Number},
    city:{type:String},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})

module.exports = mongoose.model("Address",addressSchema)