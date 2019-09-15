const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
client.on('ready', () => {
client.user.setPresence({ game: { name: 'with hugs and snuggles!'} , type: 1 });
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
    if(message.content.includes('not valid')) {
        if (message.author.bot) return;
        message.reply('you are valid and loved!');
    }
    if(message.content.includes('no valid')) {
        if (message.author.bot) return;
        message.reply('you are valid and loved!');
    }
    if(message.content.includes('Not valid')) {
        if (message.author.bot) return;
        message.reply('you are valid and loved!');
    }
    if(message.content.includes('No valid')) {
        if (message.author.bot) return;
        message.reply('you are valid and loved!');
    }
    if(message.content.includes('invalid')) {
        if (message.author.bot) return;
        message.reply('you are valid and loved!');
    }
    if(message.content.includes('Invalid')) {
        if (message.author.bot) return;
        message.reply('you are valid and loved!');
    }
    if(message.content.includes('non valid')) {
        if (message.author.bot) return;
        message.reply('you are valid and loved!');
    }
    if(message.content.includes('non-valid')) {
        if (message.author.bot) return;
        message.reply('you are valid and loved!');
    }
    if(message.content.includes('non valid')) {
        if (message.author.bot) return;
        message.reply('you are valid and loved!');
    }
    if (message.content === "val!info") {
    if (message.author.bot) return;
    console.log("sending info!")
    message.channel.send("Hi! I am Validity, a bot run by scoutie#2020! I respond to anyone who calls themselves not valid, as thats just not true.💙")
    }
    if (message.content === "val!stat") {
    if (message.author.bot) return;
    console.log("gathering stats")
    message.channel.send('Pinging...')
        .then(msg => {
            msg.edit(`Current ping: ${msg.createdTimestamp - message.createdTimestamp}ms. I am in ${client.guilds.size} servers with ${client.users.size} users. Currently logged in as ${client.user.tag}.`);
        });
    }
    if (message.content.startsWith("val!uptime")) {
        console.log('Somebody just used the uptime command.')
        message.channel.send(`I have been up for ${client.uptime * .001} seconds. Started at ${client.readyAt}.`)
    }
    if (message.content === "val!help") {
        if (message.author.bot) return;
        console.log("sending info!")
        message.channel.send("Commands: val!stat, val!uptime, val!help. Repsonds to multiple forms of 'not valid'.")
        }
});
client.login(config.token)
// And you, too, are valid!