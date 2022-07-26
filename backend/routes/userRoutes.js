const express = require('express')
const passport = require("passport")
const { addUser, displayUser, updateUser, deleteUser, loginUser, logoutUser, updateAddress, addAddress, updateProfile, deleteAddress, setActive, addReview, deleteReview, showReviews, addOrder, getReview, addReturns, getAllUsers, getAddress, deliveryAddress, removeOrder, setAdmin, removeAdmin, googleLogin, getOrders, getReturns} = require('../controller/userController')
const { authUser, handleRefreshToken } = require('../middleware/authenticate')
const { sendEmail } = require('../utils/sendEmail')
const router = express.Router()

// user profile routes
router.route('/add').post(addUser)
router.route('/show').get(authUser,displayUser)
router.route('/update').put(authUser,updateUser)
router.route('/delete').delete(authUser,deleteUser)

// Address routes
router.route('/address').put(authUser,addAddress)
router.route('/address/delete/:id').put(authUser,deleteAddress)
router.route('/address/update/:id').put(authUser,updateAddress)
router.route('/address/all').get(authUser,getAddress)
router.route('/address/setactive/:id').put(authUser,setActive)
router.route('/address/delivery/:id').put(authUser,deliveryAddress)

router.route('/all/users').get(authUser,getAllUsers)

// auth routes
router.route('/login').post(loginUser)
router.route('/refresh').get(handleRefreshToken)
router.route('/logout').get(logoutUser)

// router.route('/login/google').post(googleLogin)

// router.route('/loginOtp')

// review routes
router.route('/add-review/:id').put(authUser,addReview)
router.route('/delete-review/:reviewID/:productID').put(authUser,deleteReview)

// order routes
router.route('/order/').put(authUser,addOrder)
router.route('/order/remove/:orderId/:productId').put(authUser,removeOrder)
router.route('/order/get').get(authUser,getOrders)
// return routes
router.route('/return/:returnId/:productId').put(authUser,addReturns)
router.route('/return/get').get(authUser,getReturns)

router.route('/setAdmin/:id').put(setAdmin)
router.route('/removeAdmin/:id').put(removeAdmin)

router.route('/send/email').get(sendEmail)

router.route('/auth/google').get(passport.authenticate("google",{scope:['profile','email']}),googleLogin)
// router.route('/auth/google/callback').get(passport.authenticate("google",{
//     successRedirect:'http://localhost:3000',
//     failureRedirect:'/auth/failure'
// }))
// router.route('/auth/failure').get((req,res)=>{
//     res.json({
//         success:false,
//         message:"Login Failed"
//     })
// })

module.exports = router