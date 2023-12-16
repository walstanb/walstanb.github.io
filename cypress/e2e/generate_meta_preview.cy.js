describe("Homepage", () => {
	beforeEach(() => {
		cy.visit("localhost:3000");
	});

	it("Checks if page is loaded", () => {
		cy.get(".page-content").should("exist");
	});
	it("Take Screenshots", () => {
		cy.viewport(1826, 1008);
		cy.get(".navbar").invoke("css", "display", "none");
		cy.screenshot("meta-preview", {
			capture: "viewport",
			clip: { x: 310, y: 40, width: 1200, height: 630 },
			overwrite: true,
		});
	});
});
