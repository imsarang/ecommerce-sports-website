const express = require('express')
const passport = require("passport")
const { addUser, displayUser, updateUser, deleteUser, loginUser, logoutUser, updateAddress, addAddress, updateProfile, deleteAddress, setActive, addReview, deleteReview, showReviews, addOrder, getReview, addReturns, getAllUsers, getAddress, deliveryAddress, removeOrder, setAdmin, removeAdmin, googleLogin } = require('../controller/userController')
const { authUser, handleRefreshToken } = require('../middleware/authenticate')
const router = express.Router()

router.route('/add').post(addUser)
router.route('/show/:username').get(displayUser)
router.route('/update/:username').put(updateUser)
router.route('/update/address/:username').put(addAddress)
router.route('/delete/:id').delete(deleteUser)
router.route('/delete/address/:username/:id').put(deleteAddress)
router.route('/address/update/:username/:id').put(updateAddress)
router.route('/all/address/:username').get(getAddress)
router.route('/address/setactive/:username').put(setActive)
router.route('/delivery/address/:username').put(deliveryAddress)
router.route('/all/users').get(authUser,getAllUsers)

router.route('/login').post(loginUser)
router.route('/refresh').get(handleRefreshToken)
router.route('/logout').get(logoutUser)

// router.route('/login/google').post(googleLogin)

// router.route('/loginOtp')


router.route('/add-review/:username/:id').put(addReview)
router.route('/delete-review/:username/:id1/:id/:id2').put(deleteReview)


router.route('/order/:username/:productName').put(addOrder)
router.route('/order/remove/:username/:id').put(removeOrder)
router.route('/return/:username').put(addReturns)

router.route('/setAdmin/:id').put(setAdmin)
router.route('/removeAdmin/:id').put(removeAdmin)

router.get('/login/success',(req,res)=>{
    if(!req.user) res.status(403).json({
        success:false,
        message:"User Not Authorized"
    })
    res.status(200).json({
      success:true,
      message:"LOGIN SUCCESSFUL!"  
    })
})

router.get("/google",passport.authenticate("google",["profile","email"]))

router.get('/google/logout',(req,res)=>{
    req.logout()
    res.redirect(process.env.CLIENT_URL)
})

router.get('/login/failed',(req,res)=>{
    res.status(401).json({
        success:false,
        message:"Login Failure"
    })
})
router.get(
    '/login/google',
    passport.authenticate("google",{
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: '/login/failed'
    })
)

module.exports = router