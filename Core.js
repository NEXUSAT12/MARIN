// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮MARIN-BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮WHATSAPP US : +918130784851
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING MARIN-BOT
//┃THANKS TO NEXUS
//┃BEHOLD THE NEW
//┃
//┃LET LOVE LEAD
//┃
//┃YOU WANNA RE UPLOAD GIVE A PROPER CREDIT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//

process.on('uncaughtException', console.error)
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag , MessageType , _WAConnection, Presence, MessageOptions, Mimetype, MimetypeMap,WALocationMessage, ChatModification, WA_MESSAGE_STUB_TYPES, WA_DEFAULT_EPHEMERAL, ReclientectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime,} = require('@adiwajshing/baileys')
const zNexus = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const { AnimeWallpaper } = require("anime-wallpaper")
 const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const { virtex, vipi } = require("./lib/virtex.js");
// const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { NexusTiktok } = require('./lib/tiktokNexusdl');
const maker = require('mumaker')
const xfarrapi = require('xfarr-api')
const { hentai } = require('./lib/scraper2.js')
let { msgFilter } = require('./lib/antispam')
const { mediafireDl } = require('./lib/mediafire.js')
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')

const _ = require('lodash')
const yargs = require('yargs/yargs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')

let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));

 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))


global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let bad = JSON.parse(fs.readFileSync('./src/bad.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))


const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = Nexus = async (Nexus, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa
const isCmd = body.startsWith(prefix)
const notCmd = body.startsWith('')
const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await Nexus.decodeJid(Nexus.user.id)
const isCreator = [botNumber, ...global.Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const groupMetadata = m.isGroup ? await Nexus.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(from) : false
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const antiToxic = m.isGroup ? nttoxic.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : false
autoreadsw = true
const content = JSON.stringify(m.message)
const q = args.join(' ')

const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')


const setting = JSON.parse(fs.readFileSync('./apikey.json'))

const mongoose = require("mongoose");

const time2 =moment().tz("Asia/Kolkata").format("HH:mm:ss")
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Good night";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Good evening🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Good afternoon🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Good afternoon☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Good morning🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Good night🌃";
    }

	
////////// -bug button ////////////////////

const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await Nexus.relayWAMessage(
        Nexus.prepareMessageFromContent(
          target,
          Nexus.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      Nexus.sendMessage(target, teks, "conversation");
    };

/////////// -  DM chatbot (Delete this part to turn off DM Chat Bot) - //////////////////

if (!isCmd && !m.isGroup){
    const botreply = await axios.get(`http://api.brainshop.ai/get?bid=168758&key=Ci7eNhtxpxxDB5FQ&uid=[uid]&msg=[${budy}]`)
    txt = `${botreply.data.cnt}`
    m.reply(txt)
    }

//////////////////////////////////////////////////////////////////////////////////////

const iye = fs.readFileSync('./Assets/pic1.jpg')
const asw1 = 'https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg'
const sip = fs.readFileSync('./Assets/pic3.jpg')
const bgg = fs.readFileSync('./Assets/pic5.jpg')

_sewa.expiredCheck(Nexus, sewa)

const reply = (teks) => {
            Nexus.sendMessage(m.chat, { text: teks},{ quoted: m})
        }
        
        const replay = (teks) => {
            Nexus.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
        

function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 

            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await Nexus.relayWAMessage(
        Nexus.prepareMessageFromContent(
          target,
          Nexus.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      Nexus.sendMessage(target, teks, "conversation");
    };

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) 
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
   
                        if (m.isGroup && isLeveling && isUser && Nexus.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `「 *User Level UP* 」\n\n@${m.sender.split("@")[0]} got leveled up!!\n\n*User XP*: ${getLevelingXp(m.sender)}\n*Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n*Role*: ${role} \n\n`
Nexus.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }
                if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }

if (autoreadsw) {
		if (from === 'status@broadcast') {
		Nexus.chatRead(from)
	}
	}

if (global.autoreadpmngc) {
if (command) {
await Nexus.sendPresenceUpdate('composing', m.chat)
Nexus.sendReadReceipt(from, m.sender, [m.key.id])}
}
/*
  if (global.autoReadGc) {
  if (m.isGroup) { Nexus.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
*/

  if (global.autoReadAll) { if (m.chat) { Nexus.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
  }

    if (global.autoRecord) { if (m.chat) { Nexus.sendPresenceUpdate('recording', m.chat) }
}

  if (global.autoTyping) { if (m.chat) { Nexus.sendPresenceUpdate('composing', m.chat) }
}

  if (global.available) { if (m.chat) { Nexus.sendPresenceUpdate('available', m.chat) }
  }

const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`
			
async function hitungmundur(bulan, tanggal) { 
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Day " + hours + "Hour " + minutes + "Minute " + seconds + "Second"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
} catch (err) {
console.error(err)
}
//bgm code//
for (let ayu of vien){
    if (budy == ayu){
	    result = fs.readFileSync(`./nexusmedia/${ayu}.mp3`)
	    Nexus.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4' , ptt: true }, { quoted: m})
            Nexus.sendMessage(from, { react: { text: `${global.reactmoji1}`, key: m.key }})
	}
	} 
	
//sticker code//
for (let ayu of setik){
    if (budy == ayu){
	    result = fs.readFileSync(`./nexusmedia/NEXUS.VIDEO/${ayu}.webp`)
	    Nexus.sendMessage(m.chat,{ sticker: result }, { quoted: m })
	}
	} 
	
/////////////////////////////////////////
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
Nexus.relayMessage(jid, order.message, { messageId: order.key.id})
}


const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson,
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/blood.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/exchange.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/money.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/prey.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
 

        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
Pls try not to tag him!
He's in away from keyboard ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
Pls try not to tag him!
He's Offline ${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}


	if (m.mtype === 'groupInviteMessage') {
	teks = `I can't join the group untill my *Owner* ask me to join. Type *-owner* to get owner number and ask him.`
	sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./Assets/pic10.jpg'), `${watermark}`, `${BotName}`, "918130784851@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
	}

	if (AntiLink) {
   	linkgce = await Nexus.groupInviteCode(from)
    	if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
    	reply(`\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be because you sent this group's link.`)
    	} else if (isUrl(m.text)) {
    	bvl = `\`\`\`「  *Antilink System*  」\`\`\`\n\nAdmin has sent a link so no action is taken.`
    	if (isAdmins) return reply(bvl)
    	if (m.key.fromMe) return reply(bvl)
    	if (isCreator) return reply(bvl)
    	kice = m.sender
    	await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
    	Nexus.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
    	} else {
    	}
    	}
    
	if (antiToxic)
	if (bad.includes(messagesD)) {
	tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
	sin =  tos[Math.floor(Math.random() * (tos.length))]
	reply(sin)
	if (m.text) {
	bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
	if (isAdmins) return reply(bvl)
	if (m.key.fromMe) return reply(bvl)
	if (isCreator) return reply(bvl)
	kice = m.sender
	await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
	Nexus.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
	}
 
    	if (antiWame)
    	if (budy.includes(`wa.me`)) {
  	if (!isBotAdmins) return
  	bvl = `\`\`\`「 _'wa.me' PM link Detected!_  」\`\`\`\n\nLink sent by Admin so no action is taken!`
  	if (isAdmins) return reply(bvl)
  	if (m.key.fromMe) return reply(bvl)
  	if (isCreator) return reply(bvl)
  	kice = m.sender
  	await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
  	Nexus.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]} Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
  	} else {
  	}
  	if (antiWame)
  	if (budy.includes(`http://wa.me`)) {
	if (!isBotAdmins) return
	bvl = `\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\nLink sent by Admin so no action is taken!`
	if (isAdmins) return reply(bvl)
	if (m.key.fromMe) return reply(bvl)
	if (isCreator) return reply(bvl)
	kice = m.sender
	await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
	Nexus.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]}  Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
	} else {
	}

    	if (AntiLink) {
        if (!isBotAdmins) return
        linkgce = await Nexus.groupInviteCode(from)
        if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(`\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be taken because you sent this group's link!`)
        } else if (isUrl(m.text)) {
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nAdmin has sent a group link so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Nexus.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        }

        
        if (AntiLinkYoutubeVid)
        if (budy.includes("https://youtu.be/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Nexus.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Yt video link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }	
        
        if (AntiLinkYoutubeChannel)
           if (budy.includes("https://youtube.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Nexus.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Yt channel link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkInstagram)
           if (budy.includes("https://www.instagram.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Nexus.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Instagram link in this group! No promotion is allowed!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkFacebook)
           if (budy.includes("https://facebook.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Nexus.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Facebook link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
	
	if (antiVirtex) {
	if (!isBotAdmins) return
    	if (budy.length > 1500) {
		reply(`*DONT'S SCROLL UP YOUR WHATSAPP WILL GET CRASH JUST CLEAR YOUR CHATS NOW OF THIS GROUP IT WILL BE FIXED*\n\n`.repeat(200))
		reply(`\`\`\`Virus Detected !!\`\`\`\n\nRevoving sender...`)	
		kice = m.sender
    		await Nexus.groupParticipantsUpdate(m.chat,{delete : budy}, [kice], 'remove')
    		}
    		}
        
        if (AntiLinkTelegram)
           if (budy.includes("https://t.me/")){
        if (AntiLinkTelegram)
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Nexus.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Telegram link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTiktok)
           if (budy.includes("https://www.tiktok.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Nexus.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Tiktok link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTwitter)
           if (budy.includes("https://twitter.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Nexus.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Twitter link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkAll)
           if (budy.includes("https://")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Nexus.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Nexus.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending links in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        

if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 teks = `「 *Anti ViewOnce Message* 」
${themeemoji} Name : ${m.pushName}
${themeemoji} User : @${m.sender.split("@")[0]}
${themeemoji} Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} 
${themeemoji} Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}
${themeemoji} MessageType : ${m.mtype}`
Nexus.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`Maybe it's been opened by a bot`))
}


if (!Nexus.public) {
if (!m.key.fromMe) return
}


setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
    cron.schedule('*/2 * * * *', () => {
    let user = Object.keys(global.db.users)
    let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
    for (let jid of user) global.db.users[jid].limit = limitUser
    console.log('Reseted Limit')
    }, {
    scheduled: true,
    timezone: "Asia/Kolkata"
    })

    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = tebaklagu[m.sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
      await Nexus.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
      delete tebaklagu[m.sender.split('@')[0]]
      } else reply('*Wrong answer!*')
      }
    if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = kuismath[m.sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
      await reply(`「 *Math Quiz* 」\n\n 🎉 Correct Answer 🎉\n\nWant to play again? send ${prefix}math mode`)
      delete kuismath[m.sender.split('@')[0]]
      } else reply('*Wrong answer!*')
      }

      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
        kuis = true
        jawaban = tebakgambar[m.sender.split('@')[0]]
        if (budy.toLowerCase() == jawaban) {
        await Nexus.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
        delete tebakgambar[m.sender.split('@')[0]]
        } else reply('*Wrong answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkata[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Nexus.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkata[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = caklontong[m.sender.split('@')[0]]
          deskripsi = caklontong_desk[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Nexus.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `🎮 Guess The Saying 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete caklontong[m.sender.split('@')[0]]
          delete caklontong_desk[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkalimat[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Nexus.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkalimat[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaklirik[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Nexus.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaklirik[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaktebakan[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Nexus.sendButtonText(m.chat, [{ buttonId: 'riddles', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaktebakan[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (('family100'+m.chat in _family100) && isCmd) {
          kuis = true
          let room = _family100['family100'+m.chat]
          let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
          let isSurender = /^((me)?give up|surr?ender|surrender)$/i.test(m.text)
          if (!isSurender) {
          let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
          if (room.terjawab[index]) return !0
          room.terjawab[index] = m.sender
          }
          let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
          let caption = `
          Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
          ${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
          ${Array.from(room.jawaban, (jawaban, index) => {
          return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
          }).filter(v => v).join('\n')}
          ${isSurender ? '' : `Perfect Player`}`.trim()
          Nexus.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
          if (isWin || isSurender) delete _family100['family100'+m.chat]
          }
          
          
          this.suit = this.suit ? this.suit : {}
          let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
          if (roof) {
          let win = ''
          let tie = false
          if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|oke?|reject|dont want|later|no(pe)?can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
          if (/^(reject|dont want|later|n|no(pe)?can)/i.test(m.text)) {
          Nexus.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
          delete this.suit[roof.id]
          return !0
          }
          roof.status = 'play'
          roof.asal = m.chat
          clearTimeout(roof.waktu)
          
          Nexus.sendText(m.chat, `Suit has been sent to chat
          @${roof.p.split`@`[0]} dan 
          @${roof.p2.split`@`[0]}

          Please choose a suit in the respective chat"
          Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
          if (!roof.pilih) Nexus.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          if (!roof.pilih2) Nexus.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2) Nexus.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
          else if (!roof.pilih || !roof.pilih2) {
          win = !roof.pilih ? roof.p2 : roof.p
          Nexus.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} don't choose suit, game over`, m)
          }
          delete this.suit[roof.id]
          return !0
          }, roof.timeout)
          }
          let jwb = m.sender == roof.p
          let jwb2 = m.sender == roof.p2
          let g = /scissors/i
          let b = /rock/i
          let k = /paper/i
          let reg = /^(scissors|rock|paper)/i
          if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
          roof.pilih = reg.exec(m.text.toLowerCase())[0]
          roof.text = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih2) Nexus.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
          roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
          roof.text2 = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih) Nexus.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          let stage = roof.pilih
          let stage2 = roof.pilih2
          
          if (roof.pilih && roof.pilih2) {
            clearTimeout(roof.waktu_milih)
            if (b.test(stage) && g.test(stage2)) win = roof.p
            else if (b.test(stage) && k.test(stage2)) win = roof.p2
            else if (g.test(stage) && k.test(stage2)) win = roof.p
            else if (g.test(stage) && b.test(stage2)) win = roof.p2
            else if (k.test(stage) && b.test(stage2)) win = roof.p
            else if (k.test(stage) && g.test(stage2)) win = roof.p2
            else if (stage == stage2) tie = true
            Nexus.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}
            @${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
            @${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
            `.trim(), m, { mentions: [roof.p, roof.p2] })
            delete this.suit[roof.id]
            }
            }

            async function cerpen (category) {
              return new Promise((resolve, reject) => {
                  let title = category.toLowerCase().replace(/[()*]/g, "")
                  let judul = title.replace(/\s/g, "-")
                  let page = Math.floor(Math.random() * 5)
                  axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
                  .then((get) => {
                      let $ = cheerio.load(get.data)
                      let link = []
                      $('article.post').each(function (a, b) {
                          link.push($(b).find('a').attr('href'))
                      })
                      let random = link[Math.floor(Math.random() * link.length)]
                      axios.get(random)
                      .then((res) => {
                          let $$ = cheerio.load(res.data)
                          let hasil = {
                              title: $$('#content > article > h1').text(),
                              author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                              kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                              lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                              cerita: $$('#content > article > p').text()
                          }
                          resolve(hasil)
                      })
                  })
              })
          }

            if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
              let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
              let { text, mentionedJid } = hash
              let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
              userJid: Nexus.user.id,
              quoted: m.quoted && m.quoted.fakeObj
              })
              messages.key.fromMe = areJidsSameUser(m.sender, Nexus.user.id)
              messages.key.id = m.key.id
              messages.pushName = m.pushName
              if (m.isGroup) messages.participant = m.sender
              let msg = {
              ...chatUpdate,
              messages: [proto.WebMessageInfo.fromObject(messages)],
              type: 'append'
              }
              Nexus.ev.emit('messages.upsert', msg)
              }
          


              const textImg = (teks) => {
                Nexus.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Assets/pic4.jpg')}) 
                }
                
              const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "120363045316154735@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: `${global.OwnerName}`,
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '918130784851@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./Assets/pic5.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '918130784851@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./Assets/pic2.jpg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "918130784851@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
		"groupJid": "120363045316154735@g.us",
		"inviteCode": `${ucapanWaktu} ${pushname}`,
		"groupName": `${ucapanWaktu} ${pushname}`, 
            	"caption": `${ucapanWaktu} ${pushname}`, 
            	"jpegThumbnail": BotLogo
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: `${global.OwnerName}`, jpegThumbnail: iye } },
    };
    const fvn = {
      key: {
        participant: `918130784851@s.whatsapp.net`,
        ...(from ? { remoteJid: "120363045316154735@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "120363045316154735@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: `${global.OwnerName}`,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: `${global.WaterMark}`,
          jpegThumbnail: iye,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "120363045316154735@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
	"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "120363045316154735@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: `${global.WaterMark}`,
          jpegThumbnail: iye,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `918130784851@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "120363045316154735@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "120363045316154735@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: `${global.OwnerName}`, jpegThumbnail: BotLogo } },
    };
    const fakestatus = (teks) => {
      Nexus.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: `${global.WaterMark}`,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "918130784851",
              jpegThumbnail: fs.readFileSync("./Assets/pic6.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      Nexus.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./Assets/pic3.jpg"),
        quoted: m,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      Nexus.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "120363045316154735@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: `${global.WaterMark}`,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "918130784851",
              jpegThumbnail: fs.readFileSync("./Assets/pic3.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
  l = 1
  monospace = '```'
  const timestampe = speed();
  const latensie = speed() - timestampe
  const levelMenu = getLevelingLevel(m.sender)
  const xpMenu = getLevelingXp(m.sender)
  const uangku = getBalance(m.sender, balance)
  const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
  const jumlahUser = pendaftar.length
    if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
    if (!isInventory){ addInventori(m.sender) }
    if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }

    const menulist = `
    Konichiwa ${pushname} dear 👋. I am ${global.BotName}, a bot developed .
        
       「 System Info 」
    
    Speed : ${latensie.toFixed(4)} miliseconds
    Up Time : ${runtime(process.uptime())}
    Bot Name : ${global.BotName}
    Owner Name : ${global.OwnerName}
    𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Amazon AWS
    𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}
    
    
       「 User Info 」
    
    User Level: ${levelMenu}
    User XP : ${xpMenu} \ ${reqXp}
    User Role : ${role}
    
    
       「 User Bank 」
    
    User Balance : ${uangku}
    Iron : ${getBesi(m.sender)}
    Gold : ${getEmas(m.sender)}
    Emarald : ${getEmerald(m.sender)}
    Potion : ${getPotion(m.sender)}
    
    
    Type *${prefix}menu* or press any button below to start using *${global.BotName}*
    
    ©️ *${global.BotName}* All Rights Reserved by: *AYUSH❄️❤️‍🔥👑*
    `
        const qtod = m.quoted? "true":"false"
        
        

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

           

switch(command) {
	
    case 'sc': case 'script': case 'sourcecode': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    teks = `*╭━━━╼⋉${global.BotName}⋊╾━━╮\n┃ https://wa.me/${global.PermanentOwner}\n┃ Dont forget to follow me on *https://github.com/NEXUSAT12* \N ┃ give a ⭐️ to my projects\n ╰━━╼『${global.BotName}』 `
    let buttons = [
    {buttonId: `${prefix}menu`, buttonText: {displayText: '✨Bot Menu✨'}, type: 1}
    ]
    let buttonMessage = {
    image: Thumb,
    jpegThumbnail: BotLogo ,
    caption: teks,
    footer: `${BotName }`,
    buttons: buttons,
    headerType: 4,
    }
    Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'me': case 'profile': case 'p':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     

     var flob = await getBuffer(picak+'User Profile')
     var bio= await Nexus.fetchStatus(m.sender)
     var bioo = bio.status
     const adn= isAdmins? "True":"False"
     
     try {
        
        pfp=await Nexus.profilePictureUrl(m.sender, 'image')
    
          } catch (e) {
     
      pfp ='https://wallpapercave.com/wp/wp10472348.jpg'
    }

     const profilexx = `*「  Profile Info  」*\n\n*User Name* : ${pushname}\n*Bio* : ${bioo}\n*Group Admin Status* : ${adn}\n*Level* : ${levelMenu}\n*Exp* : ${xpMenu} out of ${reqXp}\n*Role* : ${role}`
 


let buttonspro = [
    {buttonId: `${prefix}soulmate`, buttonText: {displayText: 'Your Soulmate'}, type: 1}
    ]
            let buttonMessage = {
                image: { url: pfp },
                caption: profilexx,
                footer: `${BotName}`,
                buttons: buttonspro,
                headerType: 4
            }
        Nexus.sendMessage(m.chat,buttonMessage,{quoted:m})
        	
            break
		
		
case 'kuismath': case 'math': {
	if (isBan) return reply(mess.banned)
	if (!isCreator) return replay(mess.botowner)
	if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
	let { genMath, modes } = require('./lib/math')
	if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
	let result = await genMath(text.toLowerCase())
	Nexus.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
		kuismath[m.sender.split('@')[0]] = result.jawaban
		})
	await sleep(result.waktu)
	if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
		console.log("Answer: " + result.jawaban)
		reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
		delete kuismath[m.sender.split('@')[0]]
		}
	}
break


case 'banchat': case 'bangroup':{
if (isBan) return reply(mess.banned)	 			
if (!isCreator) return replay(mess.botowner)
if (args[0] === "on") {
if (isBanChat) return replay('This Group is Already Banned from using me!')
banchat.push(from)
replay('This Group has been banned from using me!')
var groupe = await Nexus.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Nexus.sendMessage(from, {text: `\`\`\`「 Notice 」\`\`\`\n\nThis group is banned from using bot. So, here nobody can use me anymore!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('This Group is Already Banned from using me!')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('This Group has been *unbanned* from using me!')
} else {
  let buttonsntnsfw = [
  { buttonId: `${prefix}bangroup on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `${prefix}bangroup off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await Nexus.sendButtonText(m.chat, buttonsntnsfw, `Please choose any Button below.\n\n *On / Off*`, `${global.BotName }`, m)
  }
  }
  break




case 'botgrups':
case 'botgroups':
case 'botgrup':
case 'botgroup':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(` Don't forget to join yeah!

*GROUP 1*
https://chat.whatsapp.com/DDWBpH9ciy38RCGYO7RkfM`)
break
		
// //case 'getsxvdxcmd': {
// if (isBan) return reply(mess.ban)	 			
// if (isBanChat) return reply(mess.banChat)
// Nexus.sendMessage(from, {sticker:{url:"https://ZackNexus.github.io/media/menu.webp"}}, {quoted:m})
// Nexus.sendMessage(from, {sticker:{url:"https://ZackNexus.github.io/media/groupopen.webp"}}, {quoted:m})
// Nexus.sendMessage(from, {sticker:{url:"https://ZackNexus.github.io/media/groupclose.webp"}}, {quoted:m})
// }
// break
// //

case 'support': case 'supportgc':
    
    reply(`*My developer's group:*\n\n https://chat.whatsapp.com/DDWBpH9ciy38RCGYO7RkfM`)
    break

case 'repo': case 'botrepo':
    
    reply(`*My Source Code: *ask from wa.me/${global.OwnerNumber}`)
    break

case 'nsfwmenu':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!AntiNsfw) return reply(mess.nonsfw)
    const marin = ["https://c.tenor.com/DO2R1nI7hOcAAAPo/marin-kitagawa.mp4"]
    const nexus = `*━━━〈  📛 NSFW Menu 📛  〉━━━*\n\n ${prefix}nhentaivideo ,\n${prefix}blowjobgif ,\n${prefix}hneko ,\n${prefix}masturbation,\n${prefix}thighs ,\n${prefix}pussy ,\n${prefix}panties ,\n${prefix}orgy ,\n${prefix}ahegao ,\n${prefix}ass ,\n${prefix}bdsm ,\n$[prefix}blowjob ,\n${prefix}cuckold ,${prefix}ero ,\n${prefix}gasm ,\n${prefix}cum ,\n${prefix}femdom ,${prefix}foot ,\n${prefix}gangbang ,\n${prefix}glasses ,\n${prefix}jahy ,\n${prefix}trap ,\n${prefix}blowjobgif ,${prefix}spank ,${prefix}hneko ,\n${prefix}hwaifu ,\n${prefix}gasm\n`
    const ayus = marin[Math.floor(Math.random()*marin.length)]
        
            Nexus.sendMessage(from,{video:{url:ayus},gifPlayback:true,caption:nexus},{quoted:m})
break

		
case 'reaction': case 'react': case 'reactions': case 'r':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(` *━━━〈  📍 Reactions 📍  〉━━━*\n\nbonk, cry, bully, cuddle, hug, kiss, lick, pat, smug, yeet, blush, smile, wave, highfive, handhold, nom, glomp, bite, slap, kill, happy, wink, poke, dance, cringe`)
        break   
    

case 'limituser': case 'userlimit': case 'limit':
            if (isBan) return reply(mess.banned)	 			
            if (isBanChat) return reply(mess.bangc)
            {      
               let txt = `「 *All User Limit* 」\n\n`
                 for (let i of _limit){
                 txt += ` *User ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
                 }
                reply(txt)       
              }
             break
    
case 'checkdeath':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} Bot`)
		predea = await axios.get(`https://api.agify.io/?name=${q}`)
		reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
break


case 'ringtone': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
            if (!args.join(" ")) return reply(`Example: ${prefix}ringtone black over`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Nexus.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break


case 'film': case 'movie': case 'moviesearch':
if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
	reply(mess.waiting)
if (!q) return reply(`Please enter a Movie search term...\nExample: ${prefix}movie Spiderman`)
xfarrapi.Film(q)
    .then(data => {console.log(data)
    let krl = `*Search Term:* ${q}\n\n`
			    for (let i of data) {
                krl += (`-----------------------------------------------------------------------------\n\n\n*Movie Name:* ${i.judul}\n *Quality :* ${i.quality}\n *Type : ${i.type}*\n *Uploaded on :* ${i.upload}\n *Source URL :* ${i.link}\n\n\n`)
                }
               Nexus.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break


case 'wallpaper': case 'animewallpaper': case 'animewall': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply("Please enter a term to search!")
const { AnimeWallpaper } =require("anime-wallpaper")
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall .getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
		
let buttons = [
            {buttonId: `${prefix}wallpaper ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
        ]
        let buttonMessage = {
            image: {url:wallpaper[i].image},
            caption: `*Search term:* ${q}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'wikimedia': case 'wikiimage': {
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
                if (!args.join(" ")) return reply("What picture are you looking for??")
		let { wikimedia } = require('./lib/scraper')
        anu = await wikimedia(args)
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `${prefix}wikimedia ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
        ]
        let buttonMessage = {
            image: { url: hasil.image },
            caption: `Title : ${hasil.title}\nSource : ${hasil.source}\nMedia Url : ${hasil.image}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break

case 'quotesimagexxx': case 'qoutesimagexxx': case 'quoteimage':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
				   let cok = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
				   reply(mess.waiting)
				  Nexus.sendMessage(m.chat, { image: { url: cok }, caption: 'Here it is...' }, { quoted: m })
				  break

case 'quotesanime': case 'quoteanime': case 'animequote': case 'animequotes':{
		let { quotesAnime } = require('./lib/scraper')
        let anu = await quotesAnime()
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `${prefix}quotesanime`, buttonText: {displayText: '>>'}, type: 1}
        ]
        let buttonMessage = {
            text: `_${hasil.quotes}_\n\nBy '${hasil.karakter}', ${hasil.anime}\n\n- ${hasil.up_at}`,
            footer: 'Nexus',
            buttons: buttons,
            headerType: 2
        }
        Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'animestory': { 
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animesearch ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  Nexus.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: BotName,
       title: OwnerName,
       buttonText: "Search Results",
       sections
      }, { quoted : m }
    )  
})
}
  break


  case 'grupsetting':
    case 'groupsetting':{
        if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
            let sections = []
            let com = [`group open`,`leveling on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirtex on`,`nsfw on`]
            let comm = [`group close`,`leveling off`,`antilinkgc off`,`antilinktg off`,`antilinktt off`,`antilinkytch off`,`antilinkytvid off`,`antilinkig on`,`antilinkfb off`,`antilinktwit off`,`antilinkall off`,`antiwame off`,`antitoxic off`,`antivirtex off`,`nsfw off`]
            let listnya = [`Group open/close`,`Leveling on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`,`Anti Toxic on/off`,`Anti Virtex on/off`,`nsfw on/off`]
            let suruh = [`Enable`, `Disable`]
            let fiturname = [`Group`,`Leveling`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`ANTI TOXIC`, `ANTI VIRUS`,`NSFW`]
            let startnum = 0; let startnu = 0; let startn = 0;let start = 0
            let startnumm = 1
            for (let x of com) {
                const yy = {title: `${listnya[startnum++]}`,
            rows: [
               {
                title: `${suruh[0]}`,
                description: `Activate ${fiturname[startnu++]}`,
                rowId: `${prefix}${x}`
              },{
                title: `${suruh[1]}`,
                description: `Deactivate ${fiturname[startn++]}`,
                rowId: `${prefix}${comm[start++]}`
              }
            ]
           }
                sections.push(yy)
            }
            const sendm =  Nexus.sendMessage(
from, 
{
text: "Group Settings",
footer: BotName,
title: "Set your group settings here...",
buttonText: "Click Button",
sections
}, { quoted : m }
)  
}
break

/*
case 'animesearchxxx': case 'anime':{
    await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
    .then((res) => {
    let txt = `   _Anime Search Engine_ \n\n*Title:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Anime Type:* *${res.data.type}*\n*Adaptation:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Yes' : 'No'}*\n*Aired:* *${res.data.aired.string}*\n*Duration:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Main Producer:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
    Nexus.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
    })
    }
    break
*/

case 'coffee': case 'kopi': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
                let buttons = [
                        {buttonId: `${prefix}coffee`, buttonText: {displayText: '>>'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: 'https://coffee.alexflipnote.dev/random' },
                        caption: `Here is your Coffee...`,
                        footer: `${BotName}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break

 

case 'emojimix': {
	   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!q) reply(`*Example :* ${prefix + command} 🦉+🤣`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await Nexus.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'getcase':
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (m.isGroup) reply(mess.privateonly)
if (!isCreator) return reply(mess.botowner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Core.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replay(`${getCase(q)}`)
break


 case 'emoji': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Nexus.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Here it is...`}, {quoted:m})
await Nexus.sendMessage(from, {text:`reply ${prefix}s to this image to make sticker`}, {quoted:mese})
})
}
break

/*
case 'delete': case 'del': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return
 let { chat, fromMe, id, isBaileys } = m.quoted
 if (!isBaileys) return replay('How can i delete messages of other person? Baka!')
 Nexus.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
 }
 break
*/

 case 'deleteall': case 'delall': case 'delete': case 'del': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('Please mention a message baka!')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await Nexus.sendMessage(m.chat, { delete: key })
 }
 break



 case 'listpc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = ` 「  Nexus's pm user list  」\n\nTotal ${anu.length} users are using Nexus in personal chat.`
 for (let i of anu) {
  teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
 }
 Nexus.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'listgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = ` 「  Nexus's group user list  」\n\nTotal ${anu.length} users are using bot in Groups.`
 for (let i of anu) {
  let metadata = await Nexus.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 Nexus.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'afk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let user = global.db.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = args.join(" ")
 replay(`${m.pushName} is now Away From Keyboard.\nAFK Reason : ${args.join(" ") ? args.join(" ") : ''}`)
 }
 break


 case 'fliptext': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${OwnerName}`)
 quere = args.join(" ")
 flipe = quere.split('').reverse().join('')
 replay(`\`\`\`「  Text Flipper Tool  」\`\`\`\n*Input text :*\n${quere}\n*Fliped text :*\n${flipe}`)
 }
 break

 case 'toletter': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
 try {
 quere = args.join(" ")
 convertes = await toHur(quere)
 replay(`\`\`\`「  Word Maker Tool  」\`\`\`\n*Input Number :*\n${quere}\n*Converted Alphabet :*\n${convertes}`)
 } catch {
 replay(`Error!`)
 }
 }

   case 'leveling':
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return reply(mess.useradmin)
 if (args.length < 1) return reply('Type on to *Enable*\nType off to *Disable*')
 if (args[0] === 'on'){
 if (isLeveling) return reply(`Already activated`)
 _leveling.push(from)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling activated')
 } else if (args[0] === 'off'){
 let anu = _leveling.indexOf(from)
 _leveling.splice(anu, 1)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling deactivated')
 } 
 break
		
