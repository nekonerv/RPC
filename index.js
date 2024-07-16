const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1092454051809067010')
    .setType("STREAMING") //STREAMING, PLAYING, LISTENING.
    .setURL('https://twitch.tv/developer') // or your yt url
    .setState('End of An Era.🌙')
    .setName('They Not Like Us. 🌙')
    .setDetails(' Expansion. 🗿')
    .setStartTimestamp(Date.now())
  // remove this if you dont want the timestamp (the time it started the rpc)
    /*.setParty({         
        max: 9999999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/1045290410458746962/1259497855857721374/ezgif-6-c2a3840313_1.gif?ex=668de089&is=668c8f09&hm=c38cec8ae799a000608154b813979097b7e8e1f0364008224cddeae66394359f&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('GoW Ragnarök ') //Text when you hover the Large image
    .addButton('Join', 'https://discord.gg/rkKgd8ynsN')
  .addButton('Discord', 'https://discord.gg/rkKgd8ynsN')
     client.user.setActivity(r);
     client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline
})

client.login(process.env.TOKEN)






















// Copyright to mrnekrozyt 2021-2023
// Support Server:https://discord.gg/pSJ5JkmH6N
// Source Code: https://github.com/mrnekrozyt/Streaming-24-7-RPC/
