import React,{ useState } from 'react';
import "./productsdetails.css";
import Navbar from '../../components/common/navbar/Navbar';
import Services from '../../components/common/service/Services';
import Footer from '../../components/common/footer/Footer';
import { Products } from '../../components/Api/ApiData';
import { FlashDeals } from '../../components/Api/ApiData';
import { useParams } from 'react-router-dom';
import Header from '../../components/common/header/Header';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/Store';

const ProductsDetails = () => {
  const [qty,setQty]=useState(1);
  const dispatch = useDispatch();
  const prdct_Id = useParams().id;
  const prdct_Details = Products.filter((x) => x.id == prdct_Id);
  const flash_Details = FlashDeals.filter((x) => x.id == prdct_Id);
  // console.log(flash_Details);
  // console.log(prdct_Details);

  const addFlashItem = (item) => {
    if (item) {
      dispatch(actions.addToCart({item,quantity:qty}));
    }
  }

  const addPrdctItem = (item) => {
    if (item) {
      dispatch(actions.addToCart({item,quantity:qty}));
    }
  }
  // console.log(flash_Details);
  //  console.log(prdct_Details);
  return (
    <>
      <Header />
      <Navbar />
      <div className='details-container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <div className='img-details-div'>{prdct_Details.length === 1 ? <img src={prdct_Details[0].img} alt='detls_img' className='img-fluid' /> : <img src={flash_Details[0].img} alt='detls_img' className='img-fluid' />}

            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <div className='details-div'>
              {prdct_Details.length === 1 ? <h4>{prdct_Details[0].title}</h4> : <h4>{flash_Details[0].title}</h4>}
              {prdct_Details.length === 1 ? <h5>RS-/ {prdct_Details[0].price}</h5> : <h5>RS-/ {flash_Details[0].price}</h5>}
              {prdct_Details.length === 1 ? <span>{prdct_Details[0].desc}</span> : <span>{flash_Details[0].desc}</span>}
              <div>
                <span className='inc-dec-btn'> <i className="fa-sharp fa-solid fa-minus" onClick={()=>setQty(qty==1?1:qty-1)}></i></span>
                <span><b>{qty}</b></span>
                <span className='inc-dec-btn'> <i className="fa-sharp fa-solid fa-plus" onClick={()=>setQty(qty+1)}></i></span>
              </div>
              {prdct_Details.length == 0 ? (<button className='details-btn' onClick={() => addFlashItem(flash_Details)}>Add To Cart</button>) : (<button className='details-btn' onClick={() => addPrdctItem(prdct_Details)}>Add To Cart</button>)}


            </div>

          </div>
        </div>

      </div>
      <Services />
      <Footer />
    </>
  )
}

export default ProductsDetails;