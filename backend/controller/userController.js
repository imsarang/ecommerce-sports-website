const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const User = require('../model/userModel')
const Product = require('../model/productModel')
const RefreshToken = require('../model/refreshTokenModel')
const Review = require('../model/reviewModal')
const Address = require('../model/addressModel')
const Order = require('../model/orderModel')

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const { updateOne, findByIdAndDelete } = require('../model/userModel');
const { generateToken } = require('../utils/generateToken');
const { refreshToken } = require('../utils/refreshToken');
const { handleRefreshToken, handleDeleteRefreshToken } = require('../middleware/authenticate');
const nodemailer = require("nodemailer")


// push req
exports.addUser = catchAsyncErrors(async (req, res) => {

    const { username, email, phone, password, isAdmin, isSuperAdmin } = req.body;
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

            const accessToken = await user.generateToken()

            const refToken = refreshToken(user._id)

            const token_in_refresh = await RefreshToken.findOne({ user: user._id })

            if (!token_in_refresh) {
                const refreshTokenModel = await RefreshToken.create({
                    token: refToken,
                    user: user.id
                })
                // console.log('token');
                // await refreshTokenModel.save()

                res.cookie('jwt', accessToken, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000
                })

                res.status(201).json({
                    success: true,
                    message: "Login Successful",
                    user,
                    access: accessToken,
                })
            }
            else {
                const refreshTokenModel = await RefreshToken.updateOne({ user: user.id }, {
                    token: refToken
                }, { new: true })
                res.cookie('jwt', accessToken, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000
                })

                res.status(201).json({
                    success: true,
                    message: "Login Successful",
                    user,
                    access: accessToken
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
exports.googleLogin = catchAsyncErrors(async (req, res) => {

})
exports.loginOTP = catchAsyncErrors(async (req, res) => {

})

// put req

exports.updateUser = catchAsyncErrors(async (req, res) => {
    const { firstname, lastname, email, phone, gender } = req.body

    const user = await User.findByIdAndUpdate({
        _id: req.user._id
    }, {
        $set: {
            firstname, lastname, email, phone, gender
        }
    }, { new: true })

    if (user) return res.status(200).json({
        success: true,
        user
    })
})

exports.addAddress = catchAsyncErrors(async (req, res) => {
    const { firstname, lastname, contact, address1, address2, address3, pincode, city } = req.body

    const address = await Address.create({
        firstname, lastname, contact, address1, address2, address3, pincode, city,
        user: req.user._id
    })
    const user = await User.findByIdAndUpdate({ _id: req.user._id }, {
        $addToSet: {
            addresses: address._id
        }
    }, { new: true }).populate("addresses")

    if (user && address) return res.status(200).json({
        success: true,
        user, address
    })

})

exports.updateAddress = catchAsyncErrors(async (req, res) => {
    const { firstname, lastname, contact, address1, address2, address3, pincode, city } = req.body

    const address = await Address.findByIdAndUpdate({ _id: req.params.id }, {
        $set: {
            firstname, lastname, contact, address1, address2, address3, pincode, city
        }
    })

    if (address) res.status(200).json({
        success: true,
        message: "Address Updated!"
    })
})

exports.setActive = catchAsyncErrors(async (req, res) => {

    const user = await User.findByIdAndUpdate({ _id: req.user._id }, {
        $set: { active: req.params.id },
        $set: { delivery: req.params.id }
    }, { new: true }).populate("active").populate("delivery")

    if (user) return res.status(200).json({
        success: true,
        message: "Active Address Set",
        user
    })

})
exports.deliveryAddress = catchAsyncErrors(async (req, res) => {

    const user = await User.findByIdAndUpdate({ _id: req.user._id }, {
        $set: {
            delivery: req.params.id
        }
    }, { new: true }).populate("delivery").populate("active")

    if (user) return res.status(200).json({
        success: true,
        message: "Delivery Address Set",
        user
    })

})

exports.deleteAddress = catchAsyncErrors(async (req, res) => {

    const user = await User.findByIdAndUpdate({ _id: req.user._id }, {
        $pull: {
            addresses: req.params.id
        }
    }, { new: true }).populate("addresses")

    const address = await Address.findByIdAndDelete({ _id: req.params.id })

    if (user && address) return res.status(200).json({
        success: true,
        message: "Address Removed!",
        user
    })

})


// user product interaction
exports.addReview = catchAsyncErrors(async (req, res) => {
    const { rate, title, comment, recommend, used_since, email, firstname, lastname, userGender, age, productName } = req.body
    const dateObj = new Date()
    const review = await Review.create({
        rate, title, comment, recommend, used_since, email, firstname, lastname, userGender, age, productName,
        dateOfReview: {
            day: dateObj.getDate(),
            month: dateObj.getMonth() + 1,
            year: dateObj.getFullYear()
        },
        product: req.params.id,
        user: req.user._id
    })

    const user = await User.findByIdAndUpdate({ _id: req.user._id }, {
        $addToSet: {
            reviews: review._id
        }
    }, { new: true }).populate("reviews orders addresses")

    const product = await Product.findByIdAndUpdate({ _id: req.params.id }, {
        $addToSet: {
            reviews: review._id
        }
    }, { new: true }).populate("reviews orderedBy returns")

    if (user && product) return res.status(200).json({
        success: true,
        user,
        product
    })
})

exports.deleteReview = catchAsyncErrors(async (req, res) => {

    const user = await User.findByIdAndUpdate({ _id: req.user._id }, {
        $pull: {
            reviews: req.params.reviewID
        }
    }, { new: true }).populate("reviews orders addresses")

    const product = await Product.findByIdAndUpdate({ _id: req.params.productID }, {
        $pull: {
            reviews: req.params.reviewID
        }
    }, { new: true }).populate("reviews orderedBy returns")

    const review = await Review.findByIdAndDelete({ _id: req.params.reviewID })
    if (user && product) return res.status(200).json({
        success: true,
        user, product
    })

})

// checkout
exports.addOrder = catchAsyncErrors(async (req, res) => {

    const dateObj = new Date()
    for (let i = 0; i < req.body.products.length; i++) {
        const { imageUrl, name, price, quantity, size, id } = req.body.products[i]

        const order = await Order.create({
            imageUrl, name, price, quantity, size,
            dateOfPurchase: {
                day: dateObj.getDay(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear()
            },
            product: id,
            user: req.user._id,
            delivery: req.user.delivery
        })

        const user = await User.findByIdAndUpdate({ _id: req.user._id }, {
            $addToSet: {
                orders: order._id
            }
        }, { new: true }).populate("orders")

        const product = await Product.findByIdAndUpdate({ _id: id }, {
            $addToSet: { orderedBy: req.user._id }
        }, { new: true }).populate("orderedBy")
    }

    const user = await User.find({ _id: req.user._id }).populate("orders")
    res.json({
        user
    })

})

exports.removeOrder = catchAsyncErrors(async (req, res) => {

    const order = await Order.findByIdAndDelete({ _id: req.params.orderId })

    const user = await User.findByIdAndUpdate({ _id: req.user._id }, {
        $pull: {
            orders: req.params.orderId
        }
    }, { new: true }).populate("orders")

    const product = await Product.findByIdAndUpdate({ _id: req.params.productId }, {
        $pull: {
            orderedBy: req.user._id
        },
        $addToSet: {
            returns: req.params.orderId
        }
    }, { new: true }).populate("orderedBy returns")

    if (user && product) return res.status(200).json({
        success: true,
        user, product
    })

})

exports.addReturns = catchAsyncErrors(async (req, res) => {
    const user = await User.findByIdAndUpdate({ _id: req.user._id }, {
        $addToSet: {
            returns: req.params.returnId
        }
    }, { new: true }).populate("returns")

    const product = await Product.findByIdAndUpdate({ _id: req.params.productId }, {
        $addToSet: {
            returns: req.user._id
        }
    }, { new: true }).populate("returns")

    if (user && product) return res.status(200).json({
        success: true,
        user, product
    })
})

// delete req
exports.deleteUser = catchAsyncErrors(async (req, res) => {
    const user = await User.findByIdAndDelete({ _id: req.user._id })
    if (user) res.status(201).json({
        success: true,
        message: 'User Removed'
    })
    const review = await Review.findByIdAndDelete({ user: req.user._id })
    const address = await Address.findByIdAndDelete({ user: req.user._id })
    const order = await Order.findByIdAndDelete({ user: req.user._id })
})

// get req
exports.displayUser = catchAsyncErrors(async (req, res) => {
    const user = await User.findById({ _id: req.user._id })
        .populate("addresses orders returns active delivery")

    if (user) return res.status(200).json({
        success: true,
        user
    })
    else return res.status(400).json({
        success: false,
        message: "User Not Found"
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
    const user = await User.find({ _id: req.user._id }).populate("addresses").populate("delivery")
    if (user) return res.status(200).json({
        success: true,
        user
    })
})
exports.logoutUser = catchAsyncErrors(async (req, res) => {


    // on client,also delete the access token
    const cookies = req.cookies
    if (!cookies.jwt) return res.sendStatus(204)
    // const refreshToken = cookies.jwt

    // // is refreshToken in db
    // // 204: successful but no content
    // const refToken = await RefreshToken.findOne({
    //     token:refreshToken
    // })
    // if(!refToken) 
    // {
    //     res.clearCookie('jwt',{httpOnly:true})
    //     return res.sendStatus(204)
    // }

    // const foundUser = await User.findById({_id:refToken.user})
    // if(!foundUser) return res.sendStatus(403)

    // // delete refreshToken
    // const refDel = await RefreshToken.deleteOne({
    //     user:refToken.user
    // })

    // secure : true - only serves on https
    res.clearCookie('jwt', { httpOnly: true })
    res.status(201).json({
        succes: true,
        message: "USER LOGGED OUT"
    })
})

exports.setAdmin = catchAsyncErrors(async (req, res) => {
    const user = await User.findByIdAndUpdate({
        _id: req.params.id
    }, {
        $set: {
            isAdmin: true
        }
    })
    if (user) res.sendStatus(201)
})

exports.removeAdmin = catchAsyncErrors(async (req, res) => {
    const user = await User.findByIdAndUpdate({ _id: req.params.id }, {
        $set: { isAdmin: false }
    })
    if (user) res.sendStatus(201)
})

exports.getOrders = catchAsyncErrors(async (req, res) => {
    const page = req.query.page
    const num = req.query.limit
    
    const order = await Order.find({ user: req.user._id })
        .limit(num)
        .skip(page * num)
    const user = await User.find({_id:req.user._id})
    if (order) return res.status(200).json({
        success: true,
        order,
        totalPages: Math.ceil((user[0].orders.length)/num)
    })
})

exports.getReturns = catchAsyncErrors(async (req, res) => {
    const user = await User.find({ _id: req.user._id }).populate("returns")
    if (user) return res.status(200).json({
        success: true,
        user
    })
})