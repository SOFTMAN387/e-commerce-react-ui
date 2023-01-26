import React from 'react';
import "./productslists.css";
import { useParams } from 'react-router-dom';
import { Products } from '../../components/Api/ApiData';
import ProductsLists from './ProductsLists';
import { Link } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import { actions } from '../../redux/Store';
import { useDispatch } from 'react-redux';


const FilterByCategory = () => {
    const dispatch=useDispatch();
    const catVal = useParams().cat;
    const filterProducts = Products.filter((x) => x.category === catVal);
    //console.log(filterProducts);
    const addItem = (items) => {
        const item = Products.filter((x) => x.id === items);
       // console.log(addProduct);
        if (item) {
            dispatch(actions.addToCart({item,quantity:1}));
         //   alert(`Id: ${items} added successful !..`);
         toast( `Id: ${items} added successful 🦄 !..`, {
            position: "top-center",
            type:"success",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
        }


    }
    return (<>
        <Header />
        <ToastContainer />
        <div className='prdct-list-container'>
            <div className='row'>
                {catVal === "all" ? <ProductsLists /> : filterProducts.map((items, i) => {
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

export default FilterByCategory;