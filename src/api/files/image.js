"use strict";

const Config = require('src/config.js');

module.exports = {
	method: 'GET',
	path: '/image/{path*}',
	handler: {
	    directory: {
	        path: Config.paths.image,
	        listing: false,
	        index: false
	    }
	},
	config: {
		description: 'Image',
        tags: ['api', 'ressources', 'image']
	}
};