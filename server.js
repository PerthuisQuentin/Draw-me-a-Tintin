"use strict";

const Hapi = require('hapi');
const Vision = require('vision');
const Inert = require('inert');

const Log = require('src/logger.js');
const Config = require('src/config.js');

const Setup = require('src/setup');

var server = new Hapi.Server();

const HOST = 'localhost';
const PORT = 8001;

server.connection({
	host: HOST,
	port: PORT
});

server.register([
	{
		register: Vision
	},
	{
		register: Inert
	}
], err => {
	if (err) return Log.error("Server can't load a plugin :", err);

	server.register({
		register: Setup

	}, err => {
		if (err) return Log.error("Server can't setup views and routes:", err);

		server.start(err => {
			if (err) return Log.error("Server didn't start:", err);

			Log.info('Server listening on port ' + PORT);
		});
	})
});