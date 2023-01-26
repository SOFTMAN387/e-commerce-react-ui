import React, { useState } from 'react';
import "./productslists.css";
import { Products } from "../../components/Api/ApiData";
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/Store';
import { Link } from 'react-router-dom';
const ProductsLists = () => {

 //   const [add, DellCart] = useState(true);
    const dispatch = useDispatch();
    const addItem = (items) => {
        const item = Products.filter((x) => x.id == items);
        // console.log(addProduct);
        if (item) {
            dispatch(actions.addToCart({ item, quantity: 1 }));
            alert(`Id: ${items} added successful !..`);
            // DellCart(false);
        }
    }


    // const removeItem = (itemId) => {
    //     dispatch(actions.removeToCart(itemId));
    //     DellCart(true);

    // }
    return (
        <>

            <br></br>
            <h6 className='flash-deals pl-5'><i className="fa fa-2x fa-cart-arrow-down" aria-hidden="true"></i> Deals! Of The Day</h6>
            <br></br>
            <div className='prdct-list-container'>
                <div className='row'>

                    {Products?.map((items,ind) => {
                        return (<>

                            <div className=' col-6 col-sm-6 col-lg-4 col-xl-3' key={ind}  >

                                <div className='prdct-card' key={ind}  >
                                    <img src={items.img}  className='img-fluid'   alt="prdcts_img" />
                                    <div className='prdct-card-bottom' key={ind}  >
                                    <i className="fa fa-shopping-cart font-icon"   onClick={() => addItem(items.id)} aria-hidden="true"></i> 
                                        {/* {add == true ? (<i className="fa fa-shopping-cart font-icon" onClick={() => addItem(items.id)} aria-hidden="true"></i>) : (<i className="fa fa-trash" onClick={() => removeItem(items.id)} aria-hidden="true"></i>)} */}

                                        <Link to={`products/${items.id}`}   > <i className="fa fa-search font-icon" aria-hidden="true"></i> </Link>



                                    </div>

                                </div>

                            </div>




                        </>)
                    })}


                </div>

            </div>
            <br></br>
        </>
    )
}

export default ProductsLists;