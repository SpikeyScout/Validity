const RE2 = require('re2')
const Discord = require('discord.js')
const config = require('./config.json')
const debug = require('debug')('validity')

const client = new Discord.Client()
const validityRegex = new RE2(/(not|no|non)(-| )valid|invalid|validn't/gim)
const suicideRegex = new RE2(/kill (myself|me)|i (want|need|would like) to die|i (want|need|would like) a noose|i wish i was dead/gim)

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'with hugs and cuddles! uwu' }, type: 1 })
  console.log(`logged in as ${client.user.tag} on ${client.guilds.size} guilds!`)
})

client.on('guildCreate', guild => {
  debug(`joined new guild: ${guild.name}`)
  const channel = guild.channels.find('name', 'general') || guild.channels.find('name', 'chat') || guild.channels.random(0)
  channel.send('Hi! I\'m Validity, the Discord bot that wants to let you know your valid! If any problems arise, please DM scoutie#2020 with the issue. Thank you, and you are valid!')
})

client.on('message', message => {
  if (message.author.bot) {
    return
  }

  if (validityRegex.test(message.content)) {
    const transhuggy = client.emojis.find(emoji => emoji.name === 'transhuggy')
    message.reply(`you are valid and loved! ${transhuggy}`)
    return
  }

  if (suicideRegex.test(message.content)) {
    message.author.send('Suicide is never the answer nor is it a funny thing to joke about. If you truly need help, please contact the Suicide Prevention Hotline, or checkout r/suicidewatch. (https://www.reddit.com/r/suicidewatch/) Remember, you are loved and someone in the world cares for you, even if it might not seem like it. ||Did this message trigger incorrectly or at a wrong time? If so please contact scoutie#2020.||')
    return
  }

  if (message.content.slice(0, config.prefix.length) === config.prefix) {
    const [command, ...args] = message.content.slice(config.prefix.length, message.content.length).split(' ')
    debug(`${command}: ${args}`)
    switch (command) {
      case 'info':
        message.channel.send({
          embed: {
            color: 7506394,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: 'Validity - The bot that wants you to know that you\'re valid!',
            url: 'https://github.com/SpikeyScout/Validity',
            description: 'Created by scoutie#2020, with help from some cool and epic people.',
            fields: [{
              name: "The Scout Space - Validity's home",
              value: 'Come join us in [The Scout Space!](https://discord.gg/uVVcDDJ) We chill and play games. We also have a Minecraft server!'
            }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: 'Validity v1.2 - You are valid!'
            }
          }
        })
        break
      case 'stat':
        message.channel.send('Pinging...')
          .then(msg => {
            msg.edit(`Current ping: ${msg.createdTimestamp - message.createdTimestamp}ms. I am in ${client.guilds.size} servers with ${client.users.size} users. Currently logged in as ${client.user.tag}.`)
          })
        break
      case 'uptime':
        message.channel.send(`I have been up for ${client.uptime * 0.001} seconds. Started at ${client.readyAt}.`)
        break
      case 'help':
        message.channel.send("Commands: val!stat, val!uptime, val!help. Responds to different self-deprecating comments.")
        break
    }
  }
})

client.login(config.token)
// And you, too, are valid