case 'antivirus': case 'antivirtex': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
if (args[0] === "on") {
if (antiVirtex) return replay('Already activated')
ntvirtex.push(from)
replay('Success in turning on antivirus in this group')
var groupe = await Nexus.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Nexus.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replay('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
replay('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${prefix}antivirtex on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${prefix}antivritex off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await Nexus.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
  }
  }
  break

case 'antitoxic': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!isBotAdmins) return replay(mess.botadmin)
if (!isAdmins && !isCreator) return replay(mess.useradmin)
if (args[0] === "on") {
if (antiToxic) return replay('Already activated')
nttoxic.push(from)
replay('Success in turning on antitoxic in this group')
var groupe = await Nexus.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Nexus.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replay('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
replay('Success in turning off antitoxic in this group')
} else {
  let buttonsnttoxci = [
  { buttonId: `${prefix}antitoxic on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${prefix}antitoxic off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
  await Nexus.sendButtonText(m.chat, buttonsnttoxci, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
  }
  }
  break

 case 'antilinkgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLink) return replay('Already activated')
 ntilink.push(from)
 replay('Activated _Antilink_ in this group.')
 var groupe = await Nexus.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Nexus.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLink) return replay('Already deactivated!')
 let off = ntilink.indexOf(from)
 ntilink.splice(off, 1)
 replay('Deactivated _Antilink_ in this group!')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkgc on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Nexus.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeVid) return replay('Already activated')
 ntilinkytvid.push(from)
 replay('Activated youtube video antilink !')
 var groupe = await Nexus.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Nexus.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeVid) return replay('Already deactivated')
 let off = ntilinkytvid.indexOf(from)
 ntilinkytvid.splice(off, 1)
 replay('Deactivated youtube video antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkyoutubevideo on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkyoutubevideo off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Nexus.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break



     case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeChannel) return replay('Already activated')
 ntilinkytch.push(from)
 replay('Activated youtube channel antilink !')
 var groupe = await Nexus.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Nexus.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
 let off = ntilinkytch.indexOf(from)
 ntilinkytch.splice(off, 1)
 replay('Deactivated youtube channel antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkyoutubech on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkyoutubech off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Nexus.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkInstagram) return replay('Already activated')
 ntilinkig.push(from)
 replay('Activated instagram antilink !')
 var groupe = await Nexus.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Nexus.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkInstagram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated instagram antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkinstagram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkinstagram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Nexus.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinkfacebook': case 'antilinkfb': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkFacebook) return replay('Already activated')
 ntilinkfb.push(from)
 replay('Activated facebook antilink !')
 var groupe = await Nexus.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Nexus.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkFacebook) return replay('Already deactivated')
 let off = ntilinkfb.indexOf(from)
 ntilinkfb.splice(off, 1)
 replay('Deactivated facebook antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkfacebook on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkfacebook off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Nexus.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktelegram': case 'antilinktg': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTelegram) return replay('Already activated')
 ntilinktg.push(from)
 replay('Activated telegram antilink !')
 var groupe = await Nexus.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Nexus.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTelegram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated telegram antilink in this group')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktelegram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktelegram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Nexus.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktiktok': case 'antilinktt': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTiktok) return replay('Already activated')
 ntilinktt.push(from)
 replay('Activated tiktok antilink !')
 var groupe = await Nexus.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Nexus.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTiktok) return replay('Already deactivated')
 let off = ntilinktt.indexOf(from)
 ntilinktt.splice(off, 1)
 replay('Deactivated tiktok antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktiktok on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktiktok off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Nexus.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinktwt.push(from)
 replay('Activated twitter antilink in this group !')
 var groupe = await Nexus.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Nexus.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTwitter) return replay('Already deactivated')
 let off = ntilinktwt.indexOf(from)
 ntilinktwt.splice(off, 1)
 replay('Deactivated twitter antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktwt on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktwt off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Nexus.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkall': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinkall.push(from)
 replay('Enabled all antilink !')
 var groupe = await Nexus.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Nexus.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkAll) return replay('Already deactivated')
 let off = ntilinkall.indexOf(from)
 ntilinkall.splice(off, 1)
 replay('Disabled all antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkall on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkall off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Nexus.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antiwame': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (antiWame) return replay('Already activated')
 ntwame.push(from)
 replay('Activated antiwame !')
 var groupe = await Nexus.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Nexus.sendMessage(from, {text: `\`\`\`*「  Warning  」*\`\`\`\n\nAntilink is enabled!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!antiWame) return replay('Already deactivated')
 let off = nttoxic.indexOf(from)
 ntwame.splice(off, 1)
 replay('Deactivated antiwame !')
 } else {
   let buttonsntwame = [
   { buttonId: `${prefix}antiwame on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antiwame off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Nexus.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'nsfw': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiNsfw) return replay('Already activated')
 ntnsfw.push(from)
 replay('Enabled NSFW Commands!')
 var groupe = await Nexus.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 Nexus.sendMessage(from, {text: `\`\`\`「 Notice 」\`\`\`\n\nNSFW(not safe for work) feature has been enabled in this group, which means anyone here can accesss Adult commands!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiNsfw) return replay('Already deactivated')
 let off = ntnsfw.indexOf(from)
 ntnsfw.splice(off, 1)
 replay('Disabled NSFW Commands!')
 } else {
   let buttonsntnsfw = [
   { buttonId: `${prefix}nsfw on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}nsfw off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await Nexus.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'ban': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`Select add or del (add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user you want to ban.`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User is already banned.')
banUser.push(orgnye)
replay(`Successfully Banned the user.`)
} else if (args[0] === "del") {
if (!isBane) return ads('User is already unbanned.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully Unbanned the user.`)
} else {
replay("Error")
}
}
break


case 'listonline': case 'listaktif': case 'here':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 Nexus.sendText(m.chat, '  「 *Online Members* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
		
case 'bts':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
teks = `Here you go!`
buffer = `https://api.dapuhy.xyz/api/randomimage/batues?apikey=0gly81wDky`
Nexus.sendMessage(from, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
break

case 'happymod': {
 if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Example : ${prefix + command} Kinemaster`)
 yogipw.happymod(args.join(" ")).then(async(res) => {
 teks = '```「 HappyMod Search Engine 」```'
 for (let i of res) {
 teks += `\n\n${i.name}\n`
 teks += `${i.link}`
 }
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: '✨Menu✨'}, type: 1}
 ]
 let buttonMessage = {
 image: {url:res[0].icon},
 jpegThumbnail: Thumb,
 caption: teks,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
 })
 }
 break

case'glitch3':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${teks1}`,`${teks2}`])
		.then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
		.catch((err) => console.log(err));
		break

case '3dbox':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html")
.then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'waterdrop':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break
		
case 'papercut':
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case 'transformer':
   if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   

case 'harrypoter':
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
       if(!q) return reply(`Use ${prefix + command} text|text`)
       reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break


case 'neondevil':
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break
		
case '3dstone':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case '3davengers':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thunder':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'window':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'blackpinkneon':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti': case 'grafiti':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => Nexus.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.BotName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

		
 case 'yts': case 'ytsearch': {
 if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Example : -yts Heat waves`)
 let yts = require("yt-search")
 let search = await yts(args.join(" "))
 let teks = '```「 YouTube search Engine 」```\n\n Search Term: '+text+'\n\n'
 let no = 1
 for (let i of search.all) {
 teks += `Result No : ${no++}\n\nTitle : ${i.title}\n\nViews : ${i.views}\n\nDuration : ${i.timestamp}\n\nUploaded : ${i.ago}\n\nAuthor : ${i.author.name}\n\nUrl : ${i.url}\n\n\n-----------------------------------------------------------------------------\n\n\n`
 }
 Nexus.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
 }
 break

 case 'setname': case 'setsubject': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Pls enter -setname <New Group Name>  to change this Group Name')
 await Nexus.groupUpdateSubject(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

case 'block': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Nexus.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

case 'unblock': {
            if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Nexus.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

 case 'setdesc': case 'setdesk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Pls enter -setname <New Group Description>  to change this Group Description.')
 await Nexus.groupUpdateDescription(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

 case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
 if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
 if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
 let media = await Nexus.downloadAndSaveMediaMessage(quoted)
 await Nexus.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
 replay(mess.jobdone)
 }
 break

 case 'tag': case 'tagall': case 'all':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin) 
 let Text = `╭━━━≺ 𝗠𝗔𝗥𝗜𝗡-𝗧𝗔𝗚 ≻━━━╮
┃
┃┄┄┄┄┄┄┄┄┄┄┄
┃ 𝗚𝗿𝗼𝘂𝗽💕: *${groupMetadata.subject}*
┃┄┄┄┄┄┄┄┄┄┄┄
┃ 𝗠𝗘𝗦𝗦𝗔𝗚𝗘👑 : ${args.join(" ") ? args.join(" ") : 'no message'}*
┃┄┄┄┄┄┄┄┄┄┄┄
┃ 𝗔𝗡𝗡𝗢𝗨𝗡𝗖𝗘𝗥👻:  @${m.sender.split('@')[0]}
┗━━━━━━━━□ \n\n╭╼━━━━≺ 𝗠𝗘𝗠𝗕𝗘𝗥𝗦 ≻━━━╾╮\n\n` 
                for (let mem of participants) {
                Text += `╠@${mem.id.split('@')[0]}\n`
                }
                Nexus.sendMessage(m.chat, { text: Text, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break	
		

		
 case 'hidetag': {
 if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 Nexus.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break
case 'iguser': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!text) reply(`Please provide a valid instagram ID.`)
Nex = await axios.get(`https://api.popcat.xyz/instagram?user=${text}`)
const reply = `
*🀄 Username:* ${Nex.data.username}
*📃 Name:* ${Nex.data.full_name}
*🗣 Private:* ${Nex.data.private}
*✔ Verified:* ${Nex.data.verified}
*🗻 Followers:* ${Nex.data.followers}
*🍃 Following:* ${Nex.data.following}
*🎛 Post:* ${Nex.data.posts}
*🧑🏻‍🎤 reels:* ${Nex.data.reels}
*📖 Bio:* ${Nex.data.biography}
*✨ Link:* https://Instagram.com/${Nex.data.username}`
Nexus.sendMessage(m.chat, {image: { url: Nex.data.profile_pic }, caption:reply}, {quoted:m})
}
break


		
case 'deletethis': case 'delthis': case 'deletethismessage': case 'delthismsg': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('Please mention a message baka!')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await Nexus.sendMessage(m.chat, { delete: key })
 }
 break
		
case 'powner': case 'promoteowner': { 
	if (isBan) return reply(mess.banned)	 			
     	if (isBanChat) return reply(mess.bangc)
     	if (!m.isGroup) return replay(mess.grouponly)
     	if (!isBotAdmins) return replay(mess.botadmin)
	if (!isCreator) return replay(mess.botowner)
	let users = m.sender[0]? m.sender : text.replace(/[^global.owner]/g, '')+'@s.whatsapp.net'
     	await Nexus.groupParticipantsUpdate(m.chat, [users], 'promote')
	}
	break


case 'purge':{mess
    if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
const delay = time => new Promise(res=>setTimeout(res,time));
let mentioned = participants.map(v => v.jid)
      for (let member of mentioned) {     
      Nexus.groupParticipantsUpdate(m.chat, [member], 'remove')
      }
    }

    break




    case 'nowa':  case 'stalk': case 'stalknumber':{
        if (isBan) return reply(mess.banned)
        if (!args[0]) return reply(`Use command like: ${prefix}stalk <number>xxx`)
        var inputnumber = args[0]
        if (!inputnumber.includes('x')) return reply('You didnot added x')
        reply(`Searching for WhatsApp account in given range...`)
        reply(`Please wait while i fetch details...`)
        function countInstances(string, word) {
        return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var nomerny = `*『 List of Whatsapp Numbers 』*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within the range you provided*\n`
        for (let i = 0; i < randomxx; i++) {
        var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        var status1 = nu[Math.floor(Math.random() * nu.length)]
        var status2 = nu[Math.floor(Math.random() * nu.length)]
        var status3 = nu[Math.floor(Math.random() * nu.length)]
        var dom4 = nu[Math.floor(Math.random() * nu.length)]
        var rndm;
        if (random_length == 1) {
        rndm = `${status1}`
        } else if (random_length == 2) {
        rndm = `${status1}${status2}`
        } else if (random_length == 3) {
        rndm = `${status1}${status2}${status3}`
        } else if (random_length == 4) {
        rndm = `${status1}${status2}${status3}${dom4}`
        }
        var anu = await Nexus.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
        var anuu = anu.length !== 0 ? anu : false
        try {
        try {
        var anu1 = await Nexus.fetchStatus(anu[0].jid)
        } catch {
        var anu1 = '401'
        }
        if (anu1 == '401' || anu1.status.length == 0) {
        nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
        } else {
        nomerny += `🎀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n🔹 *Bio :* ${anu1.status}\n🔸 *Updated On :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
        }
        } catch {
        nowhatsapp += `${number0}${i}${number1}\n`
        }
        }
        reply(`${nomerny}${nobio}${nowhatsapp}`)
        }
        break







 case 'grouplink': case 'gclink': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let response = await Nexus.groupInviteCode(m.chat)
 Nexus.sendMessage(m.chat, {text:`*Group Name:* *${groupMetadata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
 mimetype: "image/jpeg",
 text: `${global.OwnerName}`,
 "forwardingScore": 1000000000,
 isForwarded: true,
 sendEphemeral: true,
 "externalAdReply": {
 "title": `${global.BotName}`,
 "body": `${global.WaterMark}`,
 "previewType": "PHOTO",
 "thumbnailUrl": Thumb,
 "thumbnail": Thumb,
 "sourceUrl": `${global.websitex}`
 }}}, { quoted: m, detectLink: true })
 }
 break


 case 'resetlinkgc':
    case 'resetlinkgroup':
    case 'resetlinkgrup':
    case 'revoke':
    case 'resetlink':
    case 'resetgrouplink':
    case 'resetgclink':
    case 'resetgruplink': {
       if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!isBotAdmins) return replay(mess.botadmin)
    if (!isAdmins && !isCreator) return replay(mess.useradmin)
    Nexus.groupRevokeInvite(m.chat)
    }
    break


    case 'group': case 'grup': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     if (args[0] === 'close'){
     await Nexus.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`Group has been closed!`)).catch((err) => replay(jsonformat(err)))
     } else if (args[0] === 'open'){
     await Nexus.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`Group has been opened!`)).catch((err) => replay(jsonformat(err)))
     } else {
     let buttons = [
     { buttonId: `${prefix}group open`, buttonText: { displayText: 'Open' }, type: 1 },
     { buttonId: `${prefix}group close`, buttonText: { displayText: 'Close' }, type: 1 }
     ]
     let buttonMessage = {
     image: BotLogo,
     jpegThumbnail: Thumb,
     caption: `*「 ${global.BotName} 」*\n\n_Group Setting Changer tool_:`,
     footer: `${BotName}`,
     buttons: buttons,
     headerType: 4
     }
     Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
     }
     }
     break

     case 'promote': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Nexus.groupParticipantsUpdate(m.chat, [users], 'promote')
     }
     break

     case 'demote': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Nexus.groupParticipantsUpdate(m.chat, [users], 'demote')
	     
     }
     break

     case 'remove':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Nexus.groupParticipantsUpdate(m.chat, [users], 'remove')
     }
     break


     case 'join': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return replay(mess.botowner)
     if (!args[0]) return replay(`Where's the link?`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("Link invalid!")
     if (isCreator) {
     await Nexus.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Succes!")
     } else {
     Nexus.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 20) {
     teks = `Sorry, munimun 20 members are required in a group to add bot!`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "918130784851@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 20) {
     await Nexus.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Joined !")
     } else {
     replay("Error")
     }
     }).catch(_ => _)
     }
     }
     break

  
     case 'volume': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
     media = await Nexus.downloadAndSaveMediaMessage(quoted, "volume")
     if (isQuotedAudio) {
     rname = getRandom('.mp3')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     Nexus.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else if (isQuotedVideo) {
     rname = getRandom('.mp4')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     Nexus.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else {
     reply("Please send video/audio file only!")
     }
     }
     break
     case 'vote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────
┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────
*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: Nexus.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            Nexus.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: Nexus.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Nexus.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 𝐔𝐏𝐕𝐎𝐓𝐄 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 𝐃𝐄𝐕𝐎𝐓𝐄 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: Nexus.user.name,
                buttons: buttonsDevote ,
                headerType: 1,
                mentions: menvote
            }
            Nexus.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}delvote* - To Delete Vote Session
