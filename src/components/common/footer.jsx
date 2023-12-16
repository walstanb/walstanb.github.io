import React from "react";
import { Link } from "react-router-dom";
import INFO from "../../data/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiscord,
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { trackAction } from "../common/analytics";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-socials">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
						onClick={() =>
							trackAction("Socials", "Clicked", "Footer Email")
						}
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="footer-social-icon"
						/>
					</a>
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noreferrer"
						onClick={() =>
							trackAction("Socials", "Clicked", "Footer GitHub")
						}
					>
						<FontAwesomeIcon
							icon={faGithub}
							className="footer-social-icon"
						/>
					</a>
					<a
						href={INFO.socials.discord}
						target="_blank"
						rel="noreferrer"
						onClick={() =>
							trackAction("Socials", "Clicked", "Footer Discord")
						}
					>
						<FontAwesomeIcon
							icon={faDiscord}
							className="footer-social-icon"
						/>
					</a>
					<a
						href={INFO.socials.instagram}
						target="_blank"
						rel="noreferrer"
						onClick={() =>
							trackAction(
								"Socials",
								"Clicked",
								"Footer Instagram"
							)
						}
					>
						<FontAwesomeIcon
							icon={faInstagram}
							className="footer-social-icon"
						/>
					</a>
					<a
						href={INFO.socials.linkedin}
						target="_blank"
						rel="noreferrer"
						onClick={() =>
							trackAction("Socials", "Clicked", "Footer LinkedIn")
						}
					>
						<FontAwesomeIcon
							icon={faLinkedin}
							className="footer-social-icon"
						/>
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
