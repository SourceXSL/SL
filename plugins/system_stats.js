const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```God Save the Turk\' 🐺 SL Android at Your Service!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/SL_Android_Chat\n*Telegram Channel:* https://t.me/SL_Android\n*Plugin Channel:* ' + Config.CHANNEL , MessageType.text);
        }
        else {
            const pow = '*Powered by SL Android*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture() 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```God Save the Turk\' 🐺 SL Android at Your Service!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/SL_Android_Chat\n*Telegram Channel:* https://t.me/SL_Android\n*Plugin Channel:* ' + Config.CHANNEL, MessageType.text);
        }
        else {
            const pow = '*Powered by SL Android*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture() 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```God Save the Turk\' 🐺 SL Android at Your Service!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/SL_Android_Chat\n*Telegram Channel:* https://t.me/SL_Android\n*Plugin Channel:* ' + Config.CHANNEL, MessageType.text);
        }
        else {
            const pow = '*Powered by SL Android*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture() 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true }, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
