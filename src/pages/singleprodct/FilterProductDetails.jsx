import React from 'react'

import "./productsdetails.css";
import Header from '../../components/common/header/Header';
import Navbar from '../../components/common/navbar/Navbar';
import Services from '../../components/common/service/Services';
import Footer from '../../components/common/footer/Footer';
import { Products } from '../../components/Api/ApiData';
import { useParams } from 'react-router-dom';


const FilterProductDetails = () => {
    const filteredPrdct_Id=useParams().id;
  const filterDetails=Products.filter((x)=>x.id==filteredPrdct_Id);
  return (
    <>

    <Header />
    <Navbar />
        <div className='details-container'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                <div className='img-details-div'><img src={filterDetails[0].img} alt='detls_img' className='img-fluid' /> 
                
                </div>
            </div>
    
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                <div className='details-div'>
                <h4>{filterDetails[0].title}</h4>
                <h5>RS-/ {filterDetails[0].price}</h5>
               <span>{filterDetails[0].desc}</span>
                 <div>
                      <span className='inc-dec-btn'> <i className="fa-sharp fa-solid fa-minus"></i></span>
                          <span><b>5</b></span>
                        <span className='inc-dec-btn'> <i className="fa-sharp fa-solid fa-plus"></i></span>
                    </div>
                         <button className='details-btn'>Add To Cart</button>
                    
                 </div>
    
            </div>
         </div>
    
        </div>
        <Services />
        <Footer />
       </>
     
  )
}

export default FilterProductDetails;