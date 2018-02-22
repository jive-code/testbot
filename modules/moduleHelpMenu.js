/* Module: Help Menu
  This module contains all Help Commands*/
const Discord = require("discord.js");
var hilfeText = "";

const commandInfo = () => {
  hilfeText = "```asciidoc\n= GlitzerBabyDoggoBot Befehle =\n\n";
  hilfeText += "[Für weitere Informationen zu den einzelnen Befehlen, tippe ?<Kommando> ein. (Beispiel: ?gif)]\n\n";
  hilfeText += "== Prefixe ==\ngt.\n?\n\n";
  hilfeText += "== Hilfe ==\n?hilfe\n?<Befehl>\n\n";
  hilfeText += "== Admin ==\ngt.kick\ngt.ban\n\n";
  hilfeText += "== Fun ==\ngt.gif <Tag>\ngt.stripper\ngt.puppy\ngt.hotslogs <BattleTag>\n\n\n";
  hilfeText += "________________Credits________________\n\n";
  hilfeText += "Bot Created by jive © 2018 -Beta- v0.1\n";
  hilfeText += "Written in node.js```";
  return hilfeText;
  
  /*return {
        embed: {
            color: 10040012,
            title: "Hier ist eine Liste mit Bot-Kommandos:",
            description: "Für weitere Informationen zu den einzelnen Befehlen, tippe ?<Kommando> ein. (Beispiel: ?gif)",
            fields: [{
                    name: "Admin-Kommandos",
                    value: "gt.kick <Name> | gt.ban <Name>"
                },
                {
                    name: "User-Kommandos",
                    value: "gt.stripper | gt.gif <Tag> | gt.puppy | gt.hotslogs <btag>"
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: "https://cdn.glitch.com/13873371-2a26-49bb-9df0-a3c779ec94a1%2Fjive_code_logo.png?1517564040892",
                text: "Bot Created by jive © 2018 v0.1"
            }
        }
    }*/
}

const commandSingleHelp = (singleCommand) => {
    if (singleCommand == "kick") {
        return {
            embed: {
                color: 1869550,
                title: "Hilfe für kick",
                description: "gt.kick",
                fields: [{
                    name: "gt.kick <@mention Name>",
                    value: "Kickt den genannten User vom Server, nur möglich bei ausreichenden Rechten."
                }],
                timestamp: new Date(),
            }
        }
    } else if (singleCommand == "ban") {
        return {
            embed: {
                color: 1869550,
                title: "Hilfe für ban",
                description: "gt.ban",
                fields: [{
                    name: "gt.ban <@mention Name>",
                    value: "Bannt den genannten User vom Server, nur möglich bei ausreichenden Rechten."
                }],
                timestamp: new Date(),
            }
        }
    } else if (singleCommand == "stripper") {
        return {
            embed: {
                color: 1869550,
                title: "Hilfe für stripper",
                description: "gt.stripper",
                fields: [{
                    name: "gt.stripper",
                    value: "Finde deinen ganz persönlichen Strippernamen heraus!"
                }],
                timestamp: new Date(),
            }
        }

    } else if (singleCommand == "gif") {
        return {
            embed: {
                color: 1869550,
                title: "Hilfe für gif",
                description: "gt.gif",
                fields: [{
                    name: "gt.gif <Tag>",
                    value: "Gib nach dem Kommando ein Schlagwort (oder mehrere) an und lass dich mit einem GIF überraschen!"
                }],
                timestamp: new Date(),
            }
        }
    } else if (singleCommand == "puppy") {
        return {
            embed: {
                color: 1869550,
                title: "Hilfe für puppy",
                description: "gt.puppy",
                fields: [{
                    name: "gt.puppy",
                    value: "Überrascht dich mit einem ganz cuten Puppy (manchmal)"
                }],
                timestamp: new Date(),
            }
        }
      
    } else if(singleCommand == "hotslogs"){
              
                return {
            embed: {
                color: 1869550,
                title: "Hilfe für hotslogs",
                description: "gt.hotslogs",
                fields: [{
                    name: "gt.hotslogs <Battletag>",
                    value: "Gibt die aktuelle MMR zu den Hots-Spielmodi von Hotslogs aus."
                }],
                timestamp: new Date(),
            }
        }      
              }else{
        return {
            embed: {
                color: 16711680,
                title: "Woah Error (╯°□°）╯︵ ┻━┻",
                description: "Da lief was falsch oder den Befehl gibt es nicht :(",
                timestamp: new Date(),
            }
        }
    }
}

const sendError = () => {
          return {
            embed: {
                color: 16711680,
                title: "Woah Error (╯°□°）╯︵ ┻━┻",
                description: "Da lief was falsch oder den Befehl gibt es nicht :(",
                timestamp: new Date(),
            }
        }
}

module.exports.sendError = sendError;
module.exports.commandInfo = commandInfo;
module.exports.commandSingleHelp = commandSingleHelp;