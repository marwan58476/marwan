let { model, Schema } = require('mongoose')

let schema = new Schema({
    guildId: String,
    channelId: String
})

module.exports = model('voice247', schema)