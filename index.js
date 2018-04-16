//Discord
const Discord = require('discord.js');
const client = new Discord.Client();

//SQL Database
const sql = require('sqlite');

//settings
const settings = require('./settings.json');
client.on('ready', () => {
    console.log(client.user.username + 'is online!');
});

client.on('message', (message) => {
    if(message.content == '!ping'){
        message.reply('pong!');
    }
});

client.login(process.env.BOT_TOKEN);
