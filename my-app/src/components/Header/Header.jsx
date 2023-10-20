import React, { useRef } from "react";
import "../../styles/header.css";
import {makeStyles} from "@mui/styles";
import logo from "../../assets/img/dumble.png";
import { useEffect } from "react";
import { Box , Modal , Typography , Button , TextField ,Container , Paper} from "@mui/material";




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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "10%",
  boxShadow: 24,
  p: 4,
};


const buttonStyle = {
  backgroundColor: '#6f55f2',
  color: 'white',
  padding: '8px 10px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  transition: 'black 0.3s ease' 
}
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
            <Button sx={buttonStyle} onClick={handleOpen}>Register</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f1f1f1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          
          
          width: '350px',
          padding: '30px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#333' }}>Sign In</h1>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '6px', color: '#555' }}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '6px', color: '#555' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              //value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px',
              }}
            />
          </div>
          <button
            type="submit"
            className="btn"
            style={{
              margin: '20px',
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
        </form>
        <p>
          <a href="#" className="forgot-password" style={{ color: '#007bff', textDecoration: 'none' }}>
            Forgot password?
          </a>
        </p>
      </div>
    </div>
         
        </Box>
      </Modal>
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
