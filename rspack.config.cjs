const { defineConfig } = require("@rspack/cli");

module.exports = defineConfig({
	context: __dirname,
	entry: "./main.js",
	devtool: "eval-source-map"
});
