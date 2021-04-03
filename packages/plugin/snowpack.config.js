/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	buildOptions: { clean: true },
	mount: { public: '/' },
	plugins: ['@snowpack-angular/plugin'],
	routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
};
