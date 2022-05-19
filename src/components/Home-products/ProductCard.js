import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaStar } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
const ProductScreen = ({ image, text, price, rating, mrp }) => {
  return (
    <>
      <div className="card" style={{
        width: '17rem',
        height: '100%',
        boxShadow: '0px 0px 1.5px 1.5px #1e2021',
        cursor: 'pointer',
        margin: '0 0 0 0'
      }}>
        <div><NavLink to='/product' style={{
          textDecoration: 'none',
          color: 'black'
        }}>
          <img src={image} className="card-img-top" alt="..."
            style={{
              height: '60%'
            }} />
          <div className="card-body">

            <div className='card-price' style={{
              padding: '1% 0 1px 0',
              display: 'flex',
            }}>
              <div className='actual-price'
                style={{
                  backgroundColor: 'yellow',
                  padding: '2% 5% 2% 5% ',
                  fontFamily: 'Oswald'
                }}>{price}</div>
              <div className='card-mrp'
                style={{
                  width: '100%',
                  transform: "skewX(10deg)",
                  backgroundColor: 'white',
                  position: 'relative',
                  right: '1%',

                }}>
                {mrp}
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
              <span>{rating}/5</span> <FaStar style={{
                color: 'gold',
                fontSize: '20px',
                margin: '0 0 0 3%'
              }} />
            </div>
          </div></NavLink></div>
      </div>
    </>
  )
}

export default ProductScreen