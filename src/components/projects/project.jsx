import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "dompurify"; // Import dompurify

import "./styles/project.css";
import skillBadges from "../../data/skillBadges";

const Project = (props) => {
	const { title, description, image, image_alt, linkText, link, skills } =
		props;

	// Sanitize the HTML content using dompurify
	const sanitizedSkills = skills.map((skill) => ({
		__html: DOMPurify.sanitize(skillBadges[skill]),
	}));

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link} target="_blank">
					<div className="project-image">
						<img src={image} alt={image_alt} />
					</div>
					<div className="project-container">
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-skill-badges">
							{sanitizedSkills.map((skill, index) => (
								<div
									className="project-skill"
									key={index}
									dangerouslySetInnerHTML={skill}
								/>
							))}
						</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
