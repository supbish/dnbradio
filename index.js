"use strict";

const passToClient = {
	input: function (client, target, command, args) {

		client.sendToBrowser('dnbradio', {
			command: command,
			args: args
		});

		client.sendMessage(`Got ${command} command.`, target.chan);
	},

	allowDisconnected: true
};

module.exports = {
	onServerStart: api => {
		api.Commands.add("tune", passToClient);
		api.Commands.add("play", passToClient);
		api.Commands.add("stop", passToClient);
	},
};

