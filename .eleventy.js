const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")

module.exports = cfg => {

	cfg.addPassthroughCopy("assets")
	cfg.addWatchTarget("assets");
	cfg.addPlugin(eleventyNavigationPlugin)

	cfg.setBrowserSyncConfig({
		open: true,
	});

	cfg.addShortcode("year", () => `${new Date().getFullYear()}`);

	return {
		dir: {
			input: "src"
		}
	}
}
