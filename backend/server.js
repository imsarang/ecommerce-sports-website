const express = require('express')
const app = express()
// including .env file
const cors = require('cors')
const passport = require('passport')


const dotenv = require("dotenv")
dotenv.config({path:'./det.env'})
const passportSetup = require('./passport')

const connectDB = require('./db/connect')

// importing rooutes
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const cookieParser = require('cookie-parser')
// port
const port = process.env.PORT

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
app.use(cookieParser())

// user routes
app.use("/api/v1",userRoutes)

// product routes
app.use("/api/v2",productRoutes)

// middleware routes
app.use(notFound)
app.use(errorHandler)

app.use(passport.initialize())
app.use(passport.session())
app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
})