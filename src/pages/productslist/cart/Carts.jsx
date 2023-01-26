import React from 'react'
import "./carts.css";
import Header from '../../../components/common/header/Header';
import Services from '../../../components/common/service/Services';
import Navbar from '../../../components/common/navbar/Navbar';
import Footer from '../../../components/common/footer/Footer';
import { Link } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/Store';

const Carts = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state) || 0 || [];

    //Removing sing Item from Cart..............
    const removeItem = (itemId) => {
        if (itemId) {
            dispatch(actions.removeToCart(itemId));
           // alert(`Id:${itemId} removed Succesful..!`);
           toast( `Id: ${itemId} Removed successful 🦄 !..`, {
            position: "top-center",
            type:"error",
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
    //Removing all items to Cart.........

    const clearCart = () => {
        if (cartItems) {
            dispatch(actions.removeAllCart());
          //  alert("Your Cart is Empty");
          toast( `Your Cart is Empty 🦄 !..`, {
            position: "top-center",
            type:"warning",
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
    return (
        <>
            <Header />
            <ToastContainer />
            <Navbar />
            <div className='cart-container'>
                <h2 className='cart-title'>Your Cart !</h2>

                <div className='cart-top'>
                    <Link to="/"> <button>Continue Shopping</button></Link>

                    <span>
                        <Link to=''> cart({cartItems?.length})</Link><span>  </span>
                        <Link to=''>WishList({cartItems?.length})</Link>
                    </span>{cartItems.length === 0 ? (<span></span>) :
                        <button className='prcd-btn' onClick={clearCart}>Clear All !</button>}



                </div>
                <hr></hr>
                {(cartItems?.length === 0 )? (<h2>Empty</h2>) : cartItems?.map((items) => {

                    return (<>

                        <div className='cart-middle'>
                            <div className='img-fluid'>
                                <img src={items.item?.[0].img} alt='abc' />
                                <span className='cart-item-details'>
                                    <span>{items.item?.[0].title}</span>
                                    <span>Id:{items.item?.[0].id}</span>
                                    <span><b>Rs/- {items.item?.[0].price}</b></span>
                                </span>
                            </div>
                            <span className='inc-btn'>

                                <span> Qty : {items.quantity}</span>

                            </span>
                            <i class="fa-sharp fa-2x fa-solid fa-xmark" onClick={() => removeItem(items.item?.[0].id)}></i>
                        </div>
                    </>)
                })}



                <div>

                </div>
                <br />
                {cartItems.length === 0 ? (<div className='prcd-btn-div'>
                    <Link to="/"> <button className='prcd-btn'>Shope Now !</button></Link>

                </div>) : (
                    <div className='prcd-btn-div'>
                        <Link to="/checkout"> <button className='prcd-btn'>Proceed To Order!</button></Link><br />


                    </div>

                )}



            </div>
            <Services />
            <Footer />
        </>
    )
}

export default Carts