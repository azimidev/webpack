const fs   = require('fs');
const path = require('path');

function ManifestPlugin() {}

ManifestPlugin.prototype.apply = function(compile) {
	compile.plugin('done', stats => {
		fs.writeFileSync(
			path.resolve('dist/manifest.json'),
			JSON.stringify(stats.toJson().assetsByChunkName),
		);
	});
};

module.exports = ManifestPlugin;
