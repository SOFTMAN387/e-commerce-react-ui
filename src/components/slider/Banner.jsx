import React from 'react'
//import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./slider.css";
const Banner = () => {


    return (
        <>
            <Carousel infiniteLoop autoPlay>
                <div className='image'>
                    <img src="images/sliderImg/banner1.avif"  alt='banner_img'/>

                </div>
                <div className='image'>
                    <img src="images/sliderImg/banner2.avif"   alt='banner_img' />

                </div>
                <div className='image'>
                    <img src="images/sliderImg/banner3.jpg"   alt='banner_img' />

                </div>
                <div className='image'>
                    <img src="images/sliderImg/banner4.avif"   alt='banner_img'  />

                </div>

            </Carousel>

        </>
    )
}

export default Banner