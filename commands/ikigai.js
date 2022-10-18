const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ikigai')
		.setDescription('know thyself to know others'),
	async execute(interaction) {
		await interaction.reply('This is an experiment of littlefish Foundation. Be someones second brain!');
	},
};

