import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/img/dumble.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo_img">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <h2 className="fitbody">
                <a href="/">FitBody</a>
              </h2>
            </div>
            <p className="abc">
              Fitness and exercise are the keys that unlock the door to a
              healthier, happier, and more vibrant life.
            </p>
          </div>
          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li>
                <a href="#"></a>Our Program
              </li>
              <li>
                <a href="#"></a>Our Plan
              </li>
              <li>
                <a href="#"></a>Become A Member
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                <a href="#"></a>About Us
              </li>
              <li>
                <a href="#"></a>Contact Us
              </li>
              <li>
                <a href="#"></a>Support
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                <a href="#"></a>About Us
              </li>
              <li>
                <a href="#"></a>Contact Us
              </li>
              <li>
                <a href="#"></a>Support
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright - {year} developed by abhay-raj19.All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
