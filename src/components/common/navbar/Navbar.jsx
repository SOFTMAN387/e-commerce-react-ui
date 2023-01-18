import React from 'react';
import "./navbar.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [cat, setCat] = useState();
    console.log(cat);
    if (cat) {
        navigate(`/productLists/${cat}`);

    }
    // const selectCat = () => {
    //   navigate(`/productLists/${cat}`);

    // }

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" className='chk-box' />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        <select onChange={(e) => setCat(e.target.value)}>
                            <option >Categories</option>
                            <option value="sofa">Sofa</option>
                            <option value="chair">Chair</option>
                            <option value="bed">Bed</option>
                            <option value="dinning">Dinning Table</option>
                            <option value="all">All--</option>
                        </select></li>

                    <li><Link to="#">Menu</Link></li>

                </ul>

            </div>
        </nav>
    )
}

export default Navbar