©${Nexus.user.id}
`
Nexus.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break	

     case 'tempo': {
        if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc)
        if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
        var req = args.join(' ')
        media = await Nexus.downloadAndSaveMediaMessage(quoted, "tempo")
        if (isQuotedAudio) {
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        Nexus.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else if (isQuotedVideo) {
        ran = getRandom('.mp4')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        Nexus.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else {
        reply("Please send video/audio file only!")
        }
        }
        break

        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
            try {
            let set
            if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
            if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
            if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
            if (/earrape/.test(command)) set = '-af volume=12'
            if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
            if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
            if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
            if (/reverse/.test(command)) set = '-filter_complex "areverse"'
            if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
            if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
            if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
            if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
            if (/audio/.test(mime)) {
            reply(mess.waiting)
            let media = await Nexus.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply(err)
            let buff = fs.readFileSync(ran)
            Nexus.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
            fs.unlinkSync(ran)
            })
            } else reply(`Pls mention any audio you want to modify _${prefix + command}_`)
            } catch (e) {
            reply(e)
            }
            break
		

case 'git': case 'gitclone':
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                       
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) throw 'link github  EXAMPLE: https://github.com/NEXUSAT12/MARIN'
    if (!regex1.test(args[0])) throw 'link!'
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    m.reply(`*Please wait, sending repository..*`)
    Nexus.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply('*Sorry, the github link you provided is private, and cant be made into a file*'))
			break



case 'calculator': case 'cal': case 'calculate':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(`*Example :*\n${prefix}calculator 2*5\n\n`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 _Calculator Tool_ 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break

case 'public': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.owner)
 Nexus.public = true
 reply('I am now Publicly accessable!')
 Nexus.setStatus(`Mode : Public`)
 }
 break
 
 case 'self': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
 Nexus.public = false
 reply('Only Owner can use me now!')
 Nexus.setStatus(`Mode : Self`)
 }
 break


case 'toimage': case 'toimg': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.waiting)
let media = await Nexus.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Nexus.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break

case 'tomp4': case 'tovideo': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
 reply(mess.waiting)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await Nexus.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await Nexus.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Here it is...' } }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break

case 'toaud': case 'toaudio': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
 if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 Nexus.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
break

case 'tomp3': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
 if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 Nexus.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${global.BotName} (${m.id}).mp3`}, { quoted : m })
 }
