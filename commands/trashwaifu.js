module.exports = {
	name: 'trashwaifu',
	description: 'DESCRIPTION',
	execute(message, args) {
		message.delete()

		message.channel.send("https://cdn.animenewsnetwork.com/thumbnails/fit650x650/cms/news.3/157280/rent.jpg")
		.then(msg3 => msg3.delete(9000)).catch(console.error);

		
    message.channel.send("fuck mami Chan")


    .then(msg3 => msg3.delete(9000)).catch(console.error);
		console.log("traswaifu was used")

	}
};