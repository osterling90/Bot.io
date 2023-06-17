module.exports.run = (client, message, args) => {
    const serverLatency = Math.round(client.ws.ping)
    if(args[0] != "-d"){
    message.channel.send("API Latency: " + serverLatency + " ms")
    }
    else{
        message.channel.send("```Otherwise known as network delay, network latency "+
        "is the amount of time (in milliseconds) it takes for a web application "+
        "to respond to an action performed by the user.```")
    }
}
module.exports.name = "latency"