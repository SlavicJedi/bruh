module.exports = {
	name: 'julia',
	description: 'DESCRIPTION',
	execute(message, args) {

		const julia = [
			"https://www.instagram.com/p/CGGAIMoAJ7d/",
			"https://www.instagram.com/p/CGA5clLA3WD/",
			"https://www.instagram.com/p/CFsN-3zgG6J/",
			"https://www.instagram.com/p/CFku5uig8ag/",
			"https://www.instagram.com/p/CFfWjfMgjGf/",
			"https://www.instagram.com/p/CFP6ZdZgsKY/",
			"https://www.instagram.com/p/CFNzaFKAcKF/",
			"https://www.instagram.com/p/CFKrFbwgkkw/",
			"https://www.instagram.com/p/CEkJbGaA_lR/",
			"https://www.instagram.com/p/CEZ06YjgH-q/",
			"https://www.instagram.com/p/CEUsZKZArIc/",
			"https://www.instagram.com/p/CEFOHm7BVFn/",
			"https://www.instagram.com/p/CDzNUkPgaa1/",
			"https://www.instagram.com/p/CDuBOUxAucu/",
			"https://www.instagram.com/p/CDemy8YAnqd/",
			"https://www.instagram.com/p/CDPJMbRAohD/",
			"https://www.instagram.com/p/CCtsCXrABkA/",
			"https://www.instagram.com/p/CCrUZZTAuqC/",
			"https://www.instagram.com/p/CCoej2cAZW6/",
			"https://www.instagram.com/p/CCJsYrcgXSX/",
			"https://www.instagram.com/p/CCEeQJcgNMH/",
			"https://www.instagram.com/p/B_ndob6g255/",
			"She's fucking ugly go away."
		  ];

		  
			const bitch = julia[Math.floor(Math.random() * julia.length)];
		    message.delete()

		
			message.channel.send(bitch)
			.then(msg2 => msg2.delete(9000)).catch(console.error);

			
		  
			console.log("julia was used")


	}
};