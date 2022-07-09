const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const User = require('../model/userModel')
const Product = require('../model/productModel')
const RefreshToken = require('../model/refreshTokenModel')

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const { updateOne, findByIdAndDelete } = require('../model/userModel');
const { generateToken } = require('../utils/generateToken');
const { refreshToken } = require('../utils/refreshToken');
const { handleRefreshToken, handleDeleteRefreshToken } = require('../middleware/authenticate');
const nodemailer = require("nodemailer")


// push req
exports.addUser = catchAsyncErrors(async (req, res) => {

    const { username, email, phone, password,isAdmin ,isSuperAdmin} = req.body;
    const hash_password = await bcrypt.hash(password, 12)

    const user = await User.create({
        username,
        email,
        phone,
        password: hash_password,
        isAdmin,
        isSuperAdmin
    })

    if (user) res.json({
        success: true,
        user
    })
})

exports.loginUser = catchAsyncErrors(async (req, res) => {
    const { username, password } = req.body
    if (!username || !password)
        return res.status(401).json({
            success: false,
            message: "FILL ALL CREDENTIALS!"
        })
    const user = await User.findOne({ username: username })
    if (user) {
        const isMatched = await bcrypt.compare(password, user.password)
        if (isMatched) {
            
            const accessToken = generateToken(user._id)
            const refToken = refreshToken(user._id)
            
            const token_in_refresh = await RefreshToken.findOne({user:user._id})
        
            if(!token_in_refresh){
                const refreshTokenModel = await RefreshToken.create({
                    token:refToken,
                    user:user.id
                })
                // console.log('token');
                // await refreshTokenModel.save()
                
                res.cookie('jwt',refToken,{
                    httpOnly:true,
                    maxAge:24*60*60*1000
                })
                
                res.status(201).json({
                    success: true,
                    message: "Login Successful",
                    user,
                    access:accessToken,
                })
            }
            else
            {
                const refreshTokenModel = await RefreshToken.updateOne({user:user.id},{
                    token:refToken
                },{new:true})
                res.cookie('jwt',refToken,{
                    httpOnly:true,
                    maxAge:24*60*60*1000
                })

                res.status(201).json({
                    success: true,
                    message: "Login Successful",
                    user
                })
            }

            

            
            // handleRefreshToken(req,res)
        }
        else
            return res.status(401).json({
                success: false,
                message: "INVALID USER!",
                password
            })
    } else {
        return res.status(401).json({
            success: false,
            message: "INVALID USER!"
        })
    }
})
exports.googleLogin = catchAsyncErrors(async(req,res)=>{
    
})
exports.loginOTP = catchAsyncErrors(async (req, res) => {

})

// put req

exports.updateUser = catchAsyncErrors(async (req, res) => {
    const { firstname, lastname, email, phone, gender } = req.body

    const user = await User.updateOne({ username: req.params.username }, {
        $set: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            gender: gender
        }
    })

    if (user) res.status(201).json({
        success: "true",
        message: "user updated!",
        user
    })
})

exports.addAddress = catchAsyncErrors(async (req, res) => {
    const { firstname, lastname, contact, address1, address2, address3, pincode, city } = req.body

    const user = await User.updateOne({ username: req.params.username }, {
        $push: {
            address: [{
                firstname: firstname, lastname: lastname,
                contact: contact,
                address1: address1,
                address2: address2,
                address3: address3,
                pincode: pincode, city: city,
                active: 0
            }]
        }
    })
    if (user) res.status(201).json({
        success: "true",
        message: "user updated!",
        user
    })
})

exports.updateAddress = catchAsyncErrors(async (req, res) => {
    const { firstname, lastname, contact, address1, address2, address3, pincode, city, active } = req.body

    const user = await User.updateOne({
        username: req.params.username,
        address: {
            $elemMatch: {
                _id: req.params.id
            }
        }
    }, {
        $set: {
            "address.$.firstname": firstname,
            "address.$.lastname": lastname,
            "address.$.contact": contact,
            "address.$.address1": address1,
            "address.$.address2": address2,
            "address.$.address3": address3,
            "address.$.pincode": pincode,
            "address.$.city": city,
            "address.$.active": 0
        }
    })

    if (user) res.status(201).json({
        success: true,
        mesage: "Address Updated!",
        user
    })
})

