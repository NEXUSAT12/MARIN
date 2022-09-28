const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['918130784851']
global.OwnerNumber = ['918130784851']
global.ownertag = ['918130784851']
global.Botno1 = ['919971690443']
global.BotName = "𝗠𝗔𝗥𝗜𝗡" 
global.packname = "MARIN bot"
global.author = "By:𝐓𝐄𝐀𝐌 𝐗-𝐅𝐈𝐑𝐄🔥"
global.OwnerName = "NEXUS"
global.myweb = "https://chat.whatsapp.com/DDWBpH9ciy38RCGYO7RkfM"
global.BotSourceCode = "https://github.com/NEXUSAT12"
global.SupportGroupLink = "https://chat.whatsapp.com/DDWBpH9ciy38RCGYO7RkfM"
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ['#'] 


global.location = "ghaziabad, india"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://c.tenor.com/PwuDrnpFBj8AAAPo/marin-kitagawa.mp4' }
global.websitex = "https://github.com/NEXUSAT12"
global.lolhuman = "ᴀʏᴜsʜ"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'ʙᴀᴊᴀᴏ ᴅᴏʟʟ.......✨',
    useradmin: 'Sorry, only *Group Admins* can use this command !...ᴛᴜ ʜ ᴋᴏɴ ???  ',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* .....chal ab *Admin* bna 😏',
    botowner: '*ᴋᴏɴ ʜ ʙʜᴏᴘᴀᴅɪᴋᴀ* 🙄.......ᴏᴡɴᴇʀ ᴏɴʟʏ ᴄᴀᴍᴍᴀɴᴅ ᴜsᴇ ᴋᴀʀᴇɢᴀ?? ʙᴀᴅᴀ ʜᴏᴊᴀ ᴄʜᴏᴛᴜ ᴘᴇʜʟᴇ ᴄʜᴀʟʟ',
    grouponly: 'This command is only made for *Groups*, and what the hell are you doing here!',
    privateonly: 'This command is only made for *Private Chat*, chal khopche me aa!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: '_Command processing_ ᴍᴀʀɪɴ ᵇʸ ᴀʏᴜsʜ.....',
    nolink: 'LINK KON DEGA CHUTUYE *link*, jaldie de!',
    error: 'Error....kuchh to garbar hai dyaa!',
    banned: 'You are *Banned* fron using commands NOW M******A CHALL ABH 😠!',
    bangc: 'This Group is *Banned* from using Commands g*** marao abh jake 😡!',
    nonsfw: 'ʜ ʙʜɪ??? ....Bc pdhai - ʟɪᴋʜᴀɪ ᴋᴀʀᴊᴀᴋᴇ, ɪᴀs ʏᴀs ʙᴀɴᴏ ᴘᴀʀ ɴʜɪ ᴛᴜᴍʜᴇ to *nudity* ᴅᴇᴋʜɴɪ ʜᴀɪ 😒 ʙᴀᴅᴇ ᴀᴀʏᴇ ᴄʜᴏᴛɪ ɴᴜɴᴜ ᴡᴀʟᴇ!'
    
}

global.PermanentOwner = ['918130784851']
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
