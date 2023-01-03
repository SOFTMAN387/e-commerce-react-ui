import React from 'react'
import "./arivals.css";
const NewArivals = () => {
  return (
    <>
   <div>
   <h5 className='flash-deals pl-5'><i className="new-icon">NEW</i> Arrivals !</h5>
   <br></br>
   </div>
    <div className="row arival-main-container">
        <div className="col-6 col-sm-6 col-md-4">
        <div className='arival-single-card'>
        <img src="images/i-phone2.jpg" className='img-fluid' />
            <div className='arivals-bottom'>
                <h6><b>Title</b></h6>
                <p>Rs-/2000 </p>
            </div>
        </div>
          
        </div>
        <div className="col-6 col-sm-6 col-md-4">
        <div className='arival-single-card'>
        <img src="images/i-phone2.jpg" className='img-fluid' />
            <div className='arivals-bottom'>
                <h6><b>Title</b></h6>
                <p>Rs-/2000 </p>
            </div>
        </div>
          
        </div>

        <div className="col-6 col-sm-6 col-md-4">
        <div className='arival-single-card'>
        <img src="images/i-phone2.jpg" className='img-fluid' />
            <div className='arivals-bottom'>
                <h6><b>Title</b></h6>
                <p>Rs-/2000 </p>
            </div>
        </div>
          
        </div>

        <div className="col-6 col-sm-6 col-md-4">
        <div className='arival-single-card'>
        <img src="images/i-phone2.jpg" className='img-fluid' />
            <div className='arivals-bottom'>
               <h6><b>Title</b></h6>
                <p>Rs-/2000 </p>
            </div>
        </div>
          
        </div>
       

    </div>
   

    </>
  )
}

export default NewArivals;