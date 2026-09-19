const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.once('ready', () => {
  console.log(`Bot prêt ! Connecté en tant que ${client.user.tag}`);
});

client.login('MTU1MDY4OTExMTgxMDExNzY1Mg.GmAtBx.KFaypAwNRbWYVdXplRfsFtVVCxayMu5B0Y1OFw');