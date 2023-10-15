import React, { useRef } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";
import { useEffect } from "react";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#schedule",
    display: "Schedule",
  },
  {
    path: "#classes",
    display: "Classes",
  },
  {
    path: "#pricing-plan",
    display: "Pricing",
  },
  {
    path: "#contact-us",
    display: "Contact Us"
  }
];
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const headerRef = useRef(null);
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky_header");
    } else {
      headerRef.current.classList.remove("sticky_header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/*=====LOGO===*/}

          <input type="checkbox" id="nav-check" hidden />
          <div className="btn__wrapper">
            <div className="logo">
              <div className="logo_img">
                <img src={logo} alt="" />
              </div>
              <h2>FitBody</h2>
            </div>

            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
          </div>

          {/*====Navigation bar====*/}

          <div className="nav__links">
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <a onClick={handleClick} href={item.path}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav Right */}

            <div className="nav_right">
            <button className="register_btn">Register</button>
              {/* <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
