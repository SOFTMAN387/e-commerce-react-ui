import React from 'react'
import "./carts.css";
import Header from '../../../components/common/header/Header';
import Services from '../../../components/common/service/Services';
import Navbar from '../../../components/common/navbar/Navbar';
import Footer from '../../../components/common/footer/Footer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/Store';

const Carts = () => {
    const dispatch=useDispatch();
    const cartItems=useSelector((state)=>state);
    const removeItem=(itemId)=>{
        if(itemId){
            dispatch(actions.removeToCart(itemId))
        }

    }
  return (
   <>
        <Header />
        <Navbar />
      <div className='cart-container'>
                <h2 className='cart-title'>Your Cart !</h2>
              
                <div className='cart-top'>
                <Link to="/"> <button>Continue Shopping</button></Link>
                  
                    <span>
                        <Link to=''> cart(5)</Link><span>  </span>
                        <Link to=''>WishList(5)</Link>
                    </span>{cartItems.length==0?(<span></span>):
                    <Link to="/checkout/123"> <button className='prcd-btn'>CheckOut</button></Link>}
                   


                </div>
                <hr></hr>
                {cartItems.length==0  ? (<h2>Empty</h2>):cartItems.map((items)=>{
                    return(<>
                        <div className='cart-middle'>
                    <div className='img-fluid'>
                        <img src={items[0].img} alt='abc' />
                      <span className='cart-item-details'>
                      <span>{items[0].title}</span>
                       <span>Id:{items[0].id}</span>
                       <span><b>Rs/- {items[0].price}</b></span>
                        </span>
                    </div>
                 <span className='inc-btn'>
                 <button><i class="fa-sharp fa-solid fa-minus"></i></button>
                 <span> 5 </span>
                 <button> <i class="fa-sharp fa-solid fa-plus"></i></button>      
                 </span>
            <i class="fa-sharp fa-2x fa-solid fa-xmark" onClick={()=>removeItem(items[0])}></i>
            </div>
                    </>)
                })}
             
                
          
         <div>

         </div>
                <br/>
                {cartItems.length==0?( <div className='prcd-btn-div'>
                <Link to="/"> <button className='prcd-btn'>Shope Now !</button></Link>
               
                </div>): 
                <div className='prcd-btn-div'>
                <Link to="/checkout/123"> <button className='prcd-btn'>Proceed To Order!</button></Link>
               
                </div>}
               
               

            </div>
        <Services />
        <Footer />
   </>
  )
}

export default Carts