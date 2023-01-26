import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Services from '../common/service/Services';
import Navbar from '../common/navbar/Navbar';
const About = () => {
  return (
    <>
    <Header />
    <Navbar />
        <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
        <h2 className='text-primary fw-bold mt-5'>
            About Us
        </h2>
        <p lorem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam dolorem voluptatibus, velit hic distinctio iste repellendus eligendi recusandae cumque. Sint delectus odit harum quos earum cum expedita numquam deleniti.
            Sint delectus odit harum quos earum cum expedita numquam deleniti.
            Sint delectus odit harum quos earum cum expedita numquam deleniti.
            Sint delectus odit harum quos earum cum expedita numquam deleniti.
        </p>
        <Link to="/contact" className="btn btn-outline-primary">Contact Us</Link>

        </div>
        <div className='col-md-6 d-flex justify-content-center'>
        <img src="/images/about.png" style={{height:'400px;',width:'500px'}} alt="about_us" />
            
        </div>

        </div>

        </div>
        <Services />
        <Footer />
    </>
  )
}

export default About