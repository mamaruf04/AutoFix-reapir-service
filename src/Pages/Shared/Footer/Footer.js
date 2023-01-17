import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    // <footer className="text-center p-5 bg-dark text-white ">
    //   <small>&copy; AUTOFIX | {new Date().getFullYear()} </small>
    // </footer>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-7">
            <h5>Contact Us</h5>
            <p>Address: 1234 Main St</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@autofix.com</p>
          </div>
          <div className="col-md-4 col-4">
            <div className="d-flex flex-column align-items-center justify-content-center text-decoration-none">
              <h5>Quick Links</h5>
              <Link className="text-decoration-none" to="#">
                Home
              </Link>

              <Link className="text-decoration-none" to="/about">
                About
              </Link>

              <Link className="text-decoration-none" to="/services">
                Services
              </Link>

              <Link className="text-decoration-none" to="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="col-md-3 text-md-end text-center">
            <h5>Follow Us</h5>
            <ul className="social-list justify-content-center justify-content-md-end">
              <li>
                <a href="facebook.com">
                  <i className="uil uil-facebook icon"></i>
                </a>
              </li>
              <li>
                <a href="twitter.com">
                  <i className=" uil uil-twitter icon"></i>
                </a>
              </li>
              <li>
                <a href="instagram.com">
                  <i className="uil uil-instagram icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">
              Copyright © {new Date().getFullYear()} AUTOFIX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
