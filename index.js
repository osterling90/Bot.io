const {Client, Collection, GatewayIntentBits} = require("discord.js");
require("dotenv/config");
const fs = require("fs");
const prefix = "!";
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});
client.commands = new Collection();
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(file of commands){
    const commandName = file.split(".")[0]
    const command = require(`./commands/${commandName}`)
    client.commands.set(commandName, command)
}

client.on("ready", async () => {
    console.log("Running " + client.user.tag + "...")
});
client.on("messageCreate", async message => {
    if(message.content.startsWith(prefix)){
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const commandName = args.shift()
        const command = client.commands.get(commandName)
        if(!command){
            return
        }
        command.run(client, message, args)
    }
});
client.login(process.env.TOKEN);