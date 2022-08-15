## 📝 Lava Music!

Subscribe To YassineHzz [here](https://youtube.com/yassinehzz)


## 🎭 Features

- [x] Music
- [x] 24/7
- [x] SlashCommand
- [x] Custom prefix
- [x] Filters
- [x] Easy to use
- [x] More


## 🖼️ Screenshots
<br />
<p align="center">
  <a href="https://github.com/brblacky/lavamusic">
    <img src="https://media.discordapp.net/attachments/876035356460462090/912404827118641202/Screenshot_20211122-234019__01.jpg">
    <img src="https://media.discordapp.net/attachments/876035356460462090/910856250084970518/Screenshot_20211118-170634__01.jpg">
    <img src="https://media.discordapp.net/attachments/876035356460462090/910855739969527849/Screenshot_20211118-170456__01.jpg">
    <img src="https://media.discordapp.net/attachments/876035356460462090/911442921738350622/Screenshot_20211120-075640__01.jpg">

  </a>
</p>

## 📎 Requirements
* [Nodejs](https://nodejs.org/en/)-v16 
* [Discord.js](https://github.com/discordjs/discord.js/)-v13
* [Java](https://adoptopenjdk.net/) for lavalink
* [Lavalink](https://ci.fredboat.com/viewLog.html?buildId=lastSuccessful&buildTypeId=Lavalink_Build&tab=artifacts&guest=1)

Note: Java v11 or newer is required to run the Lavalink.jar. Java v13 is recommended. If you are using sdkman then its a manager, not Java, you have to install sdkman and use sdkman to install Java

Warning: Java v14 has issues with Lavalink.

### 🌐 Main

- Discord bot's
  token `You should know why you need this or you won't go to this repo` [Get or create bot here](https://discord.com/developers/applications)
- Mongodb
  URI `for custom prefix` [MongoDB](https://account.mongodb.com/account/login)
- Your ID `for eval command. It's dangerous if eval accessible to everyone`
- Spotify client ID `for spotify support` [Click here to get](https://developer.spotify.com/dashboard/login)
- Spotify client Secret `for spotify support` [Click here to get](https://developer.spotify.com/dashboard/login)

## 🎶 Available music sources:

- youtube `*`
- bandcamp `*`
- soundcloud `*`
- twitch `*`
- vimeo `*`
- http (you can use radio for it) `*`
- spotify `*`
- deezer `*`


<!-- INSTALL -->
## 🚀 Installation from source
```
git clone https://github.com/brblacky/lavamusic.git
```
After cloning, run an
```
npm install
```
* Start the bot with `node index.js`

to snag all of the dependencies. Of course, you need [node](https://nodejs.org/en/) installed. I also strongly recommend [nodemon](https://www.npmjs.com/package/nodemon) as it makes testing *much* easier.

## 🚀 Installation using docker-compose
Alternatively you can run lavamusic on [docker](https://www.docker.com/). Pull the prebuilt docker image from [here](https://ghcr.io/brblacky/lavamusic).  
See [here](https://github.com/StefanLobbenmeier/lavamusic-docker-compose) for a complete environment.

## intents

<p align="center">
  <a href="https://github.com/brblacky/lavamusic">
    <img src="https://media.discordapp.net/attachments/848492641585725450/894114853382410260/unknown.png">

  </a>
</p>
When Your Running The Code You Must Have Gotten This Error To Fix This Head Over To Your Bots Discord Application and Go To The Bot Settings And Find This

<p align="center">
  <a href="https://github.com/brblacky/lavamusic">
    <img src="https://media.discordapp.net/attachments/848492641585725450/894115221701001216/unknown.png">

  </a>
</p>
Then Turn On Both Of Those Settings And Click "Save Changes" Then Your Are Done And The It Should Be Fixed
<!-- CONFIGURATION -->

## ⚙️ Configurations
- edit in `src/config.js` and you can do in `.env` 
```js
    token: process.env.TOKEN || "",  // your bot token
    prefix: process.env.PREFIX || "!", // bot prefix
    ownerID: process.env.OWNERID || "491577179495333903", //your discord id
    mongourl: process.env.MONGO_URI || "", // MongoDb URL
    embedColor: process.env.COlOR || "#303236", // embed colour
    logs: process.env.LOGS || "", // channel id for guild create and delete logs
```
## 🌋 lavalink 
```js
      "host": "disbotlistlavalink.ml",
      "port": 443,
      "password": "LAVA",
      "retryDelay": 3000,
      "secure": true
```
- Create an application.yml file in your working directory and copy the [example](https://github.com/freyacodes/Lavalink/blob/master/LavalinkServer/application.yml.example) into the created file and edit it with your configuration.
- Run the jar file by running `java -jar Lavalink.jar` in a Terminal window.


<!-- ABOUT THE PROJECT -->

## 🌀 About
[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=brblacky&repo=lavamusic&theme=tokyonight)](https://github.com/brblacky/lavamusic)

 Lavamusic is a lavalink music bot base in [erela.js](https://github.com/MenuDocs/erela.js)
If you liked this repository, feel free to leave a star ⭐ to help promote !

## 💌 Support Server
[![DiscordBanner](https://invidget.switchblade.xyz/YvR5ZXfmNj)](https://discord.gg/YvR5ZXfmNj)
[Support Server](https://discord.gg/YvR5ZXfmNj) - lavamusic's Support Server Invite

# Donate

 By Donating, You Will Help Me To Maintain This Project 

- [PayPal](https://www.paypal.me/sdip521)


<!-- LICENSE -->

## 🔐 License

Distributed under the MIT License. See [`LICENSE`](https://github.com/brblacky/lavamusic/blob/master/LICENSE) for more information.

[version-shield]: https://img.shields.io/github/package-json/v/brblacky/lavamusic?style=for-the-badge
[version-url]: https://github.com/brblacky/lavamusic
[contributors-shield]: https://img.shields.io/github/contributors/brblacky/lavamusic.svg?style=for-the-badge
[contributors-url]: https://github.com/brblacky/lavamusic/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/brblacky/lavamusic.svg?style=for-the-badge
[forks-url]: https://github.com/brblacky/lavamusic/network/members
[stars-shield]: https://img.shields.io/github/stars/brblacky/lavamusic.svg?style=for-the-badge
[stars-url]: https://github.com/brblacky/lavamusic/stargazers
[issues-shield]: https://img.shields.io/github/issues/brblacky/lavamusic.svg?style=for-the-badge
[issues-url]: https://github.com/brblacky/lavamusic/issues
[license-shield]: https://img.shields.io/github/license/brblacky/lavamusic.svg?style=for-the-badge
[license-url]: https://github.com/brblacky/lavamusic/blob/master/LICENSE
