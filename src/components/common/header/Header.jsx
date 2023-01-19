import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import SearchBar from '../searchbar/SearchBar';
import { Products } from '../../Api/ApiData';

const Header = () => {
    return (
       <>
           <div className="topbar">
        <div className="topContainer">
          <Link to="/" style={{ color: "gray", textDecoration: "none", fontWeight: "bold" }}> <h3 className='top-logo'>Softman</h3></Link>
         <div><SearchBar products={Products} /></div>

          <div className='log-reg-btn'>
          <Link to="/register"><button className="topButton">Register</button></Link>
          <Link to="/login"> <button className="topButton">Login</button></Link>
          <Link to="/login"> <i className='fa fa-user text-dark mr-2'></i></Link>
            
           
            <Link to="/cart/123">
            <button className="cart-btn">
            <i className="fa fa-light fa-shopping-cart cart-val-btn" ></i> <span className="cart-val">4</span>
            </button>
            </Link>
           
          </div>

        </div>

      </div>
      <div className='announcement'>Super Deal ! Free Shipping on Orders Over $1000</div>

       </>
    )
}

export default Header;