import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import { useSelector } from 'react-redux';

const Header = () => {
  const cartLenght=useSelector((state)=>state.length)
    return (
       <>
           <div className="topbar">
        <div className="topContainer">
          <Link to="/" style={{ color: "gray", textDecoration: "none", fontWeight: "bold" }}> <h3 className='top-logo'>Softman</h3></Link>
        

          <div className='log-reg-btn'>
          <Link to="/register"><button className="topButton">Register</button></Link>
          <Link to="/login"> <button className="topButton">Login</button></Link>
          <Link to="/login"> <i className='fa fa-user text-dark mr-2'></i></Link>
            
           
            <Link to="/cart/123">
            <button className="cart-btn">
           
            <i className="fa fa-light fa-shopping-cart cart-val-btn" ></i> 
            {cartLenght >5?(<span className="cart-val">5+</span>):<span className="cart-val">{cartLenght}</span>}
            </button>
            </Link>
           
          </div>

        </div>

      </div>
     

       </>
    )
}

export default Header;