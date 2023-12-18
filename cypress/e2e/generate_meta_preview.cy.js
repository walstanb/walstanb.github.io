describe(
	"Homepage",
	{
		viewportWidth: 1250,
		viewportHeight: 1200,
	},
	() => {
		beforeEach(() => {
			cy.visit("localhost:3000");
		});

		it("Checks if page is loaded", () => {
			cy.get(".page-content").should("exist");
		});

		it("Take Screenshots", () => {
			cy.get(".navbar").invoke("css", "display", "none");
			cy.get(".light-mode").invoke(
				"css",
				"--background-color",
				"#ffffff"
			);
			cy.screenshot("meta-preview", {
				capture: "viewport",
				clip: { x: 25, y: 80, width: 1200, height: 660 },
				overwrite: true,
			});
		});
	}
);
