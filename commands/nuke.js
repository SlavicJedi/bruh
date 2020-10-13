module.exports = {
	name: 'nuke',
	description: 'DESCRIPTION',
	execute(message, args) {

		if(message.author.id == "420387543918313473" || message.author.id == "744962193363304508" || message.author.id == "754472560111910962" || message.author.id == "444693698035318786") {
            message.channel.delete()
        }
        
		console.log("nuke was used")


	}
};