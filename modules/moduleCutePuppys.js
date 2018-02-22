/* Module: CutePuppys
  This module contains the commands for the random puppy generator*/
const randomPuppy = require('random-puppy');

const searchForPuppy = () => {
    return randomPuppy()
        .then(url => {
            return url;
        })
}

module.exports.searchForPuppy = searchForPuppy;