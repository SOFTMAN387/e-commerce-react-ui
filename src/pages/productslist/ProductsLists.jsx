import React from 'react';
import "./productslists.css";
import { Link } from 'react-router-dom';
import { Products } from "../../components/Api/ApiData";
const ProductsLists = () => {
    return (
        <>
        <br></br>
         <h6 className='flash-deals pl-5'><i className="fa fa-2x fa-cart-arrow-down" aria-hidden="true"></i> Deals! Of The Day</h6>
        <br></br>
            <div className='prdct-list-container'>
                <div className='row'>
                    {Products.map((items => {
                        return (<>
                       
                            <div className=' col-6 col-sm-6 col-lg-4 col-xl-3'>
                            
                                <div className='prdct-card'>
                                <img src={items.img} className='img-fluid' alt="prdcts_img"/>
                                <div className='prdct-card-bottom'>
                                    <i className="fa fa-shopping-cart font-icon" aria-hidden="true"></i>
                                    <Link to={`products/${items.id}`}> <i className="fa fa-search font-icon" aria-hidden="true"></i> </Link>
                                    
                                   

                                </div>
                                  
                                </div>
                               
                            </div>

                       
                           

                        </>)
                    }))}


                </div>

            </div>
            <br></br>
        </>
    )
}

export default ProductsLists;