exports.setActive = catchAsyncErrors(async (req, res) => {
    const { firstname, lastname, contact, address1, address2, address3, pincode, city } = req.body

    const user = await User.updateOne({
        username: req.params.username
    }, {
        $set: {
            active: {
                firstname: firstname,
                lastname: lastname,
                contact: contact,
                address1: address1,
                address2: address2,
                address3: address3,
                pincode: pincode,
                city: city
            }
        }
    })

    if (user) res.status(201).json({
        success: true,
        message: `Address set as active id `,
        user,
    })
})
exports.deliveryAddress = catchAsyncErrors(async (req, res) => {
    const { firstname, lastname, contact, address1, address2, address3, pincode, city } = req.body

    const user = await User.updateOne({ username: req.params.username }, {
        $set: {
            delivery: {
                fistname: firstname,
                lastname: lastname,
                contact: contact,
                address1: address1,
                address2: address2,
                address3: address3,
                pincode: pincode,
                city: city
            }
        }
    })
})

exports.deleteAddress = catchAsyncErrors(async (req, res) => {
    const user = await User.updateOne({ username: req.params.username }, {
        $pull: {
            address: {
                _id: req.params.id
            }
        }
    })
    if (user) res.status(201).json({
        success: true,
        message: "Address Removed!",
        user
    })
})


// user product interaction
exports.addReview = catchAsyncErrors(async (req, res) => {
    const { rate, title, comment, recommend, used_since, email, firstname, lastname, userGender, age, productName } = req.body
    const dateObj = new Date()
    if (req.params.username) {
        const user = await User.updateOne({
            username: req.params.username,
        }, {
            $push: {
                review: [{
                    rate: rate,
                    title: title,
                    comment: comment,
                    used_since: used_since,
                    email: email,
                    firstname: firstname,
                    lastname: lastname,
                    userGender: userGender,
                    age: age,
                    recommend: recommend,
                    productName: productName,
                    dateOfReview: {
                        day: dateObj.getDate(),
                        month: dateObj.getMonth() + 1,
                        year: dateObj.getFullYear()
                    }
                }]
            }
        })
        if (user) res.status(201).json({
            success: true,
            message: "Review Submitted",
            user,
        })
    }

    try {
        const product = await Product.updateOne({
            _id: req.params.id
        }, {
            $push: {
                rating: {
                    rate: rate,
                    title: title,
                    comment: comment,
                    used_since: used_since,
                    email: email,
                    firstname: firstname,
                    lastname: lastname,
                    userGender: userGender,
                    recommend: recommend,
                    age: age,
                    dateOfReview: {
                        day: dateObj.getDate(),
                        month: dateObj.getMonth() + 1,
                        year: dateObj.getFullYear()
                    }
                }
            },
        })
        if (product) res.status(201).json({
            success: true,
            product
        })

    }
    catch (e) { console.log(e); }

})

exports.deleteReview = catchAsyncErrors(async (req, res) => {
    const user = await User.updateOne({
        username: req.params.username
    }, {
        $pull: {
            review: {
                _id: req.params.id1
            }
        }
    })
    if (user) res.status(201).json({
        success: true,
        message: 'Review deleted!'
    })

    try
    {
        const product = await Product.updateOne({
            _id: req.params.id
        }, {
            $pull: {
                rating: {
                    _id: req.params.id2
                }
            }
        })
        
        if (product && user) res.status(201).json({
            success: true,
            message: 'review Deleted!',
            product
        })
        else res.status(404).json({
            success: false,
            message: 'error in deletion!'
        })
    
    }catch(e){}
    
    
})

// checkout
exports.addOrder = catchAsyncErrors(async (req, res) => {

    const dateObj = new Date()
    for (let i = 0; i < req.body.reviews.length; i++) {
        const { imageUrl, name, quantity, price, size } = req.body.reviews[i]
        const user = await User.updateOne({
            username: req.params.username
        }, {
            $push: {
                order: [{
                    imageUrl: imageUrl,
                    name: name,
                    quantity: quantity,
                    price: price,
                    size: size,
                    dateOfPurchase: {
                        date: dateObj.getDate(),
                        month: dateObj.getMonth() + 1,
                        year: dateObj.getFullYear()
                    }
                }]
            }
        })
        if (user) res.status(201).json({
            success: true,
            message: 'Order Confirmed'
        })
        else res.status(404).json({
            success: false,
            message: "Error"
        })
    }
    try
    {
        const product = await Product.updateOne({
            name: req.params.productName
        }, {
            $push: {
                orderBy: req.params.username
            }
        })
    }
    catch(e){console.log(e);}
   

})

