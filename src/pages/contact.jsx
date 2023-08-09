import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import Socials from "../components/about/socials";
import ContactForm from "../components/contact/contactForm";

import INFO from "../data/user";
import SEO from "../data/seo";
import { trackAction } from "../components/common/analytics";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			<div className="page-content">
				<div className="content-wrapper page-4">
					<div className="contact-container">
						<div className="title contact-title">
							You wanna get in touch? Me too!
						</div>

						<div className="subtitle contact-subtitle">
							I'm glad that I got your attention. I'm open to any
							feedback, questions or suggestions. If you'd like to
							reach out to me directly, please feel free send an
							email at{" "}
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
								onClick={() =>
									trackAction(
										"Socials",
										"Clicked",
										"Contact Email"
									)
								}
							>
								{INFO.main.email}
							</a>{" "}
							or send me a message using the form below and I'll
							get back to you as soon as possible. If you'd like
							to connect on social media, and catch up with what
							I'm upto you can find me on instagram{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
								onClick={() =>
									trackAction(
										"Socials",
										"Clicked",
										"ContactInstagram"
									)
								}
							>
								{"@"}
								{INFO.socials.instagram.split("/").reverse()[0]}
							</a>
							, I do post stuff quite regularly and you can always
							send me DM. Thanks again for your interest, and I
							look forward to hearing from you!
						</div>

						<div className="contact-main">
							<div className="contact-form">
								<ContactForm />
							</div>

							<div className="socials-container">
								<div className="contact-socials">
									<Socials />
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

export default Contact;
