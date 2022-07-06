import React from 'react'

const Carouselitem = ({image,textOne,textTwo,textThree,price}) => {
  return (
        <>
        <div className="carousel-item ">
      <img src={image} className="carousel-img" alt=""/>
        <div className='carousel-content'>
          <div className='carousel-text'>
            <span id='text-one'
            style={{
              'font-size':'35px',
              'text-align':'center'
            }}>{textOne}</span>
            <span id='text-two'
            style={{
              'font-size':'27px'
            }}>{textTwo}</span>
            
          </div>
          
          <div className='carousel-btn'>
            <button type='button' className='btn btn-primary w-100 p-2 px-3'
            style={{
              'background-color':'rgb(6,110,180)',
              'font-family':'Bebas Neue',
              'font-size':'18px'
            }}>Shop Now</button>
          </div>
        </div>
        <div className='textThree'>
        <div style={{
          'color': 'white',
          'font-family': 'Arial',
          'text-shadow': '2px 2px rgb(30, 29, 29)',
          'font-size':'17px'
        }}>{textThree}</div>
        <div className='price'
        style={{
          'background-color' : "yellow",
          'width':'100%',
          'text-align':'center',
          'font-family':'Times New Roman',
          'font-weight':'bold',
          'font-size':'30px'
        }}>{price}</div>
        </div>
    </div>
        </>
  )
}

export default Carouselitem