exports.removeOrder = catchAsyncErrors(async (req, res) => {
    const user = await User.updateOne({ username: req.params.username },
        {
            $pull: {
                order: {
                    _id: req.params.id
                }
            }
        })
    if (user) res.status(201).json({
        success: true,
        message: "Order Cancelled!"
    })
    else res.status(404).json({
        success: false,
        message: "Error in Cancellation of Your Order!"
    })
})

exports.addReturns = catchAsyncErrors(async (req, res) => {
    const { imageUrl, name, quantity, price, size } = req.body

    const result = await User.updateOne({
        username: req.params.username
    }, {
        $pull: {
            order: {
                imageUrl: imageUrl,
                name: name,
                quantity: quantity,
                price: price,
                size: size,
                dateOfPurchase: dateObj
            }
        },
        $push: {
            return: {
                imageUrl: imageUrl,
                name: name,
                quantity: quantity,
                price: price,
                size: size,
                dateOfPurchase: dateObj
            }
        }
    })
    try
    {
        await Product.updateOne({
            name: name
        }, {
            $pull: {
                orderBy: req.params.username
            },
            $push: {
                return: req.params.username
            }
        })
        if (result) res.status(201).json({
            success: true,
            message: "Product confirmed for return!",
            result
        })
    }catch(e){}
    
})

// delete req
exports.deleteUser = catchAsyncErrors(async (req, res) => {
    const user = await User.findByIdAndDelete({ _id: req.params.id })
    if (user) res.status(201).json({
        success: true,
        message: 'User Removed'
    })
})

// get req
exports.displayUser = catchAsyncErrors(async (req, res) => {
    const user = await User.findOne({ username: req.params.username })
    // console.log(req.params.username);
    if (user) res.status(201).json({
        success: true,
        user
    })
    else res.status(401).json({
        success: false,
        message: "User Not Found"
    })
})

exports.getReview = catchAsyncErrors(async (req, res) => {
    const result = await User.find({
        review: {
            $elemMatch: {
                productName: req.params.product
            }
        }
    })
    if (result) res.status(201).json({
        success: true,
        result: result[0].review
    })
    else res.status(401).json({
        success: false,
        message: 'ERROR'
    })
})
exports.getAllUsers = catchAsyncErrors(async (req, res) => {
    const user = await User.find()
    if (user) res.status(201).json({
        success: true,
        user
    })
})

exports.getAddress = catchAsyncErrors(async (req, res) => {
    const user = await User.find({
        username: req.params.username
    })

    if (user) res.status(201).json({
        success: true,
        address: user[0].address
    })
})
exports.logoutUser = catchAsyncErrors(async (req, res) => {
    
    
    // on client,also delete the access token
    const cookies = req.cookies
    if(!cookies.jwt) return res.sendStatus(204)
    const refreshToken = cookies.jwt
    
    // is refreshToken in db
    // 204: successful but no content
    const refToken = await RefreshToken.findOne({
        token:refreshToken
    })
    if(!refToken) 
    {
        res.clearCookie('jwt',{httpOnly:true})
        return res.sendStatus(204)
    }
   
    const foundUser = await User.findById({_id:refToken.user})
    if(!foundUser) return res.sendStatus(403)
    
    // delete refreshToken
    const refDel = await RefreshToken.deleteOne({
        user:refToken.user
    })
  
    // secure : true - only serves on https
    res.clearCookie('jwt',{httpOnly:true})
    res.status(201).json({
        succes:true,
        message:"USER LOGGED OUT"
    })
})

exports.setAdmin = catchAsyncErrors(async(req,res)=>{
    const user = await User.findByIdAndUpdate({
        _id:req.params.id
    },{
        $set:{
            isAdmin:true
        }
    })
    if(user) res.sendStatus(201)
})

exports.removeAdmin = catchAsyncErrors(async(req,res)=>{
    const user = await User.findByIdAndUpdate({_id:req.params.id},{
        $set:{isAdmin:false}
    })
    if(user) res.sendStatus(201)
})

