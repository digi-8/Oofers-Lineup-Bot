const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('getlineup')
        .setDescription('Provides lineups'),
    async execute(interaction) {
        await interaction.reply('This is a lineup');
    },
}