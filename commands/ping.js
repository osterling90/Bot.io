module.exports.run = (client, message, args) => {
    const serverPing = Math.abs((Date.now() - message.createdTimestamp))
    if(args[0] != "-d"){
    message.channel.send("Ping: " + serverPing + " ms")
    }
    else{
        message.channel.send("```Ping is a measurement, in milliseconds, of how quickly "+
        "a data signal can travel from one destination to another and back again. In this "+
        "case, a data signal is being sent from your device to Discord's servers and back!```");
    }
}
module.exports.name = "ping"