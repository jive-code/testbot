/* Module: HotslogsApi
  This module recieves Data from hotslogs.com in JSON Format*/
var request = require("request-promise");
const getHotsRanks = (battletag, authorName) => {
  
var battletagUnderscore = battletag.replace("#", "_");
  
var options = {
    uri: "https://api.hotslogs.com/Public/Players/2/" + battletagUnderscore.toString(),
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

return request(options)
    .then(function (response) {
  console.log(response);
  console.log(response.LeaderboardRankings[0].CurrentMMR);
                return {
                    embed: {
                        color: 10040012,
                        title: "Hotslogs Informationen zu: " + battletag,
                        description: "MMR Zusammenfassung:",
                        fields: [{
                                name: "Quick Match:",
                                value: response.LeaderboardRankings[0].CurrentMMR
                            },
                            {
                                name: "Unranked Draft:",
                                value: response.LeaderboardRankings[3].CurrentMMR
                            },
                            {
                                name: "Hero League:",
                                value: response.LeaderboardRankings[1].CurrentMMR
                            },
                            {
                                name: "Team League:",
                                value: response.LeaderboardRankings[2].CurrentMMR
                            }
                        ],
                        timestamp: new Date(),
                    }
                }

    })
    .catch(function (err) {
          return {
            embed: {
                color: 16711680,
                title: "Hilfe Error",
                description: "Da lief was falsch oder den Befehl gibt es nicht :(",
                timestamp: new Date(),
            }
        }
    });

}


module.exports.getHotsRanks = getHotsRanks;