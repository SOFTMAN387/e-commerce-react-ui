import React from 'react'
import "./productslists.css";
import { useParams } from 'react-router-dom';
import { Products } from '../../components/Api/ApiData';
import Footer from '../../components/common/footer/Footer';
import Navbar from '../../components/common/navbar/Navbar';
import Header from '../../components/common/header/Header';
import { actions } from '../../redux/Store';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchProductLists = () => {
    const dispatch=useDispatch();
    const searchKey=useParams().cat;
    const searchProducts = Products.filter(prdct =>
        prdct.category==`${searchKey}` ||
        prdct.title==`${searchKey}` );
        // console.log(searchKey);

        const addItem = (items) => {
        const addProduct = Products.filter((x) => x.id == items);
       // console.log(addProduct);
        if (addProduct) {
            dispatch(actions.addToCart(addProduct));
        }
    }
  return (
   <> 
   <Header />
    <Navbar />
   <div className='prdct-list-container'>
       <div className='row'>
           {searchProducts.length == 0 || searchKey=="null" ? <div> Not Found !...</div> : searchProducts.map((items, i) => {
               return (<>

                   <div className=' col-6 col-sm-6 col-lg-4 col-xl-3' key={i}>

                       <div className='prdct-card'>
                           <img src={items.img} className='img-fluid' alt="prdcts_img" />
                           <div className='prdct-card-bottom'>
                               <i className="fa fa-shopping-cart font-icon" aria-hidden="true" onClick={() => addItem(items.id)}></i>
                               <Link to={`/products/${items.id}`}> <i className="fa fa-search font-icon" aria-hidden="true"></i> </Link>
                           </div>

                       </div>

                   </div>
               </>)
           })}

       </div>

   </div>

<Footer />

   </>
  )
}

export default SearchProductLists;