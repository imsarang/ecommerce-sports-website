const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true
    },
    mrp1: {
        type: Number,
        required: true,
    },
    maxAvailable: {
        type: Number,
        required:true,
        min:0
    },
    category: {
        category1: { type: String },
        category2: { type: String },
        category3: { type: String },
        category4: { type: String }
    },
    size1: { type: String },
    avgRate:{type:Number},
    rating: [{
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
        used_since:{type:String}
}],
    advantage: {
        advantage1: {
            heading: {
                type: String,
            },
            content: {
                type: String
            }
        },
        advantage2: {
            heading: {
                type: String,
            },
            content: {
                type: String
            }
        },
        advantage3: {
            heading: {
                type: String,
            },
            content: {
                type: String
            }
        },
        advantage4: {
            heading: {
                type: String,
            },
            content: {
                type: String
            }
        }

    },
    technical: {
        proCategory: {
            type: String,
        },
        surfaceCover: {
            type: String,
        },
        quantity: {
            type: Number,
            min:0
        },
        size2: {
            type: String,
        },
        style: {
            type: String,
        },
        material: {
            type: String,
        },
        storage: {
            type: String,
        },
        country: {
            type: String,
        },
        mrp2: {
            type: String
        }
    },
    orderBy:[{type:String}],
    return:[{type:String}]
})

module.exports = mongoose.model("Product", productSchema)