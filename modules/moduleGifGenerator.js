/* Module: GifGenerator
  This module randomly generates GIFs with an tag or a specific search tag*/
var GphApiClient = require('giphy-js-sdk-core')
const client = GphApiClient(process.env.GIPHYTOKEN)

const searchForGif = (gifName) => {
    /*Search for a specific GIF Funktion*/
    /*return client.search('gifs', {"q": gifName, "limit": 1})
    .then((response) => {
      var gif = response.data[0].url;
      return gif;
    })
    .catch((err) => {
        return err;
    })*/

    /*Search for a random GIF with a tag*/
    return client.random('gifs', {
            "tag": gifName
        })
        .then((response) => {
            var gif = response.data.url;
            return gif;
        })
        .catch((err) => {
            return err;
        })
}

module.exports.searchForGif = searchForGif;