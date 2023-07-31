describe("Contact Page", () => {
	beforeEach(() => {
		cy.visit("localhost:3000/#/contact");
	});

	it("Checks if page is loaded", () => {
		cy.get(".page-content").should("exist");
	});

	it("Checks Navbar", () => {
		cy.get(".navbar").should("exist");

		cy.contains("Home").click();
		cy.url().should("include", "/");
		cy.contains("Home").parent(".active").should("exist");
		cy.get(".homepage-container").should("exist");

		cy.contains("About").click();
		cy.url().should("include", "/about");
		cy.contains("About").parent(".active").should("exist");
		cy.get(".about-container").should("exist");

		cy.contains("Projects").click();
		cy.url().should("include", "/projects");
		cy.contains("Projects").parent(".active").should("exist");
		cy.get(".projects-container").should("exist");

		cy.contains("Contact").click();
		cy.url().should("include", "/contact");
		cy.contains("Contact").parent(".active").should("exist");
		cy.get(".contact-container").should("exist");

		cy.get(".switch").click();
		cy.get("body.dark-mode").should("exist");
		cy.get(".switch").click();
		cy.get("body.light-mode").should("exist");

		cy.contains("Home").click();
		cy.url().should("include", "/");
	});

	it("Checks Contact Page", () => {
		cy.viewport("macbook-15");
		cy.contains("Contact").should("exist");
		cy.contains("Contact").parent(".active").should("exist");

		cy.get(".contact-container").should("exist");

		cy.get(".contact-title").should("exist");
		cy.get(".contact-subtitle").should("exist");

		cy.get(
			".contact-main .socials-container .contact-socials .socials .social"
		).should("have.length", 4);

		cy.get(".contact-main .contact-form .form-wrapper form").should(
			"exist"
		);
	});

	it("Checks Footer", () => {
		cy.get(".footer").should("exist");
		cy.get(".footer").contains("Home").should("exist");
		cy.get(".footer").contains("About").should("exist");
		cy.get(".footer").contains("Projects").should("exist");
		cy.get(".footer").contains("Contact").should("exist");
	});

	it("Checks Links", () => {
		cy.get("a:not([href*='mailto:'])").each((page) => {
			const link = page.prop("href");
			cy.request({
				url: link,
				failOnStatusCode: false,
			}).then((response) => {
				cy.task("log", {
					href: link,
					message: response.status,
				});
			});
		});
	});
});
