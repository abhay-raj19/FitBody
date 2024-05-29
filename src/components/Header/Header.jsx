import React, { useRef, useEffect } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";
import { useLocation } from "react-router-dom";

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
    display: "Contact Us",
  },
];

const Header = ({ isDarkMode, setDarkMode }) => {
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const headerFunc = () => {
      const header = headerRef.current;
      if (header) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          header.style.background = isDarkMode ? "#111" : "#fff";
          header.classList.add("sticky_header");
        } else {
          header.style.background = "rgba(39, 39, 39, 0.1)";
          header.classList.remove("sticky_header");
        }
      }
    };

    window.addEventListener("scroll", headerFunc);

    return () => {
      window.removeEventListener("scroll", headerFunc);
    };
  }, [isDarkMode]);

  const handleClick = (e, path) => {
    e.preventDefault();
    const target = document.querySelector(path);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={isDarkMode ? "header dark-mode" : "header"}
      ref={headerRef}
    >
      <div className="container">
        <div className="nav__wrapper">
          {/*=====LOGO===*/}
          <div className="logo">
            <div className="logo_img">
              <img src={logo} alt="" />
            </div>
            <div className="icon_logo">
              <h2>
                <a href="/">FitBody</a>
              </h2>
            </div>
          </div>

          {/*====Navigation bar====*/}
          <div className="nav__links">
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <a
                      href={item.path}
                      onClick={(e) => handleClick(e, item.path)}
                      className={
                        location.pathname === item.path ? "active" : null
                      }
                    >
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Nav Right */}
            <div className="nav_right">
              <button className="register_btn">Register</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
