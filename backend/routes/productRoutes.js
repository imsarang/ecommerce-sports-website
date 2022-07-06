const express = require('express')
const { addProduct, getProducts, removeProducts, getProductReview, getProductByCategory, getAllOrders, getProductById, addProductQuantity, removeProductQuantity, calculateRating} = require('../controller/productController')
const { authUser, checkAdmin } = require('../middleware/authenticate')
const router = express.Router()

router.route('/add').post(addProduct)
router.route('/show').get(getProducts)
router.route('/delete/:id').delete(removeProducts)
router.route('/show/:category').get(getProductByCategory)
router.route('/review/:id').get(getProductReview)
router.route('/order/all').get(checkAdmin,getAllOrders)
router.route('/product/:id').get(getProductById)
router.route('/add/product/quantity').put(addProductQuantity)
router.route('/remove/product/quantity').put(removeProductQuantity)

router.route('/product/rate/:id').put(calculateRating)
module.exports = router