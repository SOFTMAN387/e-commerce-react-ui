import React from 'react';
import { Link } from 'react-router-dom';
import "../login/login.css";
import Header from '../../components/common/header/Header';
import Annoucement from '../../components/common/annoucement/Annoucement';
import Navbar from '../../components/common/navbar/Navbar';
import Footer from '../../components/common/footer/Footer';
const Register = () => {
  return (
   <>
   <Header />
   <Annoucement />
   <Navbar />
     <div className="login-div">
            <div className="loginContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="name"
                    // onChange={handleChange}
                    className="loginInput"
                /> <input
                    type="text"
                    placeholder="Mobile"
                    id="mobile"
                    // onChange={handleChange}
                    className="loginInput"
                /> <input
                    type="email"
                    placeholder="email"
                    id="email"
                    // onChange={handleChange}
                    className="loginInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    // onChange={handleChange}
                    className="loginInput"
                />
                <button
                //  disabled={loading} 
                // onClick={handleClick}
                 className="loginButton">
                    Login
                </button>
                {/* {error && <span>{error.message}</span>} */}
                {/* {loginErr ? <span style={{ color: "red" }}>Wrong Credentials !!...</span> : <span></span>} */}
                <div>
                <br></br>
                <hr/>
                <h5> have an account ?.</h5>
                <br/>
                <Link to="/login">SignIn here !.</Link>
                </div>
            </div>
        </div>
        <Footer />
   </>
  )
}

export default Register;