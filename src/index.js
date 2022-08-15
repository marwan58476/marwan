
const express = require("express") 
const app = express()

app.get("/", (req, res) => {
  res.send("YassineHzz Imao 2022")
})

app.listen(3000, () => {
  console.log("the project is ready")
})
const MusicBot = require("./structures/MusicClient");
const client = new MusicBot();

client.connect()

module.exports = client; 
