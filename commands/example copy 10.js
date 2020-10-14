module.exports = {
	name: 'thot',
	description: 'DESCRIPTION',
	execute(message, args) {

		if(message.author.id == "647237711274573844" || message.author.id == "744962193363304508" || message.author.id == "426153608501919745" || message.author.id == "226774702662615050" || message.author.id == "420387543918313473") {

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
				
			  ];
			const randomMessage = messages[Math.floor(Math.random() * messages.length)];
	
		message.delete()
		message.author.send(randomMessage)
		
		.then(message => message.delete(20000)).catch(console.error);
		message.channel.send("Enjoy that thicc thot 😛")
		.then(message => message.delete(6000)).catch(console.error);


		console.log("thot was used")
	
	
			}
		
	}
};