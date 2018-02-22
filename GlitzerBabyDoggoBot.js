const Discord = require("discord.js");
const sql = require("sqlite");
const modStripperName = require("./modules/moduleStripperName");
const modSearchGif = require("./modules/moduleGifGenerator");
const modHelpMenu = require("./modules/moduleHelpMenu");
const modSearchPuppy = require("./modules/moduleCutePuppys");
const modHotslogsApi = require("./modules/moduleHotslogsApi");
const modDefaultFunction = require("./modules/moduleDefaultFunctions");
const client = new Discord.Client();
const config = require("./config.json");

sql.open("./score.sqlite");

/*Sending a request to glitch.com to keep the bot awake*/
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) =>
{
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() =>
{
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on('ready', () => {
  client.user.setActivity('?hilfe | Hilfemenü');
})

/*Event Handler, Message is send to a random channel*/
client.on("message", async (message) =>
{
    if (message.channel.type === "dm" || message.author.bot) return;
  
    /*SQLite Points System*/
    sql.get("SELECT * FROM scores WHERE userId = " + message.author.id).then(row =>
    {
        if (!row)
        {
            sql.run('INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)', [message.author.id, 1, 0]);
        }
        else
        {
            let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
            console.log("Aktuelles Level: " + curLevel);
            console.log("Datenbank Level: " + row.level);
            console.log("Datenbank Punkte: " + row.points);
            if (curLevel > row.level)
            {
                row.level = curLevel;
                sql.run("UPDATE scores SET points = " + (row.points + 1) + ", level = " + row.level + " WHERE userId = " + message.author.id);
                message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
            }
            sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
        }
    }).catch(() =>
    {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS scores (userId BIGINT, points INTEGER, level INTEGER)").then(() =>
        {
            sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
        });
    });

    if (message.content.startsWith(config.prefixHelp) && !message.author.bot)
    {
        var commandEnter = message.content;
        commandEnter.toLowerCase();
        var content = "";
        const args = message.content.slice(config.prefixHelp.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const messageUser = message.author;

        args.forEach(function(word)
        {
            content = content + " " + word;
        });
        content.trim();

        if (command == "hilfe" && !args[0])
        {
            message.channel.send(":postbox: | " + message.author.username + ", du hast soeben die Bot-Befehle per Privatnachricht erhalten!");
            message.author.send(modHelpMenu.commandInfo());
        }
        else if (command != "hilfe" && !args[0])
        {
            message.channel.send(modHelpMenu.commandSingleHelp(command));
        }
    }
    else
    {
        if (!message.content.startsWith(config.prefixCommand) || message.author.bot) return;

        /*Change Username of Bot*/
        /*client.user.setUsername("GlitzersBabyDoggoBot");*/

        /*Some infos stored in variables*/
        var content = "";
        const args = message.content.slice(config.prefixCommand.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const messageUser = message.author;

        args.forEach(function(word)
        {
            content = content + " " + word;
        });
        content.trim();


        /*Check which command was send*/
        if (command == "kick")
        {          
            modDefaultFunction.executeKick(message);
        }
        else if (command == "ban")
        {
          modDefaultFunction.executeBan(message);
        }
        else if (command == "stripper")
        {
            message.channel.send(modStripperName.chooseStripperName(message.author.tag));
        }
        else if (command == "gif")
        {
            var searchPromise = modSearchGif.searchForGif(content);
            searchPromise.then((gif) =>
            {
                message.channel.send(gif);
            })
        }
        else if (command == "puppy")
        {
            var searchForPuppy = modSearchPuppy.searchForPuppy();
            searchForPuppy.then((url) =>
            {
                message.channel.send(url);
            })
        }
        else if (command == "hotslogs" && args[0] != "")
        {
            await message.channel.send(await modHotslogsApi.getHotsRanks(args[0], message.author.tag));
        }
        else if (command == "level")
        {
            sql.get('SELECT * FROM scores WHERE userId = "${message.author.id}"').then(row =>
            {
                if (!row)
                {
                    return message.reply("Dein aktuelles Level ist 0");
                }
                else
                {
                    message.reply('Dein aktuelles Level ist "${row.level}"');
                }
            });
        }
        else if (command == "points")
        {
            sql.get('SELECT * FROM scores WHERE userId = "${message.author.id}"').then(row =>
            {
                if (!row)
                {
                    return message.reply("Dein aktueller Punktestand ist 0.");
                }
                else
                {
                    message.reply('Dein aktueller Punktestand ist "${row.points}"');
                }
            });
        }
        else /*HIER PRÜFEN OB MAN NICHT DOCH ANSTATT DES ERRORS EINE HILFE ZUM BEFEHL GIBT*/
        {
            message.channel.send(modHelpMenu.sendError());
        }
    }
});

client.login(process.env.TOKENTEST);