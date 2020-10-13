module.exports = {
	name: 'femboy',
	description: 'DESCRIPTION',
	execute(message, args) {

		const julia = [
			"https://cdn.discordapp.com/attachments/765308649291120692/765308870347587666/Screen_Shot_2020-10-12_at_4.16.01_PM.png",
			"https://cdn.discordapp.com/attachments/765308649291120692/765308868518477854/Screen_Shot_2020-10-12_at_4.16.03_PM.png",
			"https://cdn.discordapp.com/attachments/765308649291120692/765308866787278909/Screen_Shot_2020-10-12_at_4.16.11_PM.png",
			"https://cdn.discordapp.com/attachments/765308649291120692/765308865679327242/Screen_Shot_2020-10-12_at_4.16.16_PM.png",
			"https://cdn.discordapp.com/attachments/765308649291120692/765308864819626051/Screen_Shot_2020-10-12_at_4.16.25_PM.png",
			"https://cdn.discordapp.com/attachments/765308649291120692/765308795018018866/wefwefwef.jpg",
			"https://cdn.discordapp.com/attachments/765308649291120692/765308793780830258/wefwefweef.jpg",
			"https://cdn.discordapp.com/attachments/765308649291120692/765308791973478410/uqhiuwhdiqwd.jpg",
			"https://cdn.discordapp.com/attachments/765308649291120692/765308790576381993/media.jpeg",
			"https://cdn.discordapp.com/attachments/765308649291120692/765308790576381993/media.jpeg"
		  ];

		  
			const bitch = julia[Math.floor(Math.random() * julia.length)];
		    message.delete()

		
			message.channel.send(bitch)
			.then(msg2 => msg2.delete(9000)).catch(console.error);

			
		  
			console.log("femboy was used")
		
	}
};