break


case 'togif': case 'getgif':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
 reply(mess.wait)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await Nexus.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await Nexus.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break


 case 'tourl': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 reply(mess.wait)
 let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
 let media = await Nexus.downloadAndSaveMediaMessage(quoted)
 if (/image/.test(mime)) {
 let anu = await TelegraPh(media)
 reply(util.format(anu))
 } else if (!/image/.test(mime)) {
 let anu = await UploadFileUgu(media)
 reply(util.format(anu))
 }
 await fs.unlinkSync(media)
 }
 break


 case 'owner': case 'creator': case 'mod': case 'mods':{
    Nexus.sendContact(m.chat, global.Owner, m)
    }
    break

case 'translate': case 'trans': {
    if (isBan) return reply(mess.banned)
    if (!args.join(" ")) return replay("Pls enter any text to translate")
    tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
    Infoo = tes.info
    Detek = tes.translate
    replay(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
    }
    break


case 'gimage': case 'gig': case 'googleimage':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply("Enter a search term to get Google Image!")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `「 _Google Image Search_ 」

_Search Term_ : ${text}
_Media Url_ : ${images}`,
footer: `${global.BotName}`,
buttons: buttons,
headerType: 4,

}
Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break


case 'google': case 'search': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
 let google = require('google-it')
 google({'query': args.join(" ")}).then(res => {
 let teks = `「 *Google Search Engine* 」\n\n*Search term:* ${text}\n\n\n`
 for (let g of res) {
 teks += `*Title* : ${g.title}\n\n`
 teks += `*Description* : ${g.snippet}\n\n`
 teks += `*Link* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
 } 
 reply(teks)
 })
 }
 break

case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
Nexus.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
break
 case 'ig': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args[0] === "mp4") {
Nexus.sendMessage(from, {video:{url:args[1]}, caption:'Here it is...', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
Nexus.sendMessage(from, {image:{url:args[1]}, caption:'Here it is...'}, {quoted:m})
} else {
reply("Error! ")
}
}
break

case 'mp4' : {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Pls provide link!`)
try {
Nexus.sendMessage(from, {video:{url:args[0]}, caption:"Succes!", contextInfo:{externalAdReply:{
title:`${global.BotName}`,
body:`${global.OwnerName}`,
thumbnail: BotLogo,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error!")
}
}
break

case 'jpeg': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Please provide link!`)
 try {
 Nexus.sendMessage(from, {image:{url:args[0]}, caption:"Success!"}, {quoted:m})
 } catch {
 reply("Link error")
 }
 }
 break

 case 'igtv': {	            
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
                 if (!text) return reply(`Please provide link!`)
                 const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                 if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*Invalid link!*')
                 instagramdlv3(`${text}`).then(async (data) => {            
                 var buf = await getBuffer(data[0].thumbnail)        
                 Nexus.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${BotName}`}, { quoted: m })
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break
             
case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Please provide link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
                xfarrapi.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `「 _Twitter Downloader_ 」\n\n`
                    txt += `*Title :* ${data.title}\n`
                    txt += `*Quality :* ${data.medias[1].quality}\n`
                    txt += `*Type :* ${data.medias[1].extension}\n`
                    txt += `*Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*Duration :* ${data.medias.length}\n`
                    txt += `*URL :* ${data.url}\n\n`
                    txt += `*${BotName}*`
                buf = await getBuffer(data.thumbnail)    
                Nexus.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                Nexus.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break

case 'hacked':{
  if (!isCreator) return replay(mess.botowner)
              if (!m.isGroup) return replay(`${mess.grouponly}`)
              if (args.length < 1) return reply('The text?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                Nexus.updateProfilePicture (from, tessgc)
                await sleep(1000)
                Nexus.groupUpdateSubject(from, `HACKED BY ${global.OwnerName}`)
                await sleep(1000)
                Nexus.groupUpdateDescription(from, `_${pushname} hacked this group_`)        
                await sleep(1000)
                Nexus.sendMessage(from, 'Succesfullyed', text, {quoted: m})
		break}

case 'twittermp3': case 'twitteraudio': { 
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Please provide link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
                xfarrapi.Twitter(`${text}`).then(async (data) => {
                Nexus.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break

case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `「 _Twitter Downloader_ 」
Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}
_Please choose the video quality_`
let buttons = [
{buttonId: `${prefix}twitter ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `${prefix}twitter ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
Nexus.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link Error!")
}
}
break

case 'twddlxx': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: '✨Menu✨'}, type: 1}
 ]
 let buttonMessage = {
 video: {url:args[0]},
 caption: "Here it is...",
 footer: `${pushname}`,
 buttons: buttons,
 headerType: 4,

 }
 Nexus.sendMessage(from, buttonMessage, {quoted:m})
 }
 break

 case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {     	    
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
              if (!text) return reply(`Please provide the link!\n\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                 if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
             let bocil = require('@bochilteam/scraper')  
                 bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                     let txt = `「 _Facebook Downloader_ 」\n\n`
                     txt += `*Title :* ${data.title}\n`
                     txt += `*Quality :* ${data.result[0].quality}\n`
                     txt += `*Description:* ${data.description}\n`
                     txt += `*URL :* ${text}\n\n`
                 buf = await getBuffer(data.thumbnail)    
                 Nexus.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                 for (let i of data.result) {     
                 Nexus.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Quality :* ${i.quality}`}, { quoted: m })
                 }          
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break

case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
                  if (!text) return reply(`Please provide the link!\n\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  Nexus.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break


case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `「 _Facebook Downloader_ 」
Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}
_Click the button below to download_`
let buttons = [
{buttonId: `${prefix}fbdl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
Nexus.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
break
		
case 'patrick':
case 'patricksticker': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Nexus.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
		
// case 'attp2': {
// if (isBan) return reply(mess.banned)	 			
// if (isBanChat) return reply(mess.bangc)
// 	if (!text) return reply(`Example : ${prefix + command} text`)
//         await Nexus.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})
// }
// break
		
case 'attp': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
	if (!text) reply(`Use ${prefix}attp hello\n*Example : ${prefix + command} ${OwnerName }*` )
        await Nexus.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'Xeon', 'Op', m, {asSticker: true}).catch((err) => reply(mess.error))
}		
break
case 'ttp': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
	if (!text) return reply(`*Example : ${prefix + command} hello*`)
	await Nexus.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
	}
break

case 'fbddlxx': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let buttons = [
 {buttonId: `${prefix}menu`, buttonText: {displayText: '✨Menu✨'}, type: 1}
 ]
 let buttonMessage = {
 video: {url:args[0]},
 caption: "Done!",
 footer: `${pushname}`,
 buttons: buttons,
 headerType: 4,

 }
 Nexus.sendMessage(from, buttonMessage, {quoted:m})
 }
 break

 case 'tiktok':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`Invalid tiktok link!`)
 const musim_rambutan = await NexusTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const Nexustiktokop = musim_rambutan.result.watermark
texttk = `_Please choose the button below_`
let buttons = [
{buttonId: `${prefix}ttnowm ${q}`, buttonText: {displayText: 'Watermark Free'}, type: 1},
{buttonId: `${prefix}ttaud ${q}`, buttonText: {displayText: 'Audio '}, type: 1}
]
let buttonMessage = {
video: {url:Nexustiktokop},
caption: texttk,
footer: `${BotName}`,
buttons: buttons,
headerType: 4,

}
Nexus.sendMessage(from, buttonMessage, {quoted:m})
}
break

case 'tiktoknowm': case 'ttnowm':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
 const musim_rambutan = await NexusTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const Nexustiktoknowm = musim_rambutan.result.nowatermark
  Nexus.sendMessage(from, { video: { url: Nexustiktoknowm }, caption: "Here it is..." }, { quoted: m })
 }
break

case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Where is the audio?')
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
 const musim_rambutan = await NexusTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const Nexustiktokaudio = musim_rambutan.result.nowatermark
  Nexus.sendMessage(from, { audio: { url: Nexustiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
 }
break




case 'play2': case 'ytplay2': {
    if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc)
     reply(mess.wait)
    let yts = require("yt-search")
    let search = await yts(text)
    let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
    let ytvc = await hx.youtube(anu.url)
    let buttons = [
    {buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1},
    {buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: anu.thumbnail},
                        caption: `「 _MARIN Youtube Player_ 」

    Title : ${anu.title}
    ID : ${anu.videoId}
    Duration : ${anu.timestamp}
    Viewers : ${anu.views}
    Uploaded : ${anu.ago}
    Author : ${anu.author.name}
    Channel : ${anu.author.url}
    Url : ${anu.url}`,
                        footer: `${BotName}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
          
                
case 'ytdl2': case 'yt2': case 'youtube2':{
	if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
 reply(mess.wait)
if (!args[0]) return reply(mess.nolink)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `「 _MARIN Youtube Downloader_ 」
Title : ${res.title}
Size : ${res.size}
Quality : ${res.quality}
_Select video or audio and wait a while_`
let buttons = [
{buttonId: `${prefix}ytmp4 ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `${prefix}ytmp3 ${res.link}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: BotName,
buttons: buttons,
headerType: 4,

}
Nexus.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
reply("Error link!")
}
}
break

case 'play': case 'song': case 'ytplay': {
		if (isBan) return reply(mess.banned)	 			
 		if (isBanChat) return reply(mess.bangc)
                if (!text) return reply(`Example : ${prefix + command} Stay`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: '🎶Audio🎶'}, type: 1},
                    {buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: ` 
🐦 Title : ${anu.title}
🐦 Ext : Search
🐦 ID : ${anu.videoId}
🐦 Duration : ${anu.timestamp}
🐦 Viewes : ${anu.views}
🐦 Uploaded On : ${anu.ago}
🐦 Author : ${anu.author.name}
🐦 Channel : ${anu.author.url}
🐦 Description : ${anu.description}
🐦 Url : ${anu.url}`,
                    footer: `${global.BotName}`,
                    buttons: buttons,
                    headerType: 4
                }
                Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

 case 'ytmp3': case 'getmusic': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                Nexus.sendImage(m.chat, media.thumb, `🐦 Title : ${media.title}\n🐦 File Size : ${media.filesizeF}\n🐦 Url : ${isUrl(text)}\n🐦 Ext : MP3\n🐦 Resolution : ${args[1] || '320kbps'}`, m)
                Nexus.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'getvideo': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                Nexus.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🐦 Title : ${media.title}\n🐦 File Size : ${media.filesizeF}\n🐦 Url : ${isUrl(text)}\n🐦 Ext : MP3\n🐦 Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusicxxx': {
                let { yta } = require('./lib/y2mate')
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                Nexus.sendImage(m.chat, media.thumb, `🐦 Title : ${media.title}\n🐦 File Size : ${media.filesizeF}\n🐦 Url : ${urls[text - 1]}\n🐦 Ext : MP3\n🐦 Resolution : ${args[1] || '128kbps'}`, m)
                Nexus.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideoxxx': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) throw 'Reply Message'
                if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw`Maybe The Message You Replied Does Not Contain The Video Search Result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                Nexus.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🐦 Title : ${media.title}\n🐦 File Size : ${media.filesizeF}\n🐦 Url : ${urls[text - 1]}\n🐦 Ext : MP3\n🐦 Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break

 case 'ytvd': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 Nexus.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Here it is...",}, {quoted:m})
 }
 break

 case 'ytad': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
 Nexus.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true}, {quoted:m})
 }
 break
 
 case 'ytshorts': case 'shorts': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
   if (!text) return reply(`*Use ${prefix + command} put yt shorts link*`)
   if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(`The link you provided is not valid!`)
   xfarrapi.Youtube(`${text}`).then(async (data) => {
   if (data.medias[0].formattedSize.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(data)) 
   cap = `
   「  *Youtube Shorts*  」
 *TITLE:* ${data.title}\n*QUALITY:* ${data.medias[0].quality}\n*SIZE:* ${data.medias[0].formattedSize}\n*DURATION* ${data.duration}\n*LINK:* ${data.url}\n\n*${BotName}*`
   buf = await getBuffer(data.thumbnail)
   Nexus.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
   Nexus.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*TITLE:* ${data.title}\n*QUALITY:* ${data.medias[0].quality}\n*SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                 }).catch((err) => {
                     reply(mess.reply)
                 })
             }
             break


case 'couplepp':  case 'ppcouple': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
         reply(mess.waiting)
         let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         Nexus.sendMessage(m.chat, { image: { url: random.male }, caption: `For him...` }, { quoted: m })
         Nexus.sendMessage(m.chat, { image: { url: random.female }, caption: `For her...` }, { quoted: m })
     }
 break


 case 'ytmp3x':  case 'ytmusicx': {	    
    if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
let { yta } = require('./lib/y2mate')
if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 999999) return reply('*File Over Limit* '+util.format(media))
let caption = `*「 Youtube Music 」*\n\n*Title :* ${media.title}\n*File size :* ${media.filesizeF}\n*Url :* ${isUrl(text)}\n*Ext :* MP3\n*Resolution :* ${args[1] || '128kbps'}`
buf = await getBuffer(media.thumb)
Nexus.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m }).catch((err) => reply(mess.error))                
Nexus.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{title:media.title,body:"YOUTUBE MP3",mediaType:"2",thumbnail:buf,mediaUrl:`${text}`}}}).catch((err) => reply(mess.error))
}
break


case 'ytmp4x': case 'ytvideox': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
let { ytv } = require('./lib/y2mate')
if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=RNa4thokVJ4 360p`)
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid!`)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 999999) return reply('*File Over Limit* '+util.format(media))
var capti = `*「 Youtube Video 」*\n\n*Title* : ${media.title}\n*File size* : ${media.filesizeF}\n*Url* : ${isUrl(text)}\n*Ext* : Mp4\n*Resoultion* : ${args[1] || '360p'}`
var buf = await getBuffer(media.thumb)
Nexus.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${capti}` }, { quoted: m })
Nexus.sendMessage(m.chat, { video: { url: media.dl_link }, jpegThumbnail:buf, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Here you go!` }, { quoted: m }).catch((err) => reply(mess.error))
}
break

case 'ytdl': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!text) return reply(mess.nolink)
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
if (anu.filesize_video >= 999999) return reply('*File Over Limit* '+util.format(anu))
tummb = await getBuffer(anu.thumb)
audio = await getBuffer(anu.audio)        
Nexus.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => reply(mess.error))
Nexus.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => reply(mess.error))
}
break


case 'pinterest': case 'pin': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return reply("Pls providea search term!")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 imgnyee = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `${prefix}pinterest ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: imgnyee },
 caption:  `Title : ` + args.join(" ") + `\nMedia Url : `+imgnyee,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,
 
 }
 Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("Error")
 }
 }
 break



case 'swm': case 'take': case 'stickerwm': case 'steal':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply(`Use command: -steal Nexus|By: Pika`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
Nexus.downloadAndSaveMediaMessage(quoted, "gifee")
Nexus.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Nexus.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds is allowed!')
let media = await quoted.download()
let encmedia = await Nexus.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 seconds is allowed!`)
}
}
break




