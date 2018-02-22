GlitzerBabyDoggoBot
=========================

Used npms
----------

- npm install discord.js node-opus --save
- npm install express
- npm install request-promise
- npm install giphy-js-sdk-core
- npm install random-puppy
- npm install sqlite --save
- npm install mathjs

Cool stuff
----------

- React (App-Building) https://reactjs.org/
- Cards Against Humanity JSON http://www.crhallberg.com/cah/

To-Do
----------

- mit dem prefix ? für jeden Befehl hilfe anbieten (?command / ?help) - langsam festlegen(!)
- bei falsch benutztem Befehl Hilfe anbieten (Beispiel: falsch eingegeben, versuch es so: ....)
- youtube api integrieren
- Währungssystem integrieren
- Levelsystem fixen
- Grundstruktur Bot überarbeiten (Code-Struktur, Fehler abfangen, Logs etc.)
-- gute Tipps: https://github.com/meew0/discord-bot-best-practices#best-practices-for-discord-bots
- RSS Feed einbauen für neue Forenposts (https://benji7425.github.io/discord-bot-rss-feed/)
- idiotic api einbauen (https://www.npmjs.com/package/idiotic-api)
- Cooldown für Befehle einbauen
- bakka oder ähnliches
```
const { Command } = require('discord.js-commando');

module.exports = class RandomCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'baka',
            group: 'group1',
            memberName: 'baka',
            description: 'Mentions a User who is a Baka >,<',        
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who is a Baka?',
                    type: 'member'
                }
            ]
        });
    }
    async run(msg, args) {
        const member = args.member;
        const user = member.user;
        return msg.channel.send(args.member.user + " is a Baka!!!", {
            file: "https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif"
        });
    }
};
```

- unbehandelte Ausnahme: 

```
process.on('unhandledRejection', err => {
    console.warn(`Uncaught Promise Error: \n${err.stack}`)
});
```
- ist ein Befehl falsch, auf den falschen Befehl mit einem Emote auf den Beitrag reagieren
- generelles Konstrukt mit Klassen, Konstruktoren und Extends

Done
----------

- prefix für Hilfe auf ? festgelegt, commands per ?<kommand> erreichbar



https://github.com/chalda/DiscordBot/blob/master/discord_bot.js

https://github.com/NotAWeebDev/Misaki/tree/master/base

https://developer.spotify.com/