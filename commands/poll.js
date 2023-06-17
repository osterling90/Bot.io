const Discord = require("discord.js");
const {poll} = require("discord.js-poll");
const voted = [];
module.exports.run = (client, message, args) => {
    if(args[0] != "-d"){
        if(args.length > 15){
            message.channel.send("Poll question can only contain up to 15 words!")
        }
        else{
            poll(message, args, "+", "FFD700")
        }
    }
    else{
        message.channel.send("```Creates a poll utilizing one of two formats:\n\n"+
        "Yes/No polls can be invoked simply by typing the !poll command followed "+
        "by a space and the poll question.\n\nMultiple choice polls can be invoked "+
        "by typing the !poll command followed by a space, the poll question, and options "+
        "separated by addition signs. Example: !poll Poll Question? + Choice 1 + "+
        "Choice 2 + Choice 3, etc. Note: multiple choice polls cannot have more "+
        "than 26 options.```");
    }
}
module.exports.name = "poll"