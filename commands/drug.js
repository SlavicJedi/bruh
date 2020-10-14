module.exports = {
	name: 'drug',
	description: 'DESCRIPTION',
	execute(message, args) {

		const messages = [
			`${message.author.username} lit up a cig and hit it 🚬`,
			`${message.author.username} hit a vape and some kids.`,
			"You take a good whiff of that sugar. Everything turns dark."
          ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    message.delete()
    message.channel.send(randomMessage)
    
    .then(message => message.delete(9000)).catch(console.error);
    console.log("drug was used")


		
	}
};