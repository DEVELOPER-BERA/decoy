
import moment from 'moment-timezone';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const allMenu = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';
    
        // Calculate uptime
    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    //realtime function
        const realTime = moment().tz("Tanzania/Dodoma").format("HH:mm:ss");
// pushwish function
    let pushwish = "";
    
        if (realTime < "05:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶 🌄`;
} else if (realTime < "11:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶 🌄`;
} else if (realTime < "15:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙰𝙵𝚃𝙴𝚁𝙽𝙾𝙾𝙽 🌅`;
} else if (realTime < "18:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶 🌃`;
} else if (realTime < "19:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶 🌃`;
} else {
  pushwish = `𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝙷𝚃 🌌`;
}

  const sendCommandMessage = async (messageContent) => {
    await sock.sendMessage(
      m.from,
      {
        text: messageContent,
        contextInfo: {
          isForwarded: true,
          forwardingScore: 999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '', // Preserved newsletter JID
            newsletterName: "",
            serverMessageId: -1,
          },
          externalAdReply: {
            title: "",
            body: pushName,
            thumbnailUrl: 'https://files.catbox.moe/7xgzln.jpg', // Thumbnail URL
            sourceUrl: '', // Source URL
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
  };

  
if (cmd === "menu") {
    await m.React('🦖'); // React with a loading icon

    const mainmenuMessage = `
╭───❍「 *ʙᴇʀᴀ ᴛᴇᴄʜ ʙᴏᴛ* 」
│ 🧑‍💻 *𝚄𝚜𝚎𝚛:* ${pushName} ${pushwish}
│ 🌐 *𝙼𝚘𝚍𝚎:* ${mode}
│ ⏰ *𝚃𝚒𝚖𝚎:* ${realTime}
│ 🚀 *𝚄𝚙𝚃𝚒𝚖𝚎:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭━━━〔 *ʙᴇʀᴀ ᴛᴇᴄʜ ʙᴏᴛ* 〕━━━┈⊷
┃★╭──────────────
┃★│ ᴅᴇᴠᴇʟᴏᴘᴇʀ : ᴅʀ ᴊᴀʏ
┃★│ ᴜsᴇʀ: *${m.pushName}*
┃★│ ʙᴀɪʟᴇʏs : *ᴍᴜʟᴛʏ-ᴅᴇᴠɪᴄᴇ*
┃★│ ᴍᴏᴅᴇ: *${mode}*
┃★│ ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
┃★│ ᴘʀᴇғɪx : [${prefix}]
┃★│ ᴠᴇʀsɪᴏɴ: *1.0.0*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷ 
> *ʜᴇʟʟᴏ ${m.pushName} ${pushwish}*
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃◈ ${prefix}𝙰𝚃𝚃𝙿
┃◈ ${prefix}𝙰𝚃𝚃𝙿2
┃◈ ${prefix}𝙰𝚃𝚃𝙿3
┃◈ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃◈ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃◈ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃◈ ${prefix}𝙼𝙿3
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝙰𝙸 ❯━╮
┃◈ ${prefix}𝙰𝚒
┃◈ ${prefix}𝙱𝚞𝚐
┃◈ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃◈ ${prefix}𝙶𝚙𝚝
┃◈ ${prefix}𝙳𝚊𝚕𝚕𝚎
┃◈ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃◈ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚃𝙾𝙾𝙻 ❯━╮
┃◈ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃◈ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃◈ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃◈ ${prefix}𝚃𝚛𝚝
┃◈ ${prefix}𝚃𝚝𝚜
╰━━━━━━━━━━━━━━━⪼
 ╭━❮ ʟᴏɢᴏ ᴍᴇɴᴜ ❯━╮
*┋*  ${prefix}𝗅𝗈𝗀𝗈
*┋*  ${prefix}𝖻𝗅𝖺𝖼𝗄𝗉𝗂𝗇𝗄
*┋*  ${prefix}𝗀𝗈𝗌𝗌𝗒𝗌𝗂𝗅𝗏𝖾𝗋
*┋*  ${prefix}𝗇𝖺𝗋𝗎𝗋𝗈
*┋*  ${prefix}𝖽𝗂𝗀𝗂𝗍𝖺𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*┋*  ${prefix}𝗉𝗂𝗑𝖾𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*┋*  ${prefix}𝗌𝗍𝖺𝗋
*┋*  ${prefix}𝗌𝗆𝗈𝗄𝖾
*┋*  ${prefix}𝖻𝖾𝖺𝗋*
*┋*  ${prefix}𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
*┋*  ${prefix}𝗌𝖼𝗋𝖾𝖾𝗇
*┋*. ${prefix}𝗇𝖺𝗍𝗎𝗋𝖾
*┋*  ${prefix}𝖽𝗋𝖺𝗀𝗈𝗇𝖻𝖺𝗅𝗅
*┋*  ${prefix}𝖿𝗈𝗀𝗀𝗒𝗀𝗅𝖺𝗌𝗌
*┋*  ${prefix}𝗇𝖾𝗈𝗇𝗅𝗂𝗀𝗁𝗍
*┋*  ${prefix}𝖼𝖺𝗌𝗍𝗅𝖾𝗉𝗈𝗉
*┋*  ${prefix}𝖿𝗋𝗈𝗓𝖾𝗇𝖼𝗁𝗋𝗂𝗌𝗍𝗆𝖺𝗌
*┋*  ${prefix}𝖿𝗈𝗂𝗅𝖻𝖺𝗅𝗅𝗈𝗈𝗇
*┋*  ${prefix}𝖼𝗈𝗅𝗈𝗋𝖿𝗎𝗅𝗉𝖺𝗂𝗇𝗍
*┋*  ${prefix}𝖺𝗆𝖾𝗋𝗂𝖼𝖺𝗇𝖿𝗅𝖺𝗀
*┋*  ${prefix}𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
╭───────────❍
│ʀᴇɢᴀʀᴅs ʙᴇʀᴀ ᴛᴇᴄʜ
╰───────────❍
╭━❮ 𝙶𝚁𝙾𝚄𝙿 ❯━╮
┃◈ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃◈ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃◈ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃◈ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃◈ ${prefix}𝙶𝚛𝚘𝚞𝚙
┃◈ ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
┃◈ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃◈ ${prefix}𝙰𝚍𝚍
┃◈ ${prefix}𝙺𝚒𝚌𝚔
┃◈ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃◈ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃◈ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃◈ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃◈ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃◈ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃◈ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
╰━━━━━━━━━━━━━━━⪼
╭───────────❍
│ʀᴇɢᴀʀᴅs ʙᴇʀᴀ ᴛᴇᴄʜ
╰───────────❍
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃◈ ${prefix}𝙰𝚙𝚔
┃◈ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃◈ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃◈ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃◈ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃◈ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃◈ ${prefix}𝙸𝚗𝚜𝚝𝚊
┃◈ ${prefix}𝚈𝚝𝚖𝚙3
┃◈ ${prefix}𝚈𝚝𝚖𝚙4
┃◈ ${prefix}𝙿𝚕𝚊𝚢
┃◈ ${prefix}𝚂𝚘𝚗𝚐
┃◈ ${prefix}𝚅𝚒𝚍𝚎𝚘
┃◈ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃◈ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃◈ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
╰━━━━━━━━━━━━━━━⪼
╭───────────❍
│ʀᴇɢᴀʀᴅs ʙᴇʀᴀ ᴛᴇᴄʜ
╰───────────❍
╭━❮ 𝚂𝙴𝙰𝚁𝙲𝙷 ❯━╮
┃◈ ${prefix}𝙿𝚕𝚊𝚢
┃◈ ${prefix}𝚈𝚝𝚜
┃◈ ${prefix}𝙸𝚖𝚍𝚋
┃◈ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃◈ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃◈ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃◈ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃◈ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃◈ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃◈ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃◈ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
╰━━━━━━━━━━━━━━━>>
╭───────────❍
│ʀᴇɢᴀʀᴅs ʙᴇʀᴀ ᴛᴇᴄʜ
╰───────────❍
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃◈ ${prefix}𝙿𝚒𝚗𝚐
┃◈ ${prefix}𝙰𝚕𝚒𝚟𝚎
┃◈ ${prefix}𝙾𝚠𝚗𝚎𝚛
┃◈ ${prefix}𝙼𝚎𝚗𝚞
┃◈ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰━━━━━━━━━━━━━━━⪼
╭───────────❍
│ʀᴇɢᴀʀᴅs ʙᴇʀᴀ ᴛᴇᴄʜ
╰───────────❍
╭━❮ 𝙾𝚆𝙽𝙴𝚁 ❯━╮
┃◈ ${prefix}𝙹𝚘𝚒𝚗
┃◈ ${prefix}𝙻𝚎𝚊𝚟𝚎
┃◈ ${prefix}𝙱𝚕𝚘𝚌𝚔
┃◈ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃◈ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃◈ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃◈ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃◈ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃◈ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃◈ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃◈ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃◈ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰━━━━━━━━━━━━━━━⪼
╭━❮ 𝚂𝚃𝙰𝙻𝙺 ❯━╮
┃◈ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃◈ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃◈ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰━━━━━━━━━━━━━━━⪼`;

await m.React('✅'); // React with success icon
    await sendCommandMessage(mainmenuMessage);
  }
  

export default allMenu;
