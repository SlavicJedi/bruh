const fs = require('fs');

const Discord = require("discord.js");

/* const cum = [
  "https://tenor.com/view/make-out-humping-couple-gif-15770300",
  "https://tenor.com/view/sexy-dance-lap-dance-twerk-gif-16814422"
]
 */
const messages = [
  "https://tenor.com/view/bikini-girl-gif-10539751", 
  "https://tenor.com/view/bounce-bouncing-bouncy-wiggle-jiggle-gif-17035985", 
  "https://tenor.com/view/dwight-the-office-michael-scott-funny-bra-gif-13517905", 
  "https://tenor.com/view/hotness-beach-bikini-hot-disha-sea-gif-15982810", 
  "This command was intercepted by the FBI. Please try again.",
  "https://tenor.com/view/braddison-gif-17987429",
  "https://theviraler.com/wp-content/uploads/2019/05/sporty_girls_004393_002.gif",
  "https://img.izismile.com/img/img12/20190226/gifs/gifs_of_really_hot_girls_10.gif",
  "https://www.barnorama.com/wp-content/uploads/2018/09/girls_gifs_02.gif",
  "https://media.tenor.com/images/d74cab810f205e78199461c375532e41/tenor.gif",
  "https://66.media.tumblr.com/dee0c9ca07d8d238f2c489a4aef9deba/3428cd94a53c4caf-de/s400x600/9aebf3fe997e45ae9dcb36b06c8eb788c5f1f911.gifv",
  "https://thumbs.gfycat.com/CleanUniformIslandwhistler-max-1mb.gif",
  "https://thumbs.gfycat.com/DeliriousIckyCopperbutterfly-max-1mb.gif",
  "https://tenor.com/view/bikini-hot-girl-pose-gif-17482086",
  "https://tenor.com/view/alexisren-tease-babe-hot-damn-gif-13065166",
  "https://tenor.com/view/red-bikini-angie-verona-hot-girl-gif-18323451",
  "https://tenor.com/view/sexy-sexy-face-hey-shawty-sup-baby-how-you-doin-gif-13950932"
];

/* const waifus = [
  "https://vignette.wikia.nocookie.net/rezero/images/7/7c/Rem_Character_Art_LN_5.png/revision/latest?cb=20170602195638",
  "https://www.anime-planet.com/images/characters/emilia-84532.jpg",
  "https://cdn.discordapp.com/attachments/757760296248148060/765069717839937546/image0.jpg",
  "https://cdn.animenewsnetwork.com/thumbnails/max600x600/cms/news.3/157806/sumi.jpeg",
  "https://cdn.discordapp.com/attachments/757760296248148060/765070257475813376/image0.jpg",
  "https://cdn.discordapp.com/attachments/757760296248148060/765071373005225984/image0.jpg",
  "https://cdn.discordapp.com/attachments/757760296248148060/765070384306585602/image0.jpg"
]; */


const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

const config = require("./config.json");
const { Server } = require('http');



const jobb = `Hey I am Daniel :D

I advertise your server in over 30+ servers a few times a day.

:newspaper: ***I Advertise!***

:alarm_clock: ***OVER 30 SERVERS EVERY FEW HOURS!!***

For payment I take:

**PayPal
Discord Nitro
Spotify Premium
Xbox Cards
Really anything :smile:
https://gph.is/g/ZlWm6D9**`

const ad = `
:oncoming_police_car:PROTECT & SERVE RP:oncoming_police_car:

Whoop Whoop. Thats da sound of da police!

We are protect and serve roleplay a PS4 console realistic Grand Theft Auto V roleplay Community we focus on realism and professionalism and equality towards our members and staff here in this roleplay everyone is treated fairly all roleplay is treated with the most realism as possible and everyone is professional.

Our Main requirement is that you are at least 14 if under the age of 14 we will check to see how mature you are in order to sustain a professional roleplay.

So if you like role-playing as a civilian cop or more join us below and help this community grow and flourish to be one of the best!
https://discord.gg/Vgpg3T4
https://cdn.discordapp.com/attachments/658028380268265513/658519467352915968/IMG_1065.png
`


