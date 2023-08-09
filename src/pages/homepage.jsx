import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faMedium,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Footer from "../components/common/footer";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import { trackAction } from "../components/common/analytics";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="content-wrapper page-1">
				<div className="homepage-container">
					<div className="homepage-first-area">
						<div className="homepage-first-area-left-side">
							<div className="title homepage-title">
								{INFO.homepage.title}
							</div>

							<div className="subtitle homepage-subtitle">
								<span>{INFO.homepage.description}</span>
							</div>
						</div>

						<div className="homepage-first-area-right-side">
							<div className="homepage-image-container">
								<div className="homepage-image-wrapper">
									<img
										src="homepage.jpg"
										alt="about"
										className="homepage-image"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="homepage-socials">
						<a
							href={INFO.socials.medium}
							target="_blank"
							rel="noreferrer"
							onClick={() =>
								trackAction(
									"Socials",
									"Clicked",
									"Homepage Medium"
								)
							}
						>
							<FontAwesomeIcon
								icon={faMedium}
								className="homepage-social-icon"
							/>
						</a>
						<a
							href={INFO.socials.github}
							target="_blank"
							rel="noreferrer"
							onClick={() =>
								trackAction(
									"Socials",
									"Clicked",
									"Homepage GitHub"
								)
							}
						>
							<FontAwesomeIcon
								icon={faGithub}
								className="homepage-social-icon"
							/>
						</a>
						<a
							href={INFO.socials.linkedin}
							target="_blank"
							rel="noreferrer"
							onClick={() =>
								trackAction(
									"Socials",
									"Clicked",
									"Homepage LinkedIn"
								)
							}
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								className="homepage-social-icon"
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
									"Homepage Instagram"
								)
							}
						>
							<FontAwesomeIcon
								icon={faInstagram}
								className="homepage-social-icon"
							/>
						</a>
						<a
							href={`mailto:${INFO.main.email}`}
							target="_blank"
							rel="noreferrer"
							onClick={() =>
								trackAction(
									"Socials",
									"Clicked",
									"Homepage Email"
								)
							}
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								className="homepage-social-icon"
							/>
						</a>
					</div>

					<div className="homepage-projects">
						<AllProjects />
					</div>

					<div className="homepage-after-title">
						<div className="homepage-articles">
							{myArticles.map((article, index) => (
								<div
									className="homepage-article-wrapper"
									key={(index + 1).toString()}
								>
									<Article
										key={(index + 1).toString()}
										date={article().date}
										title={article().title}
										description={article().description}
										link={article().link}
										link_text={article().link_text}
									/>
								</div>
							))}
						</div>

						<div className="homepage-works">
							<Works />
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

export default Homepage;
