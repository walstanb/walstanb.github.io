describe("About Page", () => {
	beforeEach(() => {
		cy.visit("localhost:3000/#/about");
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

	it("Checks About Page", () => {
		cy.viewport("macbook-15");
		cy.contains("About").should("exist");
		cy.contains("About").parent(".active").should("exist");

		cy.get(".about-container").should("exist");

		cy.get(".about-main .about-right-side").should("exist");

		cy.get(".about-main .about-right-side .about-title").should("exist");
		cy.get(".about-main .about-right-side .about-subtitle").should("exist");
		cy.get(".about-main .about-right-side .about-works").should("exist");

		cy.get(".about-main .about-left-side").should("exist");
		cy.get(".about-main .about-left-side .about-image-container").should(
			"exist"
		);
		cy.get(
			".about-main .about-left-side .about-image-container img"
		).should("exist");
		cy.get(".about-main .about-left-side .about-image-container img")
			.should("have.attr", "src")
			.should("include", "about.jpg");

		cy.get(".about-main .about-left-side .about-skills-container").should(
			"exist"
		);
		cy.get(
			".about-main .about-left-side .about-skills-container .about-skills-categories .about-skills-category"
		).should("have.length", 5);
		cy.get(
			".about-container .about-skills-mobile .about-skills-categories .about-skills-category"
		).should("have.length", 5);
		cy.get(".about-container .about-skills-mobile").should(
			"have.css",
			"display",
			"none"
		);

		cy.viewport("iphone-x");

		cy.get(".about-main .about-left-side .about-skills-container").should(
			"have.css",
			"display",
			"none"
		);
		cy.get(".about-container .about-skills-mobile").should(
			"not.have.css",
			"display",
			"none"
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
