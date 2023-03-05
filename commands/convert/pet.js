const {sticker} = require("../../lib/convert");
const encodeurl = require('encodeurl')
module.exports = {
    name: 'pet',
    param: '<reply/send image>',
    cmd: ['pet'],
    category: 'converter',
    async handler(m, {conn}){
        if(m.quoted && (m.quoted.mtype == 'stickerMessage' || m.quoted.mtype == 'imageMessage')){
            conn.sendReact(m.from, '🕒', m.key);
            const upload = await tool.ugu(await m.quoted.download())
            const packInfo = { packname: `ERDWPE BOT`, author: "erdwpe.com" };
            const url = await encodeurl(`https://api.erdwpe.com/api/maker/pet?url=${upload.result.url}`)
            const stickerBuff = await sticker(await tool.getBuffer(url), {
                isImage: true,
                withPackInfo: true,
                packInfo,
                cmdType: "1"
            });
            await conn.sendMessage(m.from, {sticker: stickerBuff}, {quoted: m})
        }
        else if(!m.quoted && (m.type == 'stickerMessage' || m.type == 'imageMessage')){
            conn.sendReact(m.from, '🕒', m.key);
            const upload = await tool.ugu(await m.download())
            const packInfo = { packname: `ERDWPE BOT`, author: "erdwpe.com" };
            const stickerBuff = await sticker(await tool.getBuffer(`https://api.erdwpe.com/api/maker/pet?url=${upload.result.url}`), {
                isImage: true,
                withPackInfo: true,
                packInfo,
                cmdType: "1"
            });
            await conn.sendMessage(m.from, {sticker: stickerBuff}, {quoted: m})
        }
        else m.reply('reply/send image')
    }
}
