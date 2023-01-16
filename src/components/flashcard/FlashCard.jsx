import React from 'react'
import "./flashcard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';
import { FlashDeals } from '../Api/ApiData';
const FlashCard = () => {
    const [like, setLike] = useState(0);
    const increment = () => {
        setLike(like + 1);
    }




    const responsive = {
        superLargeDesktop: {

            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <>
            <div className="flashmaincard">

                <h5 className='flash-deals pl-5'><i class="fa-solid fa-wand-magic-sparkles "></i>  Flash Deals !</h5>
                <br></br>



                <Carousel responsive={responsive}>
                    {FlashDeals.map((flahDeals, i) => {
                        return (<>
                            <div className='flashcentercard' key={i}>
                                <div className='flash-single-card'>

                                    <div className='flah-img'>
                                        <p className='flash-offer'>{flahDeals.off}% Off</p>
                                        <img src={flahDeals.img} className="img-fluid" alt="flash_img" />
                                    </div>
                                    <div className='flash-bottom'>
                                        <div className='flash-bottom-left'>

                                            <p>{flahDeals.title}</p>
                                            <div className='flash-rates'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>

                                            </div>
                                            <p className='flash-price' >Rs-/ {flahDeals.price}</p>
                                        </div>
                                        <div className='flash-bottom-right'>

                                            <i className='fa fa-heart' onClick={increment} ><span className='text-dark ml-2'> {like}</span></i>
                                            <i className='fa fa-plus fa-add'></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>)
                    })}


                  
                </Carousel>;



            </div>

        </>
    )
}

export default FlashCard;