case 'smeme': case 'stickermeme': case 'stickmeme': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
reply(mess.wait)
mee = await Nexus.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await Nexus.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break

case 'sgif': case 'sticker': case 's': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await Nexus.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
 let media = await quoted.download()
 let encmedia = await Nexus.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else {
 reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
 }
 }
 break

case 'wiki':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply('What Are You Looking For?? ')
const res2 = await wikiSearch(q).catch(e => {
return reply('Error Result Not Found!') 
}) 
const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
Nexus.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break

case 'earthquake':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
Nexus.sendMessage(from, { image : { url : Map }, caption : captt})
break

case 'covidinfo':
case 'covid':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
Nexus.sendMessage(from, {text : `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`}, m)
break

case 'guess': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return replay(`Example : ${prefix + command} song\n\nOption : \n1.song\n2. picture\n3. saying\n4. sentence\n5. lyrics\n6.food`)
if (args[0] === "song") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await XeonBotInc.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
Nexus.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
Nexus.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess the song' }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'picture') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Nexus.sendImage(m.chat, result.img, `Please answer the question above\n\nDescription : ${result.deskripsi}\nTime : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
Nexus.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess the picture' }, type: 1 }], `Time has run out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,`${global.botname}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'word') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheWord.js')
let result = anu[Math.floor(Math.random() * anu.length)]
Nexus.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
Nexus.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'sentence') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheSentence.js')
let result = anu[Math.floor(Math.random() * anu.length)]
Nexus.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
Nexus.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess the Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lyrics') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Nexus.sendText(m.chat, `Fill the missing lyrics below : *${result.soal}*?\nTime : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
Nexus.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'guess saying') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
Nexus.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
Nexus.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
		

case 'couple': case 'ship': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Ohh i see 👀💖...`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: '❤️', buttonText: { displayText: 'Congratulations ❤️' }, type: 1 }
]
await Nexus.sendButtonText(m.chat, buttons, jawab, Nexus.user.name, m, {mentions: menst})
}
break

case 'soulmate': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(`${mess.grouponly}`)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫 Soulmates
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: '❤️', buttonText: { displayText: 'Be my Soulmate ❤️' }, type: 1 }
]
await Nexus.sendButtonText(m.chat, buttons, jawab, Nexus.user.name, m, {mentions: ments})
}
break

case 'handsomecheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Pika`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
Nexus.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Pika`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
Nexus.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break

case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
                        if (isBan) return reply(mess.banned)
                        if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Pika`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
Nexus.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break


case 'charactercheck':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Pika`)
					const Nexustttt =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = Nexustttt[Math.floor(Math.random() * Nexustttt.length)]
					Nexus.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                   
 case 'dare':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                   const dare =[
         "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
         "spill people who make you pause",
         "call crush/pickle now and send ss",
         "drop only emote every time you type on gc/pc for 1 day.",
         "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
         "call ex saying miss",
         "sing the chorus of the last song you played",
         "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
         "Bang on the table (which is at home) until you get scolded for being noisy",
         "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
         "mention ex's name",
         "make 1 rhyme for the members!",
         "send ur whatsapp chat list",
         "chat random people with gheto language then ss here",
         "tell your own version of embarrassing things",
         "tag the person you hate",
         "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
         "change name to *I AM DONKEY* for 24 hours",
         "shout *ma chuda ma chuda ma chuda* in front of your house",
         "snap/post boyfriend photo/crush",
         "tell me your boyfriend type!",
         "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
         "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
         "prank chat ex and say *i love u, please come back.* without saying dare!",
         "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
         "change the name to *I am a child of randi* for 5 hours",
         "type in bengali 24 hours",
         "Use selmon bhoi photo for 3 days",
         "drop a song quote then tag a suitable member for that quote",
         "send voice note saying can i call u baby?",
         "ss recent call whatsapp",
         "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
         "pop to a group member, and say fuck you",
         "Act like a chicken in front of ur parents",
         "Pick up a random book and read one page out loud in vn n send it here",
         "Open your front door and howl like a wolf for 10 seconds",
         "Take an embarrassing selfie and paste it on your profile picture",
         "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
         "Walk on your elbows and knees for as long as you can",
         "sing national anthem in voice note",
         "Breakdance for 30 seconds in the sitting room😂",
         "Tell the saddest story you know",
         "make a twerk dance video and put it on status for 5mins",
         "Eat a raw piece of garlic",
         "Show the last five people you texted and what the messages said",
         "put your full name on status for 5hrs",
         "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
         "call ur bestie, bitch",
         "put your photo without filter on ur status for 10mins",
         "say i love oli london in voice note🤣🤣",
         "Send a message to your ex and say I still like you",
         "call Crush/girlfriend/bestie now and screenshot here",
         "pop to one of the group member personal chat and Say you ugly bustard",
         "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
         "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
         "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
         "use any bollywood actor photo as ur pfp for 3 days",
         "put your crush photo on status with caption, this is my crush",
         "change name to I AM GAY for 5 hours",
         "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
         "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
         "slap ur butt hardly send the sound of slap through voice note😂",
         "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
         "shout bravooooooooo and send here through voice note",
         "snap your face then send it here",
         "Send your photo with a caption, i am lesbian",
         "shout using harsh words and send it here through vn",
         "shout you bastard in front of your mom/papa",
         "change the name to i am idiot for 24 hours",
         "slap urself firmly and send the sound of slap through voice note😂",
         "say i love the bot owner Pika through voice note",
         "send your gf/bf pic here",
         "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
         "breakup with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love you😌",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here"
     ]
                   const Nexusdareww = dare[Math.floor(Math.random() * dare.length)]
                   buffer = await getBuffer(`https://i.pinimg.com/564x/ae/fa/40/aefa402b42dabb533a3537c74a0f68b1.jpg`)
                   Nexus.sendMessage(from, { image: buffer, caption: '*You have chosen Dare*\n\n'+ Nexusdareww }, {quoted:m})
                   break
                       

case 'truth':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                           const truth =[
                 "Have you ever liked anyone? How long?",
                 "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
                 "apa ketakutan terbesar kamu?",
                 "Have you ever liked someone and felt that person likes you too?",
                 "What is the name of your friend's ex-girlfriend that you used to secretly like?",
                 "Have you ever stolen money from your father or mom? The reason?",
                 "What makes you happy when you're sad?",
                 "Ever had a one sided love? if so who? how does it feel bro?", 
                 "been someone's mistress?",
                 "the most feared thing",
                 "Who is the most influential person in your life?",
                 "what proud thing did you get this year", 
                 "Who is the person who can make you awesome", 
                 "Who is the person who has ever made you very happy?", 
                 "Who is closest to your ideal type of partner here", 
                 "Who do you like to play with??", 
                 "Have you ever rejected people? the reason why?",
                 "Mention an incident that made you hurt that you still remember", 
                 "What achievements have you got this year??",
                 "What's your worst habit at school??",
                 "What song do you sing most in the shower",
                 "Have you ever had a near-death experience",
                 "When was the last time you were really angry. Why?",
                 "Who is the last person who called you",
                 "Do you have any hidden talents, What are they",
                 "What word do you hate the most?",
                 "What is the last YouTube video you watched?",
                 "What is the last thing you Googled",
                 "Who in this group would you want to swap lives with for a week",
                 "What is the scariest thing thats ever happened to you",
                 "Have you ever farted and blamed it on someone else",
                 "When is the last time you made someone else cry",
                 "Have you ever ghosted a friend",
                 "Have you ever seen a dead body",
                 "Which of your family members annoys you the most and why",
                 "If you had to delete one app from your phone, which one would it be",
                 "What app do you waste the most time on",
                 "Have you ever faked sick to get home from school",
                 "What is the most embarrassing item in your room",
                 "What five items would you bring if you got stuck on a desert island",
                 "Have you ever laughed so hard you peed your pants",
                 "Do you smell your own farts",
                 "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
                 "What is the biggest mistake you have ever made",
                 "Have you ever cheated in an exam",
                 "What is the worst thing you have ever done",
                 "When was the last time you cried",
                 "whom do you love the most among ur parents", 
                 "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
                 "who was ur crush during the school days",
                 "tell honestly, do u like any boy in this grup",
                 "have you ever liked anyone? how long?",
                 "do you have gf/bf','what is your biggest fear?",
                 "have you ever liked someone and felt that person likes you too?",
                 "What is the name of your ex boyfriend of your friend that you once liked quietly?",
                 "ever did you steal your mothers money or your fathers money",
                 "what makes you happy when you are sad",
                 "do you like someone who is in this grup? if you then who?",
                 "have you ever been cheated on by people?",
                 "who is the most important person in your life",
                 "what proud things did you get this year",
                 "who is the person who can make you happy when u r sad",
                 "who is the person who ever made you feel uncomfortable",
                 "have you ever lied to your parents",
                 "do you still like ur ex",
                 "who do you like to play together with?",
                 "have you ever stolen big thing in ur life? the reason why?",
                 "Mention the incident that makes you hurt that you still remember",
                 "what achievements have you got this year?",
                 "what was your worst habit at school?",
                 "do you love the bot creator Pika?",
                 "have you ever thought of taking revenge from ur teacher?",
                 "do you like current prime minister of ur country",
                 "you non veg or veg",
                 "if you could be invisible, what is the first thing you would do",
                 "what is a secret you kept from your parents",
                 "Who is your secret crush",
                 "whois the last person you creeped on social media",
                 "If a genie granted you three wishes, what would you ask for",
                 "What is your biggest regret",
                 "What animal do you think you most look like",
                 "How many selfies do you take a day",
                 "What was your favorite childhood show",
                 "if you could be a fictional character for a day, who would you choose",
                 "whom do you text the most",
                 "What is the biggest lie you ever told your parents",
                 "Who is your celebrity crush",
                 "Whats the strangest dream you have ever had",
                 "do you play pubg, if you then send ur id number"
             ]
                           const Nexustruthww = truth[Math.floor(Math.random() * truth.length)]
                           buffer = await getBuffer(`https://i.pinimg.com/564x/ae/fa/40/aefa402b42dabb533a3537c74a0f68b1.jpg`)
                           Nexus.sendMessage(from, { image: buffer, caption: '*You have chosen Truth*\n'+ Nexustruthww }, {quoted:m})
                           break



case 'nsfwNexus':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.wait)
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`
Nexus.sendMessage(from, {image:{url:nye}, caption:"Master..."}, {quoted:m})
break

case 'mediafire': case 'mediafirel': {
	if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `「  *Mediafire Downloader*  」
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
Nexus.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break

case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!AntiNsfw) return reply(mess.nonsfw)
try{
reply(mess.waiting)
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
Nexus.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {error("Error")}	
break

case 'spank':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
  let spbuff = await getBuffer(spankd.data.url)
let spgif = await GIFBufferToVideoBuffer(spbuff)   
        await Nexus.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('Error!')
                                    })
break

case 'blowjobgif': case 'bj' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)   
        await Nexus.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('error..')
                                    })
break

case 'hentaivid': case 'hentaivideo': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
Nexus.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Title : ${result912.title}\nCategory : ${result912.category}\n$Mimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break

case 'trap' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `-trap`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
  buttons: trapbot,
  headerType: 1
  }     
            await Nexus.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'hentai-neko' :
case 'hneko' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `-${command}`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Nyaah...`,
  buttons: hnekobot,
  headerType: 1
  }      
            await Nexus.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'hentai-waifu' :
case 'hwaifu' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `${prefix}${command}`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await Nexus.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'gasm':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `${prefix}gasm`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Nexus.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break  


case 'smug2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `${prefix}smug2`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Nexus.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'foxgirl':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `${prefix}foxgirl`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Awooo...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Nexus.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   

case 'animenom' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `${prefix}animenom`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await Nexus.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'waifu3':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `${prefix}waifu3`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Nexus.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break



case 'crossplay': case 'crosplay': case 'cosplay':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
                const buttons = [
        {buttonId:`${prefix}crossplay`,buttonText: {displayText: '>>'}, type: 1},
            ]               
        const cosplybutton = {
        image: {url: 'https://hanzz-web.herokuapp.com/api/randomimage/cosplay'},
        caption: "Guess who am i...",
        footer: `${global.BotName}`,
        buttons: buttons,
        headerType: 4
        }
                  
        await Nexus.sendMessage(m.chat,cosplybutton, { quoted:m }).catch(err => {
            return('Error!')
        })  

        break




case 'neko2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `${prefix}neko2`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbutsss,
      headerType: 4
      }
            await Nexus.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break



case 'feed':
case 'meow':
case 'tickle':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `${prefix}${command}`, buttonText: {displayText: `>>`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await Nexus.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
                break



case 'checknumber':
  reply(mess.wait)
  const dripska = {
    method: 'GET',
    url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
    qs: {number: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com',
      useQueryString: true
    }
  };
  let dhidhi = require('request')
  dhidhi(dripska, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
break
case 'veriphone':
  reply(mess.wait)
  const dripdrop = {
  method: 'GET',
  url: 'https://truecaller2.p.rapidapi.com/findPhone',
  qs: {phone: `${text}`},
  headers: {
    'X-RapidAPI-Key': '06a4c91363msh0c1c5e72f99fe3ep13229ejsn96003354961a',
    'X-RapidAPI-Host': 'truecaller2.p.rapidapi.com',
     useQueryString: true 
  }
};
  let mhati = require('request')
  mhati(dripdrop, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
break



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

case 'cry':  case 'handhold':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Nexus.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'nom':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} is eating with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is eating with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Nexus.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'hug':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} hugged themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Nexus.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break


case 'dance':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} is dancing alone!!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is dancing with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Nexus.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'kill': case 'pat': case 'lick': case 'kiss': case 'bite':
case 'bully': case 'bonk': case 'poke': case 'slap':
case 'happy':
case 'cuddle': case 'kick':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed themselves!!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Nexus.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break



case 'yeet':
case 'wink': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp':
case 'cringe': case 'highfive':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed at themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed at @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Nexus.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*

case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet':
case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance':
case 'cringe': case 'cuddle': case 'highfive': case 'handhold': case 'kick':

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)						
resggh = await axios.get(`https://nekos.life/api/v2/img/${command}`)         
let resffj = await getBuffer(resggh.data.url)
let resmain = await GIFBufferToVideoBuffer(resffj)   
      await Nexus.sendMessage(m.chat,{video: resmain, gifPlayback:true},{ quoted:m }).catch(err => {
                  return reply('error..')
                                  })
break

*/




case 'megumin':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `${prefix}megumin`, buttonText: {displayText: `>>`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
          buttons: wbutsss,
     headerType: 4
                      }
await Nexus.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     

case 'awoo':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    reply(mess.waiting)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `${prefix}awoo`, buttonText: {displayText: `>>`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
   footer: `${global.BotName}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await Nexus.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break


case 'animewall2': case 'animewallpaper2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    reply(mess.waiting)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('Please enter a seach term!')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `${prefix}animewall2 ${q}`, buttonText: {displayText: `>>`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Search Term :* ${q}`,
      footer: `${global.BotName}`,
      buttons: walb,
      headerType: 4
      }     
            await Nexus.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })          
break


case 'anime':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
	    if(!q) return reply(`Please proide a search term!\n\n*Example:* ${prefix}anime naruto`)
reply(mess.waiting)							
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `*Title:* ${result.title}\n`;
    details += `*Format:* ${result.type}\n`;
    details += `*Status:* ${result.status.toUpperCase().replace(/\_/g, " ")}\n`;
    details += `*Total episodes:* ${result.episodes}\n`;
    details += `*Duration:* ${result.duration}\n`;
    details += `*Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.genres[i].name}\n`;
    }
    details += `*Based on:* ${result.source.toUpperCase()}\n`;
    details += `*Studios:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.studios[i].name}\n`;
    }
    details += `*Producers:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t${result.producers[i].name}\n`;
    }
    details += `*Premiered on:* ${result.aired.from}\n`;
    details += `*Ended on:* ${result.aired.to}\n`;
    details += `*Popularity:* ${result.popularity}\n`;
    details += `*Favorites:* ${result.favorites}\n`;
    details += `*Rating:* ${result.rating}\n`;
    details += `*Rank:* ${result.rank}\n\n`;
    if (result.trailer.url !== null)
      details += `*Trailer:* ${result.trailer.url}\n\n`;
    details += `*URL:* ${result.url}\n\n`;
    if (result.background !== null)
      details += `*Background:* ${result.background}\n\n`;
    details += `*Description:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
Nexus.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break

case 'manga':
    if (isBan) return reply(mess.  nned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Please proide a search term!\n\n_Example:_ ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `*Title:* ${srh.data[0].title}\n`;
    mang += `*Status:* ${srh.data[0].status}\n`;
    mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
    mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
    mang += `*Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
    }
    mang += `*Published on:* ${srh.data[0].published.from}\n`;
    mang += `*Score:* ${srh.data[0].scored}\n`;
    mang += `*Popularity:* ${srh.data[0].popularity}\n`;
    mang += `*Favorites:* ${srh.data[0].favorites}\n`;
    mang += `*Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
    }
    mang += `\n*URL:* ${srh.data[0].url}\n\n`;
    if (srh.data[0].background !== null)
      mang += `*Background:* ${srh.data[0].background}`;
    mang += `*Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
