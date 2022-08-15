require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    prefix: process.env.PREFIX || "-", // bot prefix
    ownerID: process.env.OWNERID || ["359945204490436610"], //your discord id
    mongourl: process.env.MONGO_URI || "mongodb+srv://Ram3z:fanous123@cluster0.zstmja6.mongodb.net/?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || "#303236", // embed colour
    logs: process.env.LOGS || "1000892214588747777", // channel id for guild create and delete logs

    nodes: [
    {
      host: process.env.NODE_HOST || "usfr1.forcehost.net",
      identifer: process.env.NODE_ID || "local",
      port: parseInt(process.env.NODE_PORT || "25643"),
      password: process.env.NODE_PASSWORD || "youshallnotpass",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),

    }
  ],

}

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
