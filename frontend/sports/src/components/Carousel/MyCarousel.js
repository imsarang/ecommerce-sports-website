import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import '../styles/mycarousel.css'
import decaBrand from '../images/deca-brand.svg'
import carouselImg2 from '../images/carouselImg2.png'
import carouselImg1 from '../images/carouselImg1.png'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCaretLeft, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { imageArr } from '../general.js'
import Carouselitem from './Carouselitem';

const MyCarousel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/* <img src={carouselImg2} style={{
          width:'19%',
          position:'absolute',
          left:'600px',

        }}/> */}
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> */}
        {/* <div className="carousel-inner">
          <Carouselitem image={carouselImg2} textOne={'Travel'} textTwo={'Essentials'} textThree={'Starting From'} price={199} />
          <Carouselitem image={carouselImg1} textOne={'Sports'} textTwo={'Discount'} textThree={'Buy Now'} />

          <div className="carousel-item active">
            <img src="" className="d-block w-100" alt="..." />
          </div>
        </div> */}
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <div className='contain-icon-left'>
            <FontAwesomeIcon className='left-icon' icon={faAngleLeft} />
          </div>
          <div className='btn-adj-left'></div>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <div className='contain-icon-right'>
            <FontAwesomeIcon className='right-icon' icon={faAngleRight} />
          </div>
          <div className='btn-adj-right'></div>
        </button> */}
      </div>
    </div>
  )
}

export default MyCarousel