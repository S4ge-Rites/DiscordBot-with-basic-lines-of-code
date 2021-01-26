const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.login('BOTCODE');
client.on('message', message => {if (message.content === (`${prefix}info`)) {
	
    message.channel.send('Test Server by S4ge_Rites');
} 
else if (message.content === `${prefix}server`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
}} )
 const prefix = '/'