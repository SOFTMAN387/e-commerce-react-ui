import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./topcat.css";
const TopCat = () => {

    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


 return (
       <><div className='topcat-container'>
       <h5 className='flash-deals pl-5'><i class="fa-solid fa-list"></i>  Top Categories !</h5>
       <br></br>
        <Carousel responsive={responsive}
            arrows={false} infiniteLoop autoPlay >
            <div className='single-card'>
                 <div className='img-div'>
                    <img alt="img"src="images/i-phone1.jpg" className='img-fluid'/>
                 </div>   
            </div>
            <div className='single-card'>
                 <div className='img-div'>
                    <img alt="img"src="images/i-phone1.jpg" className='img-fluid'/>
                 </div>   
            </div>
            <div className='single-card'>
                 <div className='img-div'>
                    <img alt="img"src="images/i-phone1.jpg" className='img-fluid'/>
                 </div>   
            </div>
            <div className='single-card'>
                 <div className='img-div'>
                    <img alt="img"src="images/i-phone1.jpg" className='img-fluid'/>
                 </div>   
            </div>
        </Carousel>
       </div>
     
       </>
    )
}

export default TopCat