module.exports = {
  name: 'twitter',
  param: '<url>',
  cmd: ['twitter'],
  category: 'downloader',
  desc: 'Download twitter media',
  query: true,
  url: true,
  async handler(m, {conn, text}){
    conn.sendReact(m.from, '🕒', m.key)
    const twit = await axios.get(`https://api.erdwpe.com/api/dowloader/twitter?url=${text}`)
    const url = twit.HD ? twit.HD : twit.SD
    if(!url) return m.reply("Link download not found!")
    await conn.sendFileFromUrl(m.from, url, {}, {quoted: m, adReply: true})
  }
}
