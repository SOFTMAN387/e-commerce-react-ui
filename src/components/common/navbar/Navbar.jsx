import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="navbar-container container">
                <input type="checkbox" className='chk-box' />
                <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
                <ul class="menu-items">
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">
                      <select >
                      <option disabled>Categories</option>
                        <option>sdf</option>
                        <option>sad</option>
                        <option>sad</option>
                        <option>sad</option>
                    </select></Link></li>
                    
                    <li><Link to="#">Menu</Link></li>

                </ul>

            </div>
        </nav>
    )
}

export default Navbar