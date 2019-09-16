const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
client.on('ready', () => {
client.user.setPresence({ game: { name: 'with hugs and snuggles!'} , type: 1 });
  console.log(`Logged in as ${client.user.tag}!`);
});
let guildArray = client.guilds.array();
client.on('guildCreate', (guild) => {
    console.log('I have joined the guild ' + guild.name)
    let SendChannel = guild.channels.find("name", "general") || guild.channels.find("name", "chat");
    if(SendChannel) SendChannel.send(`Hi! I'm Validity, the Discord bot that wants to let you know your valid! If any problems arise, please DM scoutie#2020 with the issue. Thank you, and you are valid!`)
});
client.on("message", message => {
    if(message.content.includes('not valid')) {
        if (message.author.bot) return;
        const transhuggy = client.emojis.find(emoji => emoji.name === "transhuggy");
        message.reply(`you are valid and loved! ${transhuggy}`);
    }
    if(message.content.includes('no valid')) {
        if (message.author.bot) return;
        const transhuggy = client.emojis.find(emoji => emoji.name === "transhuggy");
        message.reply(`you are valid and loved! ${transhuggy}`);
    }
    if(message.content.includes('Not valid')) {
        if (message.author.bot) return;
        const transhuggy = client.emojis.find(emoji => emoji.name === "transhuggy");
        message.reply(`you are valid and loved! ${transhuggy}`);
    }
    if(message.content.includes('No valid')) {
        if (message.author.bot) return;
        const transhuggy = client.emojis.find(emoji => emoji.name === "transhuggy");
        message.reply(`you are valid and loved! ${transhuggy}`);
    }
    if(message.content.includes('invalid')) {
        if (message.author.bot) return;
        const transhuggy = client.emojis.find(emoji => emoji.name === "transhuggy");
        message.reply(`you are valid and loved! ${transhuggy}`);
    }
    if(message.content.includes('Invalid')) {
        if (message.author.bot) return;
        const transhuggy = client.emojis.find(emoji => emoji.name === "transhuggy");
        message.reply(`you are valid and loved! ${transhuggy}`);
    }
    if(message.content.includes('non valid')) {
        if (message.author.bot) return;
        const transhuggy = client.emojis.find(emoji => emoji.name === "transhuggy");
        message.reply(`you are valid and loved! ${transhuggy}`);
    }
    if(message.content.includes('non-valid')) {
        if (message.author.bot) return;
        const transhuggy = client.emojis.find(emoji => emoji.name === "transhuggy");
        message.reply(`you are valid and loved! ${transhuggy}`);
    }
    if (message.content === "val!info") {
    if (message.author.bot) return;
    console.log("sending info!")
    message.channel.send("Hi! I am Validity, a bot run by scoutie#2020! I respond to anyone who calls themselves not valid, as thats just not true. 💙 Check the embed below for more info!")
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
        if (message.content.startsWith("val!info")) {
            console.log('Somebody just the info command.')
            message.channel.send({embed: {
                color: 7506394,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL
                },
                title: "Validity - The bot that wants you to know your valid!",
                url: "https://github.com/SpikeyScout/Validity",
                description: "I am owned by scoutie#2020.",
                fields: [{
                    name: "The Scout Space - Validity's home",
                    value: "Come join us in [The Scout Space!](https://discord.gg/uVVcDDJ) We chill and play games. We also have a Minecraft server!"
                  },
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "Validity - You are valid!"
                }
              }
            });
        }
});
client.login(config.token)
// And you, too, are valid!