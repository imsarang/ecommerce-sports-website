import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AddedInfo from './AddedInfo/AddedInfo'
import MyCarousel from './Carousel/MyCarousel'
import ContentModal from './ContentModal'
// import ContentModal2 from './ConModal2'
import Footer from './Footer'
import Footer2 from './Footer2'
import ProductSec from './Home-products/ProductSec'
import { clickAction } from './redux/clickingReducer'
import { getLocal } from './storeInLocalStorage'



const Home = () => {
  
  const [screenWidth, setScreenWidth] = useState(1440)
  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    
    window.addEventListener('resize', getScreenWidth)
  }, [screenWidth])

  const clickAct = useSelector(clickAction)


  return (<>
    {
      clickAct?<div style={{
        // backgroundColor:'rgba(0,0,0,0.8)',
        zIndex:'50',
        // position:'fixed',
        padding:"5% 0 0 0",
        height:'100%',
        width:'100%',
        overflowY:"hidden"
      }}></div>:<></>
    }
    <div>
      {/* {
        clickAct ?
          // screenWidth < 790 ?
          //   <></> : 
          <ContentModal/>: <><ContentModal2/></>
      } */}
      <MyCarousel />
      <AddedInfo />
      <ProductSec text1='Swimming' text2='PRODUCTS' />
      <ProductSec text1='Football' text2='equipments' />
      <ProductSec text1='Badminton' text2='products'/>      
      <ProductSec text1='Cricket' text2='products'/>
      <ProductSec text1='Trecking' text2='goods'/>
    </div>
  </>
  )
}

export default Home