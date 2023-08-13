import React from "react";

import Project from "./project";

import INFO from "../../data/user";
import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/allProjects.css";

const AllProjects = (props) => {
	const { container_projects_limit, carousel_projects_limit } = props;

	const max_n_container =
		container_projects_limit || INFO.projects.project_list.length;
	const max_n_carousel =
		carousel_projects_limit || INFO.projects.project_list.length;

	return (
		<React.Fragment>
			<div className="all-projects-container">
				{INFO.projects.project_list
					.slice(0, max_n_container)
					.map((project, index) => (
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
				{INFO.projects.project_list
					.slice(0, max_n_carousel)
					.map((project, index) => (
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
