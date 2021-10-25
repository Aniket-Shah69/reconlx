const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'afk',
    run: async(client, message, args ) => {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        message.channel.send(
            new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatar({ dynamic : true}))
            .setDescription`You have been set to afk\n**Reason**${content}`
            .setColor("GREEN")
        )
    }
}