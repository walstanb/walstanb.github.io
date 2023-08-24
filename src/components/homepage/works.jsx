import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { trackAction } from "../common/analytics";
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
								<div className="work-details">
									<img
										src={
											experience.company_logo ||
											"https://static.licdn.com/sc/h/aajlclc14rr2scznz5qm2rj9u"
										}
										alt={experience.company}
										className="work-image"
									/>
									<div className="work-title">
										{experience.company}
									</div>
									<div className="work-roles">
										{experience.roles.map(
											(role, roleIndex) => (
												<div
													className="work-role"
													key={roleIndex}
												>
													<div className="work-subtitle">
														{role.role}
													</div>
													<div className="work-duration">
														{role.duration}
													</div>
													<div className="work-description">
														<ul>
															{role.description
																.split("\n")
																.map(
																	(
																		point,
																		idx
																	) => (
																		<li
																			key={
																				idx
																			}
																		>
																			{
																				point
																			}
																		</li>
																	)
																)}
														</ul>
													</div>
												</div>
											)
										)}
									</div>
								</div>
							</div>
						))}
						<button
							className="works-button access-resume-button"
							onClick={() => {
								trackAction(
									"Resume",
									"Downloaded Resume",
									"Resume"
								);
								window.open(INFO.about.resume, "_blank");
							}}
						>
							Resume
						</button>
						<button
							className="works-button ghpr-button"
							onClick={() => {
								trackAction(
									"Github",
									"Cliked Github Pull Requests",
									"Github Pull Requests"
								);
								window.open(
									"https://github.com/pulls?q=is%3Apr+author%3Awalstanb+archived%3Afalse+is%3Amerged+sort%3Acomments-desc+"
								);
							}}
						>
							GitHub Pull Requests
						</button>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
