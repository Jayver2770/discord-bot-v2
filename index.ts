import DiscordJS, { Intents } from 'discord.js'
import WOK from 'wokcommands'
import path from 'path'
import mongoose from 'mongoose'
import 'dotenv/config'

// import testSchema from './test-schema'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES, 
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
    ],
})

client.on('ready', async () => {
    // await mongoose.connect(process.env.MONGO_URI || '', {
    //         keepAlive: true,
    //     })

    new WOK(client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        typeScript: true,
        testServers: ['817237083588526092', '869674723196416120'],
        botOwners: ['283003287047897099'],
        mongoUri: process.env.MONGO_URI,
    })

    // setTimeout(async () => {
    //     await new testSchema({
    //         message: 'hello world!!',
    //     }).save()
    // }, 1000)
})

client.login(process.env.TOKEN)
