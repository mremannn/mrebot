const Discord = require("discord.js")
require("dotenv").config()


const client = new Discord.Client({
    intents: [
       "GUILDS", 
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as EBOT#4324`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")

    }
   

})
const welcomeChannelId = "929950236313538623"


client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> why are you in here this is a private server`)
})

client.login(process.env.TOKEN)