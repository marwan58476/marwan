const { prefix } = require("../../config.js");

module.exports ={
name: "ready",
inVoiceChannel: true,
sameVoiceChannel: true,
run: async (client) => {
    client.manager.init(client.user.id);
    client.logger.log(`${client.user.username} online!`, "ready");
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`, "ready");

    //Game
    let statuses = ["Memories Server"];
    setInterval(function() {
  		let status = statuses[Math.floor(Math.random()*statuses.length)];
      client.user.setStatus(`dnd`)
  		client.user.setActivity(status, {type: "PLAYING"});
  	}, 10000)
    // const channel = client.channels.cache.get("1004001259105292318") // channel id
    // const guild = client.guilds.cache.get("1003646614843424798") // guild id (Server Id)
    //     let { joinVoiceChannel } = require("@discordjs/voice")
    //   if (!channel) return
   let voiceSchema = require(process.cwd() + '/src/schema/voice247.js')
    let { joinVoiceChannel } = require("@discordjs/voice")
    client.guilds.cache.forEach(async guild => {
      let data = await voiceSchema.findOne({
        guildId: guild.id
      })
      if (!data)
        return 
      let voiceChannel = guild.channels.cache.get(`1000881139336089751`)
      let textChannel = guild.channels.cache.get(ch =>{ ch.name === "・↝𝐌𝐞𝐦𝐨𝐫𝐢𝐞𝐬"})
      let channel = guild.channels.cache.find((channel) => channel.name.toLowerCase() === `・↝𝐌𝐞𝐦𝐨𝐫𝐢𝐞𝐬`)
      if (!voiceChannel)
        return
      const player = client.manager.create({
        guild: guild.id,
        voiceChannel: voiceChannel.id,
        textChannel: channel.id,
        adapterCreator: guild.voiceAdapterCreator,
        selfDeafen: true,
        volume: 80,
      });
      joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: guild.id,
        adapterCreator: guild.voiceAdapterCreator
      })
    })

 }
}
