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
                    <img src="images/about.png" />

                </div>
                <div className='image'>
                    <img src="images/contact.png" />

                </div>
                <div className='image'>
                    <img src="images/i-phone1.jpg" />

                </div>
                <div className='image'>
                    <img src="images/i-phone2.jpg" />

                </div>

            </Carousel>

        </>
    )
}

export default Banner