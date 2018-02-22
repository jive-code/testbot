/* Module: DefaultFunctions
  This module contains the most likely default functions like kick/ban etc.*/

const Discord = require("discord.js");

const executeKick = (message) => {
              if (!message.member.roles.some(r => ["Administrators"].includes(r.name)))
            {
                return message.channel.send("Sorry, no permissions.");
            }
            let memberKick = message.mentions.members.first();
            if (!memberKick)
            {
                return message.channel.send("Please enter a valid name!");
            }
            if (!memberKick.kickable)
            {
                return message.channel.send("Cannot kick this person!");
            }
            memberKick.kick()
                .catch(error => message.reply("Sorry couldnt kick user because of: ${error}"));
            message.reply(`${memberKick.user.tag} has been kicked by ${message.author.tag}.`);
}

const executeBan = (message) => {
            if (!message.member.roles.some(r => ["Admin", "Moderator"].includes(r.name)))
            {
                return message.channel.send("Sorry, no permissions.");
            }
            let memberBan = message.mentions.members.first();
            if (!memberBan)
            {
                return message.channel.send("Please enter a valid name!");
            }
            if (!memberBan.bannable)
            {
                return message.channel.send("Cannot kick this person!");
            }
            memberBan.ban()
                .catch(error => message.reply("Sorry couldnt ban user because of: ${error}"));
            message.reply(`${memberBan.user.tag} has been banned by ${message.author.tag}.`);
}

module.exports.executeKick = executeKick;
module.exports.executeBan = executeBan;