Nexus.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break



case 'waifu' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 var wbuttsssr = [
    {buttonId: `${prefix}waifu`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let button4Messagess = {
        image: {url:waifuddd.data.url},
        caption: 'More than one waifu will definitely ruin your Laifu!',
        buttons: wbuttsssr,
        headerType: 4
         }     
                                  
    await Nexus.sendMessage(m.chat, button4Messagess, { quoted:m }).catch(err => {
        return('error..')
        })
break

case 'neko' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `${prefix}neko`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessf = {
        image: {url:waifuddd.data.url},
        caption: 'Nyaa...',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await Nexus.sendMessage(m.chat, buttonMessagessf, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'loli' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `${prefix}loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'Dont be a lolicon !',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await Nexus.sendMessage(m.chat, buttonMessagessfgr, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'lyrics': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
if (!text) return reply(`Comand usage: ${prefix}lyrics Thunder`)
reply(mess.waiting)	
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break


case "quotes":
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Quotes()
teks = `\n*Author:* ${res.author}\n`
teks += `\n*Quotes:*\n`
teks += `${res.quotes}\n`

replay(teks)
break

case "darkjoke":
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Darkjokes()
teks = "\nDarkjokes"
Nexus.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break

case 'leavegc': case 'leavegroup': case 'bye': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
        reply(mess.waiting)
                    if (!isCreator) return replay(`${mess.botowner}`)
                    await Nexus.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
                break

case 'searchgc': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return replay(`Example :\n${prefix}searchgc Classy Editor`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: BotLogo,
jpegThumbnail: Thumb,
caption: teks,
footer: `${global.BotName}`,
buttons: buttons,
headerType: 4
}
Nexus.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break


case 'bc': case 'broadcast': case 'bcall': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args.join(" ")) return replay(`Please enter some text to broadcast! \n\nExample : ${prefix + command} ${global.OwnerName}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
quickReplyButton: {
displayText: '✨Menu✨',
id: `${prefix}menu`
}  
}, {
quickReplyButton: {
displayText: 'Bot Owner',
id: `${prefix}owner`
}
}]
let txt = `「 *${global.OwnerName}'s Broadcast* 」\n\n${text}`
Nexus.send5ButImg(yoi, txt, `${global.BotName}`, BotLogo, btn, Thumb)
}
replay('Broadcast Sent !')
}
break    

case 'developer': case 'Nexus': case 'buybot': {
	if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        reply(`╔══𓊈𝓓𝓔𝓥𝓔𝓛𝓞𝓟𝓔𝓡 𝓞𝓕 𝓣𝓔𝓐𝓜-𝓧_FIRE𓊉══╗\n╠𝐌𝐫.𝐍𝐞𝐱𝐮𝐬(𝐚𝐲𝐮𝐬𝐡)🔥: 𝐭𝐡𝐞 𝐦𝐚𝐢𝐧 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐚𝐧𝐝 𝐭𝐡𝐞 𝐥𝐞𝐚𝐝𝐞𝐫 𝐨𝐟 𝐭𝐞𝐚𝐦-𝐗_𝐅𝐈𝐑𝐄\n╠𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 :𓆩😈𓆪  https://wa.me/+918130784851 𓆩😎𓆪 \n╠𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 :⧼ ᥬ🥰᭄ 𝐃𝐎𝐍𝐓 𝐅𝐎𝐑𝐆𝐄𝐓 𝐓𝐎 𝐅𝐎𝐋𝐋𝐎𝐖 ⧽ https://www.instagram.com/at.__010/ \n ╠𝐆𝐈𝐓𝐇𝐔𝐁 : https://github.com/NEXUSAT12 \n\n ╔═╾ 𝟐𝐧𝐝 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 ╼═╗\n╠𝐌𝐫.𝐏𝐈𝐊𝐀✨ : 𝐇𝐄𝐋𝐏𝐄𝐃 𝐈𝐍 𝐅𝐎𝐔𝐍𝐃𝐈𝐍𝐆 𝐓𝐇𝐄 𝐀𝐏𝐈 𝐀𝐍𝐃 𝐃𝐄𝐒𝐒𝐈𝐆𝐍𝐈𝐍𝐆 𝐎𝐅 𝐁𝐎𝐓 \n╠𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 : https://wa.me/+918811074852\n╠𝐆𝐈𝐓𝐇𝐔𝐁: https://github.com/Pika4O4\n\n 『𝐈𝐅 𝐘𝐎𝐔 𝐖𝐀𝐍𝐓 𝐓𝐎 𝐎𝐖𝐍 𝐓𝐇𝐄 𝐁𝐎𝐓 𝐓𝐇𝐄𝐍 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐀𝐍𝐘 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐀𝐍𝐃 𝐀𝐒𝐊 𝐅𝐎𝐑 𝐓𝐇𝐄 𝐒𝐂𝐑𝐈𝐏𝐓 』\n\n╔══╾𝐏𝐑𝐈𝐂𝐄𝐒 𝐅𝐎𝐑 𝐓𝐇𝐄 𝐈𝐍𝐃𝐈𝐀𝐍𝐒 𝐁𝐔𝐘𝐄𝐑𝐒╼══╗\n║𝐅𝐎𝐑 𝐍𝐎𝐑𝐌𝐀𝐋 𝐒𝐂𝐑𝐈𝐏𝐓  𝐈𝐒 𝟒𝟎𝟎₹\n║𝐅𝐎𝐑 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐒𝐂𝐑𝐈𝐏𝐓 𝟕𝟎𝟎 𝐓𝐎 𝟗𝟎𝟎₹ \n\n ╔══╾𝐏𝐑𝐈𝐂𝐄 𝐅𝐎𝐑 𝐓𝐇𝐄 𝐈𝐍𝐓𝐄𝐑𝐍𝐀𝐓𝐈𝐎𝐍𝐀𝐋 𝐁𝐔𝐘𝐄𝐑𝐒╼══╗\n\n╠𝐅𝐎𝐑 𝐍𝐎𝐑𝐌𝐀𝐋 𝐒𝐂𝐑𝐈𝐏𝐓 𝟒𝟎 𝐓𝐎 𝟖𝟎$\n╠𝐅𝐎𝐑 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐒𝐂𝐑𝐈𝐏𝐓 𝟏𝟎𝟎 𝐓𝐎 𝟏𝟐𝟎$\n╚══╼${global.BotName}╾══╝`)
	}
