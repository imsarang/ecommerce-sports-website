const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/EcommerceSports",{
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