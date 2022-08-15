module.exports = {
  name: "shardResume",
  run: async (client, id, replayedEvents) => {
  client.logger.log(`Shard #${id} Resumed`, "log");
    let voiceSchema = require(process.cwd() + '/src/schema/voice247.js')
    let { joinVoiceChannel } = require("@discordjs/voice")
    client.guilds.cache.forEach(async guild => {
      let data = await voiceSchema.findOne({
        guildId: guild.id
      })
      if (!data)
        return 
      let voiceChannel = guild.channels.cache.get(`1004001259105292318`)
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
};