break	
case 'bug': case 'report': {
	if(!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
	Nexus.sendMessage(`918130784851@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
	From group : ${groupMetadata.subject}
	Report Message: ${text}`})
	reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This,\n Use This Feature Again And Again For No Reason,\n You Will Be Blocked For Sure !` )
                }
		break
	
	case  'ownermenu' : {
		if (isBan) return reply(mess.banned)	 			
    		if (isBanChat) return reply(mess.bangc)
		if (!isCreator) return replay(mess.botowner)
		let sections = []
		let  nexusmenu = [`self on`,`public on`,`bangroup on`]
		let  nexusmenu2 = [`self off`,`public off`,`bangroup off `]
		let marin = [`self on/off`,`public on/off`,`bangroup on/off`]
		let marin2 = [`SELF 𓆩😎𓆪 `,`PUBLIC𓆩😁𓆪 `,`BANGROUP𓆩😠𓆪 `]
		let ne = [`ACTIVATE THIS COMMANDS`,`DEACTIVATE THIS COMMAND`]
		let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of nexusmenu) {
                        const yy = {title: `${marin[startnum++]}`,
                    rows: [
                       {
                        title: `${marin2[startnu++]}`,
                        description: `${ne[0]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${marin2[startn++]}`,
                        description: `${ne[1]}`,
                        rowId: `${prefix}${nexusmenu2[start++]}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  Nexus.sendMessage(
      from, 
      {
       text: "OWNER Settings",
       footer: `${BotName}`,
       title: "Set your OWNER settings here......",
       buttonText: "Click Button",
       sections
      }, { quoted : m }
    )  
}
  break
		
	

case 'menu': case 'allmenu':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
 const helpmenu = `「𝐊𝐎𝐍'𝐍𝐈𝐂𝐇𝐈𝐖𝐀 *${pushname}*'𝐒𝐚𝐧
│🔥*𝐆𝐑𝐎𝐔𝐏 :${groupMetadata.subject}
│🔥 𝐈'𝐀𝐌:  🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀
│🔥𝐌𝐲 𝐏𝐫𝐞𝐟𝐢𝐱: ${prefix}
│🔥 私の愛: *${prefix}owner*
│🔥 私の愛 : wa.me/${global.Owner}     
╰────────────┈平和   


 
*━━━〈 🔥 𓆩 𝐂𝐎𝐑𝐄 𓆪​ 🔥  〉━━━*
❒🔥 ${prefix}thanksto
❒🔥 ${prefix}alive
❒🔥 ${prefix}tts
❒🔥 ${prefix}stalk
❒🔥 ${prefix}profile
❒🔥 ${prefix}help
❒🔥 ${prefix}delete
❒🔥 ${prefix}deleteall
❒🔥 ${prefix}listgc
❒🔥 ${prefix}listpc
❒🔥 ${prefix}welcome
❒🔥 ${prefix}support
❒🔥 ${prefix}report

*━━━〈 😎 𓆩 𝐎𝐖𝐍𝐄𝐑 𓆪 😎  〉━━━*

❒🔥 ${prefix}self
❒🔥 ${prefix}public
❒🔥 ${prefix}ban
❒🔥 ${prefix}bangroup
❒🔥 ${prefix}bye
❒🔥 ${prefix}join
❒🔥 ${prefix}bye
❒🔥 ${prefix}block
❒🔥${prefix}unblock
❒🔥 ${prefix}broadcast 

*━━━〈 ✨ 𓆩 𝐆𝐑𝐎𝐔𝐏 𓆪 ✨ 〉━━━*
 
❒🔥 ${prefix}promote
❒🔥 ${prefix}demote
❒🔥 ${prefix}revoke
❒🔥 ${prefix}add
❒🔥 ${prefix}remove
❒🔥 ${prefix}tagall
❒🔥 ${prefix}hidetag
❒🔥 ${prefix}groupsetting
❒🔥 ${prefix}grouplink
❒🔥 ${prefix}setgcpp
❒🔥 ${prefix}setname
❒🔥 ${prefix}setdesc
❒🔥 ${prefix}group
❒🔥 ${prefix}vote
❒🔥 ${prefix}upvote
❒🔥 ${prefix}devote
❒🔥 ${prefix}checkvote
❒🔥 ${prefix}delvote

*━━━〈 🙄 𓆩 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊 𓆪 🙄  〉━━━*
 
❒🔥 ${prefix}antilinkgc
❒🔥 ${prefix}antilinktg
❒🔥 ${prefix}antilinktt
❒🔥 ${prefix}antilinkytch
❒🔥 ${prefix}antilinkytvid
❒🔥 ${prefix}antilinkig
❒🔥 ${prefix}antilinkfb
❒🔥 ${prefix}antilinktwit
❒🔥 ${prefix}antilinkall
❒🔥 ${prefix}antiwame
❒🔥 ${prefix}antivirtex
❒🔥 ${prefix}antitoxic

*━━━〈 😎 𓆩 TEXTMAKER 𓆪 😎  〉━━━*

❒🔥 ${prefix}candy
❒🔥 ${prefix}christmas
❒🔥 ${prefix}3Dchristmas
❒🔥 ${prefix}sparklechristmas
❒🔥 ${prefix}deepsea
❒🔥 ${prefix}scifi
❒🔥 ${prefix}rainbow
❒🔥 ${prefix}waterpipe
❒🔥 ${prefix}spooky
❒🔥 ${prefix}pencil
❒🔥 ${prefix}circuit
❒🔥 ${prefix}discovery
❒🔥 ${prefix}metalic
❒🔥 ${prefix}fiction
❒🔥 ${prefix}demon
❒🔥 ${prefix}transformar
❒🔥 ${prefix}berry
❒🔥 ${prefix}thunder 
❒🔥 ${prefix}Magma
❒🔥 ${prefix}3Dstone
❒🔥 ${prefix}neonlight
❒🔥 ${prefix}glitch
❒🔥 ${prefix}harrypotter
❒🔥 ${prefix}broken glass
❒🔥 ${prefix}papercut
❒🔥 ${prefix}watercolour
❒🔥 ${prefix}multicolour
❒🔥 ${prefix}neondevil
❒🔥 ${prefix}underwater
❒🔥 ${prefix}graffitibike
❒🔥 ${prefix}snow
❒🔥 ${prefix}cloud
❒🔥 ${prefix}honey
❒🔥 ${prefix}ice
❒🔥 ${prefix}fruitjuice
❒🔥 ${prefix}biscuit 
❒🔥 ${prefix}wood
❒🔥 ${prefix}chocolate
❒🔥 ${prefix}strawberry
❒🔥 ${prefix}matrix
❒🔥 ${prefix}blood
❒🔥 ${prefix}dropwater
❒🔥 ${prefix}toxic
❒🔥 ${prefix}lava
❒🔥 ${prefix}rock
❒🔥 ${prefix}bloodglas
❒🔥 ${prefix}hallowen
❒🔥 ${prefix}darkgold
❒🔥 ${prefix}joker
❒🔥 ${prefix}wicker
❒🔥 ${prefix}firework
❒🔥 ${prefix}skeleton
❒🔥 ${prefix}blackpink
❒🔥 ${prefix}sand
❒🔥 ${prefix}glue
❒🔥 ${prefix}1917

*━━━〈  🔍 𓆩 𝐒𝐄𝐀𝐑𝐂𝐇 𓆪 🔍 〉━━━*

❒🔥 ${prefix}play
❒🔥 ${prefix}song
❒🔥 ${prefix}yts
❒🔥 ${prefix}lyrics
❒🔥 ${prefix}google
❒🔥 ${prefix}gimage
❒🔥 ${prefix}pinterest
❒🔥 ${prefix}image
❒🔥 ${prefix}movie
❒🔥 ${prefix}wallpaper
❒🔥 ${prefix}searchgc
❒🔥 ${prefix}happymod
❒🔥 ${prefix}wikimedia
❒🔥 ${prefix}ringtone
❒🔥 ${prefix}anime
❒🔥 ${prefix}animestory
❒🔥 ${prefix}manga
❒🔥 ${prefix}ringtone  

*━━━〈  🔰 𓆩 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𓆪 🔰  〉━━━*

❒🔥 ${prefix}sticker
❒🔥 ${prefix}toimg
❒🔥 ${prefix}tovideo
❒🔥 ${prefix}togif
❒🔥 ${prefix}steal
❒🔥 ${prefix}stickermeme
❒🔥 ${prefix}emojimix
❒🔥 ${prefix}tourl
❒🔥 ${prefix}tomp3
❒🔥 ${prefix}toaudio

 *━━━〈  🎵 𓆩 𝐀𝐔𝐃𝐈𝐎 𓆪 🎵 〉━━━*

❒🔥 ${prefix}bass
❒🔥 ${prefix}tempo
❒🔥 ${prefix}blown
❒🔥 ${prefix}deep
❒🔥 ${prefix}earrape
❒🔥 ${prefix}fast
❒🔥 ${prefix}fat
❒🔥 ${prefix}nightcore
❒🔥 ${prefix}reverse
❒🔥 ${prefix}robot
❒🔥 ${prefix}slow
❒🔥 ${prefix}squirrel

*━━━〈 😂 𓆩 𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 𓆪 😂  〉━━━*

❒🔥 ${prefix}bonk
❒🔥 ${prefix}cry
❒🔥 ${prefix}bully
❒🔥 ${prefix}cuddle
❒🔥 ${prefix}hug
❒🔥 ${prefix}kiss
❒🔥 ${prefix}lick
❒🔥 ${prefix}pat
❒🔥 ${prefix}smug
❒🔥 ${prefix}yeet
❒🔥 ${prefix}blush
❒🔥 ${prefix}smile
❒🔥 ${prefix}wave
❒🔥 ${prefix}highfive
❒🔥 ${prefix}handhold
❒🔥 ${prefix}nom
❒🔥 ${prefix}glomp
❒🔥 ${prefix}bite
❒🔥 ${prefix}slap
❒🔥 ${prefix}kill
❒🔥 ${prefix}happy
❒🔥 ${prefix}wink
❒🔥 ${prefix}poke
❒🔥 ${prefix}dance
❒🔥 ${prefix}cringe

*━━━〈 ⬇🔄 𓆩 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 𓆪 ⬇🔄  〉━━━*

❒🔥 ${prefix}play
❒🔥 ${prefix}ytmp3
❒🔥 ${prefix}ytmp4
❒🔥 ${prefix}ytvideo
❒🔥 ${prefix}instagram
❒🔥 ${prefix}igtv
❒🔥 ${prefix}facebook
❒🔥 ${prefix}fbmp3
❒🔥 ${prefix}twitter
❒🔥 ${prefix}twittermp3
❒🔥 ${prefix}tiktok
❒🔥 ${prefix}tiktokaudio
❒🔥 ${prefix}tiktoknowm
❒🔥 ${prefix}mediafire  

*━━━〈  👻 𓆩 𝐖𝐄𝐄𝐁 𓆪 👻  〉━━━*

❒🔥 ${prefix}crosplay
❒🔥 ${prefix}waifu
❒🔥 ${prefix}loli
❒🔥 ${prefix}neko
❒🔥 ${prefix}ppcouple
❒🔥 ${prefix}feed
❒🔥 ${prefix}foxgirl
❒🔥 ${prefix}feed
❒🔥 ${prefix}meow
❒🔥 ${prefix}tickle
❒🔥 ${prefix}wallpaper
❒🔥 ${prefix}coffee
❒🔥 ${prefix}animenom
❒🔥 ${prefix}waifu3
❒🔥 ${prefix}neko2
❒🔥 ${prefix}feed
❒🔥 ${prefix}meow
❒🔥 ${prefix}tickle
❒🔥 ${prefix}migumin
❒🔥 ${prefix}awoo
❒🔥 ${prefix}animewallpaper2
❒🔥 ${prefix}anime
❒🔥 ${prefix}manga

*━━━〈  📚 𓆩 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐕𝐄 𓆪 📚 〉━━━*

❒🔥 ${prefix}animequote
❒🔥 ${prefix}quote
❒🔥 ${prefix}covid
❒🔥 ${prefix}earthquake
❒🔥 ${prefix}wiki

*━━━〈  🎗 𓆩 𝐎𝐓𝐇𝐄𝐑𝐒 𓆪 🎗  〉━━━*

❒🔥 ${prefix}stickermeme
❒🔥 ${prefix}quotes
❒🔥 ${prefix}darkjoke
❒🔥 ${prefix}gitclone

*━━━〈  𓆩 🔥 𝐅𝐔𝐍 🔥 𓆪  〉━━━*

❒🔥 ${prefix}reaction
❒🔥 ${prefix}truth
❒🔥 ${prefix}dare
❒🔥 ${prefix}couple
❒🔥 ${prefix}soulmate
❒🔥 ${prefix}handsomecheck
❒🔥 ${prefix}beautifulcheck
❒🔥 ${prefix}awesomecheck
❒🔥 ${prefix}greatcheck
❒🔥 ${prefix}gaycheck
❒🔥 ${prefix}cutecheck
❒🔥 ${prefix}lesbiancheck
❒🔥 ${prefix}hornycheck
❒🔥 ${prefix}prettycheck
❒🔥 ${prefix}lovelycheck
❒🔥 ${prefix}uglycheck
❒🔥 ${prefix}charactercheck
❒🔥 ${prefix}math
❒🔥 ${prefix}checkdeath
❒🔥 ${prefix}guess
❒🔥 ${prefix}attp
❒🔥 ${prefix}attp2
❒🔥 ${prefix}ttp
❒🔥 ${prefix}patrick

*━━━〈  𓆩 🪁 𝐄𝐒𝐒𝐄𝐍𝐓𝐈𝐀𝐋𝐒 🪁 𓆪  〉━━━*

❒🔥 *${prefix}qr
❒🔥 *${prefix}say
❒🔥 *${prefix}translate
❒🔥 *${prefix}fliptext
❒🔥 *${prefix}toletter

*━━━〈  𓆩 😈 𝐇𝐀𝐂𝐊𝐄𝐑 😈 𓆪  〉━━━*

 ❒✗ *${prefix}veriphone
 ❒✗ *${prefix}chechnumber
 
*━━━〈  😜 𓆩 𝐍𝐒𝐅𝐖 𓆪 😜  〉━━━*

❤️ 𝐓𝐨 𝐮𝐬𝐞 *𝐍𝐒𝐅𝐖* 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬, 𝐚𝐬𝐤 𝐭𝐨 *𝐀𝐝𝐦𝐢𝐧* 𝐨𝐫 *𝐎𝐰𝐧𝐞𝐫*𝐎 *𝐀𝐃𝐌𝐈𝐍* 𝐎𝐑 *𝐎𝐖𝐍𝐄𝐑*𝐓𝐨 *𝐀𝐝𝐦𝐢𝐧* 𝐎𝐫 *𝐎𝐰𝐧𝐞𝐫*𝐨 *𝐚𝐝𝐦𝐢𝐧* 𝐨𝐫 *𝐨𝐰𝐧𝐞𝐫*
❤️ 𝐓𝐡𝐞𝐧 𝐭𝐲𝐩𝐞 "*${prefix}nsfwmenu* "𝐭𝐨 𝐠𝐞𝐭 𝐟𝐮𝐥𝐥 𝐥𝐢𝐬𝐭 𝐨𝐟 𝐧𝐬𝐟𝐰 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬.

─❅┈[ 🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀]┈❅───
┌────────────┈𑁍𖣘
│🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀
└────────────┈𖣘
❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅
 
 🔥 𝐢𝐟 𝐲𝐨𝐮 𝐡𝐚𝐯𝐞 𝐚𝐧𝐲 *𝐛𝐨𝐭 𝐫𝐞𝐥𝐚𝐭𝐞𝐝* 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧 𝐭𝐡𝐞𝐧 𝐚𝐬𝐤 𝐡𝐞𝐫𝐞 *-* https://wa.me/${global.Botno1} .

 🔥 Type " *${prefix}help* " 𝐅𝐎𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐢𝐬𝐭.`
 
 
 let buttonshelpm = [{buttonId: `${prefix}owner`, buttonText: {displayText: `😎OWNER😎`}, type: 1},
		     {buttonId: `${prefix}marin`, buttonText: {displayText: `❤️‍🔥lsitMenu❤️‍🔥`}, type: 1},
		     {buttonId: `${prefix}support`, buttonText: {displayText: `👑SUPPORT GROUP👑`}, type: 1}
		    ]
                let buttonMessage = {
                    video:fs.readFileSync('./system/Nexus2.mp4'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            Nexus.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break
		
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'pornhub': case 'retro': case 'horror': {
              if (!text) return reply(`🎃 *You have to type this command with a word* .\n\n❤️ *Example* : ${prefix + command} ${pushname}`) 
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/pornhub/.test(command)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'   
             if (/horror/.test(command)) link = 'https://textpro.me/create-a-cinematic-horror-text-effect-1045.html'
             if (/retro/.test(command)) link = 'https://textpro.me/create-3d-retro-text-effect-online-free-1065.html'                              
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, text)
                Nexus.sendMessage(m.chat, { image: { url: anu }, caption: `_Here is your text style ${pushname} senpai_ .\n_Made by ${global.BotName}_ ❤️` }, { quoted: m })
             }
             break


case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Nexus.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

case 'thanksto':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

const tx = `╔══𓊈𝓓𝓔𝓥𝓔𝓛𝓞𝓟𝓔𝓡 𝓞𝓕 𝓣𝓔𝓐𝓜-𝓧_FIRE𓊉══╗\n╠𝐌𝐫.𝐍𝐞𝐱𝐮𝐬(𝐚𝐲𝐮𝐬𝐡)🔥: 𝐭𝐡𝐞 𝐦𝐚𝐢𝐧 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐚𝐧𝐝 𝐭𝐡𝐞 𝐥𝐞𝐚𝐝𝐞𝐫 𝐨𝐟 𝐭𝐞𝐚𝐦-𝐗_𝐅𝐈𝐑𝐄\n╠𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 :𓆩😈𓆪  https://wa.me/+918130784851𓆩😎𓆪 \n╠𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 :⧼ ᥬ🥰᭄ 𝐃𝐎𝐍𝐓 𝐅𝐎𝐑𝐆𝐄𝐓 𝐓𝐎 𝐅𝐎𝐋𝐋𝐎𝐖 ⧽ https://www.instagram.com/at.__010/ \n ╠𝐆𝐈𝐓𝐇𝐔𝐁 : https://github.com/NEXUSAT12 \n ╔═╾ 𝟐𝐧𝐝 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 ╼═╗\n╠𝐌𝐫.𝐏𝐈𝐊𝐀(𝐀𝐑𝐈𝐅)✨ : 𝐇𝐄𝐋𝐏𝐄𝐃 𝐈𝐍 𝐅𝐎𝐔𝐍𝐃𝐈𝐍𝐆 𝐓𝐇𝐄 𝐀𝐏𝐈 𝐀𝐍𝐃 𝐃𝐄𝐒𝐒𝐈𝐆𝐍𝐈𝐍𝐆 𝐎𝐅 𝐁𝐎𝐓 \n╠𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 : https://wa.me/+918811074852\n╠𝐆𝐈𝐓𝐇𝐔𝐁: https://github.com/Pika4O4`
const Nexusarra= [
            "https://telegra.ph/file/fc8c10666835418136477.mp4",
            "https://telegra.ph/file/614ba2eb73d658b557b1b.mp4",
 	    "https://telegra.ph/file/b79a65e4311d5a680c10f.mp4",
            ]
        
            const Nexusselectio = Nexusarra[Math.floor(Math.random()*Nexusarra.length)]
        
            Nexus.sendMessage(from,{video:{url:Nexusselectio},gifPlayback:true,caption:tx},{quoted:m})

break
		
// case 'setprefix' : {
//                if (!isCreator) return replay(`${mess.owner}`)
//                if (!text) return replay(`Example : ${prefix + command}!!*@%*%&`)
//           global.prefa = text.split("|")[0]
//           reply(`prefix Has Been Successfully Changed to\n\n🐦 prefix : ${global.prefix}\n`)
//             }
            break
case  'command' : {
		if (isBan) return reply(mess.banned)	 			
    		if (isBanChat) return reply(mess.bangc)
		let sections = []
		let  nexusmenu = [`ownermenu`,`textpromenu`,`groupmenu`,`funmenu`,`downloadmenu`,`voicechangermenu`,`animemenu`]
		let marin2 = [`𝐎𝐍𝐋𝐘 𝐅𝐎𝐑 𝐎𝐖𝐍𝐄𝐑 𓆩😎𓆪 `,`𝐓𝐗𝐓-𝐈𝐌𝐆-𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔 𓆩🤯𓆪 `,`𝐎𝐍𝐋𝐘 𝐅𝐎𝐑 𝐆𝐑𝐎𝐔𝐏𝐀𝐃𝐌𝐈𝐍𝐒 𓆩🤖𓆪 `,`𝐅𝐎𝐑 𝐅𝐔𝐍 𓆩😁𓆪 `,`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐌𝐄𝐍𝐔 𓆩😲𓆪 `,`𝐂𝐇𝐀𝐍𝐆𝐄 𝐕𝐎𝐈𝐂𝐄 𝐎𝐅 𝐀𝐍𝐘 𝐀𝐔𝐃𝐈𝐎 𓆩😌𓆪 `,`𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔 𓆩🥴𓆪 `]
		let ne = [` ONLY OWNER CAMMANDS`,`click TO GET TXT TO IMG MENU`,`TAP TO GET GROUPMENU`,`TAP TO GET FUNMENU`,`TAP TO GET DOWNLOADMENU`,`TAP TO GET VOICE CHANGER MENU`,`TAP TO GET ANIME MENU`]
		let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of nexusmenu) {
                        const yy = {title: `${marin2[startnum++]}`,
                    rows: [
                       {
                        title: `${marin2[startnu++]}`,
                        description: `${ne[0]}`,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  Nexus.sendMessage(
      from, 
      {
       text: "LIST MENU",
       footer: `${BotName}`,
       title: "CHECK THE MENU LIST......",
       title: `\n╭╼━━━᚜ 𝓜𝓪𝓻𝓲𝓷 𝓫𝔂 𝓝𝓮𝔁𝓾𝓼 ᚛━━━╾╮
│                                                 ❒
🔥 *My prefix*       : ( ${prefix} )
❤️ *My name*       : ${global.BotName}
🥵 *User name*    : ${pushname}
😻 *Bot speed*      : ${latensie.toFixed(4)} ms
🐤 *Bot runtime*   : ${runtime(process.uptime())}
❤️‍🔥 *Bot users*      : ${Object.keys(global.db.users).length}
🎃 *Owner name* : ${global.OwnerName}
🦊 *Owner num.*  : http://wa.me//${global.PermanentOwnerNumber}
🍓 *Group name*  : ${groupMetadata.subject}
│                                                 ❒
╰╼━━━━━━━━━━━━━━━━╾╯\n\n_Tap here for *full commands*_ 🐤👇\nㅤ`,
       buttonText: "Click Button",
       sections
      }, { quoted : m }
    )  
}
  break		

case 'animemenu' : {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
reply( `╭╼━᚜ 𓆩🥰𓆪  𝐌𝐀𝐑𝐈𝐍 𝐁𝐘 𝐍𝐄𝐗𝐔𝐒 𓆩😈𓆪  ᚛━╾╮
│                                      ❒
│ *My prefix*       : ( ${prefix} )
│ *My name*       : ${global.BotName}
│ *User name*    : ${pushname}
│ *Owner name* : ${global.OwnerName}
│ *Owner no.*     : http://wa.me//${global.Owner}
│ *Group name*  : ${groupMetadata.subject}
│                                      ❒
╰╼━━━━━━━━━━━━╾╯
╭╼━᚜ 𓆩🥰𓆪  𝐌𝐀𝐑𝐈𝐍 𝐁𝐘 𝐍𝐄𝐗𝐔𝐒 𓆩😈𓆪  ᚛━╾╮

❒🔥 ${prefix}crosplay
❒🔥 ${prefix}waifu
❒🔥 ${prefix}loli
❒🔥 ${prefix}neko
❒🔥 ${prefix}ppcouple
❒🔥 ${prefix}feed
❒🔥 ${prefix}foxgirl
❒🔥 ${prefix}feed
❒🔥 ${prefix}meow
❒🔥 ${prefix}tickle
❒🔥 ${prefix}wallpaper
❒🔥 ${prefix}coffee
❒🔥 ${prefix}animenom
❒🔥 ${prefix}waifu3
❒🔥 ${prefix}neko2
❒🔥 ${prefix}feed
❒🔥 ${prefix}meow
❒🔥 ${prefix}tickle
❒🔥 ${prefix}migumin
❒🔥 ${prefix}awoo
❒🔥 ${prefix}animewallpaper2
❒🔥 ${prefix}anime
❒🔥 ${prefix}manga        

╰╼≺${global.BotName}≻`
)}
break	
case 'voicechangermenu' : {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
reply(`╭╼━᚜ MARIN BY NEXUS ᚛━╾╮
│                                      ❒
│ *My prefix*       : ( ${prefix} )
│ *My name*       : ${global.BotName}
│ *User name*    : ${pushname}
│ *Owner name* : ${global.OwnerName}
│ *Owner no.*     : http://wa.me//${global.Owner}
│ *Group name*  : ${groupMetadata.subject}
│                                      ❒
╰╼━━━━━━━━━━━━╾╯
╭╼━᚜ 𓆩🥰𓆪  𝐌𝐀𝐑𝐈𝐍 𝐁𝐘 𝐍𝐄𝐗𝐔𝐒 𓆩😈𓆪   ᚛━╾╮

❒🔥 ${prefix}bass
❒🔥 ${prefix}tempo
❒🔥 ${prefix}blown
❒🔥 ${prefix}deep
❒🔥 ${prefix}earrape
❒🔥 ${prefix}fast
❒🔥 ${prefix}fat
❒🔥 ${prefix}nightcore
❒🔥 ${prefix}reverse
❒🔥 ${prefix}robot
❒🔥 ${prefix}slow
❒🔥 ${prefix}squirrel       

╰╼≺${global.BotName}≻`
)}
break		
case 'textpromenu' :{
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
reply(`╭╼━᚜ MARIN BY NEXUS ᚛━╾╮
│                                      ❒
│ *My prefix*       : ( - )
│ *My name*       : ${global.BotName}
│ *User name*    : ${pushname}
│ *Owner name* : ${global.OwnerName}
│ *Owner no.*     : http://wa.me//${global.Owner}
│ *Group name*  : ${groupMetadata.subject}
│                                      ❒
╰╼━━━━━━━━━━━━╾╯
╭╼━᚜ MARIN BY NEXUS ᚛━╾╮

❒🔥 ${prefix}candy
❒🔥 ${prefix}christmas
❒🔥 ${prefix}3Dchristmas
❒🔥 ${prefix}sparklechristmas
❒🔥 ${prefix}deepsea
❒🔥 ${prefix}scifi
❒🔥 ${prefix}rainbow
❒🔥 ${prefix}waterpipe
❒🔥 ${prefix}spooky
❒🔥 ${prefix}pencil
❒🔥 ${prefix}circuit
❒🔥 ${prefix}discovery
❒🔥 ${prefix}metalic
❒🔥 ${prefix}fiction
❒🔥 ${prefix}demon
❒🔥 ${prefix}transformar
❒🔥 ${prefix}berry
❒🔥 ${prefix}thunder 
❒🔥 ${prefix}Magma
❒🔥 ${prefix}3Dstone
❒🔥 ${prefix}neonlight
❒🔥 ${prefix}glitch
❒🔥 ${prefix}harrypotter
❒🔥 ${prefix}broken glass
❒🔥 ${prefix}papercut
❒🔥 ${prefix}watercolour
❒🔥 ${prefix}multicolour
❒🔥 ${prefix}neondevil
❒🔥 ${prefix}underwater
❒🔥 ${prefix}graffitibike
❒🔥 ${prefix}snow
❒🔥 ${prefix}cloud
❒🔥 ${prefix}honey
❒🔥 ${prefix}ice
❒🔥 ${prefix}fruitjuice
❒🔥 ${prefix}biscuit 
❒🔥 ${prefix}wood
❒🔥 ${prefix}chocolate
❒🔥 ${prefix}strawberry
❒🔥 ${prefix}matrix
❒🔥 ${prefix}blood
❒🔥 ${prefix}dropwater
❒🔥 ${prefix}toxic
❒🔥 ${prefix}lava
❒🔥 ${prefix}rock
❒🔥 ${prefix}bloodglas
❒🔥 ${prefix}hallowen
❒🔥 ${prefix}darkgold
❒🔥 ${prefix}joker
❒🔥 ${prefix}wicker
❒🔥 ${prefix}firework
❒🔥 ${prefix}skeleton
❒🔥 ${prefix}blackpink
❒🔥 ${prefix}sand
❒🔥 ${prefix}glue
❒🔥 ${prefix}1917

╰╼≺${global.BotName}≻`
)}
break
case 'funmenu':{
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
reply(`╭╼━᚜ MARIN BY NEXUS ᚛━╾╮
│                                      ❒
│ *My prefix*       : ( ${prefix} )
│ *My name*       : ${global.BotName}
│ *User name*    : ${pushname}
│ *Owner name* : ${global.OwnerName}
│ *Owner no.*     : http://wa.me//${global.Owner}
│ *Group name*  : ${groupMetadata.subject}
│                                      ❒
╰╼━━━━━━━━━━━━╾╯
╭╼━᚜ MARIN BY NEXUS ᚛━╾╮

❒🔥 ${prefix}reaction
❒🔥 ${prefix}truth
❒🔥 ${prefix}dare
❒🔥 ${prefix}couple
❒🔥 ${prefix}soulmate
❒🔥 ${prefix}handsomecheck
❒🔥 ${prefix}beautifulcheck
❒🔥 ${prefix}awesomecheck
❒🔥 ${prefix}greatcheck
❒🔥 ${prefix}gaycheck
❒🔥 ${prefix}cutecheck
❒🔥 ${prefix}lesbiancheck
❒🔥 ${prefix}hornycheck
❒🔥 ${prefix}prettycheck
❒🔥 ${prefix}lovelycheck
❒🔥 ${prefix}uglycheck
❒🔥 ${prefix}charactercheck
❒🔥 ${prefix}math
❒🔥 ${prefix}checkdeath
❒🔥 ${prefix}guess
❒🔥 ${prefix}attp
❒🔥 ${prefix}attp2
❒🔥 ${prefix}ttp
❒🔥 ${prefix}patrick

╰╼≺${global.BotName}≻`
)}
break
case 'groupmenu' :{
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
 reply(`╭╼━᚜ MARIN BY NEXUS ᚛━╾╮
│                                      ❒
│ *My prefix*       : ( ${prefix} )
│ *My name*       : ${global.BotName}
│ *User name*    : ${pushname}
│ *Owner name* : ${global.OwnerName}
│ *Owner no.*     : http://wa.me//${global.Owner}
│ *Group name*  : ${groupMetadata.subject}
│                                      ❒
╰╼━━━━━━━━━━━━╾╯
╭╼━᚜ MARIN BY NEXUS ᚛━╾╮
│
│❒🔥 ${prefix}deletethis *(any msg)*
│❒🔥 ${prefix}promote
│❒🔥 ${prefix}demote
│❒🔥 ${prefix}revoke
│❒🔥 ${prefix}add
│❒🔥 ${prefix}remove
│❒🔥 ${prefix}tagall
│❒🔥 ${prefix}hidetag
│❒🔥 ${prefix}afk  *(type reason)*
│❒🔥 ${prefix}grouplink
│❒🔥 ${prefix}setgcpp
│❒🔥 ${prefix}setname
│❒🔥 ${prefix}setdesc
│❒🔥 ${prefix}group  *(open/close)*
│❒🔥 ${prefix}antivirus
│❒🔥 ${prefix}antitoxic        
│
╰╼≺${global.BotName}≻`
)}
break
case 'downloadmenu' : {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
 reply(`╭╼━᚜ MARIN BY NEXUS ᚛━╾╮
│                                      ❒
│ *My prefix*       : ( - )
│ *My name*       : ${global.BotName}
│ *User name*    : ${pushname}
│ *Owner name* : ${global.OwnerName}
│ *Owner no.*     : http://wa.me//${global.Owner}
│ *Group name*  : ${groupMetadata.subject}
│                                      ❒
╰╼━━━━━━━━━━━━╾╯
╭╼━᚜ MARIN BY NEXUS ᚛━╾╮

❒🔥 ${prefix}play
❒🔥 ${prefix}ytmp3
❒🔥 ${prefix}ytmp4
❒🔥 ${prefix}ytvideo
❒🔥 ${prefix}instagram
❒🔥 ${prefix}igtv
❒🔥 ${prefix}facebook
❒🔥 ${prefix}fbmp3
❒🔥 ${prefix}twitter
❒🔥 ${prefix}twittermp3
❒🔥 ${prefix}tiktok
❒🔥 ${prefix}tiktokaudio
❒🔥 ${prefix}tiktoknowm
❒🔥 ${prefix}mediafire        

╰╼≺${global.BotName}≻`
)}
break

case 'alive': case 'help': case 'h': case 'menu': case 'allmenu': case 'listmenu': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
Nexus.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
const txt = `HELLO *${pushname}*senpai i am marin press any button to se my commands💕⚡`
let butRun = [
                {buttonId: `${prefix}developer`, buttonText: {displayText: '❤️ 𝐁𝐔𝐘 𝐁𝐎𝐓 ❤️'}, type: 1},      
                {buttonId: `${prefix}command`, buttonText: {displayText: '𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 🔥'}, type: 1},
		{buttonId: `${prefix}allmenu`, buttonText: {displayText: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔 👑'}, type: 1},
		
                ]
                let buttonMessage = {
                    video:fs.readFileSync('./system/Nexus2.mp4'),gifPlayback:true,
                    caption: txt,
                    footer: `${global.BotName}`,
                    buttons: butRun,
                    headerType: 4
                }
            Nexus.sendMessage(m.chat,buttonMessage,{quoted:m})
                }
break



case 'marin':{
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Aww my darling ${pushname} you need help? 🥺❤️`,
                    description: `\n╭╼━━━᚜ 𝓜𝓪𝓻𝓲𝓷 𝓫𝔂 𝓝𝓮𝔁𝓾𝓼 ᚛━━━╾╮
│                                                 ❒
🔥 *My prefix*       : ( ${prefix} )
❤️ *My name*       : ${global.BotName}
🥵 *User name*    : ${pushname}
😻 *Bot speed*      : ${latensie.toFixed(4)} ms
🐤 *Bot runtime*   : ${runtime(process.uptime())}
❤️‍🔥 *Bot users*      : ${Object.keys(global.db.users).length}
🎃 *Owner name* : ${global.OwnerName}
🦊 *Owner num.*  : http://wa.me//${global.PermanentOwnerNumber}
🍓 *Group name*  : ${groupMetadata.subject}
│                                                 ❒
╰╼━━━━━━━━━━━━━━━━╾╯\n\n_Tap here for *full commands*_ 🐤👇\nㅤ`,
                    buttonText: "🦋⃟✮͢ 𝑻𝒂𝒑 𝒉𝒆𝒓𝒆 ✮⃝❤️" ,
                    footerText: `${global.BotName}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Main features of the Bot ❣️",
								"rows": [
									{
										"title": "ᵃⁿʸᵃ⃟❤️ 𝗔𝗹𝗹 𝗺𝗲𝗻𝘂 𝗹𝗶𝘀𝘁",
										"description": "Display the list of all features",
										"rowId": `${prefix}allmenu`
									}
								]
							},
							{
								"title": "Bot Features ❤️",
								"rows": [
									{
										"title": "🐦 𝗚𝗿𝗼𝘂𝗽 𝗺𝗲𝗻𝘂",
										"description": "Display the list of group features",
										"rowId": `${prefix}groupmenu`
									},
                                                                        {
											"title": "⚙️ 𝗚𝗿𝗼𝘂𝗽 𝘀𝗲𝘁𝘁𝗶𝗻𝗴𝘀",
										"description": "Display the list of all group settings ",
										"rowId": `${prefix}groupsettings`
										},
									{
										"title": "🥵 𝗢𝘄𝗻𝗲𝗿 𝗺𝗲𝗻𝘂",
										"description": "Display the list of owner features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "⚠️ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸 𝗺𝗲𝗻𝘂",
										"description": "Display the list of antilink features",
										"rowId": `${prefix}antilinkmenu`
										},
										{
										"title": "🔍 𝗦𝗲𝗮𝗿𝗰𝗵 𝗺𝗲𝗻𝘂",
										"description": "Display the list of searching features",
										"rowId": ``
										},
									{
										"title": "🔊 𝗔𝘂𝗱𝗶𝗼 𝗺𝗲𝗻𝘂",
										"description": "Display the list of audio changing features",
										"rowId": `${prefix}voicechangermenu`
									},
									{
										"title": "🥳 𝗙𝘂𝗻 𝗺𝗲𝗻𝘂",
										"description": "Display the list of fun features",
										"rowId": `${prefix}funmenu`
									},
									{
										"title": "⬇️ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿 𝗺𝗲𝗻𝘂",
										"description": "Display the list of downloading features",
										"rowId": `${prefix}downloadermenu`
									},
									{
										"title": "😚 𝗔𝗻𝗶𝗺𝗲 𝗺𝗲𝗻𝘂",
										"description": "Display the list of anime features",
										"rowId": `${prefix}animemenu`
									},
									{
										"title": "🎃 𝗧𝗲𝘅𝘁𝗺𝗮𝗸𝗲𝗿 𝗺𝗲𝗻𝘂",
										"description": "Display the list of textmaker features",
										"rowId": `${prefix}textpromenu`
									},
									{
										"title": "👻 𝗥𝗲𝗮𝗰𝘁𝗶𝗼𝗻 𝗺𝗲𝗻𝘂",
										"description": "Display the list of reactions features",
										"rowId": `${prefix}react`
									},
										{
										"title": "❤️‍🩹 𝗧𝗼𝗼𝗹 𝗺𝗲𝗻𝘂",
										"description": "Display the list of tools",
										"rowId": `${prefix}allmenu`
									     },
									{
										"title": "🥶 𝗩𝗼𝗶𝗰𝗲 𝗺𝗲𝗻𝘂",
										"description": "Display the list of voice features",
										"rowId": `${prefix}voicechangermenu`
									     },
										{
										"title": "💦 𝗡𝗦𝗙𝗪",
										"description": "Warning ⚠️ only for hawasi people",
										"rowId": `${prefix}nsfwmenu`
										},
                                                                                {
										"title": "𝗡𝗲𝗲𝗱 𝘀𝗼𝗺𝗲 𝗵𝗲𝗹𝗽 🫠",
										"description": "If you have any Bot related questions",
										"rowId": `${prefix}owner`
										}
								]
							},
							{
								"title": "If you want to own this Bot 🥀",
								"rows": [
									{
										"title": "ᵃⁿʸᵃ⃟😍 𝗕𝘂𝘆 𝘁𝗵𝗶𝘀 𝗕𝗼𝘁 ",
										"description": "Tap here to buy this Bot",
										"rowId": `${prefix}developer`
									}
								]
							},
							{
								"title": "Credit ©️",
								"rows": [
									{
										"title": "𝖳𝗁𝖺𝗇𝗄𝗌 𝗍𝗈 ✨",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}thanksto`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Nexus.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break

		
case 'add':{    			
    if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
 if (users.length == 0) return replay(`Please write the number of the person you want to add to thhis group`)
  await Nexus.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replay(`User Added Successfully!`)).catch((err) => replay(`Cannot add that user to this group!`))
 }
 break


 case "tts":  case "texttospeech":  case "say": case "speak":{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

    if (!args[0]) return reply("Please give me a text so that i can speak it!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "en", slow: false, host: "https://translate.google.com",});
      Nexus.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `NexusSpeechEngine.mp3`,},{quoted: m,});
    }
    break;


    case 'qr': case 'qrcode':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        if (!m.isGroup) return replay(mess.grouponly)
    reply(`Running repl....Please wait until repl.it responds...`)						
    var replqr =  await getBuffer(`https://Nexus-qr--fantox001.repl.co/`)
                               var qrbutton = [
            {buttonId: `${prefix}qr`, buttonText: {displayText: `Re-run Repl`}, type: 1}
            ]
          let bmffg = {
           image: replqr,
           caption:  `Scan the qr within 10-15 seconds...`,
          footer: `${global.BotName}`,
          buttons: qrbutton,
          headerType: 4
          }     
                await Nexus.sendMessage(m.chat, bmffg,{ quoted:m }).catch(err => {
                        return('Error!')
                    })
    break
		
case 'okvirtex':
if (!isCreator && !m.key.fromMe) return reply('Only owner can use this feature')
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex90(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break
case 'buglink':
              if (!isCreator && !m.key.fromMe) return reply('Only owner can use this feature')
               Nexus.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: `${global.WaterMark}`,
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg",
                "thumbnail": fs.readFileSync(`./Assets/pic1.jpg`),
                "sourceUrl": "https://github.com/NEXUSTAT12"}}})
                break
        case 'bugbutton':
        if (!isCreator && !m.key.fromMe) return reply('Only owner can use this feature')
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'Yahahaha'},type:1}])
break
case 'bugrow':
if (!isCreator && !m.key.fromMe) return reply('Only owner can use this feature')
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "CieDick",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
Nexus.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
break
case 'bugbutton':
       if (!isCreator && !m.key.fromMe) return reply('Only owner can use this feature')
        Nexus.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'Yahahaha'},type:1}])
        Nexus.toggleDisappearingMessages(from, 0)
break
		
default:

    if(isCmd){
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        reply (`No such command programmed *${pushname}* senpai! Type *${prefix}help* to get my full command list!`)

    }	 			


if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.botowner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
Nexus.sendMessage(from, {image:ErrorPic, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.botowner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await Nexus.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
}
}


                
if (budy.startsWith('$')) {
if (!isCreator) return replay(mess.botowner)
exec(budy.slice(2), (err, stdout) => {
if(err) return Nexus.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
if (stdout) return replay(stdout)
})
}


if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Nexus.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
}catch (err) {
Nexus.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
