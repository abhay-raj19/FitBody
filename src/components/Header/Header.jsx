import React,{useRef} from 'react'
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png'
import { useEffect } from 'react';



const nav__links = [
  {
    path: '#home',
    display: 'Home'
  },
  {
    path: '#schedule',
    display: 'Schedule'
  },
  {
    path: '#classes',
    display: 'Classes'
  },
  {
    path: '#pricing-plan',
    display: 'Pricing'
  },
  {
    path:'#Logout',
    display:'Logout'
  },
]


const Header = () => {
  const headerRef = useRef(null);
  const headerFunc = () =>{
    if (
      document.body.scrollTop >80 ||
      document.documentElement.scrollTop >80
    ) {
      headerRef.current.classList.add("sticky_header");
    } else{
      headerRef.current.classList.remove("sticky_header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll",headerFunc);
  
    return () => window.removeEventListener("scroll",headerFunc);
  }, []);

  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left:0,
      top:location - 80,
    });

  }
  

  return (
    <header className='header' ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">

          {/*=====LOGO===*/}

          <div className="logo">
            <div className="logo_img">
              <a href="/"><img src={logo} alt="logo" /></a>
            </div>
            <h2><a href="/">FitBody</a></h2>
          </div>

          {/*====Navigation bar====*/}


          <div className="navigation">
            <ul className="menu">
              {
                nav__links.map(item => (
                  <li className="nav_item">
                  <a onClick={handleClick} href={item.path}>{item.display}</a></li>
                ))
              }
            </ul>
          </div>


          {/* Nav Right */}


          <div className="nav_right">
            <button className="register_btn">Register</button>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;