client.on("ready", () => {
  console.log(`${client.user.username} has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`I am a femboy`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Simping for femboy walter`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Simping for femboy walter`);
});

client.on('message', msg => {
  var msgarray = msg.content.toUpperCase().split(' ');
  console.log(msgarray);
  if (msgarray.includes('ANIME') || msgarray.includes('ANIME.') || msgarray.includes('ANIME?') || msgarray.includes('ANIME!') || msgarray.includes('ANIME"') || msgarray.includes("ANIME'") || msgarray.includes("ANIME)") || msgarray.includes("ANIME]") || msgarray.includes("ANIME}") || msgarray.includes("ANIME>")) {
      msg.channel.send('fuckin weeb');
  }
});

client.on('message', msg => {
  if (msg.content === '.kys'){
     error;
  }
});

client.on("message", async message => {

  
 
  if(message.author.bot) return;
  
 
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
    
 /*  if(command === "ree") {
    client.guilds.get('726937584021799023').channels.get('726937584021799026').send(ad);

 //   var interval = setInterval (function () {
      //    client.guilds.get('649326423936466944').channels.get('649326881161740386').send("Starting rrrrrrrrreeeeeeeeeeee process...");
 //   }, 1 * 1000);
  } */
  
  /* if(command === "advert") {

    if(`${message.author.id}` === "562828452043161621", "654108493686636544", "512976672337821712", "420387543918313473") {  
    
      
      client.user.setActivity(`Advertising.`);
    client.guilds.get('726937584021799023').channels.get('726937584021799026').send(ad);

    client.guilds.get('649326423936466944').channels.get('649326881161740386').send("Starting advertisement process...");

    client.guilds.get('331039920107814943').channels.get('331129944220368907').send(ad);

    client.guilds.get('419790067377242113').channels.get('539889545295036417').send(ad);
    
    client.guilds.get('419790067377242113').channels.get('539889667454271508').send(ad);
    
    client.guilds.get('531174530761228298').channels.get('531176705272971284').send(ad);
    
    client.guilds.get('508213165897809943').channels.get('508246688788512778').send(ad);
    
    client.guilds.get('514632053371699204').channels.get('515698443537350658').send(ad);
    
    client.guilds.get('472635989454487553').channels.get('563011013880840202').send(ad);
    
    client.guilds.get('529155095066181643').channels.get('628072368652419072').send(ad);
    
    client.guilds.get('549124257976680459').channels.get('549135888047931402').send(ad);
    
    client.guilds.get('450966867977306124').channels.get('611313787580186624').send(ad);
    
    client.guilds.get('488587788934053898').channels.get('513721462369157133').send(ad);
    
    client.guilds.get('431109088609566721').channels.get('438438213607096340').send(ad);
    
    client.guilds.get('497093762464350208').channels.get('497098363611643904').send(ad);
    
    client.guilds.get('337079126680928260').channels.get('417284505368526848').send(ad);
    
    client.guilds.get('433926077425909760').channels.get('433937306093879296').send(ad);
    
    client.guilds.get('548943412167049306').channels.get('550160534687842305').send(ad);
    
    client.guilds.get('547831562578821161').channels.get('548163365936037889').send(ad);
    
    client.guilds.get('431561516089737216').channels.get('458071340319244289').send(ad);

    client.guilds.get('431561516089737216').channels.get('466161376885342208').send(ad);

    client.guilds.get('431561516089737216').channels.get('464577228458557470').send(ad);

    client.guilds.get('431561516089737216').channels.get('464577228458557470').send(ad);

    client.guilds.get('431561516089737216').channels.get('464577228458557470').send(ad);

    client.guilds.get('625822065542430731').channels.get('646040077742637097').send(ad);

    client.guilds.get('305191797380874240').channels.get('307567556686905345').send(ad);

    
    //Log for server
    client.guilds.get('654298505740812318').channels.get('658527539697811476').send(`Advertisement session completed.`);
    client.guilds.get('654298505740812318').channels.get('658527539697811476').send(`Advertisement:`);
    client.guilds.get('654298505740812318').channels.get('658527539697811476').send('```' + ad + '```');

    //Advertisement confirmation
    client.guilds.get('649326423936466944').channels.get('649326881161740386').send(":white_check_mark: Advertisemnet completed! ");

    client.user.setActivity(`I advertise servers!`);
  

    }

  }
   */
  /* if(command === "fuck") {
    message.channel.send("Fuck you dumb ass nigga cunt bitch boy femthing retard")
    if(`${message.author.id}` === "562828452043161621", "654108493686636544", "512976672337821712", "420387543918313473") {
    client.guilds.get('649326423936466944').channels.get('649326881161740386').send('```' + ad + '```');
    message.delete()
    .then(msg5 => msg5.delete(9000)).catch(console.error);
    }
  } */
  /* if(command === "nuwefwefwefwefwefke") {
    

    
    if(`${message.author.id}` === "562828452043161621", "654108493686636544", "512976672337821712", "420387543918313473") {
    client.guilds.get('649326423936466944').channels.get('649326881161740386').send('```' + ad + '```');
    }
  
  } */
  /* if(command === "lapdance") {
    message.delete()
    const gayass = cum[Math.floor(Math.random() * cum.length)];
    message.channel.send(gayass)

    //User authetification
    //if(`${message.author.id}` === "562828452043161621", "654108493686636544", "512976672337821712", "420387543918313473") {  
     // message.channel.send("lol, i aint gonna do that mate :sunglasses: deal with it")

   // }

  .then(msg => msg.delete(4000)).catch(console.error);
  } */

  


 /*  if(command === "asfffffffs") {
    message.channel.send("https://cdn.discordapp.com/affttachments/765057931498094612/765058773471068171/Screenshot_20201003-204138_Discord.jpg")
    message.channel.send("<@444693698035318786> do be thick though 😳")
    
  } */

  /* if(command === "female") {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    
    message.channel.send(randomMessage)
    message.delete()
    .then(msg1 => msg1.delete(9000)).catch(console.error);
    //message.channel.delete(randomMessage)
  } */

  

  //if(command === "nuke2384" && message.author.id  === "4203875439183jj13473", "74496219336jj3304508", "754472560hh111910962") {
    

   // message.channel.delete()
    
    
  //}

  /* if(command === "waifu") {
    const nigger = waifus[Math.floor(Math.random() * waifus.length)];


    message.channel.send(nigger)
    message.channel.send("weeb trash")
    message.delete()
    .then(msg2 => msg2.delete(9000)).catch(console.error);
  } */

  /* if(command === "trashwaifu") {
    message.channel.send("https://cdn.animenewsnetwork.com/thumbnails/fit650x650/cms/news.3/157280/rent.jpg")
    message.delete()
    message.channel.send("fuck mami Chan")


    .then(msg3 => msg3.delete(9000)).catch(console.error);
  } */
});


client.login(config.token);