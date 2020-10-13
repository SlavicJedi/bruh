module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
        if(message.author.id == "420387543918313473" || message.author.id == "757441809160077372") {
            message.channel.send('Pong.');

        }
        
        


        
	},
};