import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import '../styles/mySlider.css'
import { Images } from 'react-bootstrap-icons'
import { FaAngleLeft, FaAngleRight, FaGoogleDrive } from 'react-icons/fa'
import SliderCard from './SliderCard'
import { ReactDOM } from 'react'
const Slider = ({ items }) => {

    const mystyle = {
        backgroundColor: 'gold',
    }
    const [stylePrev, setStylePrev] = useState(true)
    const [styleNext, setStyleNext] = useState(true)
    // const carWidth = useRef()
    const imgRef = useRef()
    const carousel = useRef()
    const handleCarouselPrev = () => {
        if (carousel.current.scrollLeft <= 0) {
            setStylePrev(true)
            setStyleNext(true)
        }
        carousel.current.scrollLeft -= imgRef.current.offsetWidth
        // console.log(carousel.current.scrollLeft);

    }

    const handleCarouselNext = () => {
        if (carousel.current.scrollLeft >= 0) { setStylePrev(true) }
        if (carousel.current.scrollLeft <= 0) setStyleNext(true)
        carousel.current.scrollLeft += imgRef.current.offsetWidth
    }
    
    useEffect(() => {
        if (carousel.current.scrollLeft > 0) setStylePrev(true)
        else setStylePrev(false)

        console.log(items);        
    }, [stylePrev, styleNext])

    return (<>
        <div className='arrows'>
            <button type='button' className='pre-btn'
                onClick={handleCarouselPrev}>
                <FaAngleLeft />
            </button>
            <button type='button' className='nxt-btn'
                onClick={handleCarouselNext}>
                <FaAngleRight />
            </button>
        </div>

        <div className='outer-carousel'>

            <div className='inner-carousel' ref={carousel}>
                {
                    items.map((item) => {
                        return <>
                            <SliderCard imgRef={imgRef}
                                image={item.imageUrl}
                                name={item.name}
                                price={item.price}
                                rating={item.avgRate} 
                                id={item._id}
                                available={item.maxAvailable}
                                category1={item.category1}
                                category2={item.category2}
                                size={item.size1}
                                mrp={item.mrp}
                                />
                        </>
                    })
                }
            </div>
        </div>
        {/* <div className='indicators'>
                <button></button>
        </div> */}
    </>
    )
}

export default Slider