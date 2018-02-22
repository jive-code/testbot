/* Module: StripperNameGenerator
  This module randomly generates StripperNames with an Array*/
var stripperName;

/*Array with funny Strippernames ;) */
const stripperNameArray = new Array("SuperBoy",
    "DanceGirl",
    "Onyx",
    "Black Mamba",
    "SexyBack",
    "SwingerMan",
    "ShinyThing",
    "Glitzerfee",
    "Hot Strip",
    "MasterMan",
    "Black Domina",
    "Magic Mike",
    "Faith",
    "Swallow",
    "Sex juice",
    "Bambie",
    "Titty Fan",
    "Kumalot",
    "Dickweed",
    "Horny Helmet",
    "Candy",
    "Daddys Girl",
    "Sugardaddy",
    "Senpai",
    "Dementia Lick",
    "Thunder Sex Machine");

const chooseStripperName = (messageUser) => {
    var randomNumber = Math.floor(Math.random() * stripperNameArray.length);
    return ("**" + messageUser + "**, dein Strippername ist ***" + stripperNameArray[randomNumber] + "***! Toll, toll, supertoll :fire:");
}

module.exports.chooseStripperName = chooseStripperName;