import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
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
	);
};

export default AllProjects;
