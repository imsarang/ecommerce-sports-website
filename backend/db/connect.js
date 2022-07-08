const mongoose = require('mongoose')

const DB = process.env.MONGO_URI

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI||DB,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log(`Mongo DB connection succcess`);
    }catch(e){
        console.log(`Mongo DB connection failed`);
        console.log(e);
    }
}

module.exports = connectDB