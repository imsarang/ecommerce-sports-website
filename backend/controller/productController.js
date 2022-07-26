const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const Product = require('../model/productModel')
const User = require('../model/userModel')
const Review = require('../model/reviewModal')
const Order = require('../model/orderModel')

exports.addProduct = catchAsyncErrors(async (req, res) => {
    const { imageUrl, name, price, mrp1, maxAvailable, category, size1, advantage, technical ,avgRate} = req.body
    const { category1, category2, category3, category4 } = category;
    const { advantage1,advantage2,advantage3,advantage4 } = advantage
    const { proCategory, surfaceCover, quantity, size2, style, material, storage, country, mrp2 } = technical;

    const product = await Product.create({
        imageUrl,
        name,
        price,
        mrp1,
        maxAvailable,
        avgRate:0,
        stars:{
            one:0,
            two:0,
            three:0,
            four:0,
            five:0
        },
        category: {
            category1,
            category2, category3, category4,
        },
        size1,
        advantage: {
            advantage1:{
                heading:advantage1.heading,
                content:advantage1.content
            },
            advantage2:{
                heading:advantage2.heading,
                content:advantage2.content
            },advantage3:{
                heading:advantage3.heading,
                content:advantage3.content
            },advantage4:{
                heading:advantage4.heading,
                content:advantage4.content
            }},
        technical: {
            proCategory, surfaceCover, quantity, size2, style, material, storage, country, mrp2,
        },
    })
    if (product) {
        res.status(200).json({
            success: true,
            product
        })
        
    }
    else res.status(401).json({
        success: false,

    })
})


exports.getProducts = catchAsyncErrors(async (req, res) => {
    const product = await Product.find().populate("reviews orderedBy returns")
    if (product) res.status(200).json({
        success: true,
        product
    })
    else res.status(400).json({
        success: false,
        message: 'Error in showing products'
    })
})

exports.removeProducts = catchAsyncErrors(async (req, res) => {
    const product = await Product.findByIdAndDelete({_id:req.params.id})
    
    if(product)res.status(200).json({
        success:true,
        message:'Product removed',
        product_name:product.name
    })
    else res.status(401).json({
        success:false,
        message:'Error in removing product'
    })
})

exports.getProductReview = catchAsyncErrors(async(req,res)=>{
    const product = await Product.findById({_id:req.params.id}).populate("reviews")

    if(product) res.status(201).json({
        success:true,
        product
    })
})

exports.getProductByCategory = catchAsyncErrors(async(req,res)=>{
  const product = await Product.find({
        "category.category1":req.params.category
  }).populate("reviews orderedBy returns")  
  if(product) res.status(201).json({
    success:true,
    product
  })
  else res.status(400).json({
    success:false,
    message:'Product not Found!'
  })
})

exports.getAllOrders = catchAsyncErrors(async(req,res)=>{
    const page = req.query.page
    const num = req.query.limit
    
    const order = await Order.find().populate("product").populate("delivery user")
                            .limit(num).skip(page*num)
    const total = await Order.countDocuments()

    if(order) return res.status(200).json({
        success:true,
        order,
        totalPages:Math.ceil(total/num)
    })
})

exports.getAllReturns = catchAsyncErrors(async(req,res)=>{
    const user = await User.find().populate("reviews")
    if(user) return res.status(200).json({
        success:true,
        user
    })
})

exports.getProductById = catchAsyncErrors(async(req,res)=>{
    const product = await Product.findById({_id:req.params.id})
    .populate("reviews")

    if(product) res.status(201).json({
        success:true,
        product
    })
    else res.status(400).json({
        success:false,
        message:"Product not found!"
    })
})

exports.removeProductQuantity = catchAsyncErrors(async(req,res)=>{
    let flag = 0
    for(let i = 0;i<req.body.pid.length;i++)
    {
        const {id,quantity} = req.body.pid[i]
        const product = await Product.findByIdAndUpdate({
            _id:id
        },{
            $inc:{
                maxAvailable: -Number(quantity),
            }
        })
        flag = 1
    }
    

    if(flag) res.status(201).json({
        success:true,
    })
})

exports.addProductQuantity = catchAsyncErrors(async(req,res)=>{
    const {name,quantity} = req.body

    const product = await Product.updateOne({
        name:name
    },{
        $inc:{
            maxAvailable: Number(quantity)
        }
    })

    if(product) res.status(201).json({
        success:true,
        product
    })
    else res.status(404).json({
        success:false,
        message:'Product not found'
    })
})

exports.calculateRating = catchAsyncErrors(async(req,res)=>{
    
    const review = await Review.find({product:req.params.id})


    const num = await Review.find({product:req.params.id}).countDocuments()
    
    let totalRate = 0
    for(let i = 0;i<review.length;i++)
    {
        totalRate = totalRate + review[i].rate
    }
   
    const average = totalRate/num
    const product = await Product.findByIdAndUpdate({_id:req.params.id},{
        $set:{
            avgRate:average
        }
    },{new:true})
    if(product) res.status(201).json({
        success:true,
        product
    })
    
})

exports.getProductByCategory1And2 = catchAsyncErrors(async(req,res)=>{
    const product = await Product.find({
       "category.category1":req.query.category1,
       "category.category2":req.query.category2
    }).populate("reviews")
    // console.log(product);
    if(product) return res.status(200).json({
        success:true,
        product
    })
    else return res.status(400).json({
        success:false,
        message:"Product not found"
    })
})

exports.searchProducts = catchAsyncErrors(async(req,res)=>{
    const keyword = req.query.search?
        {
            $or:[
                {name:{$regex:req.query.search,$options:"i"}},
                {"category.category1":{$regex:".*"+req.query.search+"*.",$options:"i"}},
                {"category.category2":{$regex:req.query.search,$options:"i"}},
            ]
        }:{}
        console.log(req.query.search);
        const product = await Product.find(keyword).limit(req.query.limit)
        const total = await Product.find(keyword).countDocuments()
        if(product) return res.status(200).json({
            success:true,
            product,
            total
        })
})

exports.searchSections = catchAsyncErrors(async(req,res)=>{
    const str = req.query.search.split(" ")
    
    let product = await Product.find()

    product.filter((item)=>{
        str.map((x)=>{
            item.category.category1 !== x && item.category.category2 !== x
        })
    })
    
    if(product) return res.status(200).json({
        success:true,
        product
    })
    else return res.status(400).json({
        success:false,
        message:"Could not fetch products"
    })
})
exports.displayPagination = catchAsyncErrors(async(req,res)=>{
    const page = req.query.page
    const num = req.query.limit

    const product = await Product.find().limit(num).skip(num*page)
    const totalProducts = await Product.countDocuments()
    if(product) return res.status(200).json({
        success:true,
        totalPages : Math.ceil(totalProducts/(num)),
        product
    })
})

exports.mainSearchPage = catchAsyncErrors(async(req,res)=>{
    const page = req.query.page
    let num = req.query.limit
    if(num==null) num = 1
    const {category1,category2} = req.params
    const keyObj = {
        "category.category1":category1,
        "category.category2":category2
    }
    const product=await Product.find(keyObj).limit(num).skip(page*num)
    const total = await Product.find(keyObj).countDocuments()

    if(product) return res.status(200).json({
        success:true,
        product,
        totalPages:Math.ceil(total/num),

    })
})