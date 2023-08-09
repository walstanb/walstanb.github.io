const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
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
