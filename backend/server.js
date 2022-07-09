const express = require('express')
const app = express()
// including .env file
const dotenv = require("dotenv")
dotenv.config({path:'./det.env'})

const cors = require('cors')


const connectDB = require('./db/connect')

// importing rooutes
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const cookieParser = require('cookie-parser')

require('./controller/passport')

// connect to database
connectDB()

//middleware to handle json data and payloads
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))

app.use(express.json())

// middleware to handle cookie
app.use(cookieParser('EXPRESS_SESSION_SECRET'))

app.use("/api/v1",userRoutes)

// product routes
app.use("/api/v2",productRoutes)

// middleware routes
app.use(notFound)
app.use(errorHandler)


app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is running on port : ${process.env.PORT || 5000}`);
})