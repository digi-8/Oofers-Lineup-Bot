const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, ComponentType } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
        if (interaction.isCommand()) { 
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(`Error executing ${interaction.commandName}`);
                console.error(error);
            }
        } else if (interaction.isButton()) {
            console.log(interaction);

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
                await i.update({ content: 'Which Map?', ephemeral: true, components: [maps2] });
            });
            
            collector.on('end', collected => {
                console.log(`Collected ${collected.size} interactions.`);
            });
        }       
	},
};