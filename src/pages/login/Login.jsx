import React from 'react'
import "./login.css";
import { Link } from 'react-router-dom';
import Header from '../../components/common/header/Header';
import Navbar from '../../components/common/navbar/Navbar';
import Annoucement from '../../components/common/annoucement/Annoucement';
import Footer from '../../components/common/footer/Footer';
const Login = () => {
  return (
   <>
   <Header />
   <Annoucement />
   <Navbar />
    <div className="login-div">
            <div className="loginContainer">
                <input
                    type="email"
                    placeholder="username"
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
                <h5>Don't have an account ?.</h5>
                <br/>
                <Link to="/register">Register here !.</Link>
                </div>
            </div>
        </div>
        <Footer />
   </>
  )
}

export default Login;