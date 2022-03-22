const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const config = require(".././config.json")

module.exports = async(client) => {
  
  rpc.getRpcImage(config.applicationid, config.imagename)
  .then(large => {
    let presence = new rpc.Rpc()
    .setName(config.name)
    .setUrl('https://www.twitch.tv/ferdysr')
    .setType(config.type)
    .setApplicationId(config.applicationid)
    .setAssetsLargeImage(large.id)
    .setState(config.state)
    .setDetails(config.details) 
      
  console.log(presence.toDiscord())
    client.user.setPresence(presence.toDiscord()).catch(console.error);
  })
  console.log(chalk.hex("#ff0000")("RPC Berhasil Diaktifkan!"))
           }