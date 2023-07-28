import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "../../data/user";

import "./styles/works.css";
// import { Navigate } from "react-router-dom";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						{INFO.experience.map((experience, index) => (
              <div className="work" key={index}>
                <img
                    src={experience.company_logo}
                    alt={experience.company}
                    className="work-image"
                  />
                <div className="work-details">
									<div className="work-title">
										{experience.company}
									</div>
                <div className="work-roles">
                {experience.roles.map((role, roleIndex) => (
                  <div className="work-role" key={roleIndex}>
                    <div className="work-subtitle">{role.role}</div>
                    <div className="work-duration">{role.duration}</div>
                    <div className="work-description">
                      <ul>
                        {role.description.split("\n").map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
                    </div>
                  </div>
							</div>
						))}
						<button
							className="access-resume-button"
							onClick={() => window.open(INFO.about.resume, '_blank')}
						>
							Resume
						</button>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
