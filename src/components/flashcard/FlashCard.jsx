import React from 'react'
import "./flashcard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const FlashCard = () => {
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

     <h5 className='flash-deals pl-5'>Flash Deals !</h5>
     <br></br>

         

    <Carousel responsive={responsive}>
            <div className='flashcentercard'>
             <div className='flash-single-card'>
             <div className='flah-img'>
                    <p>50% Off</p>
                        <img src="images/i-phone2.jpg" />
                    </div>
                    <div className='flash-bottom'>
                        <div className='flash-bottom-left'>
                           
                            <p>Title</p>
                            <div className='flash-rates'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            </div>
                            <p className='flash-price' >Rs-/ 10,000</p>
                        </div>
                        <div className='flash-bottom-right'>
                       
                            <i className='fa fa-heart'><span className='text-dark ml-2'>0</span></i>
                            <i className='fa fa-plus '></i>
                        </div>
                    </div>
                  
             </div>
             </div>
               
             <div className='flashcentercard'>
             <div className='flash-single-card'>
             <div className='flah-img'>
                    <p>50% Off</p>
                        <img src="images/i-phone2.jpg" />
                    </div>
                    <div className='flash-bottom'>
                        <div className='flash-bottom-left'>
                          
                           
                            <p>Title</p>
                            <div className='flash-rates'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            </div>
                            <p className='flash-price'>Rs-/ 10,000</p>
                        </div>
                        <div className='flash-bottom-right'>
                         <i className='fa fa-heart'><span className='text-dark ml-2'>0</span></i>
                            <i className='fa fa-plus '></i>
                           
                        </div>
                    </div>
             </div>
             </div>
                   
             <div className='flashcentercard'>
             <div className='flash-single-card'>
                
             <div className='flah-img'>
                    <p>50% Off</p>
                        <img src="images/i-phone2.jpg" />
                    </div>
                    <div className='flash-bottom'>
                        <div className='flash-bottom-left'>
                          
                           
                            <p>Title</p>
                            <div className='flash-rates'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            </div>
                            <p className='flash-price'>Rs-/ 10,000</p>
                        </div>
                        <div className='flash-bottom-right'>
                         <i className='fa fa-heart'><span className='text-dark ml-2'>0</span></i>
                          
                            <i className='fa fa-plus '></i>
                        </div>
                    </div>
             </div>
             </div>
             <div className='flashcentercard'>
             <div className='flash-single-card'>
                
             <div className='flah-img'>
                    <p>50% Off</p>
                        <img src="images/i-phone2.jpg" />
                    </div>
                    <div className='flash-bottom'>
                        <div className='flash-bottom-left'>
                          
                          
                            <p>Title</p>
                            <div className='flash-rates'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            </div>
                            <p className='flash-price'>Rs-/ 10,000</p>
                        </div>
                        <div className='flash-bottom-right'>
                         <i className='fa fa-heart'><span className='text-dark ml-2'>0</span></i>
                            <i className='fa fa-plus '></i>
                           
                        </div>
                    </div>
             </div>
             </div>
             <div className='flashcentercard'>
             <div className='flash-single-card'>
                
             <div className='flah-img'>
                    <p>50% Off</p>
                        <img src="images/i-phone2.jpg" />
                    </div>
                     <div className='flash-bottom'>
                        <div className='flash-bottom-left'>
                          
                          
                            <p>Title</p>
                            <div className='flash-rates'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            </div>
                            <p className='flash-price'>Rs-/ 10,000</p>
                        </div>
                        <div className='flash-bottom-right'>
                         <i className='fa fa-heart'><span className='text-dark ml-2'>0</span></i>
                            <i className='fa fa-plus '></i>
                           
                        </div>
                    </div>
             </div>
             </div>
             <div className='flashcentercard'>
             <div className='flash-single-card'>
                
             <div className='flah-img'>
                    <p>50% Off</p>
                        <img src="images/i-phone2.jpg" />
                    </div>
                    <div className='flash-bottom'>
                        <div className='flash-bottom-left'>
                          
                           
                            <p>Title</p>
                            <div className='flash-rates'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            </div>
                            <p className='flash-price'>Rs-/ 10,000</p>
                        </div>
                        <div className='flash-bottom-right'>
                         <i className='fa fa-heart'><span className='text-dark ml-2'>0</span></i>
                            <i className='fa fa-plus '></i>
                           
                        </div>
                    </div>
             </div>
             </div>
             <div className='flashcentercard'>
             <div className='flash-single-card'>
                
             <div className='flah-img'>
                    <p>50% Off</p>
                        <img src="images/i-phone2.jpg" />
                    </div>
                    <div className='flash-bottom'>
                        <div className='flash-bottom-left'>
                          
                           
                            <p>Title</p>
                            <div className='flash-rates'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            </div>
                            <p className='flash-price'>Rs-/ 10,000</p>
                        </div>
                        <div className='flash-bottom-right'>
                         <i className='fa fa-heart'><span className='text-dark ml-2'>0</span></i>
                           
                            <i className='fa fa-plus '></i>
                        </div>
                    </div>
             </div>
             </div>
             <div className='flashcentercard'> 
             <div className='flash-single-card'>
                
             <div className='flah-img'>
                    <p>50% Off</p>
                        <img src="images/i-phone2.jpg" />
                    </div>
                    <div className='flash-bottom'>
                        <div className='flash-bottom-left'>
                          
                         
                            <p>Title</p>
                            <div className='flash-rates'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            </div>
                            <p className='flash-price'>Rs-/ 10,000</p>
                        </div>
                        <div className='flash-bottom-right'>
                         <i className='fa fa-heart'><span className='text-dark ml-2'>0</span></i>
                            
                            <i className='fa fa-plus '></i>
                        </div>
                    </div>
             </div>
             </div>
            </Carousel>;
 


   </div>
   
   </>
  )
}

export default FlashCard;