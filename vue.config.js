const fs = require('fs');
const path = require('path');
const MODULE_PATH = path.resolve('src/template');
const entry = fs.readdirSync(MODULE_PATH).reduce((entries, entry) => {
	entries[path.basename(entry, '.vue')] = path.resolve(MODULE_PATH, entry);
	return entries;
}, {});
// vue.config.js
module.exports = {
	outputDir: path.resolve(__dirname, 'template'),
	configureWebpack: (webpackConfig) => {
		webpackConfig.entry = {
			...entry,
		};
		webpackConfig.output.filename = '[name].js';
		webpackConfig.resolve.symlinks = false;
	},
};
