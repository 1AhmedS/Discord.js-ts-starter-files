import 'dotenv/config';
import { Client } from 'discord.js';

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});

client.once('ready', (client) => {
    const line = '─'.repeat(50);
    console.log(line);
    console.log(`🌐 ${client.user.tag} is now online!`);
    console.log(line);
    console.log(`🤖 Bot Username  : ${client.user.username}`);
    console.log(`🆔 Bot ID        : ${client.user.id}`);
    console.log(`📅 Launched On   : ${new Date().toLocaleString()}`);
    console.log(line);
    console.log(`📊 Connected to  : ${client.guilds.cache.size} servers`);
    console.log(`👥 Total Users   : ${client.users.cache.size}`);
    console.log(line);
    console.log(`© 2024 AhmedSamir - All Rights Reserved.`);
    console.log(`🔗 GitHub: https://github.com/1AhmedS`);
    console.log(`🌐 Twitter: https://x.com/nsl2j`);
    console.log(`💬 Discord: https://discord.gg/hTkzz2ZzJA`);
    console.log(line);
    console.log('✅ Bot is fully operational and ready to serve!');
    console.log(line);
});
  
client.login(process.env.TOKEN);
