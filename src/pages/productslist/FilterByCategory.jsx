import React from 'react';
import "./productslists.css";
//import ProductsLists from './ProductsLists';
import { useParams } from 'react-router-dom';
import { Products } from '../../components/Api/ApiData';
import ProductsLists from './ProductsLists';
import { Link } from 'react-router-dom';
//import Navbar from '../../components/common/navbar/Navbar';
import Header from '../../components/common/header/Header';

const FilterByCategory = () => {

    const catVal = useParams().cat;
    const filterProducts = Products.filter((x) => x.category == catVal);
    console.log(filterProducts);
    return (<>
        <Header />
        <div className='prdct-list-container'>
            <div className='row'>
                {catVal == "all" ? <ProductsLists /> : filterProducts.map((items, i) => {
                    return (<>

                        <div className=' col-6 col-sm-6 col-lg-4 col-xl-3' key={i}>

                            <div className='prdct-card'>
                                <img src={items.img} className='img-fluid' alt="prdcts_img" />
                                <div className='prdct-card-bottom'>
                                    <i className="fa fa-shopping-cart font-icon" aria-hidden="true"></i>
                                    <a href={`products/${items.id}`}> <i className="fa fa-search font-icon" aria-hidden="true"></i> </a>
                                </div>

                            </div>

                        </div>
                    </>)
                })}

            </div>

        </div>



    </>

    )
}

export default FilterByCategory;