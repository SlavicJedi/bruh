const talkedRecently = new Set();


const { Guild } = require("discord.js");
const { fstat } = require("fs");

module.exports = {
	name: 'female',
	description: 'DESCRIPTION',
	execute(message, args) {



        if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 25 seconds before getting typing this again. - " + message.author);
    } else {

        if(message.author.id == "672646638799683586" || message.author.id == "420387543918313473" || message.author.id == "521126909346840609" || message.author.id == "754472560111910962" || message.author.id == "744962193363304508" || message.author.id == "444693698035318786") {

            const messages = [
                "https://tenor.com/view/bikini-girl-gif-10539751", 
                "https://tenor.com/view/bounce-bouncing-bouncy-wiggle-jiggle-gif-17035985", 
                "https://tenor.com/view/dwight-the-office-michael-scott-funny-bra-gif-13517905", 
                "https://tenor.com/view/hotness-beach-bikini-hot-disha-sea-gif-15982810", 
                "This command was intercepted by the FBI. Please try again.",
                "https://tenor.com/view/braddison-gif-17987429",
                "https://theviraler.com/wp-content/uploads/2019/05/sporty_girls_004393_002.gif",
                "https://img.izismile.com/img/img12/20190226/gifs/gifs_of_really_hot_girls_10.gif",
                "https://www.barnorama.com/wp-content/uploads/2018/09/girls_gifs_02.gif",
                "https://media.tenor.com/images/d74cab810f205e78199461c375532e41/tenor.gif",
                "https://thumbs.gfycat.com/CleanUniformIslandwhistler-max-1mb.gif",
                "https://thumbs.gfycat.com/DeliriousIckyCopperbutterfly-max-1mb.gif",
                "https://tenor.com/view/bikini-hot-girl-pose-gif-17482086",
                "https://tenor.com/view/alexisren-tease-babe-hot-damn-gif-13065166",
                "https://tenor.com/view/red-bikini-angie-verona-hot-girl-gif-18323451",
                "https://tenor.com/view/sexy-sexy-face-hey-shawty-sup-baby-how-you-doin-gif-13950932",
                "https://tenor.com/view/monkey-licking-lick-kiss-tongue-gif-9316431"
              ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
        message.delete()
        message.channel.send(randomMessage)
        
        .then(message => message.delete(9000)).catch(console.error);
        console.log("female was used")
    

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 25000);
    }
		

        }

    },

};