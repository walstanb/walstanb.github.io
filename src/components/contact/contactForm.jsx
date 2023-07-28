import React, { useState } from "react";

import "./styles/contactForm.css";

const FORM_ENDPOINT =
	"https://public.herotofu.com/v1/60b90230-2c74-11ee-8cff-57ce276e0e2f"; // TODO - update to the correct endpoint

const ContactForm = () => {
	const [status, setStatus] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		// Anything you need to inject dynamically
		const injectedData = {
			DYNAMIC_DATA_EXAMPLE: 123,
		};
		const inputs = e.target.elements;
		const data = {};

		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].name) {
				data[inputs[i].name] = inputs[i].value;
			}
		}

		Object.assign(data, injectedData);

		fetch(FORM_ENDPOINT, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				// It's likely a spam/bot request, so bypass it to validate via captcha
				if (response.status === 422) {
					Object.keys(injectedData).forEach((key) => {
						const el = document.createElement("input");
						el.type = "hidden";
						el.name = key;
						el.value = injectedData[key];

						e.target.appendChild(el);
					});

					e.target.setAttribute("target", "_blank");
					e.target.submit();

					throw new Error("Please finish the captcha challenge");
				}

				if (response.status !== 200) {
					throw new Error(response.statusText);
				}

				return response.json();
			})
			.then(() => setStatus("I'll get back to you as soon as possible"))
			.catch((err) => setStatus(err.toString()));
	};

	if (status) {
		return (
			<>
				<div className="form-title">Thank you!</div>
				<div className="form-subtitle">{status}</div>
			</>
		);
	}

	return (
		<div className="form-wrapper">
			<form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
				<div className="form-title">Send me a message</div>
				<div className="mb-3 pt-0">
					<input
						type="text"
						placeholder="Your name"
						name="name"
						className="contact-name"
						required
					/>
				</div>
				<div className="mb-3 pt-0">
					<input
						type="email"
						placeholder="Email"
						name="email"
						className="contact-email"
						required
					/>
				</div>
				<div className="mb-3 pt-0">
					<textarea
						placeholder="Your message"
						name="message"
						className="contact-message"
						required
					/>
				</div>
				<div className="mb-3 pt-0">
					<button className="contact-send-button" type="submit">
						Send message
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
