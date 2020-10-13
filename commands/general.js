module.exports = {
	name: 'general',
	description: 'DESCRIPTION',
	execute(message, args) {

		message.guild.createChannel("general", "text")
  .then(channel => {
    let category = message.guild.channels.find(c => c.name == "General Stuff" && c.type == "category");

    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
  }).catch(console.error);
		
	}
};