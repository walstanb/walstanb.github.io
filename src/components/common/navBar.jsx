import React from "react";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./darkModeSwitch";
import "./styles/darkModeSwitch.css";
import ReactGA from "react-ga";

import "./styles/navBar.css";

const NavBar = ({ active }) => {
	ReactGA.pageview(active);
	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "/"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "/about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "/projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "/contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
							<li>
								<div className="dark-mode-switch">
									<DarkModeSwitch />
								</div>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
