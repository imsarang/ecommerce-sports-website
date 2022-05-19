import { faArrowRight, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Footer, { ForShield } from '../Footer'
import product_idvl from "../images/product-idvl.avif"
import Advantage from './Advantage'
import Review from './Review'
import Technical from './Technical'
import { swimSize } from '../general'
import '../styles/product.css'
const Product = () => {
  
  const myArrHead = [['Chlorine resistance','Benefit from minimum of 100 hours of chlorine resistance from this swimsuit.'],
    ['Sun Protection','Swim while protected from the sun thanks to its component (UPF 50+) and length.']] 
      
  const material = "Main fabric 18% - Elastane 82% - Polyester Very comfortable and soft with excellent stretch properties Chlorinated water can be harmful to swimsuits that are used repeatedly in the swimming pool. The elastane fibre that gives the material its stretch properties and therefore makes it comfortable is also fragile when in contact with chlorine. If you swim occasionally, this material will be fine for you, otherwise opt for a 100% polyester material." 
  
  const pro_style = "WETSUIT The wetsuit shape of this product gives young swimmers a one-piece swimsuit that stays in place on the body. The component and the wetsuit shape with long sleeves and full-length legs provides sun protection so that they can swim without having to worry about sunburn on the body."
  const [stage,setStage] = useState('advantage')

  const handleStage = (inStage)=>{
    setStage(inStage)
  }
  
  return (<>
    <div className='idvl-product-page'>
      <section className='product-info-1' style={{
        display: 'flex',
        justifyContent: 'center',
        // backgroundColor:'yellow'
      }}>
        <div className='product-img' style={{

          width: '50%',
          height: '90vh'
        }}>
          <div>
            <img src={product_idvl} style={{
              width:'80%',
              margin:'5% 1% 5% 10%'
            }}/>
          </div>
        </div>
        <div className='product-content-1' style={{
          width: '50%',
        }}>
          <div className='heading' style={{
            margin:'5%',
            fontFamily:'Oswald',
            fontWeight:'bold',
            fontSize:'20px'
          }}>
            Boy Swimming Full Body Suit Combi 100 Mask Blue
          </div>
          <div className='product-price' style={{
            display:'flex',
            margin:'5%',
            fontFamily: 'Oswald'
          }}>

            <div className='actual-price'
              style={{
                backgroundColor: 'yellow',
                padding: '2% 5% 2% 5% ',
                
              }}>1,999
            </div>
            <div className='mrp-price' style={{
              padding:'2% 5% 2% 5%'
            }}>
            MRP 2,999
          </div>
          <div className='pro-rate' style={{
            padding:'2% 5% 2% 5%'
          }}>
              4.1/5 <FaStar style={{color:'gold'}}/>
          </div>
          </div>
          <div className='pro-warranty' style={{
            display:'flex',
            margin:'5%'
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
                padding:'0% 0% 0% 5%',
                fontSize:'29px',
                fontFamily:'Bebas Neue'
              }}>Size</div>
              <div style={{
                padding:'0% 2% 0% 2%',
                width:'50%'
              }}>
                <select className='pro-size-drop' style={{
                  padding:'1%',
                  width:'100%',
                }} required={true}>
                  <option>Select Your Size</option>


                </select>
              </div>
              <div className='view-size-chart' style={{
                display:'flex',
                margin:'0.5% 0 0 0',
                cursor:'pointer',
                width:'15%'
              }}>
                <div style={{
                  padding:'0 10% 0 0'
                }}>
                  View size chart
                </div>
                <div><FontAwesomeIcon icon={faCaretRight}/></div>
              </div>
          </div>
          <div className='add-to-cart' style={{
            padding:'5%',
            width:'100%'
          }}>
              <button style={{
                // padding:'2%'
                width:'40%',
                padding:'2%',
                borderRadius:'10px',
                fontFamily:'Bebas Neue',
                fontSize:'20px',
                backgroundImage:'linear-gradient(to right,rgb(245, 232, 56),rgb(247, 162, 49))',
                border:'none',
                boxShadow: '2px 2px rgb(207, 206, 204)'
              }}>Add to cart</button>
          </div>
          <div className='delivery-services' style={{
            display:'flex',
            width:'100%',
            padding:'0 5% 0 5%',
            fontFamily:'Oswald'
          }}>
              <div style={{
                display:'flex',
                justifyContent:'space-between',
                width:'50%',
                backgroundColor:'#e8e9eb',
                padding:'2% 5% 2% 5%',
                
              }}>
                <div>560002</div>
                <div style={{

                }}>CHANGE</div>
              </div>
              <div style={{
                padding:'1% 4% 1% 4%',
                margin:'0 1% 0 1%',
                backgroundColor:'#e8e9eb'
              }}>Free Home delivery above Rs.1699*</div>
              <div style={{
                backgroundColor:'#e8e9eb',
                padding:'1% 0 0 2%'
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
          <div className='product-c-2-head' style={{
            width:'100%',
            backgroundColor:'#e8e9eb',
            display:'flex',
            justifyContent:'space-between',
            padding:'1% 10% 1% 10%',
            fontFamily:'Bebas Neue',
            fontSize:'25px'
          }}>
            <div onClick={()=>handleStage('advantage')} style={{cursor:'pointer'}}>Advantages</div>
            <div onClick={()=>handleStage('technical')} style={{cursor:'pointer'}}>Technical Information</div>
            <div onClick={()=>handleStage('review')} style={{cursor:'pointer'}}>Reviews</div>
          </div>
          <div className='product-content-1'>
            {
              stage==='advantage'?<Advantage myArrHead ={myArrHead}/>:
              stage==='technical'?<Technical
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
                />:
              stage==='review'?<Review
              />:<></>
            }
          </div>
        </div>
        
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default Product