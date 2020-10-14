const talkedRecently = new Set();


module.exports = {
	name: 'lapdance',
	description: 'DESCRIPTION',
	execute(message, args) {


		if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minute before getting typing this again. - " + message.author);
    } else {

		const cum = [
			"https://tenor.com/view/make-out-humping-couple-gif-15770300",
			"https://tenor.com/view/sexy-dance-lap-dance-twerk-gif-16814422"
		  ]
				message.delete()
			const gayass = cum[Math.floor(Math.random() * cum.length)];
			message.channel.send(gayass)

			//User authetification
			//if(`${message.author.id}` === "562828452043161621", "654108493686636544", "512976672337821712", "420387543918313473") {  
			// message.channel.send("lol, i aint gonna do that mate :sunglasses: deal with it")

		// }

		.then(msg => msg.delete(4000)).catch(console.error);

		console.log("Lapdance was used")

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }

		

	}
};