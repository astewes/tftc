import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../logo.svg';

const Header = () => {
	// set a variable 'responsive' to false. Update it using 'setResponsive'
	const [click, setClick] = React.useState(false);

	const handleClick = () => setClick(!click);
	const Close = () => setClick(false);

	return (
		<header>
			<div className={click ? "main-container" : ""} onClick={() => Close()} />
			<nav className="navbar" onClick={e => e.stopPropagation()}>
				<NavLink exact="true" to="/" className="nav-logo">
					<img src={logo} className="App-logo" alt="logo" />
				</NavLink>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<NavLink
							exact="true"
							to="/episodes"
							activeclassname="active"
							className="nav-links"
							onClick={click ? handleClick : null}>Episodes</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact="true"
							to="/listen"
							activeclassname="active"
							className="nav-links"
							onClick={click ? handleClick : null}>Listen</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact="true"
							to="/about"
							activeclassname="active"
							className="nav-links"
							onClick={click ? handleClick : null}>About</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact="true"
							to="/contact"
							activeclassname="active"
							className="nav-links"
							onClick={click ? handleClick : null}>Contact</NavLink>
					</li>
				</ul>
				<div className={click ? "hamburger hamburger--elastic is-active" : "hamburger hamburger--elastic"} onClick={handleClick}>
					<div className="hamburger-box">
						<div className="hamburger-inner"></div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
