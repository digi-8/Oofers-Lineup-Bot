const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require('discord.js');

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
        
        const collector = interaction.channel.createMessageComponentCollector({ componentType: ComponentType.Button, time: 15000 });

            const maps2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('Haven')
                    .setLabel('Haven')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('Icebox')
                    .setLabel('Icebox')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('Pearl')
                    .setLabel('Pearl')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('Split')
                    .setLabel('Split')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('1036245600590643241'),
                new ButtonBuilder()
                    .setCustomId('Back')
                    .setLabel('Back')
                    .setStyle(ButtonStyle.Secondary),
                );
            
            collector.on('collect', async i => {
                if (i.customId === 'More') {
                    await i.update({ content: 'Which Map?', ephemeral: true, components: [maps2] });
                }
                if (i.customId === 'Back') {
                    await i.update({ content: 'Which Map?', ephemeral: true, components: [maps2] });
                }
                if (i.customId === 'Ascent') {
                    await i.reply({ content: 'This is Ascent', ephemeral: true });
                }
                if (i.customId === 'Bind') {
                    await i.reply({ content: 'This is Bind', ephemeral: true });
                }
                if (i.customId === 'Breeze') {
                    await i.reply({ content: 'This is Breeze', ephemeral: true });
                }
                if (i.customId === 'Fracture') {
                    await i.reply({ content: 'This is Fracture', ephemeral: true });
                }
                if (i.customId === 'Haven') {
                    await i.reply({ content: 'This is Haven', ephemeral: true });
                }
                if (i.customId === 'Icebox') {
                    await i.reply({ content: 'This is Icebox', ephemeral: true });
                }
                if (i.customId === 'Pearl') {
                    await i.reply({ content: 'This is Pearl', ephemeral: true });
                }
                if (i.customId === 'Split') {
                    await i.reply({ content: 'This is Split', ephemeral: true });
                }
            });
            

            collector.on('end', collected => {
                console.log(`Collected ${collected.size} interactions.`);
            });
    },
}