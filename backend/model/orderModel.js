const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    imageUrl:{
        type:String
    },
    name:{type:String},
    price:{type:Number},
    quantity:{type:Number},
    size:{type:String},
    dateOfPurchase:{
        day:Number,
        month:Number,
        year:Number
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    delivery:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    }
})

module.exports = mongoose.model("Order",orderSchema)