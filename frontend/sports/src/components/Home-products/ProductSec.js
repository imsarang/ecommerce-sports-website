import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import product1 from "../images/product1.png"
import product2 from "../images/product2.png"
import ProductHeading from './ProductHeading'
import "../styles/productSec.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import { products } from '../traildata'

import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css'
import NoProduct from '../NoProduct'

const ProductSec = ({ text1, text2 }) => {

  // for gettig the size of the window:
  const [screenWidth, setScreenWidth] = useState(1440)

  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth)
  }
  const [myProducts, setProducts] = useState([])
  let items = []
  products.map((item) => {
    if (item.category1 === text1) items.push(item)
  })

  const getProductFromDatabase = async () => {
    // console.log(text1);
    const result = await fetch(`/api/v2/show/${text1}`)
    const product = await result.json()

    if (product) {
      setProducts(product.product)
    }
  }


  useEffect(() => {
    window.addEventListener('resize', getScreenWidth)
    getProductFromDatabase()
  }, [screenWidth])

  return (
    <section className='product-sec' style={{
      width: '100%',
      height: '72vh',
      // backgroundColor:'blue',
      marginTop: '3%',
      padding: '1% 4% 0 0%'
    }}>
      <ProductHeading text1={text1} text2={text2} />
      {
        myProducts.length != 0 ? <>
          <Swiper
            slidesPerView={screenWidth >= 1200 ? 4 : screenWidth >= 801 && screenWidth <= 1199 ? 3 : screenWidth >= 601 && screenWidth <= 800 ? 2 : 1}
            //  spaceBetween={0.5}
            pagination={{
              clickable: 'true',
              dynamicBullets: true,
            }}
            //  navigation={true}
            modules={[Pagination]}
            className="mySwiper wrapper-start"
            style={{
              //  border:'1px solid black',
              height: '80%',
              padding: '0.1% 1% 40px 3%',
            }}>
            {
              myProducts.map((item) => {

                return <>
                  <SwiperSlide>
                    <ProductCard
                      image={item.imageUrl}
                      text={item.name}
                      price={item.price}
                      rate={item.avgRate}
                      id={item._id}
                      quantity={item.quantity}
                      available={item.maxAvailable}
                      category1={item.category.category1}
                      category2={item.category.category2}
                      size={item.size1}
                      mrp={item.mrp1}
                    /></SwiperSlide>
                </>
              })
            }
          </Swiper>
        </>
          : <NoProduct text='products'/>
      }

    </section>
  )
}

export default ProductSec