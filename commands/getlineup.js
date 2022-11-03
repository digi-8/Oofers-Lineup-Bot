const { SlashCommandBuilder, GuildAuditLogsEntry } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('getlineup')
        .setDescription('Provides lineups')
        .addStringOption(option =>
            option.setName('agents')
                .setDescription('Select Agent')
                .setRequired(true)
                .addChoices(
                    { name: 'Cypher', value: 'cypher' },
                    { name: 'Viper1', value: 'viper1' },
                    { name: 'Viper2', value: 'viper2' },
                )),
    async execute(interaction) {
        const agent = interaction.options.getString('agents');
        if (agent === 'cypher') {
            await interaction.reply({ content: 'This is a cypher lineup', ephemeral: true, files: ["./images/1.png"] });
        } else if (agent === 'viper1') {
            await interaction.reply({ content: 'This is 1st viper lineup', ephemeral: true, files: ["./images/2.png"] });
        } else if (agent === 'viper2') {
            await interaction.reply({ content: 'This is 2nd viper lineup', ephemeral: true, files: ["./images/3.png"] });
        }
    },
}