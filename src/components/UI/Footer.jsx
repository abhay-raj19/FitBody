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
                <a href="/#">FitBody</a>
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
              <a href="/#">
                <li> Our Program </li>
              </a>
              <a href="/#">
                <li>Our Plan</li>
              </a>
              <a href="/#">
                <li>Become A Member</li>
              </a>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <a href="/#">
                <li>About Us</li>
              </a>
              <a href="#contact-us">
                <li>Contact Us</li>
              </a>
              <a href="/#">
                <li>Support</li>
              </a>
            </ul>
          </div>
        </div>
        <p className="social_media">
          <a href="/#">
            {" "}
            <i href="" class="ri-github-fill"></i>{" "}
          </a>
          <a href="/#">
            {" "}
            <i class="ri-linkedin-box-fill"></i>{" "}
          </a>
          <a href="/#">
            {" "}
            <i class="ri-instagram-line"></i>{" "}
          </a>
          <a href="/#">
            {" "}
            <i class="ri-facebook-circle-fill"></i>{" "}
          </a>
          <a href="/#">
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>{" "}
          </a>

          {/* <i class="ri-twitter-x-fill"></i> */}
        </p>
        <p className="copyright">
          Copyright - {year} developed by abhay-raj19. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
