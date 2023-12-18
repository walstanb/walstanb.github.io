const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: "2uprbd",
	e2e: {
		experimentalStudio: true,
		setupNodeEvents(on, config) {
			on("before:browser:launch", (browser = {}, launchOptions) => {
				if (browser.name === "chrome") {
					launchOptions.args.push("--cast-initial-screen-width=1600");
					launchOptions.args.push("--cast-initial-screen-height=900");

					return launchOptions;
				}

				if (browser.name === "electron") {
					launchOptions.preferences.width = 1600;
					launchOptions.preferences.height = 900;

					return launchOptions;
				}
			});
		},
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
