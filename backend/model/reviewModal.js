const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rate:{type: Number},
    email:{type:String},
    title:{type:String},
    comment:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    userGender:{type:String},
    age:{type:String},
    recommend:{type:Boolean},
    dateOfReview:{
        day:{type:Number,},
        month:{type:Number,},
        year:{type:Number,}
    },
    used_since:{type:String},
    product:{type:mongoose.Schema.Types.ObjectID,ref:'Product'},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
})

module.exports = mongoose.model("Review",reviewSchema)