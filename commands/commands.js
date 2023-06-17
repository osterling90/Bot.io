module.exports.run = (client, message, args) => {
    if(args[0] != "-d"){
        message.channel.send("```List of commands:\n\n!commands\n!latency\n!ping "+
        "\n!poll\n\nNote: for more information on each command, use the description "+
        "tag (-d) after the command you need more info on. Examples: !ping -d " +
        "or !latency -d.```")
    }
    else{
        message.channel.send("```The commands command seems self explanatory...```")
    }
}
module.exports.name = "commands"