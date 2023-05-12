const fs = require("fs");
const { jidNormalizedUser } = require('@whiskeysockets/baileys')
module.exports = {
	name: "addcommand",
	param: "<reply code>",
	cmd: ["addcommand", "addcmd"],
	category: "owner",
	owner: true,
	quoted: true,
	async handler(m, { conn, text}) {
	    conn.sendReact(m.from, '🕒', m.key);
await conn.profile
		const file = `./commands/${text}`;
		await fs.writeFileSync(file, m.quoted.text);
		m.reply("Succsess add command " + text);
	},
};
