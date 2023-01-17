import React from 'react'
import "./footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <><footer className="footer-distributed">

      <div className="footer-left">

        <h4>Er. <span>Manish Gupta</span></h4>

        <p className="footer-links">
          <Link to="" className="link-1">Home</Link>

          <Link to="">Blog</Link>

          <Link to="">Pricing</Link>

          <Link to="">About</Link>

          <Link to="">Faq</Link>

          <Link to="">Contact</Link>
        </p>

        <p className="footer-company-name">Company Name © 2020</p>
      </div>

      <div className="footer-center">

        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>Patna,Bihar-India</span> Chhoti nagla patna city</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+6205988966</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p><Link to="mailto:support@company.com">support@company.com</Link></p>
        </div>

      </div>

      <div className="footer-right">

        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">

          <Link to=""><i className="fa fa-facebook"></i></Link>
          <Link to=""><i className="fa fa-twitter"></i></Link>
          <Link to=""><i className="fa fa-linkedin"></i></Link>
          <Link to=""><i className="fa fa-github"></i></Link>

        </div>

      </div>

    </footer></>
  )
}

export default Footer