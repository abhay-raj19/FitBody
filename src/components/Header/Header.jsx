import React, { useRef } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
gsap.registerPlugin(useGSAP);

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
	const [open, setOpen] = useState(false);
	const [headerBackground, setHeaderBackground] = useState(
		isDarkMode ? "#111" : "#fff"
	);
	const headerRef = useRef(null);

	const toggleDarkMode = () => {
		setDarkMode(!isDarkMode);
	};

	const toggleMobileMenu = () => {
		const navCheck = document.getElementById("nav-check");
		if (navCheck) {
			navCheck.checked = !navCheck.checked;
		}
	};

	const headerFunc = () => {
		if (
			document.body.scrollTop > 80 ||
			document.documentElement.scrollTop > 80
		) {
			setHeaderBackground(isDarkMode ? "#111" : "#fff");
			headerRef.current.classList.add("sticky_header");
		} else {
			headerRef.current.classList.remove("sticky_header");
		}
	};

	useEffect(() => {
		setHeaderBackground(isDarkMode ? "#111" : "#fff");
		window.addEventListener("scroll", headerFunc);
		window.scrollTo(window.scrollX, window.scrollY - 1);
		window.scrollTo(window.scrollX, window.scrollY + 1);

		return () => {
			window.scrollTo(window.scrollX, window.scrollY - 1);
			window.scrollTo(window.scrollX, window.scrollY + 1);
			return window.removeEventListener("scroll", headerFunc);
		};
	}, [isDarkMode]);

	const handleClick = (e) => {
		e.preventDefault();

		const targetAttr = e.target.getAttribute("href");
		const location = document.querySelector(targetAttr).offsetTop;

		window.scrollTo({
			left: 0,
			top: location - 80,
		});
		toggleMobileMenu();
	};

	const headerClass = isDarkMode ? "header dark-mode" : "header";

	return (
		<header
			className={headerClass}
			ref={headerRef}
			style={{
				background: "rgba(39, 39, 39, 0.1)",
				borderRadius: "20px",
				backdropFilter: "blur(60px)",
				border: "2px solid rgba(255, 255, 255, 0.2)",
				boxShadow: "0 0 80px rgba(0, 0, 0, 0.3)"
			}}
		>
			<div className="container">
				<div className="nav__wrapper">
					{/*=====LOGO===*/}

					<input type="checkbox" id="nav-check" hidden />
					<div className="btn__wrapper">
						<div className="logo">
							<div className="logo_img">
								<img src={logo} alt="" />
							</div>
							<div className="icon_logo">
								<h2>
									<a href="/">FitBody</a>
								</h2>
							</div>
							<div
								className="styles-container"
								onClick={toggleDarkMode}
							>
								<div className="styles-icon">🌙</div>
								<div className="styles-icon">🔆</div>
								<div
									className="styles-ball"
									style={
										!isDarkMode
											? { transform: 'translateX(0%)' }
											: { transform: 'translateX(140%)' }
									}
								/>
							</div>
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
										<a
											onClick={handleClick}
											href={item.path}
										>
											{item.display}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Nav Right */}

						<div className="nav_right">
							<button className="register_btn" ><Link to="/register">Register</Link></button>
							<button className="register_btn" ><Link to="/login">Login</Link></button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
