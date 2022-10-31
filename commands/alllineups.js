const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('alllineups')
        .setDescription('Provides all lineups'),
    async execute(interaction) {
        const maps1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('Ascent')
                .setLabel('Ascent')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('Bind')
                .setLabel('Bind')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('Breeze')
                .setLabel('Breeze')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('Fracture')
                .setLabel('Fracture')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('More')
                .setLabel('More')
                .setStyle(ButtonStyle.Secondary),
        );
        await interaction.reply({ content: 'Which map?', ephemeral: true, components: [maps1] });      
    },
}