const talkedRecently = new Set();

module.exports = {
	name: 'thot',
	description: 'DESCRIPTION',
	execute(message, args) {



		if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minute before getting typing this again. - " + message.author);
    } else {

        if(message.author.id == "647237711274573844" || message.author.id == "744962193363304508" || message.author.id == "426153608501919745" || message.author.id == "226774702662615050" || message.author.id == "420387543918313473" || message.author.id == "521126909346840609" || message.author.id == "444693698035318786") {

			const messages = [
				"https://imgur.com/W5t6GyY",
				"https://imgur.com/zSkuGO1",
				"https://imgur.com/53XHRvg",
				"https://imgur.com/wpJ7v25",
				"https://imgur.com/qANq8wZ",
				"https://imgur.com/G3gMODk",
				"https://imgur.com/D8vjamg",
				"https://imgur.com/ZH90tXu",
				"https://imgur.com/NmNZ2iK",
				"https://imgur.com/XeAmLiH",
				"https://imgur.com/560jTz9",
				"https://imgur.com/pkeukoo",
				"https://imgur.com/en0lAdv",
				"https://imgur.com/VxezM60",
				"https://imgur.com/HfC6p2D",
				"https://imgur.com/GMYVlJn",
				"https://imgur.com/AmU5rBj",
				"https://imgur.com/H5J732Z",
				"https://imgur.com/pnXhIz2",
				"https://imgur.com/hW9pPdH",
				"https://imgur.com/BGqABgZ",
				"https://imgur.com/0VfepGH",
				"https://imgur.com/N5Otr3f",
				"https://imgur.com/5iPMWNd",
				"https://tenor.com/view/need-aride-grind-ride-riding-sex-gif-17227304",
				"https://tenor.com/view/love-sex-sit-gif-14514756",
				"https://tenor.com/view/grind-dance-sex-gif-15220551",
				"https://tenor.com/view/scarlet-johansson-sexy-hump-gif-14698710",
				"https://tenor.com/view/hot-sexy-ass-butt-seductive-gif-16843851",
				"https://tenor.com/view/butt-butt-cheecks-tick-slap-nice-ass-gif-16566712",
				"https://tenor.com/view/slapping-gif-18392559",
				"https://tenor.com/view/catsuit-swimsuit-latex-gif-18363477",
				"https://tenor.com/view/danyancat-latex-wink-flirty-beautiful-gif-17688434",
				"https://www.gifdeliverynetwork.com/compassionateringedcaribou", //ass
				"https://www.gifdeliverynetwork.com/forsakenyawningalbino", //ass
				"https://i.imgur.com/MasljYI.gif", //ass
				"https://www.gifdeliverynetwork.com/cheerfulcompassionatecaribou", //ass
				""


				
			  ];
			const randomMessage = messages[Math.floor(Math.random() * messages.length)];
	
		message.delete()
		message.author.send(randomMessage)
		
		.then(message => message.delete(20000)).catch(console.error);
		message.channel.send("Enjoy that thicc thot 😛")
		.then(message => message.delete(6000)).catch(console.error);


		console.log("thot was used")   

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }



		
	
	
			}
		
	}
};