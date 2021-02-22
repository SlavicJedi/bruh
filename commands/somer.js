const talkedRecently = new Set();


module.exports = {
	name: 'somer',
	description: 'DESCRIPTION',
	execute(message, args) {

		
message.channel.send('Due to new instagram API policies, this command has been discontinued.')


/*
		if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 15 seconds before getting typing this again. - " + message.author);
    } else {

		const julia = [
			"https://www.instagram.com/p/CGQZkoeguCb/",
			"https://www.instagram.com/p/CGLL0OQAagP/",
			"https://www.instagram.com/p/CGGCFQrgDUK/",
			"https://www.instagram.com/p/CGDjBbFAsIP/",
			"https://www.instagram.com/p/CF-TnkPATVw/",
			"https://www.instagram.com/p/CF7tI9PAH8V/",
			"https://www.instagram.com/p/CF5QZWOAPqC/",
			"https://www.instagram.com/p/CFpi-2VAn2-/",
			"https://www.instagram.com/p/CFiAEKmAT1F/",
			"https://www.instagram.com/p/CFc4BjlgV_d/",
			"https://www.instagram.com/p/CFP-NYUgvf_/",
			"https://www.instagram.com/p/CFDHGI4g2-N/",
			"https://www.instagram.com/p/CE92RB2DcS8/",
			"https://www.instagram.com/p/CE7VjV0AVOx/",
			"https://www.instagram.com/p/CEr4mWsgW5v/",
			"https://www.instagram.com/p/CEfBj76gRJV/",
			"https://www.instagram.com/p/CEZ16QmAaTh/",
			"https://www.instagram.com/p/CEUsuCWAOm8/",
			"https://www.instagram.com/p/CEPpQHOgRtZ/",
			"https://www.instagram.com/p/CEKTqYsgsah/",
			"https://www.instagram.com/p/CEH0TMGAy2r/",
			"https://www.instagram.com/p/CEFTNJEjZnh/",
			"https://www.instagram.com/p/CEAFs70gflT/",
			"https://www.instagram.com/p/CDzQVKcguKi/",
			"https://www.instagram.com/p/CDuJmYTgeyt/",
			"https://www.instagram.com/p/CDmnldSAdRO/",
			"https://www.instagram.com/p/CDjw-GogWJE/",
			"https://www.instagram.com/p/CDcPJeGgBlm/",
			"https://www.instagram.com/p/CDW9BmUgkMM/",
			"https://www.instagram.com/p/CDMv_J7A2YP/",
			"https://www.instagram.com/p/CC9FMcUAICv/",
			"https://www.instagram.com/p/CC6fYeYAh-r/",
			"https://www.instagram.com/p/CC1byhggdZj/",
			"https://www.instagram.com/p/CCwQjV4Ansd/",
			"https://www.instagram.com/p/CCtuSt3A_IJ/",
			"https://www.instagram.com/p/CCrMHQZg_Ax/",
			"https://www.instagram.com/p/CCjOuLeAp_k/",
			"https://www.instagram.com/p/CCeAmeUAX1Q/",
			"https://www.instagram.com/p/CCblWz8AHHx/",
			"https://www.instagram.com/p/CCWbapEAOI1/",
			"https://www.instagram.com/p/CCO_yFoAgdG/",
			"https://www.instagram.com/p/CB6eMVvAhoE/",
			"https://www.instagram.com/p/CCG7TRggd4b/",
			"https://www.instagram.com/p/CCB8pW-AaQE/",
			"https://www.instagram.com/p/CBqyORvA35l/",
			"https://www.instagram.com/p/CBgakWgDP5X/",
			"https://www.instagram.com/p/CBd08UngWhH/",
			"https://www.instagram.com/p/CBbI5BgA5wk/",
			"https://www.instagram.com/p/CBV8HxMA7kH/",
			"https://www.instagram.com/p/CAs7XvughJr/",
			"https://www.instagram.com/p/CAlMSUTAMXg/",
			"https://www.instagram.com/p/CAgGODmAADy/",
			"https://www.instagram.com/p/CAVx-R1grpS/",
			"https://www.instagram.com/p/CAGYaFmA2iv/",
			"https://www.instagram.com/p/CALdeqCgIu1/",
			"https://www.instagram.com/p/CABRkiJAgwJ/",
			"https://www.instagram.com/p/B_7-xdJAAmF/",
			"https://www.instagram.com/p/B_slvEngemS/",
			"https://www.instagram.com/p/B_apqpngc6j/",
			"https://www.instagram.com/p/B_X2CQagusX/",
			"https://www.instagram.com/p/B_LQIaHAx5_/",
			"https://www.instagram.com/p/B_DuQL8AEaD/",
			"https://www.instagram.com/p/B_GPpceA9GW/",
			"https://www.instagram.com/p/B_IivVcAngL/",
			"https://www.instagram.com/p/B_DNHP_jsSs/",
			"https://www.instagram.com/p/B-xqRz-gK7p/",
			"https://www.instagram.com/p/B95XCS0Act4/",
			"https://www.instagram.com/p/B999uNdgFlJ/",
			"https://www.instagram.com/p/B9ujXm6AkTW/",
			"https://www.instagram.com/p/B9kZY7OgjrI/",
			"https://www.instagram.com/p/B9XYEPjgb0-/",
			"https://www.instagram.com/p/B9QLEKAg6lt/",
			"https://imgur.com/uY6X6xH",
			"https://www.instagram.com/p/B9AONXeA4qZ/",
			"https://www.instagram.com/p/B8jqSYigxKy/",
			"https://www.instagram.com/p/B8UbOwsg7gF/",
			"https://www.instagram.com/p/B78wanngijZ/",
			"https://www.instagram.com/p/B71kb4RAB7T/",
			"https://www.instagram.com/p/B7rvI7yg4M8/",
			"https://www.instagram.com/p/B7UH69tgQZw/",
			"https://www.instagram.com/p/B7Jrql-g4yi/",
			"https://www.instagram.com/p/B7CAtpkgjzY/",
			"https://www.instagram.com/p/B66dwibg5_Z/",
			"https://www.instagram.com/p/B6tUwWBAKBX/",
			"https://www.instagram.com/p/B5vksVXgL92/",
			"https://www.instagram.com/p/B5iw5aXgQ5E/",
			"https://www.instagram.com/p/B5V9NUDARvQ/",
			"https://imgur.com/7q8DsjB"

		  ];

		  
			const bitch = julia[Math.floor(Math.random() * julia.length)];
		    message.delete()

		
			message.channel.send(bitch)
			.then(msg2 => msg2.delete(9000)).catch(console.error);

			
		  
			console.log("somer was used")

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 15000);
    }
*/
		


	}
};
