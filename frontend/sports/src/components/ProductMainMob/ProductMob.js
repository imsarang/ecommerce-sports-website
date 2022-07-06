import { faArrowRight, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { NavLink, useParams } from 'react-router-dom'
import Footer, { ForShield } from '../Footer'
import product_idvl from "../images/product-idvl.avif"
import Advantage from '../ProductMain/Advantage'
import Review from './Review'
import Technical from '../ProductMain/Technical'
import { swimSize } from '../general'
import '../styles/product.css'
import { useDispatch, useSelector } from 'react-redux'
import { product } from '../redux/productReducer'
import { CLICK_CHANGE_ADDRESS, CLICK_SIZE_CHART, sizechart } from '../redux/clickingReducer'
import { ADD_TO_CART } from '../redux/cartReducer'
import SizeChart from '../ProductMain/SizeChart'
const ProductMob = () => {
  const myArrHead = [['Chlorine resistance','Benefit from minimum of 100 hours of chlorine resistance from this swimsuit.'],
  ['Sun Protection','Swim while protected from the sun thanks to its component (UPF 50+) and length.']] 
    
const material = "Main fabric 18% - Elastane 82% - Polyester Very comfortable and soft with excellent stretch properties Chlorinated water can be harmful to swimsuits that are used repeatedly in the swimming pool. The elastane fibre that gives the material its stretch properties and therefore makes it comfortable is also fragile when in contact with chlorine. If you swim occasionally, this material will be fine for you, otherwise opt for a 100% polyester material." 

const pro_style = "WETSUIT The wetsuit shape of this product gives young swimmers a one-piece swimsuit that stays in place on the body. The component and the wetsuit shape with long sleeves and full-length legs provides sun protection so that they can swim without having to worry about sunburn on the body."
const [open1,setOpen1] = useState(false)
const [open2,setOpen2] = useState(false)
const [open3,setOpen3] = useState(false)

const {id} = useParams()

// const item = useSelector(product) 
const dispatch = useDispatch()
const show = useSelector(sizechart)
const [item,setProduct] = useState({})
const [review,setForReview] = useState([])

const mystyle1={
  width:'100%',
  backgroundColor:'#e8e9eb',
  // display:'flex',
  justifyContent:'space-between',
  padding:'1% 10% 1% 10%',
  fontFamily:'Bebas Neue',
  fontSize:'25px'
}

const showProductFromDatabase = async()=>{
  const result = await fetch(`/api/v2/product/${id}`)
  const product =await result.json()
  const {_id,name,imageUrl,price,mrp1,maxAvailable,size1,category,technical,advantage,rating,avgRate} = product.product
  if(product.success)
  {
    // console.log(id);
    setProduct({
      id:_id,
      name:name,
      imageUrl:imageUrl,
      price:price,
      mrp:mrp1,
      available:maxAvailable,
      size:size1,
      category1:category.category1,
      category2:category.category2,
      style:technical.style,
      surfaceCover:technical.surfaceCover,
      material:technical.material,
      storage:technical.storage,
      country:technical.country,
      advantages:advantage,
      avgRate:avgRate
    })
    setForReview([...review,rating])
  }
}
useEffect(()=>{
  showProductFromDatabase()
},[])
const handleChange = ()=>{
  dispatch(CLICK_CHANGE_ADDRESS())
}

const handleAddToCart = ()=>{
  dispatch(ADD_TO_CART({
    id:item.id,
    imageUrl:item.imageUrl,
    price:item.price,
    rating:item.rating,
    name:item.name,
    quantity:1,
    available:item.available,
    size:item.size
  }))
}

const handleSize=()=>{
  dispatch(CLICK_SIZE_CHART())
}
return (<>{
  show ? <><SizeChart category2={item.category2}/></> : <></>
}
  <div className='idvl-product-page'>
    <section className='product-info-1' style={{
      
      // justifyContent: 'center',
      // backgroundColor:'yellow'
      padding:'10% 0 0 0'
    }}>
      <div className='product-img' style={{

        width: '80%',
        // height: '90vh'
      }}>
        <div>
          <img src={item.imageUrl} style={{
            width:'100%',
            margin:'5% 0% 5% 0%'
          }}/>
        </div>
      </div>
      <div className='product-content-1' style={{
        width: '100%',
      }}>
        <div style={{padding:'3%'}}>
        <div style={{
        background:'#e8e9eb',
        borderRadius:'10px',
        padding:'3%',
        }}>
        <div className='heading' style={{
          // margin:'5%',
          fontFamily:'Oswald',
          fontWeight:'bold',
          fontSize:'20px',
          width:'100%'
        }}>
          {item.name}
        </div>
        
        <div className='product-price' style={{
          display:'flex',
          margin:'5% 0 2% 0',
          fontFamily: 'Oswald'
        }}>

          <div className='actual-price'
            style={{
              backgroundColor: 'yellow',
              padding: '2% 5% 2% 5% ',  
            }}>{item.price}
          </div>
          <div className='mrp-price' style={{
            padding:'2% 5% 2% 5%'
          }}>
        </div></div>
        </div></div>
        <div className='pro-warranty' style={{
          display:'flex',
          // margin:'5%'
          padding:'5%'
        }}>
            <div className='warranty-icon'>
              <ForShield size={50}/>
            </div>  
            <div style={{
              // margin:'0 0 0 1%',
              padding:'1% 5% 1% 5%'
            }}>
              <NavLink to='/warranty' style={{
                color:'black',
                textDecoration:'none',
                fontFamily:'Oswald'
              }}>2 Years Warranty</NavLink>
            </div>
        </div>
        <div className='pro-size' style={{
          display:'flex',
          fontFamily: 'Oswald',
          width:'100%',
          padding:'2% 0 2% 5%',
        }}>
            <div style={{
              margin:'0 3% 0 0',
              // padding:'0% 0% 0% 5%',
              fontSize:'29px',
              fontFamily:'Bebas Neue'
            }}>Size</div>
            <div style={{
              padding:'0% 2% 0% 2%',
              width:'50%'
            }}>
            <span style={{fontSize:'25px'}}>{item.size}</span>
            </div>
            <div className='view-size-chart' style={{
              display:'flex',
              // margin:'0.5% 0 0 0',
              cursor:'pointer',
              // width:'15%'
            }}>
              <div style={{
                // padding:'0 10% 0 0'
              }}
              onClick={handleSize}>
                View size chart
              </div>
              <div><FontAwesomeIcon icon={faCaretRight}/></div>
            </div>
        </div>
        <div style={{padding:'3%'}}>
              <select className='pro-size-drop' style={{
                padding:'2%',
                fontFamily:'Roboto Condensed',
                fontWeight:'bold',
                width:'100%',
                // margin:'0 0 0 1%'
              }} required={true}>
                <option>Select Your Size</option>

              </select>
              </div>
        <div className='add-to-cart' style={{
          // padding:'5%',
          width:'100%'
        }}>
            <button style={{
              // padding:'2%'
              width:'100%',
              padding:'2%',
              position:'fixed',
              bottom:'0px',
              zIndex:'90',
              borderRadius:'10px 10px 0 0',
              fontFamily:'Bebas Neue',
              fontSize:'20px',
              backgroundImage:'linear-gradient(to right,rgb(245, 232, 56),rgb(247, 162, 49))',
              border:'none',
              boxShadow: '2px 2px rgb(207, 206, 204)'
            }}
            onClick={handleAddToCart}>Add to cart</button>
        </div>
        <div className='delivery-services' style={{
          // display:'flex',
          width:'100%',
          padding:'0 3% 0 3%',
          fontFamily:'Oswald'
        }}>
            <div style={{
              display:'flex',
              justifyContent:'space-between',
              width:'100%',
              backgroundColor:'#e8e9eb',
              padding:'2% 5% 2% 5%',
              margin:'1% 0 0.5% 0'
            }}>
              <div>560002</div>
              <div style={{
                cursor:'pointer',
                color:'#349beb'
              }}
              onClick={handleChange}>CHANGE</div>
            </div>
            <div style={{
              padding:'2% 4% 2% 4%',
              backgroundColor:'#e8e9eb',
              margin:'0.5% 0 0.5% 0'
            }}>Free Home delivery above Rs.1699*</div>
            <div style={{
              backgroundColor:'#e8e9eb',
              padding:'2% 0 2% 4%',
              margin:'0.5% 0 1% 0'
            }}>90 days Return Policy</div>
        </div>
      </div>
    </section>

    <section className='product-content-2'>
      <div className='adv-tech-rev' style={{
        // backgroundColor: 'green',
        width: '100%',
        // height: '50vh'
      }}>
        <div style={{padding:'5% 3% 0 3%'}}>
          <div onClick={()=>setOpen1(!open1)} style={mystyle1}>Advantages</div>
        </div>
        <div className='product-content-1'>
          {
            open1?<Advantage myArrHead ={myArrHead}/>:<></>
          }
          <div style={{padding:'1% 3% 0 3%'}}>
          <div onClick={()=>setOpen2(!open2)} style={mystyle1}>Technical Information</div>
          </div>
          {
            open2?<Technical
              gender={'BOYS'}
              surface_cover={'arms and legs'}
              quantity={'1 U'}
              size={swimSize}
              pro_style={pro_style}
              material={material}
              warranty={2}
              countryOrigin={'India'}
              mrp={'╣1,499 inclusive of all taxes'}
              storage={'Store in a dry place.'}
              />:<></>
          }
          <div style={{padding:'1% 3% 0 3%',width:'100%'}}>
          <div onClick={()=>setOpen3(!open3)} style={mystyle1}>Reviews</div>
          </div>
          {  open3?<Review rating={review} id={id} productName={item.name} />:<></>
          }
        </div>
      </div>
      
    </section>
  </div>

  </>
)
}

export default ProductMob