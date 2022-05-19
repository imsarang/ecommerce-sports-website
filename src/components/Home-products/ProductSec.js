import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import product1 from "../images/product1.png"
import product2 from "../images/product2.png"
import ProductHeading from './ProductHeading'
import "../styles/productSec.css"
import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation,Pagination} from 'swiper'

import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css'

const ProductSec = ({text1,text2}) => {

  // for gettig the size of the window:
  const [screenWidth,setScreenWidth] = useState(1440)
  const [images,setImages] = useState(4)
  const getScreenWidth = ()=>{
    setScreenWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',getScreenWidth)
  },[screenWidth])

  return (
    <section className='product-sec' style={{
        width:'100%',
        height:'72vh',
        // backgroundColor:'blue',
        marginTop:'3%',
        padding:'1% 4% 0 4%'
    }}>
        <ProductHeading text1={text1} text2={text2}/>
          <Swiper
           slidesPerView={screenWidth>=1200?4:screenWidth>=801 && screenWidth<=1199?3:screenWidth>=601 && screenWidth<=800?2:1}
          //  spaceBetween={0.5}
           pagination={{
            clickable:'true',
            dynamicBullets:true,
           }}
          //  navigation={true}
           modules={[Pagination]}
           className="mySwiper wrapper-start"
           style={{
            //  border:'1px solid black',
             height:'80%',
             padding:'0.1% 1% 40px 1%',
           }}>
            <SwiperSlide><ProductCard image={product1} text='Women Swimming Top UNA Typ Bla...' price='1,199' rating='4.5'/></SwiperSlide>
            <SwiperSlide><ProductCard image={product2} text='Women Swimming Top UNA Typ Bla...' price='1,199' rating='4.5'/></SwiperSlide>
            <SwiperSlide><ProductCard image={product1} text='Women Swimming Top UNA Typ Bla...' price='1,199' rating='4.5'/></SwiperSlide>
            <SwiperSlide><ProductCard image={product1} text='Women Swimming Top UNA Typ Bla...' price='1,199' rating='4.5'/></SwiperSlide>
            <SwiperSlide><ProductCard image={product2} text='Women Swimming Top UNA Typ Bla...' price='1,199' rating='4.5'/></SwiperSlide>
            <SwiperSlide><ProductCard image={product2} text='Women Swimming Top UNA Typ Bla...' price='1,199' rating='4.5'/></SwiperSlide>
          </Swiper>
          
    </section>
  )
}

export default ProductSec