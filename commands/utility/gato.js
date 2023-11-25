const gatosLista = require('./data/gifs.json');

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gato')
		.setDescription('Envia un gato'),
	async execute(interaction) {
		
		var gato = Math.floor(Math.random() * gatosLista.length);
		await interaction.reply(gato);
	},
};