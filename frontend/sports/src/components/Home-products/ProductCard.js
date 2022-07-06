import React, { useEffect } from 'react'
// import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaStar } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CHECK_PRODUCT } from '../redux/productReducer';
const ProductScreen = ({ available, image, text, price, rate, mrp, id, category1, category2, size }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleProduct = () => {
    // dispatch(CHECK_PRODUCT({
    //   id:id,
    //   name:text,
    //   imageUrl:image,
    //   rating:rating,
    //   price:price,
    //   available:available,
    //   category1:category1,
    //   category2:category2,
    //   size:size,
    //   mrp:mrp
    //   // quantity:quantity
    // }))

    navigate(`/product/${id}`)
  }

  return (
    <>
      <div className="card" style={{
        width: '60%',
        height: '100%',
        boxShadow: '0px 0px 1.5px 1.5px #1e2021',
        cursor: 'pointer',
        margin: '0 0 0 0'
      }}>
        <div style={{width:'100%',height:'100%'}}><NavLink to={`/product/${id}`} style={{
          textDecoration: 'none',
          color: 'black'
        }}
          onClick={handleProduct}>
          <div style={{
            width: '100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <img src={image} className="card-img-top" alt="..."
              style={{
                height: 200,
                maxWidth: 300,
                padding: '3% 2% 0 2%'
              }} />
          </div>
          <div className="card-body" style={{
            width: '100%'
          }}>

            <div className='card-price' style={{
              padding: '1% 0 1px 0',
              display: 'flex',
            }}>
              <div className='actual-price'
                style={{
                  backgroundColor: 'yellow',
                  padding: '2% 5% 2% 5% ',
                  fontFamily: 'Oswald'
                }}>Rs.{price}</div>
              <div className='card-mrp'
                style={{
                  width: '100%',
                  transform: "skewX(10deg)",
                  backgroundColor: 'white',
                  position: 'relative',
                  right: '1%',
                  padding: '1% 0 0 5%'
                }}>
                <div style={{ transform: 'skewX(-10deg)' }}>Rs.{mrp}</div>
              </div>
            </div>
            <div className='card-text' style={{
              fontFamily: 'Roboto Condensed',
              fontSize: '15px',
              color: 'grey',
              padding: '5% 0 0 0',
            }}>
              {text}
            </div>
            <div className='card-rating' style={{
              padding: '1% 0 0 5%',
              fontFamily: 'Roboto Condensed',
              fontWeight: 'bold',
              fontSize: '15px'
            }}>
              {
                rate != 0 ? <>
                  <span>{rate}/5</span> <FaStar style={{
                    color: 'gold',
                    fontSize: '20px',
                    margin: '0 0 0 3%'
                  }} />
                </> : <>Rating not available</>
              }

            </div>
            <div style={{
              padding: '0 0 2% 0'
            }}>Size:{size}</div>
          </div></NavLink></div>
      </div>
    </>
  )
}

export default ProductScreen