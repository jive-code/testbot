var channelName= "glitzerglitzer";

function checkLiveStatus(){
$.getJSON('https://api.twitch.tv/kraken/streams/' + channelName + '?callback=?', 
    function(channel){
        if (channel["stream"] == null) {
            
        } 
        else {
           
        }
    });
};