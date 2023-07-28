import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import Works from "../components/homepage/works";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

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
			<div className="content-wrapper">
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
							<div className="about-works">
								<Works />
							</div>
						</div>

						<div className="about-left-side">
							<div className="about-image-container">
								<div className="about-image-wrapper">
									<img
										src="about.jpg"
										alt="about"
										className="about-image"
									/>
								</div>
							</div>

							<div className="about-socials">
								<Socials />
							</div>
						</div>
					</div>
					<div className="about-socials-mobile">
						<Socials />
					</div>
				</div>
				<div className="page-footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
