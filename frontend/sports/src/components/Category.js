import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from './CustomSlider/Slider'
import { imageArr } from './general'
import ProductHeading from './Home-products/ProductHeading'
import NoProduct from './NoProduct'
import { categoryClick } from './redux/clickingReducer'

import { products } from './traildata'

const handlelocalStorage = (category) => {
  localStorage.setItem("Category", JSON.stringify(category))
}
const Category = () => {

  const category = useSelector(categoryClick)

  const dispatch = useDispatch()
  // const category1 = 'women'
  useEffect(() => {
    handlelocalStorage(category)
    handleProductsFromDatabase()
    // console.log(products);
  }, [category])

  const [myProducts,setProducts] = useState([])
  const [items1,setItems1] = useState([])
  const [items2,setItems2] = useState([])
  const [items3,setItems3] = useState([])
  const [items4,setItems4] = useState([])
  // const [items1,setItems1] = useState([])
  // get all products from database
  // let items1=[]
  // let items2=[]
  // let items3=[]
  // let items4 = []
  const handleProductsFromDatabase = async() => {
    const result1 = await fetch(`/api/v2/category?category1=${category}&category2=Accessories`)
    const result2 = await fetch(`/api/v2/category?category1=${category}&category2=Men`)
    const result3 = await fetch(`/api/v2/category?category1=${category}&category2=Women`)
    const result4 = await fetch(`/api/v2/category?category1=${category}&category2=Kids`)
    const product1 = await result1.json()
    const product2 = await result2.json()
    const product3 = await result3.json()
    const product4 = await result4.json()
    if(product1.success && product2.success && product3.success && product4.success)
    {
      // product.product.map((item)=>{
      //   // console.log(item);
      //   item.category.category1===category && item.category.category2 === 'Accessoriers'?setItems1([...items1,item]):
      //   item.category.category1===category && item.category.category2 === 'Men'?setItems1([...items2,item]):
      //   item.category.category1===category && item.category.category2 === 'Women'?setItems1([...items3,item]):
      //   item.category.category1===category && item.category.category2 === 'Kids'?setItems1([...items4,item]):
      //   console.log('hi');
      // })
      setItems1(product1.product)
      setItems2(product2.product)
      setItems3(product3.product)
      setItems4(product4.product)
      console.log(product1);
    }
  }
 
  // myProducts.map((item)=>{console.log(item);
  //   // x.map((item)=>{
  //     if(item.category.category1 === category&&item.category.category2 === 'Accessories') 
  //     items1.push(item)
  //     // setItems1([...items1,item])
  //     if(item.category.category1 === category&&item.category.category2 === 'Men') items2.push(item)
  //     if(item.category.category1 === category&&item.category.category2 === 'Women') items3.push(item)
  //     if(item.category.category1 === category&&item.category.category2 === 'Kids') items4.push(item)
  //   // })

  // })

  return (
    <div style={{
      padding:'5% 0 0 0'
    }}>
      <div className='category-1'>
        <div style={{
          padding: '3% 0 0 1%'
        }}>
          <ProductHeading text1={category} text2={'Accessories'} />
        
        </div>

        {items1.length == 0?<>
        <NoProduct text='products'/>
        </>:<Slider items={items1} />}
      </div>
      <div className='category-2'>
        <div style={{
          padding: '3% 0 0 1%'
        }}>
          <ProductHeading text1={category} text2={"Mens'"} />
        </div>

        {
          items2.length==0?<NoProduct text='products'/>:<Slider items={items2} />
        }
      </div>
      <div className='category-1'>
        <div style={{
          padding: '3% 0 0 1%'
        }}>
          <ProductHeading text1={category} text2={"Womens'"} />
        </div>

        {items3.length==0?<NoProduct text={'products'}/>:<Slider items={items3} />}
      </div>
      <div className='category-1'>
        <div style={{
          padding: '3% 0 0 1%'
        }}>
          <ProductHeading text1={category} text2={'Kids'} />
        </div>

        {items4.length==0?<NoProduct text='products'/>:<Slider items={items4} />}
      </div>
    </div>
  )
}

export default Category