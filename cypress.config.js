const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		screenshotsFolder: "public/images",
		experimentalStudio: true,
		setupNodeEvents(on, config) {
			on("task", {
				log(message) {
					console.log(message);
					return null;
				},
			});
		},
	},
});
