const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const Product = require('../model/productModel')
const User = require('../model/userModel')

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
    const product = await Product.find()
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
    const product = await Product.findById({_id:req.params.id})

    if(product) res.status(201).json({
        success:true,
        review: product.rating
    })
})

exports.getProductByCategory = catchAsyncErrors(async(req,res)=>{
  const product = await Product.find({
        "category.category1":req.params.category
  })  
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
    const product = await User.find()
    if(product) res.status(201).json({
        success:true,
        order:product.map((item)=>item.order)
    })
})

exports.getProductById = catchAsyncErrors(async(req,res)=>{
    const product = await Product.findById({_id:req.params.id})

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
    const product = await Product.findByIdAndUpdate({
        _id:req.params.id
    },[{
        $set:{
            avgRate:{$avg:'$rating.rate'},
        },    
    }])

    if(product) res.status(201).json({
        success:true,
        product
    })
    else res.status(404).json({
        success:false
    })
})
