describe("Projects Page", () => {
	beforeEach(() => {
		cy.visit("localhost:3000/#/projects");
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

	it("Checks Projects Page", () => {
		cy.viewport("macbook-15");
		cy.contains("Projects").should("exist");
		cy.contains("Projects").parent(".active").should("exist");

		cy.get(".projects-container").should("exist");

		cy.get(".projects-title").should("exist");
		cy.get(".projects-subtitle").should("exist");
		cy.get(".projects-buttons .projects-button").should("have.length", 2);

		cy.get(".all-projects-carousel").should("have.css", "display", "none");
		cy.get(".all-projects-container").should(
			"not.have.css",
			"display",
			"none"
		);
		cy.get(".all-projects-container .all-projects-project").should(
			"have.length",
			6
		);
		cy.get(".all-projects-container .all-projects-project").each(
			(project) => {
				cy.wrap(project).contains("View Project");
			}
		);

		cy.viewport("iphone-xr");
		cy.get(".all-projects-container").should("have.css", "display", "none");
		cy.get(".all-projects-carousel").should(
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
				Cypress.log({
					name: link,
					message: response.status,
				});
			});
		});
	});
});
