import React from 'react'
import "./arivals.css";
import { CommingSoon } from '../Api/ApiData';
const NewArivals = () => {
  return (
    <>
   <div>
   <h5 className='flash-deals pl-5'><i className="new-icon">NEW</i> Arrivals !</h5>
   <br></br>
   </div>
    <div className="row arival-main-container">
       
        {CommingSoon?.map((arrival,i)=>{
            return(<>
            
            <div className="col-6 col-sm-6 col-md-4" key={i}>
                <div className='arival-single-card' >
                <img src={arrival.img}  className='img-fluid' alt="arvl_img" />
            <div className='arivals-bottom'>
                <h6 ><b>{arrival.title}</b></h6>
                <p>Rs-/ {arrival.price} </p>
            </div>
        </div>
        </div>
            </>)
        })}
       
          
      
       

      
       

    </div>
   

    </>
  )
}

export default NewArivals;