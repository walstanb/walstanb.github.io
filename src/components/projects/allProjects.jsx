import React from "react";

import Project from "./project";

import INFO from "../../data/user";
import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<React.Fragment>
			<div className="all-projects-container">
				{INFO.projects.project_list.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
							image={project.image}
							image_alt={project.image_alt}
							skills={project.skills}
						/>
					</div>
				))}
			</div>
			<Carousel
				showThumbs={false}
				showArrows={false}
				autoPlay
				swipeScrollTolerance={30}
				preventMovementUntilSwipeScrollTolerance
				infiniteLoop
				stopOnHover
				className="all-projects-carousel"
			>
				{INFO.projects.project_list.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
							image={project.image}
							image_alt={project.image_alt}
							skills={project.skills}
						/>
					</div>
				))}
			</Carousel>
		</React.Fragment>
	);
};

export default AllProjects;
