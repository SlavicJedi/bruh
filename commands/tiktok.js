module.exports = {
	name: 'tiktok',
	description: 'DESCRIPTION',
	execute(message, args) {

		const julia = [
			"https://imgur.com/SmCDnc7",
			"https://imgur.com/epr7b33",
			"https://imgur.com/abgly2W",
			"https://imgur.com/B3RPvLD",
			"https://imgur.com/U9IbWNA",
			"https://imgur.com/jRTDrvs",
			"https://imgur.com/HdFrB5T",
			"https://imgur.com/dyZHGH4",
			"https://imgur.com/45jBpQx",
			"no tiktok for you",
			"https://imgur.com/ZiWC5pk",
			"https://imgur.com/F53RYeD",
			"https://imgur.com/iaHtSwZ",
			"https://imgur.com/Yrs7fDf",
			"https://imgur.com/JHMguHc",
			"https://imgur.com/2O5gPN6",
			"https://imgur.com/eIczdkU",
			"https://imgur.com/YaJ1ZJg",
			"https://imgur.com/rx9EQ0n",
			"https://imgur.com/LyPDV0h",
			"https://imgur.com/QF0Zwmg",
			"https://imgur.com/ce94pVK",
			"https://imgur.com/BWzULbK"
			

		  ];

		  
			const bitch = julia[Math.floor(Math.random() * julia.length)];
		    message.delete()

		
			message.channel.send(bitch)
			.then(msg2 => msg2.delete(15000)).catch(console.error);

			
		  
			console.log("tiktok was used")


	}
};