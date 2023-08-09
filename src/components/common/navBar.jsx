import React from "react";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./darkModeSwitch";
import "./styles/darkModeSwitch.css";

import "./styles/navBar.css";

const NavBar = ({ onPageChange, active }) => {
	const handleNavButtonClick = (nextPageIndex) => {
		onPageChange(nextPageIndex);
	};
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
								<Link
									to="/"
									onClick={() => handleNavButtonClick(0)}
								>
									Home
								</Link>
							</li>
							<li
								className={
									active === "/about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link
									to="/about"
									onClick={() => handleNavButtonClick(1)}
								>
									About
								</Link>
							</li>
							<li
								className={
									active === "/projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link
									to="/projects"
									onClick={() => handleNavButtonClick(2)}
								>
									Projects
								</Link>
							</li>
							<li
								className={
									active === "/contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link
									to="/contact"
									onClick={() => handleNavButtonClick(3)}
								>
									Contact
								</Link>
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
