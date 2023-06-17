module.exports.run = (client, message, args) => {
    message.channel.send("```The description tag (-d) displays information " +
    "on the command being used before it. Examples: !ping -d or !help -d```");
}
module.exports.name = "description"