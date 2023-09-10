import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import Works from "../components/homepage/works";
import skillBadges from "../data/skillBadges";
import DOMPurify from "dompurify";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	skillBadges.categories_list.forEach((category) => {
		const skills = skillBadges.categories[category];
		skillBadges.categories[category].sanitizedSkills = skills.map(
			(skill) => ({
				__html: DOMPurify.sanitize(skillBadges[skill]),
			})
		);
	});

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			<div className="page-content">
				<div className="content-wrapper page-2">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									<div className="about-subtitle-text">
										{INFO.about.description.split("\n")[0]}
									</div>
									<ul>
										{INFO.about.description
											.split("\n")
											.slice(1)
											.map((point, idx) => (
												<li key={idx}>{point}</li>
											))}
									</ul>
								</div>
								<div className="about-skills-mobile">
									<div className="about-skills-title">
										Tech Skills
									</div>
									<div className="about-skills-categories">
										{skillBadges.categories_list.map(
											(category, index) => (
												<div
													className="about-skills-category"
													key={index}
												>
													<div className="about-skills-category-subtitle">
														{category}:
													</div>
													<div className="about-skills">
														{skillBadges.categories[
															category
														].sanitizedSkills.map(
															(skill, index) => (
																<div
																	className="about-skill"
																	key={index}
																	dangerouslySetInnerHTML={
																		skill
																	}
																></div>
															)
														)}
													</div>
												</div>
											)
										)}
									</div>
								</div>
								<div className="about-works">
									<Works />
								</div>
							</div>
							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="images/about.png"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-skills-container">
									<div className="about-skills-title">
										Tech Skills
									</div>
									<div className="about-skills-categories">
										{skillBadges.categories_list.map(
											(category, index) => (
												<div
													className="about-skills-category"
													key={index}
												>
													<div className="about-skills-category-subtitle">
														{category}:
													</div>
													<div className="about-skills">
														{skillBadges.categories[
															category
														].sanitizedSkills.map(
															(skill, index) => (
																<div
																	className="about-skill"
																	key={index}
																	dangerouslySetInnerHTML={
																		skill
																	}
																></div>
															)
														)}
													</div>
												</div>
											)
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
