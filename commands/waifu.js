const talkedRecently = new Set();


module.exports = {
	name: 'waifu',
	description: 'DESCRIPTION',
	execute(message, args) {


		if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 10 seconds before getting typing this again. - " + message.author);
    } else {

		const waifus = [
			"https://vignette.wikia.nocookie.net/rezero/images/7/7c/Rem_Character_Art_LN_5.png/revision/latest?cb=20170602195638",
			"https://www.anime-planet.com/images/characters/emilia-84532.jpg",
			"https://cdn.discordapp.com/attachments/757760296248148060/765069717839937546/image0.jpg",
			"https://cdn.animenewsnetwork.com/thumbnails/max600x600/cms/news.3/157806/sumi.jpeg",
			"https://cdn.discordapp.com/attachments/757760296248148060/765070257475813376/image0.jpg",
			"https://cdn.discordapp.com/attachments/757760296248148060/765071373005225984/image0.jpg",
			"https://cdn.discordapp.com/attachments/757760296248148060/765070384306585602/image0.jpg",
			"https://tenor.com/view/rem-rezero-cute-kawaii-dance-gif-7905894"
		  ];

		  
			const nigger = waifus[Math.floor(Math.random() * waifus.length)];
		    message.delete()

		
			message.channel.send(nigger)
			.then(msg2 => msg2.delete(9000)).catch(console.error);

			message.channel.send("weeb trash")

			.then(msg2 => msg2.delete(9000)).catch(console.error);
		  
			console.log("waifu was used")

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 10000);
    }



        


	},
};