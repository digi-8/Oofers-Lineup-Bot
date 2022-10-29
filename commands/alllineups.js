const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('alllineups')
        .setDescription('Provides all lineups'),
    async execute(interaction) {
        const maps = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('Breeze')
                .setLabel('Breeze')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('Split')
                .setLabel('Split')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('Bind')
                .setLabel('Bind')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('Pearl')
                .setLabel('Pearl')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('Ascent')
                .setLabel('Ascent')
                .setStyle(ButtonStyle.Primary),
        );
        await interaction.reply({ content: 'Which map?', components: [maps] });
    },
}