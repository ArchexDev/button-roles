const Discord = require("discord.js");
const client = new Discord.Client({
  autoReconnect: true
});
const disbut = require('discord-buttons')(client);




client.on("ready", () => {
  console.log(
    `[BOT]: ${client.user.tag} ismiyle bağlandım!`
  );
  client.user.setPresence({
    activity: {
      name: `Ghost Button Roles Altyapı`,
      type: "WATCHING"
    },
    status: "idle"
  });
});



client.on('message', async msg => {
  if (msg.content.toLowerCase() === `.partner`) {
    
        let button = new disbut.MessageButton()
          .setStyle("red")
          .setLabel('Butona basarak partner görme rolünü alabilirsin!')
          .setID('rol')        
        await msg.channel.send(msg.author, button)
  }
})

client.on('clickButton', async button => {
if (button.id === 'rol') {
      await button.clicker.member.roles.add("rolid")
      await button.reply.send(' Rol Başarıyla Eklendi!', true);
    }
})


client.on('message', async msg => {
  if (msg.content.toLowerCase() === `.normal`) {
    
        let button = new disbut.MessageButton()
          .setStyle("red")
          .setLabel('Butona basarak normal kodlar rolünü alabilirsin!')
          .setID('rol')        
        await msg.channel.send(msg.author, button)
  }
})

client.on('clickButton', async button => {
if (button.id === 'rol') {
      await button.clicker.member.roles.add("rolid")
      await button.reply.send(' Rol Başarıyla Eklendi!', true);
    }
})


client.on('message', async msg => {
  if (msg.content.toLowerCase() === `.discord`) {
    
        let button = new disbut.MessageButton()
          .setStyle("red")
          .setLabel('Butona basarak güncellemeler rolünü alabilirsin!')
          .setID('rol')        
        await msg.channel.send(msg.author, button)
  }
})

client.on('clickButton', async button => {
if (button.id === 'rol') {
      await button.clicker.member.roles.add("rolid")
      await button.reply.send(' Rol Başarıyla Eklendi!', true);
    }
})




client.on('message', async msg => {
  if (msg.content.toLowerCase() === `.help`) {
    
        let embed = new Discord.MessageEmbed()
          .setColor("BLURPLE")
          .setTitle('Discord Button Roles :zap:')
          .setDescription('Tüm komutlar aşağıdadır:')    
          .addField('.normal', 'Normal kodlar rolünü almak için kullan.')  
          .addField('.discord', 'Discord\'la ilgili güncellemeleri görmek için kullan.')              
          .addField('.partner', 'Partner kanallarını görmek için kullan.')
        return msg.channel.send(embed);
  }
})


module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  let prefix = "!"; // prefix girin
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }
};

client.login('');
