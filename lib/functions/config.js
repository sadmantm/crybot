/*----------- VERY IMPORTANT NOTICE - AVISO MUITO IMPORTANTE - AVISO MUY IMPORTANTE ------------------
*
* Reprodução, edição e outros estão autorizados MAS SEM REMOVER MEUS CRÉDITOS.
* Caso remova, resulta na quebra da licença do mesmo, sendo um crime.
* Leia mais sobre o que você pode fazer aqui -> https://escolhaumalicenca.com.br/licencas/mit/
* Ou digite o comando /Termos, fiz um resumo em 3 idiomas lá.
*
* Desculpem pelos comandos em "inglês", eu e meu pessoal gostamos do inglês. 
* Então os programo dessa forma. (Desconheço palavras suficientes em português) :'D
*
* Plagiar meus códigos não te torna coder, vá estudar, não seja um ladrão miserável.
* Esse projeto é feito com muita disposição, sem fins lucrativos, apenas para divertir, e claro, de graça.
* Eu realmente não gosto de ter minhas coisas roubadas, especialmente as que fiz gratuitamente, e você?
*
* Se ainda planeja roubar, saiba que quando baixou a Íris, você aceitou um acordo eheheheh
* Isso mesmo, plagiar meu código significa estar vendendo a alma para mim! 😎
*
* Agradecimentos especiais -> Pedro Batistop - Por sua enorme ajuda durante esses meses.
*
*				Obrigado também a todos que ajudam e a você que escolheu a Íris.
*
* -------------- DUVIDAS? LEIA A GITHUB OU ABRA UMA ISSUE POR LÁ PARA PEDIR AJUDA -------------------

/*MODULOS*/
const {
	bomber
} = require("bomber-api") /*Se desejar desativar o auto-abrir navegador leia a página inicial da Íris na github*/
const {
	Aki
} = require('aki-api')
const {
	decryptMedia
} = require('@open-wa/wa-decrypt')
const {
	EmojiAPI
} = require("emoji-api")
const {
	IamAuthenticator
} = require('ibm-watson/auth')
const {
	removeBackgroundFromImageBase64
} = require('remove.bg')
const {
	XVDL
} = require("xvdl")
const {
	Brainly
} = require('brainly-scraper-v2')
const { newParser } = require('./.parseLine.js')
const axios = require('axios')
const canvacord = require('canvacord')
const chess = require('chess.js')
const chessImageGenerator = require('chess-image-generator')
const creditCard = require('creditcard-generator')
const ddg = require('ddg-scraper')
const deepai = require('deepai')
const duck = require('ddgimages-node')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')
const genshin = require('genshin-db')
const isPorn = require('is-porn')
const maker = require('free-textmaker-alpha')
const math = require('mathjs')
const moment = require('moment-timezone')
const os = require('os')
const petPetGif = require('pet-pet-gif')
const Pokemon = require('pokemon.js')
const removeAccents = require('remove-accents')
const sharp = require('sharp')
const shell = require('shelljs')
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1')
const store = require('playstore-scraper')
const stringSimilarity = require('string-similarity')
const text2png = require('text2png')
const TicTacToe = require('tictactoe-agent')
const translate = require('@imlinhanchao/google-translate-api')
const tts = require('node-gtts')
const webp = require('webp-converter')
const wordwrap = require('word-wrapper')
const ytsearch = require('yt-search')

/*UTILIDADES*/
const {
	mylang
} = require('../lang')
const {
	tools
} = require('./index')
const shop = require('./shop')
const events = require('./events')
const hentao = require('./nhentai')

/*JSON'S*/
const cmds = JSON.parse(fs.readFileSync('./lib/config/Gerais/cmds.json'))
const config = JSON.parse(fs.readFileSync('./lib/config/Settings/config.json'))
const Default_APIS = JSON.parse(fs.readFileSync('./lib/config/Settings/Default_APIS.json'))
const APIS = JSON.parse(fs.readFileSync('./lib/config/Settings/APIS.json'))
const sesConfig = JSON.parse(fs.readFileSync('./lib/config/Settings/session.json'))
const ctmprefix = JSON.parse(fs.readFileSync('./lib/config/Gerais/prefix.json'))
const custom = JSON.parse(fs.readFileSync('./lib/config/Gerais/custom.json'))
const deleted = JSON.parse(fs.readFileSync('./lib/config/Gerais/message.json'))
const functions = JSON.parse(fs.readFileSync('./lib/config/Gerais/functions.json'))
const hail = JSON.parse(fs.readFileSync('./lib/config/Gerais/greetings.json'))
const languages = JSON.parse(fs.readFileSync('./lib/config/Gerais/lang.json'))
const reward = JSON.parse(fs.readFileSync('./lib/config/Gerais/rewards.json'))
const shopconf = JSON.parse(fs.readFileSync('./lib/config/Gerais/shop.json'))
const blockcmd = JSON.parse(fs.readFileSync('./lib/config/Gerais/disable.json'))
const afk = JSON.parse(fs.readFileSync('./lib/config/Gerais/AFK.json'))
const married = JSON.parse(fs.readFileSync('./lib/config/Gerais/marry.json'))
const commandslist = JSON.parse(fs.readFileSync("./lib/config/Gerais/comandos.json"))
const V_CMDS = JSON.parse(fs.readFileSync('./lib/config/Settings/commands.json'))
var nivel = JSON.parse(fs.readFileSync('./lib/config/Gerais/level.json'))
const rpgJson = JSON.parse(fs.readFileSync('./lib/config/Gerais/rpg.json'))
const CharInfo = JSON.parse(fs.readFileSync('./lib/config/Gerais/characters.json'))
const Fights = JSON.parse(fs.readFileSync('./lib/config/Gerais/fights.json'))

/*ATIVADORES & CONFIGS EXTRAS*/
// CONFIGURE SUA API DEEPAI PARA EVITAR ERROS MAIORES
Default_APIS.API_DeepAI !== APIS.API_DeepAI ? deepai.setApiKey(APIS.API_DeepAI) : deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K')
global.region = config.Language
var mess = mylang(region)
moment.tz.setDefault(config.Moment_Timezone).locale(config.Moment_Locale)
axios.defaults.headers.common['User-Agent'] = config.User_Agent
var gameconfig = {}
var bjConfig = {}
var chessGame = {}
var onShutdown = false
var quizPlacar = {}
var Select_Quiz_Awnser = {}
var usersVoted = {}
var lotery = {}
var objconfig = {
	GuildExist: 0,
	agiotas: [],
	ohayo: [],
	bonjour: [],
	noch: [],
	dawn: [],
	isMuteAll: 0,
	isTyping: [],
	akistarted: 0,
	jogadas: 0,
	noLimits: 0,
	oneImage: 0,
	oneLink: 0,
	oneTrava: 0
}
var tttSet = {}
var placar = {}
var lastValidID = false
let marryOngoing = []
let onDivorce = []
var oldBodSave = 0

module.exports = kconfig = async (kill, message) => {
	
	// Impede comandos quando está em modo shutdown
	if (onShutdown == true && !config.Owner.includes(message.sender.id)) return
	
	// Var que define o valor do random event, ela é recarregada sempre que uma mensagem chega
	var randEven = JSON.parse(fs.readFileSync('./lib/config/Gerais/events.json'))

	/*Isso antes da try possibilita receber os alertas no WhatsApp*/
	const {
		type,
		t,
		sender,
		author,
		isGroupMsg,
		chat,
		caption,
		isMedia,
		mimetype,
		quotedMsg,
		quotedMsgObj,
		mentionedJidList
	} = message
	const procTime = moment.duration(moment.now() - moment(t * 1000)).asSeconds()
	let chatId = isGroupMsg == true ? message.chat.groupMetadata.id : message.chatId
	let from = message.chat.id
	let fpID = message.type == "buttons_response" ? message.quotedMsgObj.id : message.id
	const id = fpID == null ? lastValidID : fpID
	lastValidID = id
	var body = (type == 'chat' || type == "buttons_response" || type == "list_response") ? message.body : ((type == 'image' || type == 'video') && caption) ? caption : ''
	let prefix = (!ctmprefix[chatId] && config.Prefix.includes(body.slice(0, 1)) && body.length > 1) ? body.slice(0, 1) : ctmprefix[chatId] ? ctmprefix[chatId] : config.Prefix[0]
	mess.newprefix(prefix)
	//body = body.replace(/\n/gim, " ")
	oldBodSave = body
	const command = removeAccents(body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase())
	const time = moment(t * 1000).format('DD/MM/YY HH:mm:ss')

	try {

		/*PARAMETROS & Daily*/
		var daily = JSON.parse(fs.readFileSync('./lib/config/Gerais/limit.json'))
		let name = chat.name || chat.formattedTitle || 'PV'
		let pushname = sender.pushname || sender.verifiedName || sender.formattedName || '"Censored by Government"' // Caso der erros e.e
		const botNumber = (await kill.getHostNumber())+'@c.us'
		const blockNumber = await kill.getBlockedIds()
		const isBot = botNumber == sender.id
		const isActivated = func => functions[func].includes(chatId)
		const isVIP = Object.keys(functions.vips).includes(chatId) ? Object.keys(functions.vips[chatId]).includes(sender.id) : false
		const isModerator = isVIP ? functions.vips[chatId][sender.id] : false
		const Can_Run_CMD = wcmd => isVIP && !isModerator ? V_CMDS['VIP_Commands'].includes(wcmd) : (isModerator ? V_CMDS['MOD_Commands'].includes(wcmd) : false)
		const isType = mime => quotedMsg && quotedMsg.type == mime || quotedMsg && quotedMsg.mimetype == mime || type == mime || mimetype == mime
		var groupMembersId = isGroupMsg ? await kill.getGroupMembersId(chatId) : false
		const groupAdmins = isGroupMsg ? await kill.getGroupAdmins(chatId) : false
		const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
		const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber) : false
		const dateOfDay = (new Date()).getHours()
		var arg = body.trim().substring(body.indexOf(' ') + 1)
		var args = body.trim().split(/ +/).slice(1)
		var all_args = body.trim().split(/ +/)
		var isCmd = body.startsWith(prefix)
		isCmd && body.slice(1) !== '' ? [oldBodSave, body] = [oldBodSave.slice(1), body.slice(1)] : body // Caso seja um cmd, remove o prefix da msg
		var isBlocked = blockNumber.includes(sender.id)
		var arqs = body.trim().split(' ')
		var argl = args.map(argl => argl.toLowerCase())
		var arks = argl.join(' ')
		var argc = args.map(argc => argc.toUpperCase())
		const randomMember = isGroupMsg ? tools('others').randVal(groupMembersId) : sender.id
		const isGroupCreator = isGroupMsg ? sender.id == chat.groupMetadata.owner : false
		const isOwner = config.Owner.includes(sender.id) || args.includes(config.Owner_SECRET_Password)
		
		// Edita o sticker para inserir nome do user e grupo nele, nomes cheios de ASCII são problemáticos
		if (config.Sticker_Author.includes('DONTEDITGPN')) {
			var stckAuth = removeAccents(config.Sticker_Author.replace(/DONTEDITGPN/g, name).replace(/DONTEDITUSR/g, pushname))
			if (/[^\u0000-\u007f]/.test(stckAuth)) {
				let sticPA = [removeAccents(name), removeAccents(pushname)].filter(j => !/[^\u0000-\u007f]/.test(j))
				stckAuth = sticPA.length == 2 ? `${sticPA[0]} - ${sticPA[1]}` : (sticPA.length == 1 ? `${sticPA[0]}` : removeAccents(config.Your_Name))
			}
			stckAuth = '🎁 ' + stckAuth + ' ☆'
		} else var stckAuth = config.Sticker_Author
		let theNewLine = newParser()
		let stckPack = (removeAccents(config.Sticker_Pack).toString() || "🔰 Legião Z [bit.ly/BOT-IRIS] Íris ⚜️")

		// Metadados do Sticker
		var stickerConfig = {
			author: stckAuth,
			pack: stckPack,
			keepScale: true,
			circle: false
		}

		// Metadados do Sticker MP4
		var stickMp4Config = {
			author: stckAuth,
			pack: stckPack,
			crop: false,
			loop: 1,
			fps: config.Fig_FPS,
			stickerMetadata: true
		}

		// Caso tenha configurado um nome
		if (Object.keys(custom).includes(sender.id)) {
			if (custom[sender.id]['pack'] !== false && custom[sender.id]['author'] !== false) {
				stickerConfig['pack'] = custom[sender.id]['pack']
				stickMp4Config['pack'] = custom[sender.id]['pack']
				stickMp4Config['author'] = custom[sender.id]['author']
				stickerConfig['author'] = custom[sender.id]['author']
			}
		}

		/*OUTRAS*/
		const allCommands = fs.readFileSync('./lib/config/Utilidades/Comandos_Automate.txt').toString()
		const Hosts_File = fs.readFileSync('./lib/config/Utilidades/hosts.txt').toString()
		const pollfile = `./lib/media/poll/${chatId.replace('@g.us', '')}.json`
		var side = tools('others').randomNumber(1, 2)
		var lvpc = tools('others').randomNumber(1, 100)
		const errorurl = 'https://img.wallpapersafari.com/desktop/1920/1080/19/44/evOxST.jpg'
		const personPhoto = 'https://thispersondoesnotexist.com/image'
		const errorImg = 'https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/user.png'
		const checkLvL = tools('gaming').getValue(sender.id, nivel, chatId, 'level')
		const patente = tools('gaming').getPatent(checkLvL)
		const Censor_Languages = ["all", "cs", "de", "eo", "fa", "fil", "hi", "it", "kab", "nl", "pl", "ru", "th", "tr", "ar", "da", "en", "es", "fi", "fr", "hu", "ja", "ko", "no", "pt", "sv", "tlh", "zh"]
		const fileFor = ['pais', 'fruta', 'capital', 'empresa', 'nome']
		const typeChat = isGroupMsg ? '-gp' : '-pv'
		const typeName = isGroupMsg ? name : pushname
		const typeId = isGroupMsg ? chatId.replace('@g.us', '') : sender.id.replace('@c.us', '')
		const encryptMedia = !quotedMsg && isMedia ? message : (isType('image') || isType('audio') || isType('ptt') || isType('video') || isType('sticker') || isType('image/gif') || quotedMsgObj ? quotedMsg : false)
		let After_Winning = async (obj) => {
			const whoWinQuiz = Object.keys(obj.votes).filter(o => obj['votes'][o]['vote'] == Select_Quiz_Awnser[chatId].Final_Awnser)
			await kill.sendTextWithMentions(from, `Quiz finalizado, a quantidade de votos ou tempo terminou, confira abaixo:\n\n❓ - "${Select_Quiz_Awnser[chatId].Question}"\n\n✔️ - "${(Select_Quiz_Awnser[chatId].Awnser).toUpperCase()}"\n\nOs seguintes usuários ganharam um ponto no placar:\n\n@${whoWinQuiz.join('\n-> @')}`)
			whoWinQuiz.map(rs => {
				if (Object.keys(quizPlacar).includes(rs)) {
					quizPlacar[chatId][rs]++
				} else {
					quizPlacar[chatId][rs] = 1
				}
			})
			Select_Quiz_Awnser[chatId] = {}
			usersVoted[chatId] = {
				"Max_Votes_Quiz": 0,
				"started": false,
				"total": 0,
				"all": [],
				"votes": {}
			}
		}

		// Sistema de aniversario
		if (isGroupMsg && Object.keys(functions.birthdays).includes(sender.id)) {
			if (moment().format('DD/MM') == functions.birthdays[sender.id]['date'] && functions.birthdays[sender.id]['last_check'] !== moment().format('DD/MM/YYYY')) {
				functions.birthdays[sender.id]['last_check'] = moment().format('DD/MM/YYYY')
				fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
				await kill.sendTextWithMentions(from, `@${sender.id.replace('@c.us', '')} pode ler isso aqui rapidinho?\nÉ importante...\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n*Parabéns pra você*\n*Nesta data querida*\n*Muitas felicidades*\n*Muitos anos de vida!*\n\n💖 - Te enviei ${config.Niver_Present} I'coins para gastar como quiser, divirta-se, hoje é seu dia especial, meus parabéns por todos esses ${moment().format('YYYY')-moment(functions.birthdays[sender.id]['year']).format('YYYY')} anos de vida, obrigada por existir durante tantos anos e ser parte da minha vida! - 💖`, id)
				tools('gaming').addValue(sender.id, Number(config.Niver_Present), nivel, chatId, 'coin')
			}
		}
		
		// Aniversario do grupo
		if (isGroupMsg) {
			if (!Object.keys(functions.birthdays).includes(chatId)) {
				let GP_Info = (await kill.getAllGroups()).filter(h => h.id == chatId)[0]
				functions.birthdays[chatId] = {
					"date": moment(Number(GP_Info.groupMetadata['creation'].toString().padEnd(moment.now().toString().length, '0'))).format("DD/MM"),
					"year": moment(Number(GP_Info.groupMetadata['creation'].toString().padEnd(moment.now().toString().length, '0'))).format('YYYY'),
					"last_check": "never"
				}
				fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
			}
			if (moment().format('DD/MM') == functions.birthdays[chatId]['date'] && functions.birthdays[chatId]['last_check'] !== moment().format('DD/MM/YYYY')) {
				functions.birthdays[chatId]['last_check'] = moment().format('DD/MM/YYYY')
				fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
				await kill.sendTextWithMentions(from, `═✪〘 🖊️ - HOJE O GRUPO COMPLETA ${moment().format('YYYY')-moment(functions.birthdays[chatId]['year'], 'YYYY').format('YYYY')} ANOS DE EXISTENCIA 💖! - 🐂 〙✪═\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n- @${groupMembersId.toString().replace(/@c.us/g, '').replace(/,/g, '\n- @')}\n\n═✪〘 ❤️ - CRYBOT - 📢 〙✪═`)
			}
		}

		// Sistema do quiz, resolvi fazer em formato de 'if' em vez de awaitMessages pois ela falhou no teste
		if (isGroupMsg && Object.keys(usersVoted).includes(chatId)) {
			if (usersVoted[chatId]['started']) {
				if (!usersVoted[chatId].all.includes(sender.id) && /sim|si|yes|no|not|nao/gi.test(removeAccents(body))) {
					if (/sim|si|yes/gi.test(removeAccents(body))) {
						usersVoted[chatId]['votes'][sender.id] = {
							"vote": true
						}
						usersVoted[chatId]['total']++
						usersVoted[chatId]['all'].push(sender.id)
						if (usersVoted[chatId]['total'] >= Number(usersVoted[chatId].Max_Votes_Quiz)) return await After_Winning(usersVoted[chatId])
					} else if (/no|not|nao/gi.test(removeAccents(body))) {
						usersVoted[chatId]['votes'][sender.id] = {
							"vote": false
						}
						usersVoted[chatId]['total']++
						usersVoted[chatId]['all'].push(sender.id)
						if (usersVoted[chatId]['total'] >= Number(usersVoted[chatId].Max_Votes_Quiz)) return await After_Winning(usersVoted[chatId])
					}
				}
			}
		}
		
		// Filtro de palavrões em 27 idiomas disponíveis, configurável por grupos
		if (isGroupMsg && Object.keys(functions.badwords).includes(chatId)) {
			if (functions.badwords[chatId]['enabled']) {
				let badWordsList = removeAccents(fs.readFileSync(`./lib/config/Utilidades/Bad_Words/${functions.badwords[chatId]['lang']}`).toString().toLowerCase())
				arqs.map(async (words) => {
					if (badWordsList.includes(removeAccents(words.toLowerCase()))) {
						if (functions.badwords[chatId]['ban']) {
							return await kill.removeParticipant(chatId, sender.id)
						} else return await kill.reply(from, `Notei que você está usando palavras proibidas, apague sua mensagem ou você pode ser banido.`, id)
					}
				})
			}
		}

		// Sistema de validade do casamento
		if (isGroupMsg && married['all'].includes(sender.id)) {
			let isEndMar = Object.keys(married['persons']).filter(p => married['persons'][p].love == sender.id || married['persons'][p].request == sender.id)
			if (isEndMar.length >= 1) {
				let marriEnd = ''
				if (sender.id == married['persons'][isEndMar[0]].request) {
					marriEnd = married['persons'][isEndMar[0]].love
				} else if (sender.id == married['persons'][isEndMar[0]].love) {
					marriEnd = married['persons'][isEndMar[0]].request
				}
				if (moment().unix() >= married['persons'][isEndMar[0]].finishAt) {
					await kill.sendTextWithMentions(married['persons'][isEndMar[0]]['from'], mess.marryEnd(sender, marriEnd, married, isEndMar))
					married['all'] = married['all'].filter(i => i !== sender.id && i !== married['persons'][isEndMar[0]].love && i !== married['persons'][isEndMar[0]].request)
					delete married['persons'][isEndMar[0]]
					fs.writeFileSync('./lib/config/Gerais/marry.json', JSON.stringify(married, null, "\t"))
				}
			}
		}

		// Sistema de eventos aleatórios, só precisa ser executado uma vez após ligar a Íris
		if (isGroupMsg && isActivated('event') && isActivated('rank') && !randEven.eventOnline) {
			events(kill, message, chatId)
		}

		// Sistema de AFK
		if (isGroupMsg && mentionedJidList.length !== 0 && Object.keys(afk).length !== 0) {
			var afkMessage = ''
			mentionedJidList.map(m => {
				if (Object.keys(afk).includes(m)) {
					if (afk[m].enabled == true) {
						afkMessage += mess.AFKmode(afk, m)
					}
				}
			})
			if (afkMessage !== '') {
				await kill.reply(from, afkMessage, id)
			}
		}

		// Desativador de comandos específicos em grupos, FT. Pedro B.
		if (isCmd && !isOwner) {
			if (Object.keys(blockcmd.yes).includes(chatId) || blockcmd.global.length !== 0) {
				if (blockcmd.yes[chatId] && blockcmd.yes[chatId].includes(command) && !isGroupAdmins || blockcmd.global.includes(command)) {
					await kill.reply(from, mess.disabledCMD(), id)
					return console.log(tools('others').color('> [DISABLED]', 'red'), tools('others').color(`Ignorando comando ${command.toUpperCase} de ${pushname} - [${sender.id.replace('@c.us', '')}] pois o comando foi desabilitado...`, 'yellow'))
				}
			}
		}

		/*Sistema que permite ignorar comandos de um grupo, caso você já possua um BOT nele e queira deixar a Íris desligada apenas lá, basta ativar*/
		/*if (isGroupMsg && isCmd && !isOwner && !isBot && chatId == 'Insira a id do grupo') return*/

		/*Bloqueia todas as travas, seja contato, localização, texto e outros*/
		if (!isOwner && !isBot) {
			try {
				if (!isGroupMsg && body.length > Number(config.Max_Characters) || !isGroupMsg && isType('oversized')) {
					await kill.contactBlock(sender.id)
					await kill.sendText(config.Owner[0], mess.recTrava(sender.id))
				}
				if (isActivated('antitravas') && isType('oversized') && !isGroupAdmins && isBotGroupAdmins) {
					if (objconfig.oneTrava == 1 || body.length > Number(config.Max_Characters)) return kill.removeParticipant(chatId, sender.id)
					objconfig.oneTrava = 1
					await kill.setGroupToAdminsOnly(chatId, true)
					await kill.removeParticipant(chatId, sender.id)
					console.log(tools('others').color('[TRAVA]', 'red'), tools('others').color(`Possível trava recebida pelo → ${pushname} - [${sender.id.replace('@c.us', '')}] em ${name}...`, 'yellow'))
					await kill.sendText(from, `⡴⠑⡄⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀\n⡇⠀⠿⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀\n⠀⠀⠀⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆\n⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆\n⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢴⣆ \n⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⡿ \n⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉\n⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇\n⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇\n⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿\n⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇\n⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\n⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁\n⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉\n\n`.repeat(10), id)
					await kill.sendTextWithMentions(from, `ACORDA - WAKE UP ADM\n\n@${groupAdmins.toString().replace(/@c.us/g, '').replace(/,/g, '\n- @')}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​`)
					await kill.sendTextWithMentions(from, mess.nopanic() + '\n\n' + mess.baninjusto(sender.id) + 'Travas.')
					await kill.sendText(config.Owner[0], mess.recTrava(sender.id) + `\nAt/No > ${name}`)
					await kill.setGroupToAdminsOnly(chatId, false)
					if (config.Auto_Block) {
						await kill.contactBlock(event.who)
					}
					return objconfig.oneTrava = 0
				}
			} catch (error) {
				objconfig.oneTrava = 0
				// Esconde os erros pra não floodar o terminal, ative para exibir a versão simples, tire o '.message' para exibir tudo (NÃO RECOMENDADO!)
				// console.log(error.message)
			}
		}
		/*Para limpar automaticamente sem você verificar, adicione "await kill.clearChat(chatId)" onde quiser dentro do "if".*/

		/*Anti Imagens pornográficas*/
		if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isActivated('antiporn') && isType('image') && !isCmd && !isOwner && objconfig.oneImage == 0 && !isBot && !quotedMsg) {
			try {
				objconfig.oneImage = 1
				console.log(tools('others').color('[IMAGEM]', 'red'), tools('others').color('Verificando a imagem por pornografia...', 'yellow'))
				let mediaData = await decryptMedia(encryptMedia)
				const getUrl = await tools('cloud').upload(mediaData)
				const resp = await deepai.callStandardApi("nsfw-detector", {
					image: `${getUrl}`
				})
				if (resp.output.nsfw_score > 0.85) {
					console.log(tools('others').color('[NSFW]', 'red'), tools('others').color(`A imagem contém traços de conteúdo adulto, removerei o → ${pushname} - [${sender.id}]...`, 'yellow'))
					await kill.removeParticipant(chatId, sender.id)
					await kill.sendTextWithMentions(from, mess.baninjusto(sender.id) + 'Porno.')
					return objconfig.oneImage = 0
				} else {
					console.log(tools('others').color('[SEM NSFW]', 'lime'), tools('others').color(`→ A imagem não parece ser pornográfica.`, 'gold'))
					objconfig.oneImage = 0
				}
			} catch (error) {
				objconfig.oneImage = 0
				// Esconde os erros pra não floodar o terminal, ative para exibir a versão simples, tire o '.message' para exibir tudo (NÃO RECOMENDADO!)
				// console.log(error.message)
			}
		}

		/*Anti links de grupo*/
		if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isActivated('antilinks') && !isOwner && objconfig.oneLink == 0 && !isBot) {
			try {
				if (/chat.whatsapp.com/gim.test(body) || /(https?:\/\/)?chat\.whatsapp\.com\/(?:invite\/)?([a-zA-Z0-9_-])+/gim.test(body) || body.includes('chat.whatsapp.com')) {
					objconfig.oneLink = 1
					const gplka = await kill.inviteInfo(body)
					if (gplka) {
						console.log(tools('others').color('[BAN]', 'red'), tools('others').color('Link de grupo detectado, removendo participante...', 'yellow'))
						await kill.removeParticipant(chatId, sender.id)
						await kill.sendTextWithMentions(from, mess.baninjusto(sender.id) + 'WhatsApp Link.')
						return objconfig.oneLink = 0
					} else {
						objconfig.oneLink = 0
						console.log(tools('others').color('[ALERTA]', 'yellow'), tools('others').color('Link de grupo invalido recebido...', 'yellow'))
					}
				}
			} catch (error) {
				oneLink = 0
				// Esconde os erros pra não floodar o terminal, ative para exibir a versão simples, tire o '.message' para exibir tudo (NÃO RECOMENDADO!)
				// console.log(error.message)
			}
		}

		// Bloqueia links de porno, vírus, ADS e outros, semelhante a um ad-blocker de VPN
		if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isActivated('safelinks') && objconfig.oneLink == 0 && !isOwner && !isBot) {
			try {
				let Get_URLS = body.match(/(http:\/\/)?(www\.)?\w+\.([a-zA-Z0-9]+)/gim)
				if (Get_URLS !== null) {
					objconfig.oneLink = 1
					if (Get_URLS.some(p => Hosts_File.replace(/\r/gim, '').split('\n').includes(p))) {
						await kill.removeParticipant(chatId, sender.id)
						return await kill.sendTextWithMentions(from, mess.baninjusto(sender.id) + 'Malware/Spyware/Virus/Porn/ADS.')
					}
				}
			} catch (error) {
				// Esconde os erros pra não floodar o terminal, ative para exibir a versão simples, tire o '.message' para exibir tudo (NÃO RECOMENDADO!)
				// console.log(error.message)
			}
		}
		
		/*Anti links pornográficos*/
		if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isActivated('antiporn') && !isOwner && objconfig.oneLink == 0 && !isBot) {
			try {
				if (tools('others').isUrl(body)) {
					objconfig.oneLink = 1
					const inilkn = new URL(body)
					console.log(tools('others').color('[URL]', 'yellow'), 'URL recebida →', inilkn.hostname)
					await isPorn(inilkn.hostname, async (err, status) => {
						if (err) return console.error(err)
						if (status) {
							console.log(tools('others').color('[NSFW]', 'red'), tools('others').color(`O link é pornografico, removerei o → ${pushname} - [${sender.id.replace('@c.us', '')}]...`, 'yellow'))
							await kill.removeParticipant(chatId, sender.id)
							await kill.sendTextWithMentions(from, mess.baninjusto(sender.id) + 'Porno/Porn.')
							return objconfig.oneLink = 0
						} else {
							console.log(tools('others').color('[SEM NSFW]', 'lime'), tools('others').color(`→ O link não possui pornografia.`, 'gold'))
							objconfig.oneLink = 0
						}
					})
				}
			} catch (error) {
				objconfig.oneLink = 0
				// Esconde os erros pra não floodar o terminal, ative para exibir a versão simples, tire o '.message' para exibir tudo (NÃO RECOMENDADO!)
				// console.log(error.message)
			}
		}

		/*Contador de Mensagens (em grupo) | Para contar do PV bote sem aspas "isGroupMsg || !isGroupMsg"*/
		if (isGroupMsg) {
			tools('gaming').addValue(sender.id, 1, nivel, chatId, 'msg')
		}

		/*Muda a linguagem para a requisitada no comando newlang*/
		if (isGroupMsg && isCmd && languages.en.includes(chatId)) {
			mess = mylang('en')
			region = 'en'
		} else if (isGroupMsg && isCmd && languages.es.includes(chatId)) {
			mess = mylang('es')
			region = 'es'
		} else if (isGroupMsg && isCmd && languages.pt.includes(chatId)) {
			mess = mylang('pt')
			region = 'pt'
		}

		/*Manda Bom Dia/Tarde/Noite, mas somente se o Auto_Update estiver offline, pois interfere*/
		if (config.Day_Messages && !config.Auto_Update) {
			if (isGroupMsg && dateOfDay >= '5' && dateOfDay < '11') {
				if (!objconfig.ohayo.includes(chatId)) {
					objconfig.ohayo.push(chatId)
					await kill.sendText(from, mess.ohayo())
				}
			} else if (isGroupMsg && dateOfDay >= '12' && dateOfDay <= '17') {
				if (!objconfig.bonjour.includes(chatId)) {
					objconfig.bonjour.push(chatId)
					objconfig.ohayo.splice(chatId, 1)
					await kill.sendText(from, mess.bonjour())
				}
			} else if (isGroupMsg && dateOfDay >= '18' && dateOfDay < '23') {
				if (!objconfig.noch.includes(chatId)) {
					objconfig.noch.push(chatId)
					objconfig.ohayo.splice(chatId, 1)
					objconfig.bonjour.splice(chatId, 1)
					await kill.sendText(from, mess.noch())
				}
			} else if (isGroupMsg && dateOfDay >= '0' && dateOfDay < '6') {
				if (!objconfig.dawn.includes(chatId)) {
					objconfig.dawn.push(chatId)
					objconfig.ohayo.splice(chatId, 1)
					objconfig.bonjour.splice(chatId, 1)
					objconfig.noch.splice(chatId, 1)
					await kill.sendText(from, mess.dawn())
				}
			}
		}

		/*Mantém a BOT escrevendo caso o dono queira*/
		if (isGroupMsg && objconfig.isTyping.includes(chatId) || isCmd) {
			await kill.simulateTyping(from, true)
		}

		/*Sistema do XP - Baseado no de Bocchi - Slavyan*/
		if (isGroupMsg && isActivated('rank') && !tools('gaming').isWin(sender.id) && !isBlocked) {
			try {
				tools('gaming').wait(sender.id)
				var gainedXP = Math.floor(Math.random() * Number(config.Max_XP_Earn)) + Number(config.Min_XP_Earn)
				const usuarioLevel = tools('gaming').getValue(sender.id, nivel, chatId, 'level')
				var myGuildN = tools('gaming').getValue(sender.id, nivel, chatId, 'guild')
				if (myGuildN.toUpperCase() == 'COMPANIONS') {
					gainedXP = parseInt(gainedXP + (usuarioLevel * 4)) /*Guilda Companions ganha 4X*/
				} else if (myGuildN.toUpperCase() == 'THIEVES') {
					gainedXP = parseInt(gainedXP + (usuarioLevel * 3)) /*Guilda Thieves ganha 3X*/
				} else if (myGuildN.toUpperCase() !== 'NO_GUILD') {
					gainedXP = parseInt(gainedXP + (usuarioLevel * 2)) /* Guildas genéricas ganham 2X */
				}
				if (randEven.eventOnline && randEven.eventType == 'xp') {
					gainedXP = parseInt(tools('others').randomNumber(gainedXP, gainedXP*randEven.events[randEven.eventIndex].multiplier)) /* Efeito de evento aleatório */
				}
				tools('gaming').addValue(sender.id, gainedXP, nivel, chatId, 'xp')
				const haveXptoUp = tools('gaming').getValue(sender.id, nivel, chatId, 'xp')
				if (tools('gaming').LevelEXP(checkLvL) <= haveXptoUp) {
					tools('gaming').addValue(sender.id, 1, nivel, chatId, 'level')
					if (randEven.eventOnline && randEven.eventType == 'coin') {
						tools('gaming').addValue(sender.id, parseInt(tools('others').randomNumber(Number(config.Iris_Coin), Number(config.Iris_Coin)*randEven.events[randEven.eventIndex].multiplier)), nivel, chatId, 'xp') /* Efeito de evento aleatório */
					} else tools('gaming').addValue(sender.id, Number(config.Iris_Coin), nivel, chatId, 'coin')
					let userStats = tools('gaming').getValue(sender.id, nivel, chatId, null)
					var ohotLev = await kill.getProfilePicFromServer(sender.id)
					if (typeof ohotLev == 'object' || !tools('others').isUrl(ohotLev)) ohotLev = personPhoto
					let rankCard = await tools('canvas').ranking(ohotLev, haveXptoUp, tools('gaming').LevelEXP(userStats.level), userStats.level, Object.keys(nivel[chatId]).indexOf(sender.id), Number(gainedXP), `${tools('gaming').getPatent(userStats.level)} - ${(userStats.guild).toUpperCase()}`, pushname)
					await kill.sendFile(from, rankCard, `${sender.id.replace('@c.us', '')}_card.png`, `🔭 - ${pushname} - ${name}\n🎮 - ${haveXptoUp} / ${tools('gaming').LevelEXP(userStats.level)} XP\n☄️ - Level ${userStats.level}\n⏱️ - ${userStats.msg} Mensagens\n🃏 - ${tools('gaming').getPatent(userStats.level)}\n💵 - ${userStats.coin} Í-coins\n⚔️ - ${(userStats.guild).toUpperCase()}\n🔶 - ${userStats.rubi} Rubis\n💎 - ${userStats.dima} Diamantes`, id)
					/*Desative ou Apague as linhas a partir de "userStats" ate "sendFile", se sua Íris floodar mensagens de "Level UP"*/
				}
			} catch (error) {
				console.log(tools('others').color('[XP]', 'crimson'), error)
			}
		}

		// Adiciona nível caso tenha ganhado XP demais e coloca a BOT no ranking de coin's
		if (isGroupMsg && isActivated('rank')) {
			let userStats = tools('gaming').getValue(sender.id, nivel, chatId, null)
			if (userStats.xp >= tools('gaming').LevelEXP(userStats.level)) {
				tools('gaming').addValue(sender.id, 1, nivel, chatId, 'level')
			}
			tools('gaming').addValue(botNumber, 100, nivel, chatId, 'coin')
		}

		/*Auto-stickers de fotos*/
		if (isGroupMsg && isActivated('autosticker') && isType('image') && !isCmd && !isBot && encryptMedia && !quotedMsg) {
			let mediaData = await decryptMedia(encryptMedia)
			await kill.sendImageAsSticker(from, mediaData, stickerConfig)
		}

		/*Auto-sticker de videos & gifs*/
		if (isGroupMsg && isActivated('autosticker') && isType('video') && !isCmd && !isBot && encryptMedia && !quotedMsg) {
			let mediaData = await decryptMedia(encryptMedia)
			await kill.sendMp4AsSticker(from, mediaData, null, stickMp4Config)
		}

		// Bane todos os tipos de links se o dono ativar na config.json e ligar o anti-links no grupo
		if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isActivated('antilinks') && !isOwner && tools('others').isUrl(body) && !isBot && config.Ban_All_Links) return await kill.removeParticipant(chatId, sender.id)

		/*Comandos sem prefix, esse responde se marcar a BOT*/
		if (!tools('cooldown').isFiltered(from) && mentionedJidList.includes(botNumber)) {
			await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0], id)
		}
		
		// Caso deseje criar siga o estilo disso abaixo, para usar a base remova a '/*' & '*/', edite-a e pronto.
		/*if (!tools('cooldown').isFiltered(from) && !isCmd) {
			try {
				// Se não funcionar, tente mudar para -> body.toLowerCase() == 'Mensagem a receber'
				if (body.toLowerCase().includes('Mensagem a receber')) {
					await kill.reply(from, 'Resposta para enviar', id)
				}
			} catch (e) {
				// Esconde os erros pra não floodar o terminal, ative para exibir a versão simples, tire o '.message' para exibir tudo (NÃO RECOMENDADO!)
				// console.log(error.message)
			}
		}*/
		
		/*Comandos sem prefix no PV, esse responde mensagens, sem API - PS, pode quebrar comandos do PV*/
		/*if (!tools('cooldown').isFiltered(from) && !isGroupMsg && !isCmd && !encryptMedia) {
			await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0], id)
		}*/

		// Sistema de acerto do Mix
		if (!isMedia && !isCmd && Object.keys(gameconfig).includes(chatId)) {
			if (chatId == gameconfig[chatId]['whoplay'] && gameconfig[chatId]['word'] !== 0 && removeAccents(body.toLowerCase()) == gameconfig[chatId]['word']) {
				try {
					savePoint = pushname == null ? sender.id : sender.id + '  [' + pushname + ']'
					placar[savePoint] == null ? placar[savePoint] = 1 : placar[savePoint]++
					gameconfig[chatId]['word'] = 0
					gameconfig[chatId]['whoplay'] = 0
					gameconfig[chatId]['hint'] = 0
					let winType = tools('others').randVal(['xp', 'coin', 'rubi', 'dima'])
					let winChos = await tools('others').randomNumber(config.Prize_Value_Min, config.Prize_Value_Max)
					if (randEven.eventOnline && randEven.eventType == 'coin') {
						winChos = parseInt(tools('others').randomNumber(winChos, winChos*randEven.events[randEven.eventIndex].multiplier)) /* Efeito de evento aleatório */
					}
					tools('gaming').addValue(sender.id, winChos, nivel, chatId, winType)
					await kill.sendTextWithMentions(from, `@${sender.id.replace('@c.us', '')} acertou!\n\n> ${body.toUpperCase()}\n\nRecompensa: ${winChos} ${winType.toUpperCase()}`)
				} catch (error) {
					// Esconde os erros pra não floodar o terminal, ative para exibir a versão simples, tire o '.message' para exibir tudo (NÃO RECOMENDADO!)
					// console.log(error.message)
				}
			}
		}

		/*Impede comandos em PV'S mutados*/
		if (!isGroupMsg && isCmd && functions.mute.includes(sender.id) && !isOwner) return console.log(tools('others').color('> [SILENCE]', 'red'), tools('others').color(`Ignorando comando de ${pushname} - [${sender.id.replace('@c.us', '')}] pois ele está mutado...`, 'yellow'))

		/*Impede comandos em grupos mutados*/
		if (isGroupMsg && isCmd && !isGroupAdmins && isActivated('mute') && !isOwner) return console.log(tools('others').color('> [SILENCE]', 'red'), tools('others').color(`Ignorando comando de ${name} pois ele está mutado...`, 'yellow'))

		/*Muta geral, reseta ao reiniciar*/
		if (isCmd && !isOwner && objconfig.isMuteAll == 1) return console.log(tools('others').color('> [SILENCE]', 'red'), tools('others').color(`Ignorando comando de ${pushname} pois os PV'S e Grupos estão mutados...`, 'yellow'))

		/*Ignora pessoas bloqueadas*/
		if (isBlocked && isCmd && !isOwner) return console.log(tools('others').color('> [BLOCK]', 'red'), tools('others').color(`Ignorando comando de ${pushname} - [${sender.id.replace('@c.us', '')}] por ele estar bloqueado...`, 'yellow'))

		/*Anti Flood para PV'S*/
		if (isCmd && tools('cooldown').isFiltered(chatId) && !isGroupMsg && !isOwner) return console.log(tools('others').color('> [FLOOD AS]', 'red'), tools('others').color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), tools('others').color(`"[${prefix}${command.toUpperCase()}] [${args.length}]"`, 'red'), 'DE', tools('others').color(`"${pushname} - [${sender.id.replace('@c.us', '')}]"`, 'red'))

		/*Anti Flood para grupos*/
		if (isCmd && tools('cooldown').isFiltered(chatId) && isGroupMsg && !isOwner) return console.log(tools('others').color('> [FLOOD AS]', 'red'), tools('others').color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), tools('others').color(`"[${prefix}${command.toUpperCase()}] [${args.length}]"`, 'red'), 'DE', tools('others').color(`"${pushname} - [${sender.id.replace('@c.us', '')}]"`, 'red'), 'EM', tools('others').color(`"${name}"`))

		/*Mensagens no PV*/
		if (!isCmd && !isGroupMsg) return console.log('> MENSAGEM AS', tools('others').color(time, 'yellow'), 'DE', tools('others').color(`"${pushname} - [${sender.id.replace('@c.us', '')}]"`))

		/*Mensagem em Grupo*/
		if (!isCmd && isGroupMsg) return console.log('> MENSAGEM AS', tools('others').color(time, 'yellow'), 'DE', tools('others').color(`"${pushname} - [${sender.id.replace('@c.us', '')}]"`), 'EM', tools('others').color(`"${name}"`))

		/*Comandos no PV*/
		if (isCmd && !isGroupMsg) {
			console.log(tools('others').color(`> COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS', tools('others').color(time, 'yellow'), 'DE', tools('others').color(`"${pushname} - [${sender.id.replace('@c.us', '')}]"`))
		}

		/*Comandos em grupo*/
		if (isCmd && isGroupMsg) {
			console.log(tools('others').color(`> COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS', tools('others').color(time, 'yellow'), 'DE', tools('others').color(`"${pushname} - [${sender.id.replace('@c.us', '')}]"`), 'EM', tools('others').color(`"${name}"`))
		}

		/*Impede SPAM*/
		if (isCmd && !isOwner) {
			let whoLimits = config.Filter_Type == 'user' ? sender.id : chatId
			tools('cooldown').addFilter(whoLimits)
		}

		/* Roda diversos comandos ao mesmo tempo - Corrige automaticamente os digitados incorretamente */
		var multiCommand = []
		all_args.map(c => {
			if (config.Prefix.includes(c[0]) && !mentionedJidList.includes(c) && !tools('others').isUrl(c) && !tools('others').isFolder(c)) {
				let Command_List_Array = allCommands.replace(/\r/gim, '').split('\n').filter(v => v !== '')
				if (!Command_List_Array.includes(c.slice(1))) {
					let best_choice = stringSimilarity.findBestMatch(c.slice(1), Command_List_Array)
					if (best_choice.bestMatch.rating >= Number(config.Minimal_Similarity_Command)) {
						multiCommand.push(best_choice.bestMatch.target)
					}
				} else if (Object.keys(cmds).includes(chatId) && Object.keys(cmds[chatId]).includes(c.slice(1)) || Object.keys(cmds['global']).includes(c.slice(1)) || Object.keys(theNewLine).includes(c.slice(1))) {
					multiCommand.push(c.slice(1))
				} else {
					multiCommand.push(c.slice(1))
				}
			}
		})
		if (multiCommand.length == 0 && isCmd) {
			multiCommand.push(command)
		}
		// Se você criar um comando, insira-o no arquivo 'Comandos_Automate.txt' para que ele funcione "adequadamente" em múltiplos comandos

		for (let i = 0; i < multiCommand.length; i++) {

			// Define os argumentos de forma mais correta em 2 comandos ou mais [EXPERIMENTAL = NÃO ESTÁ 100%]
			var cmd = multiCommand[i]

			// Especifica o inicio da body
			if (multiCommand.length > 1) {

				// Define a nova body
				if (cmd == multiCommand[Number(i)+1]) {
					body = oldBodSave.slice(oldBodSave.indexOf(cmd), oldBodSave.lastIndexOf(cmd))
				} else if (multiCommand[Number(i)+1] !== null) {
					body = oldBodSave.slice(oldBodSave.indexOf(cmd), oldBodSave.indexOf(multiCommand[Number(i)+1]))
				} else {
					body = oldBodSave.slice(oldBodSave.indexOf(cmd), oldBodSave.length)
				}

				// Remove o prefixo dos demais args
				if (config.Prefix.includes(body.charAt(body.length-1))) {
					body = body.slice(0, body.length-1)
				}

				// Argumentos sub-sequentes
				args = body.trim().split(/ +/).slice(1)
				arg = body.trim().substring(body.indexOf(' ') + 1)
				arqs = body.trim().split(' ')
				argl = args.map(argl => argl.toLowerCase())
				arks = argl.join(' ')
				argc = args.map(argc => argc.toUpperCase())
				
			}

			// Body aprimorada para rodar os comandos como msg, print, covid, etc
			var Sliced_Body = body.replace(cmd, '').slice(1).replace(/^ /gim, '')

			switch (cmd) {

				case 'fake':
				case 'blacklist':
				case 'nsfw':
				case 'welcome':
				case 'goodbye':
				case 'mute':
				case 'antiporn':
				case 'antilinks':
				case 'antitravas':
				case 'rank':
				case 'event':
				case 'autosticker':
				case 'safelinks':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						await tools('handler').switchs(argl[0], functions, cmd.toLowerCase(), chatId, mess.kldica1(), kill, message)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break
				
				case 'chatbot':
					if (!/[1-3]/.test(args[0]) || argl[0] == '-help') return await kill.reply(from, mess.changeAI(), id) // 4 = SimSimi com Key, se quiser, adicione na array, não acho boa ideia | !/[1-4]/.test(args[0])
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						functions.chatBot_Type[chatId] = argl[0]
						fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
						await kill.reply(from, mess.AIChanged(), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break
				
				case 'bklist':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						let personToBK = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : argl[1]+'@c.us')
						if (argl[0] == 'on') {
							if (functions.antinumbers.includes(personToBK)) return await kill.reply(from, mess.jaenabled(), id)
							functions.antinumbers.push(personToBK)
							await kill.reply(from, mess.bkliston(), id)
						} else if (argl[0] == 'off') {
							if (!functions.antinumbers.includes(personToBK)) return await kill.reply(from, mess.jadisabled(), id)
							functions.antinumbers.splice(personToBK, 1)
							await kill.reply(from, mess.bklistoff(), id)
						} else return await kill.reply(from, mess.kldica2(), id)
						fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break
				
				case 'vip':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner) {
						if (args.length < 2) return await kill.reply(from, mess.insertVIP(), id)
						if (!Object.keys(functions.vips).includes(chatId)) {
							functions.vips[chatId] = {}
						}
						let New_VIP_User = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : argl[1]+'@c.us')
						let Is_New_Vip = quotedMsg ? args[0] : (mentionedJidList.length !== 0 ? args[1] : argl[0])
						let Use_Dar_CMDS = quotedMsg ? args[1] : (mentionedJidList.length !== 0 ? args[2] : argl[1])
						if (Is_New_Vip == 'on') {
							functions.vips[chatId][New_VIP_User] = (Use_Dar_CMDS == 'on' ? true : false)
							if (Use_Dar_CMDS == 'on') return await kill.reply(from, mess.welcomeToMOD(V_CMDS['MOD_Commands']), id)
							await kill.reply(from, mess.welcomeToVIP(V_CMDS['VIP_Commands']), id)
						} else if (Is_New_Vip == 'off') {
							delete functions.vips[chatId][New_VIP_User]
							if (Use_Dar_CMDS == 'off') return await kill.reply(from, mess.goodbyeMOD(), id)
							await kill.reply(from, mess.goodbyeVIP(), id)
						} else return await kill.reply(from, mess.kldica2(), id)
						fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'onlyadms':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						if (argl[0] == 'on') {
							await kill.setGroupToAdminsOnly(chatId, true)
							await kill.sendText(from, mess.admson())
						} else if (argl[0] == 'off') {
							await kill.setGroupToAdminsOnly(chatId, false)
							await kill.sendText(from, mess.admsoff())
						} else await kill.reply(from, mess.kldica1(), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'revoke':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						await kill.revokeGroupInviteLink(chatId)
						await kill.reply(from, mess.revoga(), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'setimage':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						if (isType('image')) {
							var picgp = await kill.getProfilePicFromServer(chatId)
							if (!tools('others').isUrl(picgp)) {
								picgp = errorurl
							}
							await kill.sendFileFromUrl(from, picgp, 'group.png', 'Backup', id)
							let mediaData = await decryptMedia(encryptMedia)
							await kill.setGroupIcon(chatId, tools('others').dataURI(mimetype, mediaData))
						} else if (args.length == 1) {
							if (!tools('others').isUrl(args[0])) return await kill.reply(from, mess.nolink(), id)
							var picgpo = await kill.getProfilePicFromServer(chatId)
							if (!tools('others').isUrl(picgpo)) {
								picgpo = errorurl
							}
							await kill.sendFileFromUrl(from, picgpo, 'group.png', 'Backup', id)
							await kill.setGroupIconByUrl(chatId, args[0]).then(async (r) => (!r && r !== null) ? await kill.reply(from, mess.nolink(), id) : await kill.reply(from, mess.maked(), id))
						} else await kill.reply(from, mess.onlyimg(), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'link':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						const inviteLink = await kill.getGroupInviteLink(chatId)
						await kill.sendLinkWithAutoPreview(from, inviteLink, `\n❤️ - ${name} - ❤️`)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'everyone':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						if (arks.includes('-hide')) {
							var letImsg = await kill.getProfilePicFromServer(chatId)
							var theGpT = letImsg.includes('ERR') || letImsg == null || typeof letImsg == 'object' || !tools('others').isUrl(letImsg) ? errorurl : letImsg
							await kill.sendFileFromUrl(from, theGpT, 'gpimg.png', `═✪〘 🖊️ - ${Sliced_Body.replace(/-hide/gim, '')} - 🐂 〙✪═\n@${groupMembersId.toString().replace(/@c.us/g, '').replace(/,/g, ' @')}\n═✪〘 ❤️ - CRYBOT - 📢 〙✪═`, id, {}, false, false, false, true, false)
						} else await kill.sendTextWithMentions(from, `═✪〘 🖊️ - ${Sliced_Body} - 🐂 〙✪═\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n- @${groupMembersId.toString().replace(/@c.us/g, '').replace(/,/g, '\n- @')}\n\n═✪〘 ❤️ - CRYBOT - 📢 〙✪═`)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'add':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						let addRobots = Sliced_Body.replace(/->/g, '').replace(/@/g, '').replace(/c.us/g, '').replace(/-/g, '').replace(/\+/g,'').replace(/ /g, '').split('').join('').replace(/\n/g, ' ').split(' ').filter(o => !isNaN(o) && o !== '' && o)
						if (addRobots.length == 0) return await kill.reply(from, mess.usenumber(), id)
						let failAtKill = mess.isInGroup()
						for (let ads of addRobots) {
							try {
								if (groupMembersId.includes(`${ads}@c.us`)) {
									failAtKill += `-> @${ads} \n`
									if (addRobots.length == 1) return await kill.sendTextWithMentions(from, failAtKill + mess.stopNoMore())
								} else await kill.addParticipant(from, `${ads}@c.us`)
							} catch (error) {
								tools('others').reportConsole(cmd, error)
								console.log(error)
							}
						}
						if (failAtKill !== mess.isInGroup()) return await kill.sendTextWithMentions(from, failAtKill)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'unban':
				case 'unkick':
					try {
						if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
						if (!quotedMsg) return await kill.reply(from, mess.nomark, id)
						if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
							if (groupMembersId.includes(quotedMsgObj.sender.id)) return await kill.reply(from, mess.janogp(), id)
							await kill.sendTextWithMentions(from, mess.unban(quotedMsgObj.sender.id))
							await kill.addParticipant(chatId, quotedMsgObj.sender.id)
						} else if (isGroupMsg) {
							await kill.reply(from, mess.soademiro(), id)
						} else await kill.reply(from, mess.sogrupo(), id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.addpessoa() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					}
				break

				case 'kick':
				case 'k':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						let wontBan = mess.notInOrVIP()
						var banPerson = quotedMsg ? new Array(quotedMsgObj.sender.id) : (mentionedJidList ? mentionedJidList : false)
						if (banPerson == false) return await kill.reply(from, mess.semmarcar(), id)
						await kill.sendTextWithMentions(from, mess.kick(banPerson.map(p => p.replace('@c.us', ''))))
						for (let i = 0; i < banPerson.length; i++) {
							if (config.Owner.includes(banPerson[i]) || groupAdmins.includes(banPerson[i]) || botNumber.includes(banPerson[i]) || !groupMembersId.includes(banPerson[i])) {
								wontBan += `-> @${banPerson[i].replace('@c.us', '')}\n`
								if (banPerson.length == 1) return await kill.sendTextWithMentions(from, wontBan+mess.stopNoMore())
							} else await kill.removeParticipant(chatId, banPerson[i])
						}
						if (wontBan !== mess.notInOrVIP()) return await kill.sendTextWithMentions(from, wontBan)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'sair':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						await kill.sendText(from, mess.goodbye())
						await kill.leaveGroup(chatId)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'promote':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						let wontPromote = mess.isAnAdmin()
						var promoPerson = quotedMsg ? new Array(quotedMsgObj.sender.id) : (mentionedJidList ? mentionedJidList : false)
						if (promoPerson == false) return await kill.reply(from, mess.semmarcar(), id)
						await kill.sendTextWithMentions(from, mess.promote(promoPerson.map(p => p.replace('@c.us', ''))))
						for (let i = 0; i < promoPerson.length; i++) {
							if (groupAdmins.includes(promoPerson[i]) || !groupMembersId.includes(promoPerson[i])) {
								wontPromote += `-> @${promoPerson[i].replace('@c.us', '')}\n`
								if (promoPerson.length == 1) return await kill.sendTextWithMentions(from, wontPromote+mess.stopNoMore())
							} else await kill.promoteParticipant(chatId, promoPerson[i])
						}
						if (wontPromote !== mess.isAnAdmin()) return await kill.sendTextWithMentions(from, wontPromote)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'demote':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						let wontDemon = mess.isNotAnAdmin()
						var demonBitch = quotedMsg ? new Array(quotedMsgObj.sender.id) : (mentionedJidList ? mentionedJidList : false)
						if (demonBitch == false) return await kill.reply(from, mess.semmarcar(), id)
						await kill.sendTextWithMentions(from, mess.demote(demonBitch.map(p => p.replace('@c.us', ''))))
						for (let i = 0; i < demonBitch.length; i++) {
							if (!groupAdmins.includes(demonBitch[i]) || !groupMembersId.includes(demonBitch[i])) {
								wontDemon += `-> @${demonBitch[i].replace('@c.us', '')}\n`
								if (demonBitch.length == 1) return await kill.sendTextWithMentions(from, wontDemon+mess.stopNoMore())
							} else await kill.demoteParticipant(chatId, mentionedJidList[i])
						}
						if (wontDemon !== mess.isNotAnAdmin()) return await kill.sendTextWithMentions(from, wontDemon)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'delete':
				case 'del':
					if (quotedMsg && !quotedMsgObj.fromMe) return await kill.reply(from, mess.mymess(), id)
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						await kill.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'admins':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						await kill.reply(from, mess.admins(), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'ghost':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (isNaN(args[0])) return await kill.reply(from, mess.kickcount(), id)
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						let groupWelcome = false
						let groupGoodbye = false
						var userRem = mess.noGhosts(args)
						await kill.reply(from, mess.superMarilis(), id)
						if (functions.welcome.includes(chatId)) {
							groupWelcome = true
							functions.welcome.splice(chatId, 1)
							if (functions.goodbye.includes(chatId)) {
								groupGoodbye = true
								functions.goodbye.splice(chatId, 1)
							}
							fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
						}
						for (let member of groupMembersId) {
							var msgQuantity = (tools('gaming').getValue(member, nivel, chatId, 'msg') || 0)
							msgQuantity = isNaN(msgQuantity) ? 0 : Number(msgQuantity)
							if (!groupAdmins.includes(member) && chat.groupMetadata.owner !== member && !botNumber.includes(member) && !config.Owner.includes(member) && Number(args[0]) > msgQuantity) {
								await kill.removeParticipant(chatId, member)
								userRem += `-> ${member.replace('@c.us', '')} \n`
							}
						}
						if (groupWelcome) {
							functions.welcome.push(chatId)
							if (groupGoodbye) {
								functions.goodbye.push(chatId)
							}
							fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
						}
						if (userRem !== mess.noGhosts(args)) return await kill.sendText(from, userRem)
						await kill.reply(from, mess.maked(), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				/*Obrigado pela base Leonardo*/
				case 'softban':
					try {
						if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
							if (args.length == 0 || isNaN(args[0]) && isNaN(args[1]) || !quotedMsg && mentionedJidList.length == 0) return await kill.reply(from, mess.nomark() + ' + time/tempo (minutos/minutes)\n\nExemplo -> "${prefix}Softban 30 @user1 @user2"', id)
							if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
							var banThisGuy = quotedMsg ? new Array(quotedMsgObj.sender.id) : (mentionedJidList ? mentionedJidList : false)
							if (banThisGuy == false) return await kill.reply(from, mess.nomark() + ' + time/tempo (minutos/minutes)\n\nExemplo -> "${prefix}Softban 30 @user1 @user2"', id)
							await kill.sendTextWithMentions(from, mess.irritouml(banThisGuy, args))
							let notBanned = mess.notInOrVIP()
							let banLength = 0
							for (let i = 0; i < banThisGuy.length; i++) {
								if (config.Owner.includes(banThisGuy[i]) || groupAdmins.includes(banThisGuy[i]) || botNumber.includes(banThisGuy[i]) || !groupMembersId.includes(banThisGuy[i])) {
									notBanned += `\n-> @${banThisGuy[i].replace('@c.us', '')}`
									if (banThisGuy.length == 1) return await kill.sendTextWithMentions(from, notBanned+mess.stopNoMore())
								} else {
									await kill.removeParticipant(chatId, banThisGuy[i])
									banLength++
								}
							}
							if (notBanned !== mess.notInOrVIP()) {
								await kill.sendTextWithMentions(from, notBanned)
							}
							if (banLength == 0) return
							await tools('others').sleep(Number(args[0] * 60000))
							groupMembersId = await kill.getGroupMembersId(chatId)
							await kill.reply(from, mess.timeadd(), id)
							notBanned = mess.isInGroup()
							banLength = 0
							for (let i = 0; i < banThisGuy.length; i++) {
								if (groupMembersId.includes(banThisGuy[i])) {
									notBanned += `\n-> @${banThisGuy[i].replace('@c.us', '')}`
									if (banThisGuy.length == 1) return await kill.sendTextWithMentions(from, notBanned+mess.stopNoMore())
								} else {
									await kill.addParticipant(chatId, banThisGuy[i])
									banLength++
								}
							}
							if (notBanned !== mess.isInGroup()) {
								await kill.sendTextWithMentions(from, notBanned)
							}
							if (banLength == 0) return
							await tools('others').sleep(2000)
							await kill.sendText(from, mess.voltargp())
						} else if (isGroupMsg) {
							await kill.reply(from, mess.soademiro(), id)
						} else await kill.reply(from, mess.sogrupo(), id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.addpessoa() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					}
				break

				case 'bomb':
					if (args.length >= 1 && isGroupMsg && isGroupAdmins || args.length >= 1 && isOwner || args.length >= 1 && isGroupMsg && Can_Run_CMD(cmd)) {
						if (argl[0] == '-stop') {
							const cancelBomb = await fetch(`http://localhost:${config.Bomber_Port}/stop?number=${args[1]}`).then(data => data.json())
							console.log(tools('others').color('[BOMB]', 'crimson'), tools('others').color(`→ Ataque ao alvo → "${args[1]}" cancelado por "${pushname}".`, 'gold'))
							if (cancelBomb.success) {
								await kill.sendTextWithMentions(from, mess.bombstop(`@${args[1]}`)).catch(async() => await kill.sendText(from, mess.bombstop(`@${args[1]}`)))
							} else await kill.reply(from, mess.cancelbomb(), id)
						} else if (argl[0] == '-list') {
							if (!isOwner) return await kill.reply(from, mess.sodono(), id)
							const getBombs = await fetch(`http://localhost:${config.Bomber_Port}/list`).then(data => data.json())
							if (getBombs.success) {
								let bomberMes = '💀 - Bombers [ALVOS] - 💣\n' + getBombs.result.map(a => `\n🚀 → "@${a.number}"\n📅 → "${new Date(a.startedAt).toISOString().replace(/T/g, ' ').replace(/Z/g, '').slice(0, -4)}"\n\n┉ / ― ╳ - \\ ♡ / ― ╳ - \\ ┉\n`).join('')
								return await kill.sendTextWithMentions(from, bomberMes).catch(async() => await kill.sendText(from, bomberMes))
							} else await kill.reply(from, mess.noBombFk(), id)
						} else {
							if (isNaN(args[0])) return await kill.reply(from, mess.usenumber(), id)
							if (config.Owner.includes(`${args[0]}@c.us`) && !isOwner || args[0].includes(`${botNumber.replace('@c.us', '')}`) && !isOwner) {
								await kill.sendText(config.Owner[0], mess.nobomb(pushname, sender.id))
								await kill.reply(from, mess.fuckbomb(), id)
								if (config.Auto_Block) {
									await kill.contactBlock(event.who)
								}
								return console.log(tools('others').color('[BOMB]', 'crimson'), tools('others').color(`→ ${sender.id} tentou fazer BOMB em mim ou você!.`, 'red'))
							} else if (groupAdmins.includes(`${args[0]}@c.us`) && !isOwner) {
								return await kill.sendTextWithMentions(from, mess.saferVIPBomb(args[0], sender.id), id)
							} else {
								const startAtk = await fetch(`http://localhost:${config.Bomber_Port}/attack?number=${args[0]}&loops=30`).then(data => data.json())
								console.log(tools('others').color('[BOMB]', 'crimson'), tools('others').color(`→ Pedido de BOMB feito pelo "${pushname}" no alvo → "${args[0]}".`, 'gold'))
								if (startAtk.success) {
									await kill.sendTextWithMentions(from, mess.bombstd(args)).catch(async() => await kill.sendText(from, mess.bombstd(args)))
								} else await kill.reply(from, mess.bomber(), id)
							}
						}
					} else await kill.reply(from, mess.bomber(), id)
				break

				case 'destrava':
					if (isGroupMsg && isGroupAdmins || isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						let howmuch = !isNaN(args[0]) ? args[0] : 1
						await kill.reply(from, mess.destrava().repeat(Number(howmuch)), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'newprefix':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						if (args.length == 0 || argl[0] == '-help') return await kill.reply(from, mess.noargs() + 'new prefix.', id)
						ctmprefix[chatId] = args[0]
						fs.writeFileSync('./lib/config/Gerais/prefix.json', JSON.stringify(ctmprefix, null, "\t"))
						await kill.reply(from, mess.newprefix(args), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break
				
				case 'hideOwner':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (argl[0] !== 'on' && argl[0] !== 'off') return await kill.reply(from, mess.kldica2(), id)
					hideShowN = argl[0] == 'on' ? true : false
					await kill.reply(from, mess.hideOwner(hideShowN), id)
				break

				case 'newlang':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						if (/en|es|pt/.test(argl[0]) || !Object.keys(languages).includes(argl[0]) || languages[argl[0]].includes(chatId)) return await kill.reply(from, mess.usinglang(), id)
						Object.keys(languages).map(i => languages[i].splice(chatId))
						languages[argl[0]].push(chatId)
						fs.writeFileSync('./lib/config/Gerais/lang.json', JSON.stringify(languages, null, "\t"))
						await kill.reply(from, mess.enabled(), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'greet':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						if (args.length <= 1 || !arks.includes('|') || argl[0] == '-help') return await kill.reply(from, mess.customWlc() + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
						hail[chatId] = {
							"welcome": {
								message: `${arg.split('|')[0]}`,
								onlyText: arg.split('|')[1].replace(' ', '') == 'on' ? true : false
							}
						}
						fs.writeFileSync('./lib/config/Gerais/greetings.json', JSON.stringify(hail, null, "\t"))
						await kill.reply(from, mess.enabled(), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'bye':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						if (args.length <= 1 || !arks.includes('|') || argl[0] == '-help') return await kill.reply(from, mess.customWlc() + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
						hail[chatId] = {
							"goodbye": {
								message: `${arg.split('|')[0]}`,
								onlyText: arg.split('|')[1].replace(' ', '') == 'on' ? true : false
							}
						}
						fs.writeFileSync('./lib/config/Gerais/greetings.json', JSON.stringify(hail, null, "\t"))
						await kill.reply(from, mess.enabled(), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				/*Feito por Pedro Batistop*/
				case 'dellast':
					if (isNaN(args[0])) return await kill.reply(from, mess.onlynumber(), id)
					if (isGroupMsg && isGroupAdmins || isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						try {
							let lastMes = (await kill.getAllMessagesInChat(from, true)).filter(my => my.sender.id == botNumber && my.type !== "revoked")
							lastMes.slice(Math.max(lastMes.length - Number(args[0]), 0)).map(async (m) => await kill.deleteMessage(from, m.id))
						} catch (error) {
							await kill.reply(from, mss.dellastmsg(args[0]), id)
							tools('others').reportConsole(cmd, error)
						}
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'broad':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (args.length == 0) return await kill.reply(from, mess.broad(), id)
					const chatall = await kill.getAllChatIds()
					const isGroupC = chatall.filter(group => group.includes('@g.us'))
					const isPrivateC = chatall.filter(privat => privat.includes('@c.us'))
					try {
						const transmiss = async (ids) => {
							if (encryptMedia) {
								let mediaData = await decryptMedia(encryptMedia)
								if (isType('video') || isType('image')) {
									await kill.sendFile(ids, tools('others').dataURI(encryptMedia.mimetype, mediaData), 'file.' + encryptMedia.mimetype, `[Transmissão de ${pushname} ]\n\n${body.slice(cmd.length+6)}`)
								} else {
									await kill.sendFile(ids, tools('others').dataURI(encryptMedia.mimetype, mediaData), 'file.' + encryptMedia.mimetype, '')
									await kill.sendText(ids, `[Transmissão de ${pushname} ]\n\n${body.slice(cmd.length+6)}`)
								}
							} else await kill.sendText(ids, `[Transmissão de ${pushname} ]\n\n${body.slice(cmd.length+6)}`)
						}
						if (argl[0] == '-all') {
							for (let ids of chatall) {
								var cvk = await kill.getChatById(ids)
								if (!cvk.isReadOnly) {
									try {
										await transmiss(ids)
									} catch (error) {
										console.log(tools('others').color('[BROADCAST]', 'crimson'), tools('others').color(`→ Uma das mensagens não foi enviada - Você pode ignorar.`, 'gold'))
									}
								}
							}
							await kill.reply(from, mess.maked(), id)
						} else if (argl[0] == '-gps') {
							for (let ids of isGroupC) {
								var cvk = await kill.getChatById(ids)
								if (!cvk.isReadOnly) {
									try {
										await transmiss(ids)
									} catch (error) {
										console.log(tools('others').color('[BROADCAST]', 'crimson'), tools('others').color(`→ Uma das mensagens não foi enviada - Você pode ignorar.`, 'gold'))
									}
								}
							}
							await kill.reply(from, mess.maked(), id)
						} else if (argl[0] == '-pvs') {
							for (let ids of isPrivateC) {
								try {
									await transmiss(ids)
								} catch (error) {
									console.log(tools('others').color('[BROADCAST]', 'crimson'), tools('others').color(`→ Uma das mensagens não foi enviada - Você pode ignorar.`, 'gold'))
								}
							}
							await kill.reply(from, mess.maked(), id)
						} else await kill.reply(from, mess.broad(), id)
					} catch (error) {
						await kill.reply(from, mess.noctt() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
						tools('others').reportConsole(cmd, error)
					}
				break

				case 'arquivar':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					if (isGroupCreator || isOwner) {
						let notFuk = mess.readdArq()
						for (let memb of groupMembersId) {
							if (!groupAdmins.includes(memb) && chat.groupMetadata.owner !== memb && !botNumber !== memb && !config.Owner.includes(memb)) {
								await kill.removeParticipant(chatId, memb)
								if (groupMembersId.length == 3) return await kill.sendTextWithMentions(from, notFuk+mess.stopNoMore())
								notFuk += `-> ${memb.replace('@c.us', '')} \n`
							}
						}
						if (notFuk !== mess.readdArq()) return await kill.sendTextWithMentions(from, notFuk)
						await kill.reply(from, mess.maked(), id)
					} else await kill.reply(from, mess.gpowner(), id)
				break

				case 'leave':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					const allGroups = ((await kill.getAllGroups()).map(ch => ch.id)).filter(ch => ch !== from)
					for (let idl of allGroups) {
						await kill.sendText(idl, mess.goodbye())
						await kill.leaveGroup(idl)
					}
					await kill.reply(from, mess.maked(), id)
				break

				case 'startup':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (args.length == 0 || argl[0] == 'on' || argl[0] == 'off') return await kill.reply(from, mess.onoff() + '\n\n' + mess.kldica1(), id)
					config.StartUP_MSGs_Groups = (argl[0] == 'on' ? true : false)
					fs.writeFileSync('./lib/config/Settings/config.json', JSON.stringify(config, null, "\t"))
					await kill.reply(from, mess.maked(), id)	
				break

				case 'clear':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					const all_Private = (await kill.getAllChats()).filter(j => !j.isGroup).map(i => i.id)
					for (let chatCr of all_Private) {
						await kill.deleteChat(chatCr)
					}
					await kill.clearAllChats() // Limpa todos os grupos sem apagar eles
					await kill.reply(from, mess.maked(), id)
				break

				case 'tela':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					const sesPic = await kill.getSnapshot()
					await kill.sendFile(from, sesPic, 'session.png', 'Neh...', id)
				break
				
				case 'getlinks':
					if (isGroupMsg) return await kill.reply(from, mess.sopv(), id)
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					let getAll_Groups = (await kill.getAllGroups()).map(ch => ch.id)
					let group_Links = `Aqui estão os links de todos os grupos [que sou ademira], para obter informações extras, use o comando "${prefix}BotAdmin", pegue a 'ID', e use em "${prefix}GroupInfo <ID>":\n\n`
					for (let gpid of getAll_Groups) {
						let The_Bot_Admin = await kill.getGroupAdmins(gpid)
						if (The_Bot_Admin.includes(botNumber)) {
							let get_Invite = await kill.getGroupInviteLink(gpid)
							try {
								let Invite_Info = await kill.inviteInfo(get_Invite)
								let timeCreation = key => moment(Number(key.toString().padEnd(moment.now().toString().length, '0'))).format("HH:mm:ss • YYYY-MM-DD")
								let groupMeta = key => Invite_Info[key] !== null ? Invite_Info[key] : (Invite_Info.groupMetadata[key] !== null ? Invite_Info.groupMetadata[key] : 'Desconhecido/a') || 'Desconhecido/a'
								if (groupMeta('status') == 200) {
									group_Links += `📙 Nome do Grupo -> ${groupMeta('subject')}\n\n📖 Descrição -> ${groupMeta('desc')}\n\n🌐 Link -> ${get_Invite}\n\n💰 Quantidade de Membros -> ${groupMeta('size')}\n\n📅 Criado em -> ${timeCreation(groupMeta('creation'))}\n\n❓ Criado por -> wa.me/${groupMeta('owner').replace('@c.us', '')}\n\n🆔 ID -> ${groupMeta('id')}\n\n╳ ———————— ╳\n\n`
								} else {
									group_Links += `🌐 Link -> ${get_Invite}\n\n╳ ———————— ╳\n\n`
								}
							} catch (error) {
								tools('others').reportConsole(cmd, error)
								group_Links += `🌐 Link -> ${get_Invite}\n\n╳ ———————— ╳\n\n`
							}
						}
					}
					await kill.reply(from, group_Links, id)
				break

				case 'status':
					let statusFromWho = [sender.id].concat(quotedMsg ? new Array(quotedMsgObj.sender.id) : (mentionedJidList.length !== 0 ? mentionedJidList : new Array(botNumber)))
					let allRec = mess.recStatus()
					for (let userSt of statusFromWho) {
						let recStat = await kill.getStatus(userSt)
						allRec += `\n@${userSt.replace('@c.us', '')} -> ${recStat.status || 'Status oculto'}\n`
					}
					await kill.sendTextWithMentions(from, allRec)
				break
				
				case 'botadmin':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					let irisAdmin = await kill.iAmAdmin().then(res => res.map(j => `\n-> ${typeof j == 'object' ? j._serialized : j}`).join('\n'))
					await kill.reply(from, mess.gpIamAdmin() + '\n\n' + irisAdmin, id)
				break

				case 'blocklist':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					await kill.sendTextWithMentions(from, `🔐 - Block: ${blockNumber.length}\n\n${blockNumber.join('\n➸ @').replace(/@c.us/g, '')}`)
				break

				case 'shutdown':
				case 'encerrar':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (argl[0] == 'cancel') {
						onShutdown = false
						await kill.reply(from, `O desligamento foi cancelado, agora você pode usar comandos novamente.`, id)
					} else {
						var timeToShut = !isNaN(args[0]) ? Number(args[0]) * 1000 : 30000
						timeToShut = timeToShut < 10000 ? 30000 : timeToShut // Força a ser no mínimo 30 segundos, questão de segurança
						await kill.reply(from, mess.shutdown((timeToShut / 1000).toString()) + mess.ignStop() + `\n\nIf you want to cancel the shutdown, type "${prefix}Exec onShutdown = false" or "${prefix}Shutdown Cancel" before the timer runs out, make sure to run this at MINIMUM 10 seconds early.\n\nSi desea cancelar el shutdown, escriba "${prefix}Exec onShutdown = false" o "${prefix}Shutdown Cancel" antes de que se agote el tiempo, asegúrese de ejecutarlo en lo MÍNIMO 10 segundos antes.`, id)
						onShutdown = true
						config.SafeBoot = 0
						fs.writeFileSync('./lib/config/Settings/config.json', JSON.stringify(config, null, "\t"))
						await tools('others').sleep(timeToShut)
						if (onShutdown == true) {
							await kill.kill()
						}
					}
				break

				case 'create':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (args.length == 0 || !arks.includes('|')) return await kill.reply(from, mess.newgp(), id)
					const peopleAdd = [sender.id].concat((quotedMsg ? new Array(quotedMsgObj.sender.id) : (mentionedJidList.length !== 0 ? mentionedJidList : new Array(sender.id))))
					await kill.createGroup(arg.split('|')[0], Array.from(new Set(peopleAdd)))
					await kill.reply(from, mess.maked(), id)
				break

				case 'dono':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					await kill.reply(from, mess.owner(), id)
				break

				case 'cmd':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					await kill.reply(from, mess.cmd(), id)
					let cmdw = await shell.exec(`bash -c "${Sliced_Body}"`, {
						silent: true
					})
					let CMD_OUT = cmdw.stdout == '' ? cmdw.stderr : cmdw.stdout
					console.log(CMD_OUT)
					await kill.reply(from, CMD_OUT, id)
				break

				case 'mutepv':
					if (args.length == 0) return await kill.reply(from, mess.kldica2(), id)
					let pvmt = argl[0] == 'on' ? `${body.slice(11)}@c.us` : `${body.slice(12)}@c.us`
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (argl[0] == 'on') {
						if (functions.mute.includes(pvmt)) return await kill.reply(from, mess.enabled(), id)
						functions.mute.push(pvmt)
						fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
						await kill.reply(from, mess.enabled(), id)
					} else if (argl[0] == 'off') {
						if (!functions.mute.includes(pvmt)) return await kill.reply(from, mess.jadisabled(), id)
						functions.mute.splice(pvmt, 1)
						fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
						await kill.reply(from, mess.disabled(), id)
					} else return await kill.reply(from, mess.kldica2(), id)
				break

				case 'unblock':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (isGroupMsg && quotedMsg || isGroupMsg && mentionedJidList.length !== 0 || args.length !== 0) {
						const unblokea = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : args[0] + '@c.us')
						await kill.contactUnblock(`${unblokea}`)
						await kill.sendTextWithMentions(from, mess.unblock(unblokea))
					} else await kill.reply(from, mess.semmarcar(), id)
				break

				case 'block':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (isGroupMsg && quotedMsg || isGroupMsg && mentionedJidList.length !== 0 || args.length !== 0) {
						const blokea = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : args[0] + '@c.us')
						await kill.contactBlock(`${blokea}`)
						await kill.sendTextWithMentions(from, mess.block(blokea))
					} else await kill.reply(from, mess.semmarcar(), id)
				break

				case 'give':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (args.length <= 2 || argl[0] == 'coin' || argl[0] == 'level' || argl[0] == 'xp' || argl[0] == 'dima' || argl[0] == 'rubi') {
						if (mentionedJidList.length !== 0) xpUserGet = await kill.getContact(mentionedJidList[0])
						var userGainXp = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? xpUserGet.id : sender.id)
						var theValuetoAdd = quotedMsg ? args[1] : (mentionedJidList.length !== 0 ? args[2] : args[2])
						if (isNaN(theValuetoAdd)) return await kill.reply(from, mess.onlynumber(), id)
						tools('gaming').addValue(userGainXp, Number(theValuetoAdd), nivel, chatId, argl[0]);
						await kill.sendTextWithMentions(from, mess.gainxp(userGainXp, theValuetoAdd) + argc[0] + '.')
					} else await kill.reply(from, mess.semmarcar() + `\n\nEx: ${prefix}give -xp/-level/-coin @user <value/valor>`, id)
				break

				case 'botnome':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					if (Sliced_Body.length >= 25) return await kill.reply(from, mess.letlimit() + '25.', id)
					await kill.setMyName(Sliced_Body)
					await kill.reply(from, mess.maked(), id)
				break

				case 'recado':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					if (Sliced_Body.length >= 250) return await kill.reply(from, mess.letlimit() + '250.', id)
					await kill.setMyStatus(Sliced_Body)
					await kill.reply(from, mess.maked(), id)
				break

				case 'botfoto':
					if (!isType('image')) return await kill.reply(from, mess.onlyimg(), id)
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					const bkmypic = await kill.getProfilePicFromServer(botNumber)
					if (typeof bkmypic == 'object' || !tools('others').isUrl(bkmypic)) {
						await kill.reply(from, mess.failIMGbackup(), id)
					} else await kill.sendFileFromUrl(from, bkmypic, 'backup.jpg', 'Backup', id)
					let mediaData = await decryptMedia(encryptMedia)
					await kill.setProfilePic(tools('others').dataURI(encryptMedia.mimetype, mediaData))
					await kill.reply(from, mess.maked(), id)
				break

				case 'exec':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + `JS Code/Código.`, id);
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					try {
						eval(Sliced_Body)
						await kill.reply(from, `O código foi executado sem problemas aparentes.`, id)
					} catch (error) {
						console.log(tools('others').color('[EXEC]', 'crimson'), tools('others').color(`→ Obtive erros no comando ${prefix}${cmd} → ${error.message} - Você pode ignorar.`, 'gold'))
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'resetall':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					fs.writeFileSync('./lib/config/Utilidades/lolicon.txt', 'Lolicons ↓')
					fs.writeFileSync('./lib/config/Utilidades/reversecon.txt', 'Menores Denunciados ↓')
					fs.writeFileSync('./lib/config/Utilidades/entregados.txt', 'Auto-denuncias ↓')
					fs.writeFileSync('./lib/config/Utilidades/gaysreport.txt', 'LGTB\'S Denunciados ↓')
					fs.writeFileSync('./lib/config/Utilidades/crimereport.txt', 'Crimes Reportados ↓')
					await kill.reply(from, mess.maked(), id)
				break

				case 'nolimit':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (argl[0] == 'on' || argl[0] == 'off') {
						if (argl[0] == 'on') {
							fs.writeFileSync('./lib/config/Gerais/limit.json', JSON.stringify(JSON.parse("{\n\t\"games\": {},\n\t\"steal\": {},\n\t\"guild\": {},\n\t\"reward\": {}\n}"), null, "\t"))
						}
						objconfig.noLimits = argl[0] == 'on' ? 1 : 0
						await kill.reply(from, mess.maked(), id)
					} else return await kill.reply(from, mess.kldica2(), id)
				break

				case 'muteall':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (argl[0] == 'on' || argl[0] == 'off') {
						objconfig.isMuteAll = argl[0] == 'on' ? 1 : 0
						await kill.reply(from, mess.maked(), id)
					} else return await kill.reply(from, mess.kldica2(), id)
				break

				case 'noadms':
				case 'noadmin':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					if (isGroupCreator || isOwner) {
						let wontDemote = mess.goodbyeAdmin()
						for (let noadms of groupAdmins) {
							if (chat.groupMetadata.owner !== noadms || !config.Owner.includes(noadms) || botNumber !== noadms) {
								wontDemote += `-> @${noadms.replace('@c.us', '')}\n`
								if (groupAdmins.length == 3) return await kill.sendTextWithMentions(from, wontDemote+mess.stopNoMore())
								await kill.demoteParticipant(chatId, noadms)
							}
						}
						if (wontDemote !== mess.goodbyeAdmin()) return await kill.sendTextWithMentions(from, wontDemote)
						await kill.reply(from, mess.maked(), id)
					} else await kill.reply(from, mess.gpowner(), id)
				break

				case 'alladms':
				case 'alladmin':
					if (!isBotGroupAdmins) return await kill.reply(from, mess.botademira(), id)
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					if (isGroupCreator || isOwner) {
						let isGerent = mess.isAnAdmin()
						for (let memb of groupMembersId) {
							if (groupAdmins.includes(memb)) {
								isGerent += `-> @${memb.replace('@c.us', '')}\n`
								if (groupMembersId.length == 3) return await kill.sendTextWithMentions(from, isGerent+mess.stopNoMore())
							} else await kill.promoteParticipant(chatId, memb)
						}
						if (isGerent !== mess.isAnAdmin()) return await kill.sendTextWithMentions(from, isGerent)
						await kill.reply(from, mess.maked(), id)
					} else await kill.reply(from, mess.gpowner(), id)
				break

				case 'reload':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id);
					await kill.reply(from, mess.wait(), id)
					await kill.refresh().then(async () => await kill.reply(from, mess.refreshed(), id))
				break
				
				case 'reboot':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					await kill.reply(from, mess.rebootM(), id)
					try {
						let isWorked = await shell.exec(`pm2 reload iris`, {
							silent: true
						})
						if (isWorked) return await kill.reply(from, mess.pmReboot(), id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'type':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (args.length == 0) return await kill.reply(from, mess.onoff(), id)
					if (argl[0] == 'on') {
						objconfig.isTyping.push(chatId)
						await kill.reply(from, mess.enabled(), id)
					} else if (argl[0] == 'off') {
						objconfig.isTyping.splice(chatId, 1)
						await kill.reply(from, mess.disabled(), id)
					} else return await kill.reply(from, mess.kldica2(), id)
				break

				case 'darkmode':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (args.length == 0) return await kill.reply(from, mess.onoff(), id)
					if (argl[0] == 'on' || argl[0] == 'off') {
						let downORstart = argl[0] == 'on' ? true : false
						await kill.darkMode(downORstart)
						await kill.reply(from, mess.maked(), id)
					} else return await kill.reply(from, mess.kldica2(), id)
				break

				case 'star':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (args.length == 0) return await kill.reply(from, mess.onoff(), id)
					if (!quotedMsg) return await kill.reply(from, mess.nomark(), id)
					if (argl[0] == 'on') {
						await kill.starMessage(quotedMsg.id)
					} else await kill.unstarMessage(quotedMsg.id)
				break

				case 'upload':
					if (args.length < 2 || !arks.includes('|')) return await kill.reply(from, mess.filesend(), id)
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					let files_upload = arg.split('|').map(i => i.replace(/^ /g, '').replace(/ $/g, ''))
					await kill.sendFile(from, files_upload[0], files_upload[1], '', id).catch(async (err) => {
						console.log(err)
						await kill.reply(from, mess.filexist(args), id)
					})
				break

				case 'sticker':
				case 'fig':
				case 'figurinha':
				case 'stiker':
				case 'f':
				case 's':
				case 'st':
				case 'stickergif':
				case 'gif':
				case 'g':
				case 'gifsticker':
					if (argl[0] == '-help') return await kill.reply(from, mess.sticker(), id)
					await kill.reply(from, mess.wait(), id)
					const sharpre = async (mediaData, objC) => {
						let resizedImageBuffer = await sharp(mediaData).resize({
							width: 512,
							height: 512,
							fit: 'fill'
						}).toBuffer()
						await kill.sendImageAsSticker(from, resizedImageBuffer, objC)
					}
					if (isType('image')) {
						let mediaData = await decryptMedia(encryptMedia)
						stickerConfig.circle = arks.includes('-circle') ? true : false
						stickerConfig.keepScale = arks.includes('-cut') ? false : true
						if (arks.includes('-fill')) return await sharpre(mediaData, stickerConfig)
						await kill.sendImageAsSticker(from, mediaData, stickerConfig)
					} else if (isType('video') || isType('image/gif')) {
						let mediaData = await decryptMedia(encryptMedia)
						await kill.sendMp4AsSticker(from, mediaData, null, stickMp4Config).catch(async () => {
							await kill.reply(from, mess.gifail(), id)
						})
					} else if (args.length == 1) {
						if (tools('others').isUrl(args[0])) {
							stickerConfig.circle = arks.includes('-circle') ? true : false
							stickerConfig.keepScale = arks.includes('-cut') ? false : true
							await kill.sendStickerfromUrl(from, args[0], {
								method: 'get'
							}, stickerConfig)
						} else await kill.reply(from, mess.nolink(), id)
					} else await kill.reply(from, mess.sticker(), id)
				break

				case 'ttp':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers | color (english).', id)
					await kill.reply(from, mess.wait(), id)
					let ttpstker = await text2png(wordwrap(arg.split('|')[0], {
						width: 20
					}), {
						font: '80px sans-serif',
						color: 'white',
						strokeWidth: 2,
						strokeColor: (arg.split('|')[1] || ' white').slice(1),
						textAlign: 'center',
						lineSpacing: 10,
						padding: 20,
						backgroundColor: 'transparent'
					})
					await kill.sendImageAsSticker(from, ttpstker, stickerConfig)
				break

				case 'attp':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					await kill.reply(from, mess.wait(), id)
					let attp = await tools('attp').create(Sliced_Body)
					await kill.sendImageAsSticker(from, attp, stickerConfig)
				break

				case 'emoji':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'emoji.', id)
					let emoji = new EmojiAPI()
					await emoji.get(args[0]).then(async (emoji) => {
						if (emoji.emoji == null) return await kill.reply(from, mess.noemoji(), id)
						await kill.reply(from, `Emoji: ${emoji.emoji}\n\nUnicode: ${emoji.unicode}\n\nNome: ${emoji.name}\n\nInformações: ${emoji.description}\n\n` + emoji.images.map(res => `${res.vendor} → ${res.url}\n\n`) + mess.emojis(), id)
						await kill.sendStickerfromUrl(from, emoji.images[0].url, {
							method: 'get'
						}, stickerConfig)
					})
				break

				case 'getsticker':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					let filterAdu = isActivated('nsfw') || isActivated('antiporn') ? duck.SafetyLevels.OFF : duck.SafetyLevels.STRICT
					const getSticker = await duck.search(Sliced_Body, filterAdu)
					if (getSticker.length == 0) return await kill.sendFileFromUrl(from, errorImg, '', mess.noresult() + '\n\nTãn tãn tãn...', id)
					await kill.sendStickerfromUrl(from, tools('others').randVal(getSticker.map(c => c.image)), {
						method: 'get'
					}, stickerConfig)
				break

				case 'wasted':
					try {
						await kill.reply(from, mess.wait(), id)
						let thePicWasted = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
						await canvacord.Canvas.wasted(thePicWasted[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `wasted.png`, '', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break
				
				case 'toon':
					try {
						await kill.reply(from, mess.wait(), id)
						let toonPerson = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
						var tdaip = await deepai.callStandardApi("toonify", {
							image: toonPerson[0],
						})
						await kill.sendFileFromUrl(from, tdaip.output_url, 'toon.png', `Este seria você se estivéssemos em um desenho animado ~será que não estamos?~\n\nEvite usar com bobagens, isso não é uma função leve.`, id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break
				
				case 'colorfy':
					if (isType('image')) {
						await kill.reply(from, mess.wait(), id)
						let mediaData = await decryptMedia(encryptMedia)
						var colorOld = await tools('cloud').upload(mediaData)
						var cphot = await deepai.callStandardApi("colorizer", {
							image: colorOld,
						})
						await kill.sendFileFromUrl(from, cphot.output_url, 'color.png', mess.photoWord()+'\n\n'+mess.donotuse(), id)
					} else await kill.reply(from, mess.onlyimg(), id)
				break
				
				case 'textify':
				case 'maketext':
					if (args.length == 0 || argl[0] == '-help') return await kill.reply(from, mess.textify(), id)
					await kill.reply(from, mess.wait(), id)
					let textGen = arks.includes('-orig') ? Sliced_Body.replace('-orig', '') : Sliced_Body
					var neweTx = await deepai.callStandardApi("text-generator", {
						text: textGen,
					})
					if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, neweTx.output+'...', id)
					await translate(neweTx.output, {
						to: region
					}).then(async (jor) => await kill.reply(from, jor.text+'...', id))
					await kill.reply(from, mess.donotuse(), id)
				break

				case 'reduce':
					if (args.length == 0) return await kill.reply(from, mess.reduceText(), id)
					await kill.reply(from, mess.wait(), id)
					var summar = await deepai.callStandardApi("summarization", {
						text: Sliced_Body,
					})
					await kill.reply(from, summar.output, id)
					await kill.reply(from, mess.donotuse(), id)
				break

				case 'trigger':
					try {
						await kill.reply(from, mess.wait(), id)
						let getTrigger = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
						await canvacord.Canvas.trigger(getTrigger[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `trigger.png`, 'Run...', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

					/*LEMBRE-SE, REMOVER CRÈDITO È CRIME E PROIBIDO*/
				case 'about':
					await kill.sendFileFromUrl(from, 'https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/iris.jpg', 'iris.png', mess.about(), id)
					await kill.reply(from, mess.everhost(), id)
				break

				case 'nobg':
					if (Default_APIS.API_RemoveBG !== APIS.API_RemoveBG) {
						if (isType('image')) {
							await kill.reply(from, mess.wait(), id)
							let mediaData = await decryptMedia(encryptMedia)
							var result = await removeBackgroundFromImageBase64({
								base64img: tools('others').dataURI(`${encryptMedia.mimetype}`, mediaData),
								apiKey: APIS.API_RemoveBG,
								size: 'auto',
								type: 'auto'
							})
							await kill.sendImageAsSticker(from, tools('others').dataURI(encryptMedia.mimetype, result.base64img), stickerConfig)
							await kill.reply(from, mess.nobgms(), id)
						} else await kill.reply(from, mess.onlyimg(), id)
					} else return await kill.reply(from, "Meu dono não configurou este comando, não posso executar pois causaria erros graves.", id)
				break

				case 'simg':
					try {
						if (isType('image')) {
							await kill.reply(from, mess.wait(), id)
							let mediaData = await decryptMedia(encryptMedia)
							const sImgUp = await tools('cloud').upload(mediaData)
							let googleRes = (await axios.get(`https://node-reverse-image-search.herokuapp.com/?imageUrl=${sImgUp}`)).data
							await kill.reply(from, googleRes.map(a => '\n' + a.title + '\n' + a.url + '\n').slice(1).join(''), id)
						} else await kill.reply(from, mess.onlyimg(), id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time) + '\n\nMaybe/Talvez...' + mess.upfail(), id)
					}
				break

				case 'upimg':
					try {
						if (isType('image')) {
							let mediaData = await decryptMedia(encryptMedia)
							const upImg = await tools('cloud').upload(mediaData)
							await kill.reply(from, mess.tempimg(upImg), id)
						} else await kill.reply(from, mess.onlyimg(), id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time) + '\n\nMaybe/Talvez...' + mess.upfail(), id)
					}
				break

				case 'morte':
				case 'death':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'nomes/nombres/names.', id)
					const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`)
					if (predea.data.age == null) return await kill.reply(from, mess.validname(), id)
					await kill.reply(from, mess.death(predea), id)
				break

				/*Botei todas as Tags do Xvideos que achei*/
				case 'oculto':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					await kill.sendTextWithMentions(from, mess.oculto(randomMember, tools('others').getRandLine(1, './lib/config/Utilidades/porn.txt')[0]))
				break

				case 'gender':
				case 'genero':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'nomes/nombres/names.', id)
					const seanl = await axios.get(`https://api.genderize.io/?name=${encodeURIComponent(args[0])}`)
					if (seanl.data.gender == null) return await kill.reply(from, mess.validname(), id)
					await kill.reply(from, mess.genero(seanl), id)
				break

				case 'detector':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					await kill.reply(from, mess.wait(), id)
					await kill.sendTextWithMentions(from, mess.gostosa(randomMember))
				break

				case 'math':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'número & simbolos matematicos/numbers & mathematical symbols.', id)
					try {
						await kill.reply(from, `${Sliced_Body}\n\n*=*\n\n${math.evaluate(Sliced_Body)}`, id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.onlynumber() + '\nUse	+	-	*	/' + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					}
				break

				case 'inverter':
					if (quotedMsg && quotedMsg.type == 'chat') {
						var whoCount = quotedMsg.body
					} else if (isType('image') || isType('video') || isType('image/gif') || quotedMsgObj) {
						var whoCount = quotedMsg.caption
					} else if (args.length == 0) {
						var whoCount = 'error'
					} else var whoCount = Sliced_Body
					if (whoCount == 'error' || whoCount == null) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					await kill.reply(from, `${mess.reversing()[0]}\n\n${whoCount.split(' ').reverse().join(' ')}\n\n${mess.reversing()[1]}\n\n${whoCount.split('').reverse().join('')}`, id)
				break

				case 'contar':
					if (quotedMsg && quotedMsg.type == 'chat') {
						var whoCou = quotedMsg.body
					} else if (isType('image') || isType('video') || isType('image/gif') || quotedMsgObj) {
						var whoCou = quotedMsg.caption
					} else if (args.length == 0) {
						var whoCou = 'error'
					} else var whoCou = Sliced_Body
					if (whoCou == 'error' || whoCou == null) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					await kill.reply(from, mess.contar(whoCou), id)
				break

				case 'giphy':
					if (!tools('others').isUrl(args[0])) return await kill.reply(from, mess.nolink(), id)
					const isGiphy = args[0].match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'))
					const isMediaGiphy = args[0].match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'))
					if (isGiphy) {
						const getGiphyCode = args[0].match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'))
						if (!getGiphyCode) return await kill.reply(from, mess.fail(cmd, error, time) + '\n\nGiphy site error.', id)
						await kill.sendGiphyAsSticker(from, `https://media.giphy.com/media/${getGiphyCode[0].replace(/[-\/]/gi, '')}/giphy-downsized.gif`)
					} else if (isMediaGiphy) {
						const gifUrl = args[0].match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'))
						if (!gifUrl) return await kill.reply(from, mess.fail(cmd, error, time) + '\n\nGiphy site error.', id)
						await kill.sendGiphyAsSticker(from, args[0].replace(gifUrl[0], 'giphy-downsized.gif'))
					} else await kill.reply(from, mess.nolink(), id)
				break

				case 'msg':
				case 'print':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					await kill.sendText(from, `${Sliced_Body}`)
				break

				case 'id':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					await kill.reply(from, mess.idgrupo(chatId), id)
				break

				/*LEMBRE-SE, REMOVER CREDITO É CRIME E PROIBIDO*/
				case 'legiao':
					if (isGroupMsg) return await kill.reply(from, mess.sopv(), id)
					await kill.sendLinkWithAutoPreview(from, 'https://bit.ly/BOT-IRIS', mess.onlyRecLz())
				break

				case 'water':
					if (args.length == 0 || arks.length >= 16) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.\n\nMax: 10 letras/letters.', id)
					await kill.reply(from, mess.wait() + '\n\n20+ s.', id)
					try {
						await maker.textpro('https://textpro.me/dropwater-text-effect-872.html', Sliced_Body).then(async (data) => await kill.sendFileFromUrl(from, data, 'textpro.jpg', '', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'img':
					if (isType('sticker')) {
						await kill.reply(from, mess.wait(), id)
						let mediaData = await decryptMedia(encryptMedia)
						await kill.sendFile(from, tools('others').dataURI('image/png', mediaData), 'image.png', 'Tatakae.', id)
					} else await kill.reply(from, mess.onlyst(), id)
				break
				
				case 'tomp4':
					if (isType('sticker')) {
						await kill.reply(from, mess.wait(), id)
						let mediaData = await decryptMedia(encryptMedia)
						await tools('tomp4').convert(`./lib/media/video/sticker-${tools('others').randomString(10)}.webp`, mediaData, kill, message)
					} else await kill.reply(from, mess.onlyst(), id)
				break
				
				case 'quiz':
					if (args[0] == '-placar') {
						if (!Object.keys(quizPlacar).includes(chatId)) return await kill.reply(from, mess.needVotes(), id)
						if (Object.keys(quizPlacar[chatId]).length !== 0) {
							let The_Winners_Quiz = ''
							Object.keys(quizPlacar[chatId]).map(usz => {
								The_Winners_Quiz += `["@${usz.replace('@c.us', '')} - wa.me/${usz.replace('@c.us', '')}"] = "${quizPlacar[chatId][usz]}" Points\n\n`
							})
							await kill.sendTextWithMentions(from, The_Winners_Quiz)
						} else return await kill.reply(from, mess.needVotes(), id)
					}
					if (!Object.keys(quizPlacar).includes(chatId)) {
						quizPlacar[chatId] = {}
					}
					if (!Object.keys(usersVoted).includes(chatId)) {
						usersVoted[chatId] = {
							"Max_Votes_Quiz": 0,
							"started": false,
							"total": 0,
							"all": [],
							"votes": {}
						}
					}
					if (!usersVoted[chatId].started || arks.includes('-new')) {
						let allQuesAwn = JSON.parse(fs.readFileSync('./lib/config/Gerais/quiz.json'))
						let theTestQuiz = tools('others').randomNumber(0, allQuesAwn.Total_Questions)
						Select_Quiz_Awnser[chatId] = allQuesAwn.All_Questions[theTestQuiz]
						if (arks.includes('-set')) {
							Parse_Argmt = argl[argl.indexOf('-set')+1]
							if (allQuesAwn.Total_Questions >= Number(Parse_Argmt)) {
								Select_Quiz_Awnser[chatId] = allQuesAwn.All_Questions[Parse_Argmt]
								theTestQuiz = Parse_Argmt
							}
						}
						if (isNaN(args[0])) {
							await kill.reply(from, mess.maxVotingQ(), id)
							usersVoted[chatId].Max_Votes_Quiz = 5
						} else {
							usersVoted[chatId].Max_Votes_Quiz = Number(args[0])
						}
						let regsLangYES = region == 'en' ? 'yes' : (region == 'es' ? 'si' : 'sim')
						let regsLangNO = region == 'en' || region == 'es' ? 'no' : 'nao'
						Select_Quiz_Awnser[chatId].Final_Awnser = allQuesAwn.All_Questions[theTestQuiz].Awnser
						Select_Quiz_Awnser[chatId].Awnser = allQuesAwn.All_Questions[theTestQuiz].Awnser == true ? regsLangYES : regsLangNO
						if (region !== 'en' || !arks.includes('-orig')) {
							await translate(Select_Quiz_Awnser[chatId].Question, {
								to: region
							}).then(res => Select_Quiz_Awnser[chatId].Question = res.text)
						}
						if (sesConfig.Multi_Devices == true) {
							await kill.sendText(from, `🔎 - QUIZ N° "${theTestQuiz}"\n\n❓ - "${Select_Quiz_Awnser[chatId].Question}"\n\n1️⃣ - "${regsLangYES.toUpperCase()}"\n\n2️⃣ - "${regsLangNO.toUpperCase()}"\n\n${mess.howToQuiz()} - [${usersVoted[chatId].Max_Votes_Quiz}].`)
						} else {
							await kill.sendButtons(from, `❓ - "${Select_Quiz_Awnser[chatId].Question}"\n\n1️⃣ - "${regsLangYES.toUpperCase()}"\n\n2️⃣ - "${regsLangNO.toUpperCase()}"`, [
								{
									"id": "1",
									"text": `✔️ ${regsLangYES} ✔️`
								},
								{
									"id": "2",
									"text": "✖️ ${regsLangNO} ✖️"
								}
							], `🔎 - QUIZ N° "${theTestQuiz}"`, `${mess.howToQuiz()}  - [${usersVoted[chatId].Max_Votes_Quiz}] →`)
						}
						usersVoted[chatId].started = true
					} else await kill.reply(from, `${mess.QuizStarted()}\n\n❓ - "${Select_Quiz_Awnser[chatId].Question}"\n\n1️⃣ - "${tools('others').yesAwnsers().toUpperCase()}"\n\n2️⃣ - "${tools('others').noAwnsers().toUpperCase()}"`, id)
				break

				case 'randomanime':
					const nime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
					await kill.sendFileFromUrl(from, `${nime.data.url}`, ``, 'e.e', id)
				break

				case 'frase':
					const aiquote = await axios.get("https://inspirobot.me/api?generate=true")
					await kill.sendFileFromUrl(from, aiquote.data, 'quote.jpg', '~Ok...?~\n\n❤️', id)
				break

				case 'make':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					const diary = await axios.get(`https://st4rz.herokuapp.com/api/nulis?text=${encodeURIComponent(Sliced_Body)}`)
					await kill.sendImage(from, `${diary.data.result}`, '', mess.diary(), id)
				break

				case 'neko':
					const neko = await axios.get(`https://nekos.life/api/v2/img/${tools('others').randVal(["neko", "ngif", "fox_girl"])}`)
					await kill.sendFileFromUrl(from, `${neko.data.url}`, ``, `🌝`, id)
				break

				case 'image':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					let filterP = isActivated('nsfw') || isActivated('antiporn') ? duck.SafetyLevels.OFF : duck.SafetyLevels.STRICT
					const getImage = await duck.search(Sliced_Body, filterP)
					if (getImage.length == 0) return await kill.sendFileFromUrl(from, errorImg, '', 'Tãn tãn tãn...', id)
					await kill.sendFileFromUrl(from, tools('others').randVal(getImage.map(c => c.image)), '', ';)', id)
				break

				case 'yaoi':
					let filterH = isActivated('nsfw') || isActivated('antiporn') ? duck.SafetyLevels.OFF : duck.SafetyLevels.STRICT
					const iHateYaoi = await duck.search('yaoi', filterH)
					if (iHateYaoi.length == 0) return await kill.sendFileFromUrl(from, errorImg, '', 'Tãn tãn tãn...', id)
					await kill.sendFileFromUrl(from, tools('others').randVal(iHateYaoi.map(c => c.image)), '', ';)', id)
				break

					/*Adicione mais no arquivo fml.txt na pasta config, obs, em inglês*/
				case 'life':
					if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/fml.txt')[0], id)
					await translate(tools('others').getRandLine(1, './lib/config/Utilidades/fml.txt')[0], {
						to: region
					}).then(async (lfts) => await kill.reply(from, lfts.text, id))
				break

				case 'fox':
					const fox = await axios.get(`https://some-random-api.ml/img/fox`)
					await kill.sendFileFromUrl(from, fox.data.link, `@${groupMembersId.join('\n-> @')}`, '🥰', id)
				break

				case 'wiki':
					try {
						if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
						const wikip = await axios.get(`https://${region}.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(Sliced_Body)}&prop=info&inprop=url`)
						const wikis = await axios.get(`https://${region}.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`)
						await kill.reply(from, wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract, id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.noresult() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					}
				break

				case 'nasa':
					if (arks.includes('-help')) return await kill.reply(from, mess.nasaUsage(), id)
					const needsTime = args.length !== 0 ? `&date=${encodeURIComponent(args[1])}` : '&'
					const nasa = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIS.API_NASA}${needsTime}`)
					var nasaURL = Object.keys(nasa.data).includes('hdurl') ? nasa.data.hdurl : nasa.data.url
					let copyRightIC = Object.keys(nasa.data).includes('copyright') ? `\n\n${nasa.data.copyright}\n\n` : '\n\n'
					if (region == 'en' || arks.includes('-orig')) {
						if (nasaURL.includes("youtu")) {
							await kill.sendYoutubeLink(from, `${nasaURL.replace('embed/', 'watch?v=').replace('?rel=0', '').replace('www.', '')}`, `\n${nasa.data.date} → ${nasa.data.title}${copyRightIC}${nasa.data.explanation}`).then(() => {}).catch(() => {})
						} else await kill.sendFileFromUrl(from, nasaURL, 'nasa.png', `${nasa.data.date} → ${nasa.data.title}${copyRightIC}${nasa.data.explanation}\n\n${nasaURL}`, id)
					} else {
						await translate(nasa.data.explanation, {
							to: region
						}).then(async (space) => {
							if (nasaURL.includes("youtu")) {
								await kill.sendYoutubeLink(from, `${nasaURL.replace('embed/', 'watch?v=').replace('?rel=0', '').replace('www.', '')}`, `\n${nasa.data.date} → ${nasa.data.title}${copyRightIC}${space.text}`).then(() => {}).catch(() => {})
							} else await kill.sendFileFromUrl(from, nasaURL, 'nasa.png', `${nasa.data.date} → ${nasa.data.title}${copyRightIC}${space.text}\n\n${nasaURL}`, id)
						})
					}
				break

				case 'stalkig':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'instagram usernames.', id)
					const ig = await axios.get(`https://www.instagram.com/${encodeURIComponent(Sliced_Body)}/?__a=1`)
					if (JSON.stringify(ig.data) == '{}') return await kill.reply(from, mess.noresult(), id)
					await kill.sendFileFromUrl(from, `${ig.data.graphql.user.profile_pic_url}`, ``, mess.insta(ig), id)
				break

				case 'fatos':
					const animl = await axios.get(`https://some-random-api.ml/facts/${tools('others').randVal(["dog", "cat", "bird", "panda", "fox", "koala"])}`)
					if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, animl.data.fact, id)
					await translate(animl.data.fact, {
						to: region
					}).then(async (result) => await kill.reply(from, result.text, id))
				break

				case 'sporn':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					if (args.length == 0) return await kill.reply(from, mess.noargs(), id)
					const xxxSearch = await XVDL.search(Sliced_Body)
					const sPornX = await XVDL.getInfo(xxxSearch.videos[0].url)
					await kill.sendFileFromUrl(from, `${xxxSearch.videos[0].thumbnail.static}`, '', mess.sporn(xxxSearch, sPornX), id)
				break

				case 'xvideos':
					try {
						if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
						if (args.length == 0 || !tools('others').isUrl(args[0]) || !args[0].includes('xvideos.com')) return await kill.reply(from, mess.nolink(), id)
						await kill.reply(from, mess.wait(), id)
						let sPornD = await XVDL.getInfo(args[0])
						await kill.sendFileFromUrl(from, `${sPornD.streams.lq}`, 'xvideos.mp4', `🌚`, id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.nolink() + mess.fail(cmd, error, time), id)
					}
				break

				// Lista dos locais compatíveis -> https://ytdl-org.github.io/youtube-dl/supportedsites.html
				case 'downvideo':
					if (args.length == 0 || !tools('others').isUrl(args[0])) return await kill.reply(from, mess.nolink(), id)
					try {
						await kill.reply(from, mess.wait(), id)
						const vdoClip = await tools('youtube').getVideo(args[0])
						if (vdoClip instanceof Error) {
							await kill.reply(from, mess.verybig() + mess.fail(cmd, vdoClip, time), id)
							tools('others').reportConsole(cmd, vdoClip)
						} else await kill.sendFileFromUrl(from, vdoClip, `downloads.mp4`, `e.e`, id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.verybig() + mess.fail(cmd, error, time), id)
					}
				break

				/* Não deixem floodarem, se o arquivo corromper tem uma chance de corromper o sistema, embora extremamente rara de ocorrer */
				case 'play':
				case 'video':
				case 'ytsearch':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'Títulos do YouTube/YouTube Titles.', id)
					await kill.reply(from, mess.wait(), id)
					const ytres = await ytsearch(`${body.slice(cmd.length + 2).replace('video', '').replace('audio', '')}`)
					const videoFinded = {
						all: ytres.all.filter(v => !v.url.includes('playlist'))
					}
					await kill.sendYoutubeLink(from, `${videoFinded.all[0].url}`, '\n' + mess.play(videoFinded)).then(() => {}).catch(() => {})
					var buttID = 'Nothing here sir'
					if (sesConfig.Multi_Devices == false) {
						await kill.sendButtons(from, mess.buttonStop("Cancelar"), [{
								"id": "1",
								"text": "📀 Áudio 🎵"
							},
							{
								"id": "2",
								"text": "🎥 Vídeo 📹"
							},
							{
								"id": "3",
								"text": "🚫 Cancelar 🚫"
							}
						], mess.whatFormat(), mess.clickFast()).then(b => buttID = b)
					} else await kill.reply(from, mess.downFormatC(), id)
					var filter = msgw => tools('others').filterMsg(msgw, sender.id, from, buttID, /video|audio|cancel/gi)
					await kill.awaitMessages(from, filter, {
						max: 1,
						time: 300000,
						errors: ['time']
					}).then(async collected => {
						if (/audio/gi.test(removeAccents(Array.from(collected)[0][1].body))) {
							await kill.reply(from, mess.youChoose('audio'), id)
							const playMusic = await tools('youtube').downPlay(videoFinded.all[0].url)
							if (playMusic instanceof Error) {
								await kill.reply(from, mess.verybig() + mess.fail(cmd, playMusic, time), id)
								tools('others').reportConsole(cmd, playMusic)
							} else {
								await kill.sendPtt(from, playMusic, id)
								tools('others').clearFile(playMusic)
							}
						} else if (/video/gi.test(removeAccents(Array.from(collected)[0][1].body))) {
							await kill.reply(from, mess.youChoose('video'), id)
							try {
								const ytClip = await tools('youtube').downVideo(videoFinded.all[0].url)
								if (ytClip instanceof Error) {
									await kill.reply(from, mess.verybig() + mess.fail(cmd, ytClip, time), id)
									tools('others').reportConsole(cmd, ytClip)
								} else await kill.sendFileFromUrl(from, ytClip, `${videoFinded.all[0].title}.mp4`, `${videoFinded.all[0].title}`, id)
							} catch (error) {
								tools('others').reportConsole(cmd, error)
								await kill.reply(from, mess.verybig() + mess.fail(cmd, error, time), id)
							}
						} else if (/cancel/gi.test(removeAccents(Array.from(collected)[0][1].body))) {
							await kill.reply(from, mess.youCanceled(), id)
						}
					}).catch(async collected => await kill.reply(from, mess.timeEndedDP(), id))
				break

				case 'qr':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					await kill.sendFileFromUrl(from, `https://api.qrserver.com/v1/create-qr-code/?data=${Sliced_Body}`, '', mess.maked(), id)
				break

				case 'readqr':
					try {
						if (isType('image')) {
							let mediaData = await decryptMedia(encryptMedia)
							const upQrCode = await tools('cloud').upload(mediaData)
							const getQrText = await axios.get(`https://api.qrserver.com/v1/read-qr-code/?fileurl=${upQrCode}`)
							if (getQrText.data[0].symbol[0].data == null) return await kill.reply(from, 'Not a QR - Não é um QR.\n\nOu erro - Or error.', id)
							await kill.reply(from, `→ ${getQrText.data[0].symbol[0].data}`, id)
						} else await kill.reply(from, mess.onlyimg() + '\nQR-Code!', id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time) + '\n\nMaybe/Talvez...' + mess.upfail(), id)
					}
				break

				case 'send':
					try {
						if (args.length == 0 || !tools('others').isUrl(args[0])) return await kill.reply(from, mess.nolink(), id)
						await kill.sendFileFromUrl(from, args[0], '', '', id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time) + '\n\nMaybe/Talvez...' + mess.onlyimg(), id)
					}
				break

				case 'translate':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'idioma/language & words/palavras ou/or marca/mark a message/mensagem.', id)
					await kill.reply(from, mess.wait(), id)
					try {
						let transType = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : body.slice(11+args[0].length)
						await translate(transType, {
							to: args[0]
						}).then(async (result) => await kill.reply(from, `→ ${result.text}`, id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.ttsiv() + '\n\nOu' + mess.gblock() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					}
				break

				case 'tts':
					if (args.length <= 1) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					try {
						let placet = `./lib/media/audio/tts[${argl[0]}]-${tools('others').randomString(10)}.mp3`
						await tts(argl[0]).save(placet, body.slice(argl[0].length+5), async () => {
							await kill.sendPtt(from, placet, id)
							tools('others').clearFile(placet, 10000, false)
						})
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.ttsiv() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					}
				break

				case 'idiomas':
					await kill.reply(from, mess.idiomas(), id)
					await kill.reply(from, `Idiomas disponíveis para o ${prefix}Translate ->\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${Object.keys(translate.languages).filter(c => c !== 'isSupported' && c !== 'getCode').map(t => `${t} -> ${translate.languages[t]}\n\n`).join('\n')}`, id)
				break

				case 'resposta':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers/emojis/etc.', id)
					fs.appendFileSync('./lib/config/Utilidades/reply.txt', `\n${Sliced_Body}`)
					await kill.reply(from, mess.maked(), id)
				break

				case 'criador':
					let hostNot = config.Hide_Owner_Number ? '' : `☀️ - Host: https://wa.me/${config.Owner[0].replace('@c.us', '')}\n`
					await kill.reply(from, `${hostNot}🌙 - Dev: Lucas R. - KillovSkyᴸᶻ [http://bit.ly/BOT-IRIS]\n\n${mess.everhost()}`, id)
				break
				
				case 'badwords':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						if (args[0] !== 3 && args.length < 2 || isNaN(args[0]) || args[0] !== 3 && !Censor_Languages.includes(argl[1]) || !/[1-3]/.test(args[0])) return await kill.reply(from, mess.badWordsUsage(), id)
						functions.badwords[chatId] = {
							"enabled": true,
							"ban": true,
							"lang": argl[1]
						}
						if (argl[0] == '1') {
							functions.badwords[chatId] = functions.badwords[chatId]
						} else if (argl[0] == '2') {
							functions.badwords[chatId].ban = false
						} else if (argl[0] == '3') {
							functions.badwords[chatId].enabled = false
						} else {
							functions.badwords[chatId].enabled = false
							return await kill.reply(from, mess.whatTheFuck(), id)
						}
						fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
						await kill.reply(from, mess.maked(), id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'akinator':
				case 'aki':
					let startAki = async () => {
						global.aki = new Aki({
							region
						})
						await aki.start()
						objconfig.akistarted = 1
					}
					if (objconfig.akistarted == 0) {
						await startAki()
					}
					try {
						if (argl[0] == '-r') {
							if (!args[1].match(/^[0-9]+$/)) return await kill.reply(from, mess.aki(), id)
							await aki.step(args[1])
							objconfig.jogadas++
							if (aki.progress >= config.Akinator_Win || aki.currentStep >= config.Akinator_Win) {
								await aki.win()
								await kill.sendFileFromUrl(from, `${aki.answers[0].absolute_picture_path}`, '', mess.akiwon(aki, aki.answers[0]), id)
							} else await kill.reply(from, mess.akistart(aki), id)
						} else if (argl[0] == '-new') {
							await startAki()
							objconfig.jogadas = 0
							await kill.reply(from, mess.akistart(aki), id)
						} else if (argl[0] == '-back') {
							if (isNaN(argl[1])) return await kill.reply(from, mess.whatCandit(objconfig.jogadas), id)
							for (let i = 0; i < Number(argl[1]); i++) {
								await aki.back()
							}
							objconfig.jogadas = 0
							await kill.reply(from, mess.akistart(aki), id)
						} else await kill.reply(from, mess.akistart(aki), id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.akifail() + mess.fail(cmd, error, time), id)
						objconfig.akistarted = 0
						objconfig.jogadas = 0
					}
				break

					/*Se quiser adicione respostas na reply.txt ou use o comando '/resposta', Íris também consegue adicionar ela mesma sozinha*/
				case 'iris':
					if (args.length == 0 || APIS.Chat_Bot_Type == 4 && !tools('others').isUrl(APIS.SimSimi_Host) || APIS.Chat_Bot_Type == 3 && APIS.API_Brainshop == Default_APIS.API_Brainshop) return await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0], id)
					try {
						if (argl[0] == '-g') {
							let awnser = await shell.exec(`bash -c "grep -i '${args[1]}' './lib/config/Utilidades/reply.txt' | shuf -n 1"`, {
								silent: true
							}).stdout
							if (awnser == '') {
								await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0], id)
							} else await kill.reply(from, awnser, id)
						} else {
							var IrisResponse = false
							let chatBotMode = Object.keys(functions.chatBot_Type).includes(chatId) ? functions.chatBot_Type[chatId] : APIS.Chat_Bot_Type
							if (chatBotMode == 4 && APIS.API_SimSimi) {
								await axios.get(`${APIS.SimSimi_Host}?key=${tools('others').randVal(APIS.API_SimSimi)}&lc=${region}&text=${encodeURIComponent(Sliced_Body)}`).then(res => {
									if (res.data.result !== 100) {
										IrisResponse = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0]
									} else IrisResponse = res.data.success
								})
							} else if (chatBotMode == 3 && APIS.API_Brainshop) {
								await axios.get(`http://api.brainshop.ai/get?bid=${APIS.BID_Brainshop}&key=${APIS.API_Brainshop}&uid=${sender.id.replace('@c.us', '')}&msg=${encodeURIComponent(Sliced_Body)}`).then(res => IrisResponse = res.data.cnt).catch(() => IrisResponse = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0])
							} else if (chatBotMode == 2) {
								IrisResponse = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0]
							} else if (chatBotMode == 1) {
								await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(Sliced_Body)}&lc=${region}&name=iris`).then(res => IrisResponse = res.data.success).catch(() => IrisResponse = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0])
							} else IrisResponse = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0]
							if (chatBotMode !== 2) {
								fs.appendFileSync('./lib/config/Utilidades/reply.txt', `\n${IrisResponse}`)
							}
							if (IrisResponse == 'Eu não resposta. Por favor me ensine.') IrisResponse = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0]
							await kill.reply(from, IrisResponse, id)
						}
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'speak':
					try {
						const sppt = require('node-gtts')(region)
						let speakttplc = `./lib/media/audio/speak[${region}]-${tools('others').randomString(10)}.mp3`
						if (args.length == 0 || APIS.Chat_Bot_Type == 4 && !tools('others').isUrl(APIS.SimSimi_Host) || APIS.Chat_Bot_Type == 3 && APIS.API_Brainshop == Default_APIS.API_Brainshop) return await sppt.save(speakttplc, tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0], async function() {
							await kill.sendPtt(from, speakttplc, id)
							tools('others').clearFile(speakttplc, 10000, false)
						})
						if (argl[0] == '-g') {
							let voiceaw = await shell.exec(`bash -c "grep -i '${args[1]}' './lib/config/Utilidades/reply.txt' | shuf -n 1"`, {
								silent: true
							}).stdout
							if (voiceaw == '') {
								await sppt.save(speakttplc, tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0], async function() {
									await kill.sendPtt(from, speakttplc, id)
								})
							} else await sppt.save(speakttplc, voiceaw, async function() {
								await kill.sendPtt(from, speakttplc, id)
							})
						} else {
							var IrisVoiceRes = false
							let SpeakBotMode = Object.keys(functions.chatBot_Type).includes(chatId) ? functions.chatBot_Type[chatId] : APIS.Chat_Bot_Type
							if (SpeakBotMode == 4 && APIS.API_SimSimi) {
								await axios.get(`${APIS.SimSimi_Host}?key=${tools('others').randVal(APIS.API_SimSimi)}&lc=${region}&text=${encodeURIComponent(Sliced_Body)}`).then(res => {
									if (res.data.result !== 100) {
										IrisVoiceRes = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0]
									} else IrisVoiceRes = res.data.success
								})
							} else if (SpeakBotMode == 3) {
								await axios.get(`http://api.brainshop.ai/get?bid=${APIS.BID_Brainshop}&key=${APIS.API_Brainshop}&uid=${sender.id.replace('@c.us', '')}&msg=${encodeURIComponent(Sliced_Body)}`).then(res => IrisVoiceRes = res.data.cnt).catch(() => IrisVoiceRes = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0])
							} else if (SpeakBotMode == 2) {
								IrisVoiceRes = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0]
							} else if (SpeakBotMode == 1) {
								await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(Sliced_Body)}&lc=${region}&name=iris`).then(res => IrisVoiceRes = res.data.success).catch(() => IrisVoiceRes = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0])
							} else IrisVoiceRes = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0]
							if (SpeakBotMode !== 2) {
								fs.appendFileSync('./lib/config/Utilidades/reply.txt', `\n${IrisVoiceRes}`)
							}
							if (SpeakBotMode == 'Eu não resposta. Por favor me ensine.') SpeakBotMode = tools('others').getRandLine(1, './lib/config/Utilidades/reply.txt')[0]
							await sppt.save(speakttplc, IrisVoiceRes, async function() {
								await kill.sendPtt(from, speakttplc, id)
							})
						}
						tools('others').clearFile(speakttplc, 10000, false)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						tools('others').clearFile(speakttplc)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'curiosidade':
					try {
						if (argl[0] == '-g') {
							let curist = await shell.exec(`bash -c "grep -i "${args[1]}" lib/config/Utilidades/curiosidades.txt | shuf -n 1"`, {
								silent: true
							})
							if (curist.stdout == '') {
								await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/curiosidades.txt')[0], id)
							} else await kill.reply(from, curist.stdout, id)
						} else await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/curiosidades.txt')[0], id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'trecho':
					try {
						if (argl[0] == '-g') {
							let trecd = await shell.exec(`bash -c "grep -i "${args[1]}" lib/config/Utilidades/frases.txt | shuf -n 1"`, {
								silent: true
							}).stdout
							if (trecd == '') {
								await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/frases.txt')[0], id)
							} else await kill.reply(from, trecd, id)
						} else await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/frases.txt')[0], id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'roll':
					await kill.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + tools('others').randomNumber(1, 6) + '.png', {
						method: 'get'
					}, stickerConfig)
				break

				case 'rolette':
				case 'roleta':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					if (tools('gaming').getLimit(sender.id, daily, chatId, false, 'games')) return await kill.reply(from, mess.limitgame(), id)
					const gamerRol = parseInt(tools('gaming').getValue(sender.id, nivel, chatId, 'coin'))
					if (isNaN(args[0]) || !tools('others').isInt(args[0]) || Number(args[0]) >= gamerRol) return await kill.reply(from, mess.gaming(gamerRol), id)
					var iRoll = Math.abs(parseInt(tools('others').randomNumber(Number(config.Iris_Coin) + Number(args[0]), Number(args[0]) * 1.5) / Number(config.Max_Divider_Win)))
					if (side == 1) {
						await kill.sendFileFromUrl(from, 'https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/roleta1.png', 'rol1.png', mess.loseshot(iRoll), id)
						tools('gaming').addValue(sender.id, Number(-iRoll), nivel, chatId, 'coin')
					} else {
						if (randEven.eventOnline && randEven.eventType == 'coin') {
							iRoll = parseInt(tools('others').randomNumber(iRoll, iRoll*randEven.events[randEven.eventIndex].multiplier)) /* Efeito de evento aleatório */
						}
						await kill.sendFileFromUrl(from, 'https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/roleta.jpg', 'rol.jpg', mess.winshot(iRoll), id)
						tools('gaming').addValue(sender.id, Number(iRoll), nivel, chatId, 'coin')
					}
					if (objconfig.noLimits == 0) return tools('gaming').addLimit(sender.id, daily, chatId, 'games')
				break

				case 'flip':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					if (tools('gaming').getLimit(sender.id, daily, chatId, false, 'games') == 1) return await kill.reply(from, mess.limitgame(), id)
					const gamerFlip = parseInt(tools('gaming').getValue(sender.id, nivel, chatId, 'coin'))
					if (isNaN(args[1]) || !tools('others').isInt(args[1]) || Number(args[1]) >= gamerFlip) return await kill.reply(from, mess.gaming(gamerFlip), id)
					var iFlip = Math.abs(parseInt(tools('others').randomNumber(Number(config.Iris_Coin) + Number(args[1]), Number(args[1]) * 1.5) / Number(config.Max_Divider_Win)))
					if (argl[0] == 'cara' && side == 1 || argl[0] == 'coroa' && side == 2) {
						let winFlipURL = side == 1 ? 'https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/heads.png' : 'https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/tails.png'
						await kill.sendStickerfromUrl(from, winFlipURL, {
							method: 'get'
						}, stickerConfig)
						await kill.reply(from, mess.flipwin(iFlip) + ` "${argl[0]}".`, id)
						if (randEven.eventOnline && randEven.eventType == 'coin') {
							iFlip = parseInt(tools('others').randomNumber(iFlip, iFlip*randEven.events[randEven.eventIndex].multiplier)) /* Efeito de evento aleatório */
						}
						tools('gaming').addValue(sender.id, Number(iFlip), nivel, chatId, 'coin')
					} else if (argl[0] == 'coroa' || argl[0] == 'cara') {
						await kill.reply(from, mess.fliplose(iFlip) + ` "${argl[0]}".`, id)
						tools('gaming').addValue(sender.id, Number(-iFlip), nivel, chatId, 'coin')
					} else await kill.reply(from, mess.fliphow(), id)
					if (objconfig.noLimits == 0) return tools('gaming').addLimit(sender.id, daily, chatId, 'games')
				break

				case 'cassino':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					if (tools('gaming').getLimit(sender.id, daily, chatId, false, 'games')) return await kill.reply(from, mess.limitgame(), id)
					const gamerCas = parseInt(tools('gaming').getValue(sender.id, nivel, chatId, 'coin'))
					if (isNaN(args[0]) || !tools('others').isInt(args[0]) || Number(args[0]) >= gamerCas) return await kill.reply(from, mess.gaming(gamerCas), id)
					var iCass = Math.abs(parseInt(tools('others').randomNumber(Number(config.Iris_Coin) + Number(args[0]), Number(args[0]) * 1.5) / Number(config.Max_Divider_Win)))
					var cassin = ['- 🍒 ', '- 🎃 ', '- 🍐 ']
					var cassinend = tools('others').randVal(cassin) + tools('others').randVal(cassin) + tools('others').randVal(cassin) + '-'
					if (cassinend == '- 🍒 - 🍒 - 🍒 -' || cassinend == '- 🍐 - 🍐 - 🍐 -' || cassinend == '- 🎃 - 🎃 - 🎃 -') {
						if (randEven.eventOnline && randEven.eventType == 'coin') {
							iCass = parseInt(tools('others').randomNumber(iCass, iCass*randEven.events[randEven.eventIndex].multiplier)) /* Efeito de evento aleatório */
						}
						tools('gaming').addValue(sender.id, Number(iCass), nivel, chatId, 'coin')
						await kill.reply(from, mess.caswin(cassinend, Number(iCass)), id)
					} else {
						tools('gaming').addValue(sender.id, Number(-iCass), nivel, chatId, 'coin')
						await kill.reply(from, mess.caslose(cassinend, Number(iCass)), id)
					}
					if (objconfig.noLimits == 0) return tools('gaming').addLimit(sender.id, daily, chatId, 'games')
				break

				case 'poll':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					if (argl[0] == '-delete') {
						tools('others').clearFile(pollfile, 1000)
						await kill.reply(from, `Votação cancelada e excluída.`, id)
					} else await tools('poll').get(kill, message, pollfile)
				break

				case 'vote':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					await tools('poll').vote(kill, message, args[0], pollfile)
				break

				case 'newpoll':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					await tools('poll').create(kill, message, pollfile, arg.split('|'))
				break

				case 'ins':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					let isAdminOrVIP = isGroupAdmins || isOwner || Can_Run_CMD(cmd) ? true : false
					await tools('poll').add(kill, message, Sliced_Body, pollfile, isAdminOrVIP)
				break

				case 'macaco':
				case 'monkey':
					await kill.sendFileFromUrl(from, `https://source.unsplash.com/featured/?monkey,monkey`, "result.jpg", "🙏\n~Brazil loves monkey soup~.", id)
				break

				case 'ball':
					const ball = await axios.get('https://nekos.life/api/v2/img/8ball')
					await kill.sendStickerfromUrl(from, ball.data.url, {
						method: 'get'
					}, stickerConfig)
				break

				case 'cafune':
					const cfnean = await axios.get(`https://nekos.life/api/v2/img/${tools('others').randVal(["pat", "cuddle"])}`)
					if (cfnean.data.url.endsWith('.gif')) {
						await tools('ffmpeg').resize(cfnean.data.url, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, cfnean.data.url, stickerConfig)
				break

				case 'quack':
					const patu = await axios.get('https://nekos.life/api/v2/img/goose')
					await kill.sendFileFromUrl(from, patu.data.url, '', '', id)
				break

				case 'poke':
					const pokean = await axios.get('	http://api.nekos.fun:8080/api/poke')
					if (pokean.data.image.endsWith('.gif')) {
						await tools('ffmpeg').resize(pokean.data.image, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, pokean.data.image, stickerConfig)
				break

				case 'cocegas':
					const cocegas = await axios.get('https://nekos.life/api/v2/img/tickle')
					if (cocegas.data.url.endsWith('.gif')) {
						await tools('ffmpeg').resize(nekons.data.url, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, cocegas.data.url, stickerConfig)
				break

				case 'food':
					const feed = await axios.get('https://nekos.life/api/v2/img/feed')
					await kill.sendStickerfromUrl(from, feed.data.url, stickerConfig)
				break

				case 'baka':
					let bakaYaro = await axios.get("http://api.nekos.fun:8080/api/baka")
					if (bakaYaro.data.image.endsWith('.gif')) {
						await tools('ffmpeg').resize(bakaYaro.data.image, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, bakaYaro.data.image, stickerConfig)
				break

				case 'lizard':
					const lizard = await axios.get('https://nekos.life/api/v2/img/lizard')
					await kill.sendFileFromUrl(from, lizard.data.url, '', '', id)
				break

				case 'duck':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					await kill.reply(from, mess.wait(), id)
					ddg.search({
						q: Sliced_Body,
						max: config.Search_Results
					}, async (err, urls) => {
						if (err) return await kill.reply(from, mess.noresult(), id)
						await kill.reply(from, '🦆 - ' + urls.join('\n\n🦆 - '), id)
					})
				break

				case 'clima':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'city names/nomes de cidade/nombres de ciudad.', id)
					const clima = await axios.get(`https://pt.wttr.in/${encodeURIComponent(Sliced_Body)}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)
					await kill.sendFileFromUrl(from, `https://wttr.in/${encodeURIComponent(Sliced_Body)}.png`, '', mess.wttr(clima), id)
				break

				case 'boy':
					await kill.sendFileFromUrl(from, 'https://source.unsplash.com/featured/?boy,man', "result.jpg", "😍", id)
				break

				case 'aptoide':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'app name/Nome do App/Nombre de aplicación.', id)
					const aptoide = await axios.get(`https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(Sliced_Body)}&trusted=true`)
					if (aptoide.data.datalist.total == 0) return await kill.reply(from, mess.noresult(), id)
					await kill.sendFileFromUrl(from, `${aptoide.data.datalist.list[0].graphic}`, 'aptoide.png', mess.aptoide(aptoide.data.datalist.list[0], (aptoide.data.datalist.list[0].size / 1048576).toFixed(1)), id)
				break

				case 'girl':
					await kill.sendFileFromUrl(from, 'https://source.unsplash.com/featured/?girl,woman', "result.jpg", "😍", id)
				break

				case 'anime':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'anime name/nome do anime/nombre de anime.', id)
					const getAnime = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${encodeURIComponent(Sliced_Body.replace('-orig', ''))}&limit=1`)
					if (getAnime.data.status == 404 || getAnime.data.results[0] == '') return await kill.sendFileFromUrl(from, errorurl, 'error.png', mess.noresult())
					if (region == 'en' || arks.includes('-orig')) return await kill.sendFileFromUrl(from, `${getAnime.data.results[0].image_url}`, 'anime.jpg', `✔️ - Is that?\n\n✨️ *Title:* ${getAnime.data.results[0].title}\n\n🎆️ *Episode:* ${getAnime.data.results[0].episodes}\n\n💌️ *Rating:* ${getAnime.data.results[0].rated}\n\n❤️ *Note:* ${getAnime.data.results[0].score}\n\n💚️ *Synopsis:* ${getAnime.data.results[0].synopsis}\n\n🌐️ *Link*: ${getAnime.data.results[0].url}`, id)
					await translate(getAnime.data.results[0].synopsis, {
						to: region
					}).then(async (syno) => await kill.sendFileFromUrl(from, `${getAnime.data.results[0].image_url}`, 'anime.jpg', mess.getanime(syno.text, getAnime), id))
				break

				case 'manga':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'manga name/nome do manga/nombre de manga.', id)
					const getManga = await axios.get(`https://api.jikan.moe/v3/search/manga?q=${encodeURIComponent(Sliced_Body.replace('-orig', ''))}&limit=1`)
					if (getManga.data.status == 404 || getManga.data.results[0] == '') return await kill.sendFileFromUrl(from, errorurl, 'error.png', mess.noresult())
					if (region == 'en' || arks.includes('-orig')) return await kill.sendFileFromUrl(from, `${getManga.data.results[0].image_url}`, 'manga.jpg', `✔️ - Is that?\n\n✨️ *Title:* ${getManga.data.results[0].title}\n\n🎆️ *Chapters:* ${getManga.data.results[0].chapters}\n\n💌️ *Volumes:* ${getManga.data.results[0].volumes}\n\n❤️ *Note:* ${getManga.data.results[0].score}\n\n💚️ *Synopsis:* ${getManga.data.results[0].synopsis}\n\n🌐️ *Link*: ${getManga.data.results[0].url}`, id)
					await translate(getManga.data.results[0].synopsis, {
						to: region
					}).then(async (syno) => await kill.sendFileFromUrl(from, `${getManga.data.results[0].image_url}`, 'manga.jpg', mess.getmanga(syno.text, getManga), id))
				break

				case 'nh':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					await hentao(args, kill, message)
				break

				case 'profile':
				case 'perfil':
					if (isGroupMsg) {
						await kill.reply(from, mess.wait(), id)
						var qmid = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : sender.id)
						let userGame = tools('gaming').getValue(qmid, nivel, chatId, null)
						let pfp = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
						var namae = (quotedMsg ? quotedMsgObj.sender.pushname : (mentionedJidList.length !== 0 ? await kill.getContact(mentionedJidList[0]).pushname : pushname)) || "Censored by Government"
						if (sesConfig.Multi_Devices == false) {
							var sts = await kill.getStatus(qmid)
							let status = sts.status == '' || sts.status == '401' ? sts.status = '' : sts.status = `\n\n💌️ *Frase do recado?*\n${sts.status}`
						} else var status = ''
						let myGroupS = await kill.getAllGroups()
						let samePlaces = '\n👪 *Clã:* '
						for (let i of myGroupS) {
							if (i.groupMetadata.participants.map(m => m.id.user).includes(qmid.replace(/@c.us/gim, ''))) {
								samePlaces += `\n➸ ${i.formattedTitle}`
							}
						}
						let maridaOn = ''
						if (married['all'].includes(qmid)) {
							let theMarry = Object.keys(married['persons']).filter(p => married['persons'][p].love == qmid || married['persons'][p].request == qmid)
							if (theMarry.length >= 1) {
								if (qmid == married['persons'][theMarry[0]].request) {
									var isMarried = married['persons'][theMarry[0]].love
								} else if (qmid == married['persons'][theMarry[0]].love) {
									var isMarried = married['persons'][theMarry[0]].request
								} else var isMarried = ''
								if (isMarried !== '') {
									let getMarryN = await kill.getContact(isMarried)
									maridaOn = '💑 Casado/a com '+ ((getMarryN == null || getMarryN.pushname == null) ? `Nome Desconhecido -> wa.me/${isMarried.replace(/@c.us/gim, '')}` : `${getMarryN.pushname} -> wa.me/${isMarried.replace(/@c.us/gim, '')}`)
								}
							}
						}
						let profDetail = {
							"adm": (groupAdmins.includes(qmid) ? tools('others').yesAwnsers() : tools('others').noAwnsers()),
							"mute": (functions.mute.includes(qmid) ? tools('others').yesAwnsers() : tools('others').noAwnsers()),
							"block": (blockNumber.includes(qmid) ? tools('others').yesAwnsers() : tools('others').noAwnsers()),
							"xp": userGame.xp,
							"msg": userGame.msg,
							"levelexp": tools('gaming').LevelEXP(userGame.level),
							"peolvl": tools('gaming').getPatent(userGame.level),
							"coin": userGame.coin,
							"rubi": userGame.rubi,
							"dima": userGame.dima,
							"guild": userGame.guild,
							"tag": tools('others').getRandLine(1, './lib/config/Utilidades/porn.txt')[0],
							"arma": tools('others').getRandLine(1, './lib/config/Utilidades/armas.txt')[0],
							"isp": tools('others').getRandLine(1, './lib/config/Utilidades/frases.txt')[0],
							"learn": tools('others').getRandLine(1, './lib/config/Utilidades/curiosidades.txt')[0],
							"corno": tools('others').getRandLine(1, './lib/config/Utilidades/corno.txt')[0],
							"custom": (Object.keys(custom).includes(qmid) ? `\n\n🌟 *Nota:* ${custom[qmid]['msg']}` : ''),
							"fuckLife": (tools('others').getRandLine(1, './lib/config/Utilidades/fml.txt')[0]),
							"godIsEvil": (tools('others').getRandLine(1, './lib/config/Utilidades/biblia.txt')[0]),
							"neverKiss": (tools('others').getRandLine(1, './lib/config/Utilidades/cantadas.txt')[0])
						}
						let textsTrans = `📢 *Inspire-se:* ${profDetail.isp}‎\n\n💡 *Aprenda:* ${profDetail.learn}‎\n\n🐏 *Versículo:* ${profDetail.godIsEvil}\n\n🔮 *Futuro:* ${profDetail.fuckLife}‎\n\n🌺 *Cantada:* ${profDetail.neverKiss}`
						if (region !== 'en') {
							textsTrans = await tools('others').translate(textsTrans)
						}
						let profileSend = mess.profile(namae, profDetail.msg, profDetail.adm, profDetail.mute, profDetail.block, status, userGame.level, profDetail.xp, profDetail.levelexp, profDetail.peolvl) + `\n\n💴 *Í-Coin*: ${profDetail.coin}\n\n🔶 - ${profDetail.rubi} Rubis\n\n💎 - ${profDetail.dima} Diamantes\n\n🏷️ *TAG:* #${profDetail.tag}‎\n\n⚔️ *Guilda:* ${profDetail.guild}\n\n❇️ *Arma:* ${profDetail.arma}‎\n${textsTrans}\n🐂 *Tipo:* ${profDetail.corno}\n\n${profDetail.custom}${maridaOn}\n${samePlaces}`
						await kill.sendFileFromUrl(from, pfp[0], 'pfo.jpg', profileSend, id).catch(async () => {
							await kill.reply(from, profileSend, id)
						})
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'brainly':
					const brain = new Brainly(region)
					let resBrainl = await brain.searchWithMT(region, Sliced_Body)
					if (resBrainl.length == 0) return await kill.reply(from, mess.noresult(), id)
					if (resBrainl[0].question.attachments.length > 0) {
						await kill.sendFileFromUrl(from, resBrainl[0].question.attachments[0], 'brainly.jpg', mess.brainlyres(resBrainl[0].question), id)
					} else await kill.reply(from, mess.brainlyres(resBrainl[0].question), id)					
				break

				case 'store':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'app name/Nome do App/Nombre de aplicación.', id)
					await kill.reply(from, mess.wait(), id)
					let storeInfo = await store.search(Sliced_Body.replace('-orig', ''))
					let stsp = await store.getExtendedInfo(storeInfo.results[0].link)
					if (region == 'en' || arks.includes('-orig')) return await kill.sendFileFromUrl(from, stsp.icon, '', mess.store(stsp, stsp.description), id)
					await translate(stsp.description, {
						to: region
					}).then(async (playst) => await kill.sendFileFromUrl(from, stsp.icon, '', mess.store(stsp, playst), id))
				break

				case 'search':
					if (isType('image')) {
						await kill.reply(from, mess.searchanime(), id)
						let mediaData = await decryptMedia(encryptMedia)
						let sAnimeH = await tools('cloud').upload(mediaData)
						const animeFind = await axios.get(`https://api.trace.moe/search?anilistInfo&url=${sAnimeH}`)
						await kill.sendText(from, animeFind.data.result[0].filename + '\n\n' + mess.sanimetk(animeFind.data))
						await kill.sendFileFromUrl(from, animeFind.data.result[0].video, `${animeFind.data.result[0].filename}`, '', id)
					} else await kill.sendFileFromUrl(from, errorurl, 'error.png', mess.searchanime() + '\n\n' + mess.onlyimg())
				break

				case 'ptt':
					if (isType('audio') || isType('ptt')) {
						let mediaData = await decryptMedia(encryptMedia)
						await kill.sendPtt(from, tools('others').dataURI(quotedMsgObj.mimetype, mediaData), '', id)
					} else kill.reply(from, mess.onlyaudio(), id)
				break

				case 'get':
					if (isType('image') || isType('audio') || isType('ptt') || isType('video') || isType('sticker') || isType('image/gif') || quotedMsgObj || isMedia) {
						let mediaData = await decryptMedia(encryptMedia)
						await kill.sendFile(from, tools('others').dataURI(quotedMsgObj.mimetype, mediaData), 'resend.'+quotedMsgObj.mimetype, '', id)
					} else kill.reply(from, mess.onlymidia(), id)
				break

				case 'adms':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					await kill.sendTextWithMentions(from, `═✪〘 🎻 - ADEMIROS - 🐂 〙✪═​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n- @${groupAdmins.toString().replace(/@c.us/g, '').replace(/,/g, '\n- @')}\n\n═✪〘 ❤️ - ${name} - 📢 〙✪═`)
				break

				case 'groupinfo':
				case 'info':
					let checkHvGp = (await kill.iAmAdmin()).map(g => typeof g == 'object' ? g._serialized : g)
					if (!isGroupMsg && args.length !== 0 && !checkHvGp.includes(argl[0]) || !isGroupMsg && args.length == 0 || checkHvGp.length == 0) return await kill.reply(from, mess.sogrupo(), id)
					chatId = checkHvGp.includes(argl[0]) ? argl[0] : chatId
					var nmDes = (await kill.getAllGroups()).filter(h => h.id == chatId)[0]
					var getAdmins = await kill.getGroupAdmins(chatId)
					let admgp = ''
					for (let admon of getAdmins) {
						let adminsls = await kill.getContact(admon)
						if (!isGroupMsg && isOwner) {
							admgp += (adminsls == null || adminsls.pushname == null) ? `\nNome Desconhecido -> [wa.me/${admon.replace(/@c.us/g, '')}]\n` : `\n${adminsls.pushname} -> [wa.me/${admon.replace(/@c.us/g, '')}]\n`
						} else admgp += (adminsls == null || adminsls.pushname == null) ? `\nNome Desconhecido\n` : `\n${adminsls.pushname}\n`
					}
					var donodeGp = await kill.getContact(nmDes.groupMetadata.descOwner._serialized)
					var gpOwner = (donodeGp == null || donodeGp.pushname == null) ? `??? - Top secret name` : `${donodeGp.pushname}`
					gpOwner = !isGroupMsg && isOwner ? gpOwner + ` - [wa.me/${nmDes.groupMetadata.descOwner.user}]` : gpOwner
					var welgrp = isActivated('welcome') ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					var fakegp = isActivated('fake') ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					var bklistgp = isActivated('blacklist') ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					var xpgp = isActivated('rank') ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					var slcegp = isActivated('mute') ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					var ngrp = isActivated('nsfw') ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					var autostk = isActivated('autosticker') ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					var atpngy = isActivated('antiporn') ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					var atlka = isActivated('antilinks') ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					var anttra = isActivated('antitravas') ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					var timeCreate = typeGI => moment(Number(nmDes.groupMetadata[typeGI].toString().padEnd(moment.now().toString().length, '0'))).format("HH:mm:ss • YYYY-MM-DD")
					var grouppic = await kill.getProfilePicFromServer(chatId)
					var gpDescT = (chatId == from || !isGroupMsg && isOwner ? nmDes.groupMetadata.desc : mess.onlyDescPV()) + `\n\n⏱️ ${mess.lastEdit()} -> ${timeCreate('descTime')}`
					var pfp = grouppic.includes('ERR') || grouppic == null || typeof grouppic == 'object' || !tools('others').isUrl(grouppic) ? errorurl : grouppic
					var messGPI = ' ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.groupinfo((nmDes.name || nmDes.formattedTitle), nmDes.participantsCount, welgrp, atpngy, atlka, anttra, xpgp, fakegp, bklistgp, slcegp, autostk, ngrp, gpDescT, gpOwner, admgp) + `\n🆔 ID do Grupo -> ${chatId}\n\n📅 Criado as -> ${timeCreate('creation')}`
					if (!isGroupMsg && isOwner && getAdmins.includes(botNumber) && getAdmins.includes(botNumber)) {
						let gpLinkFO = await kill.getGroupInviteLink(chatId)
						messGPI += `\n🔗 Link do grupo -> ${gpLinkFO}`
					}
					await kill.sendFileFromUrl(from, pfp, 'group.png', messGPI, id)
				break

				case 'chefe':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					await kill.sendTextWithMentions(from, `👉 @${chat.groupMetadata.owner}`)
				break

				case 'wame':
					let wameSes = [sender.id].concat(quotedMsg ? new Array(quotedMsgObj.sender.id) : (mentionedJidList.length !== 0 ? mentionedJidList : new Array(botNumber)))
					await kill.sendTextWithMentions(from, Array.from(new Set(wameSes)).map(w => `📞 - https://wa.me/${w.replace('@c.us', '')} - @${w.replace('@c.us', '')} | [${w.replace('@c.us', '')}]\n\n`).join(''))
				break

				case 'maps':
					if (Default_APIS.Here_APP_ID !== APIS.Here_APP_ID && Default_APIS.Here_APP_Code !== APIS.Here_APP_Code) {
						if (args.length == 0) return await kill.reply(from, mess.noargs() + 'city names/nomes de cidade/nombres de ciudad.', id)
						await kill.sendImage(from, `https://image.maps.api.here.com/mia/1.6/mapview?app_id=${APIS.Here_APP_ID}&app_code=${APIS.Here_APP_Code}&ci=${encodeURIComponent(Sliced_Body)}&h=800&w=800&t=3`, '', `*📍 ${Sliced_Body.toUpperCase()}*`)
					} else return await kill.reply(from, "Meu dono não configurou este comando, não posso executar pois causaria erros graves.", id)
				break

				case 'sip':
					if (args.length !== 1) return await kill.reply(from, mess.noargs() + 'IPV4 (ex: 8.8.8.8).', id)
					const ip = await axios.get(`https://ipwhois.app/json/${encodeURIComponent(Sliced_Body)}`)
					if (ip.data.latitude == null) return await kill.reply(from, mess.noresult(), id)
					await kill.sendLocation(from, `${ip.data.latitude}`, `${ip.data.longitude}`, '')
					await kill.reply(from, mess.sip(ip) + '\n\n' + 'Searching place photo - Buscando foto do local...', id)
					await kill.sendFileFromUrl(from, `https://maps.googleapis.com/maps/api/streetview?size=800x800&location=${ip.data.latitude},%20${ip.data.longitude}&sensor=false&key=${APIS.API_Google_Maps}`, id)
				break

				case 'scep':
					if (!region == 'pt') return await kill.reply(from, 'Brazil only/Brasil solamente!', id)
					if (args.length !== 1 || Sliced_Body.length > 8) return await kill.reply(from, mess.noargs() + 'CEP (ex: 03624090).', id)
					const viacep = await axios.get(`https://viacep.com.br/ws/${encodeURIComponent(Sliced_Body)}/json/`)
					if (viacep.data.erro) return await kill.reply(from, mess.noresult(), id)
					await kill.reply(from, mess.scep(viacep), id)
					await axios.get(`https://brasilapi.com.br/api/cep/v2/${args[0]}`).then(async (cep) => {
						await kill.sendLocation(from, `${cep.data.location.coordinates.latitude}`, `${cep.data.location.coordinates.longitude}`, `${cep.data.street}, ${cep.data.city}`)
					}).catch(async (error) => {
						await kill.reply(from, `[${error.response.data.name} - ${error.response.data.type}]\n\n${error.response.data.message}\n\n` + error.response.data.errors.map(res => `${res.service.toUpperCase()} -> ${res.message}\n\n`).join(''), id)
					})
				break

				case 'random':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					await kill.sendTextWithMentions(from, `═✪〘 👉 - ${Sliced_Body} - 🐂 〙✪═ \n\n@${randomMember.replace(/@c.us/g, '')}`)
				break

				case '3d':
					if (args.length == 0 || arks.length >= 16) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.\n\nMax: 10 letras/letters.', id)
					await kill.reply(from, mess.wait() + '\n\n20+ s.', id)
					try {
						await maker.textpro(tools('others').randVal(["https://textpro.me/3d-gradient-text-effect-online-free-1002.html", "https://textpro.me/3d-box-text-effect-online-880.html"]), Sliced_Body).then(async (data) => await kill.sendFileFromUrl(from, data, 'textpro.jpg', '', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'slogan':
					if (args.length == 0 || arks.length >= 16) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.\n\nMax: 10 letras/letters.', id)
					await kill.reply(from, mess.wait() + '\n\n20+ s.', id)
					try {
						await maker.textpro("https://textpro.me/1917-style-text-effect-online-980.html", Sliced_Body).then(async (data) => await kill.sendFileFromUrl(from, data, 'textpro.jpg', '', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break
				
				case 'niver':
					if (args.length == 0) return await kill.reply(from, mess.niverBirth(), id)
					if (Object.keys(functions.birthdays).includes(sender.id)) return await kill.reply(from, mess.cannotChange(), id)
					functions.birthdays[sender.id] = {
						"date": moment(args[0], 'DD/MM/YYYY').format('DD/MM'),
						"year": moment(args[0], 'DD/MM/YYYY').format('YYYY'),
						"last_check": "never"
					}
					fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
					await kill.reply(from, mess.niverAdded(), id)
				break

				case 'gaming':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					await kill.reply(from, mess.wait(), id)
					await kill.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/gaming?text=${Sliced_Body}`, '', '', id)
				break

				case 'thunder':
					if (args.length == 0 || arks.length >= 16) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.\n\nMax: 10 letras/letters.', id)
					await kill.reply(from, mess.wait() + '\n\n20+ s.', id)
					try {
						await maker.textpro("https://textpro.me/thunder-text-effect-online-881.html", Sliced_Body).then(async (data) => await kill.sendFileFromUrl(from, data, 'textpro.jpg', '', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'light':
					if (args.length == 0 || arks.length >= 16) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.\n\nMax: 10 letras/letters.', id)
					await kill.reply(from, mess.wait() + '\n\n20+ s.', id)
					try {
						await maker.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", Sliced_Body).then(async (data) => await kill.sendFileFromUrl(from, data, 'textpro.jpg', '', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'wolf':
					if (args.length < 2 && !arks.includes('|')) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.' + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await kill.reply(from, 'Max: 10 letras/letters p/frase - phrase.', id)
					await kill.reply(from, mess.wait() + '\n\n20+ s.', id)
					try {
						await maker.textpro(tools('others').randVal(["https://textpro.me/create-wolf-logo-black-white-937.html", "https://textpro.me/create-wolf-logo-galaxy-online-936.html"]), arg.split('|')).then(async (data) => await kill.sendFileFromUrl(from, data, 'textpro.jpg', '', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'neon':
					if (args.length == 0 || arks.length >= 16) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.\n\nMax: 10 letras/letters.', id)
					await kill.reply(from, mess.wait() + '\n\n20+ s.', id)
					try {
						await maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", Sliced_Body).then(async (data) => await kill.sendFileFromUrl(from, data, 'textpro.jpg', '', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'retro':
					if (args.length >= 4 && arks.includes('|')) {
						if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10 || arg.split('|')[2].length >= 10) return await kill.reply(from, 'Max: 10 letras/letters p/frase - phrase.', id)
						await kill.reply(from, mess.wait() + '\n\n20+ s.', id)
						try {
							await maker.textpro("https://textpro.me/80-s-retro-neon-text-effect-online-979.html", arg.split('|')).then(async (data) => await kill.sendFileFromUrl(from, data, 'textpro.jpg', '', id))
						} catch (error) {
							tools('others').reportConsole(cmd, error)
							await kill.reply(from, mess.fail(cmd, error, time), id)
						}
					} else await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.' + '\n\n' + mess.argsbar() + 'use 2 "|".', id)
				break

				case 'porn':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const porn = await axios.get('https://meme-api.herokuapp.com/gimme/porn')
					await kill.sendFileFromUrl(from, `${porn.data.url}`, '', `${porn.data.title}`, id)
				break

				case 'lesbian':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const lesb = await axios.get('https://meme-api.herokuapp.com/gimme/lesbians')
					await kill.sendFileFromUrl(from, `${lesb.data.url}`, '', `${lesb.data.title}`, id)
				break

				case 'pgay':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const gay = await axios.get('https://meme-api.herokuapp.com/gimme/gayporn')
					await kill.sendFileFromUrl(from, `${gay.data.url}`, '', `${gay.data.title}`, id)
				break

				case 'logo':
					if (args.length == 0 || arks.length >= 16) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.\n\nMax: 10 letras/letters.', id)
					await kill.reply(from, mess.wait() + '\n\n20+ s.', id)
					try {
						await maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", Sliced_Body).then(async (data) => await kill.sendFileFromUrl(from, data, 'textpro.jpg', '', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'pornhub':
					if (args.length >= 2 && arks.includes('|')) {
						if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await kill.reply(from, 'Max: 10 letras/letters p/frase - phrase.', id)
						await kill.reply(from, mess.wait() + '\n\n20+ s.', id)
						try {
							await maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", arg.split('|')).then(async (data) => await kill.sendFileFromUrl(from, data, 'textpro.jpg', '', id))
						} catch (error) {
							tools('others').reportConsole(cmd, error)
							await kill.reply(from, mess.fail(cmd, error, time), id)
						}
					} else await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.' + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
				break

				case 'meme':
					if (isType('image') && args.length >= 2 && arks.includes('|')) {
						let mediaData = await decryptMedia(encryptMedia)
						await kill.sendFileFromUrl(from, `https://api.memegen.link/images/custom/${encodeURIComponent(arg.split('|')[0])}/${encodeURIComponent(arg.split('|')[1])}.png?background=${await tools('cloud').upload(mediaData)}`, 'image.png', '', id).catch(async (error) => {
							tools('others').reportConsole(cmd, error)
							await kill.reply(from, mess.upfail() +'\n\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​'+mess.fail(cmd, error, time), id)
						})
					} else await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.' + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
				break
				
				case 'quote':
					let quoSplit = arks.includes('|') ? arg.split('|').map(o => o.replace(/^ /g, '').replace(/ $/g, '')) : [0]
					if (quoSplit.length >= 4 && isType('image')) {
						let mediaData = await decryptMedia(encryptMedia)
						let quoteImageU = await tools('cloud').upload(mediaData)
						let quoteMaker = await axios.get(`https://web-series-quotes-api.deta.dev/pic/custom?text=${encodeURIComponent(quoSplit[4])}&image_url=${encodeURIComponent(quoteImageU)}&text_color=${encodeURIComponent(quoSplit[0])}&text_size=${encodeURIComponent(quoSplit[3])}&x=${encodeURIComponent(quoSplit[1])}&y=${encodeURIComponent(quoSplit[2])}`, {
							responseType: 'arraybuffer'
						}).then(response => tools('others').dataURI('image/png', Buffer.from(response.data, 'binary')))
						await kill.sendFile(from, quoteMaker, 'image.png', '<3', id)
					} else return await kill.reply(from, mess.quoteCreation(), id)
				break

				case 'ping':
					const timeStartCmd = moment.now()
					const rTime = seconds => `${Math.floor(seconds / (60*60))} horas | ${Math.floor(seconds % (60*60) / 60)} minutos | ${Math.floor(seconds % 60)} segundos - HH:MM:SS`
					let myInfo = await kill.getMe()
					if (myInfo.phone == null) myInfo.phone = {}
					let loadMess = await kill.getAmountOfLoadedMessages()
					let allGroupsP = await kill.getAllGroups()
					let allChatId = await kill.getAllChatIds()
					let isPlugged = (sesConfig.Multi_Devices ? false : await kill.getIsPlugged()) ? 'Sim' : 'Não'
					let waver = await kill.getWAVersion()
					let sesInfo = await kill.getSessionInfo()
					let neofInfo = await shell.exec(`bash lib/functions/neofetch --stdout`, {
						silent: true
					})
					neofInfo = neofInfo.stdout == '' ? '' : `\n\n -- Neofetch Info --\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n${neofInfo.stdout}`
					let finalPing = mess.stats(rTime(process.uptime()), rTime(os.uptime()), `${Math.floor(os.totalmem() / 1024 / 1024) - Math.floor(os.freemem() / 1024 / 1024)} MB / ${Math.floor(os.totalmem() / 1024 / 1024)} MB - [${Math.floor(os.freemem() / 1024 / 1024)} MB Livres]`, os, loadMess, allGroupsP, allChatId, procTime, waver, isPlugged, myInfo, sesConfig.Multi_Devices, sesInfo, (moment.duration(moment.now() - timeStartCmd).asSeconds())) + neofInfo
					await kill.reply(from, finalPing, id)
				break

				case 'join':
					if (args.length == 0 || !/chat.whatsapp.com/gim.test(args[0]) && !/(https?:\/\/)?chat\.whatsapp\.com\/(?:invite\/)?([a-zA-Z0-9_-])+/gim.test(args[0]) && !args[0].includes('chat.whatsapp.com')) return await kill.reply(from, mess.nolink(), id)
					const tGr = await kill.getAllGroups()
					const check = await kill.inviteInfo(args[0])
					if (tGr.length > config.Max_Groups) return await kill.reply(from, mess.cheio(tGr), id)
					if (check.groupMetadata.size < config.Min_Membros) return await kill.reply(from, mess.noreq(check.size), id)
					if (check.status == 200) {
						var sButid = 'Nothing here sir'
						if (sesConfig.Multi_Devices == false) {
							await kill.sendButtons(from, mess.enterGroupHeader(), [
								{
									"id": "1",
									"text": "✔️ Sim ✔️"
								},
								{
									"id": "2",
									"text": "✖️ Não ✖️"
								}
							], mess.enterGroupBody(pushname, sender, check), mess.enterGroupFooter()).then(b => sButid = b)
						} else await kill.sendLinkWithAutoPreview(config.Owner[0], args[0], `${mess.enterGroupHeader()}\n\n${mess.enterGroupBody(pushname, sender, check)}\n\n${mess.enterGroupFooter()}`)
						await kill.reply(from, mess.enterGroupOwner(), id)
						var filter = msgw => tools('others').filterMsg(msgw, config.Owner[0], config.Owner[0], sButid, /sim|yes|no|nao/gi)
						await kill.awaitMessages(config.Owner[0], filter, {
							max: 1,
							time: 3.6e+6,
							errors: ['time']
						}).then(async collected => {
							if (/sim/gi.test(removeAccents(Array.from(collected)[0][1].body))) {
								await kill.reply(from, `Meu dono aceitou a entrada, esta foi a resposta dele:\n\n`+Array.from(collected)[0][1].body, id)
								await kill.joinGroupViaLink(args[0])
							} else if (/nao/gi.test(removeAccents(Array.from(collected)[0][1].body))) {
								await kill.reply(from, `Meu dono recusou a entrada, esta foi a resposta dele:\n\n`+Array.from(collected)[0][1].body, id)
							}
						}).catch(async collected => await kill.reply(from, `Não irei entrar pois meu dono não respondeu, tente contata-lo nos meios mostrados acima.`, id))
					} else await kill.reply(from, mess.nolink(), id)
				break

				case 'placa':
					try {
						if (!region == 'pt' && !arks.includes('-force')) return await kill.reply(from, mess.onlyBrazil('"${prefix}Placa -force <Value>"'), id)
						if (isType('image')) {
							let mediaData = await decryptMedia(encryptMedia)
							const P_Scan = await tools('OCR').scanImage(cmd, mediaData)
							if (P_Scan.code == 'Emergence') {
								await kill.reply(from, mess.fail(cmd, P_Scan.result, time), id)
							} else if (P_Scan.code == true) {
								if (P_Scan.result.length > 7) return await kill.reply(from, mess.maxDigitPhoto(), id)
								let BTDID = 'Nothing here sir'
								if (sesConfig.Multi_Devices == false) {
									await kill.sendButtons(from, mess.buttonStop('Não'), [
										{
											"id": "1",
											"text": "👌 Sim 👍"
										},
										{
											"id": "2",
											"text": "⛔ Não 🚫"
										}
									], mess.buttonMiddle(), mess.scanPlate(P_Scan.result)).then(b => BTDID = b)
								} else await kill.reply(from, mess.scanPlate(P_Scan.result), id)
								var isSameVa = msgw => tools('others').filterMsg(msgw, sender.id, from, BTDID, /sim|yes|no|nao/gi)
								await kill.awaitMessages(from, isSameVa, {
									max: 1,
									time: 120000,
									errors: ['time']
								}).then(async collected => {
									if (/sim/gi.test(removeAccents(Array.from(collected)[0][1].body))) {
										await tools('buscas').carros(P_Scan.result, kill, message)
									} else await kill.reply(from, mess.selectNO("${prefix}Placa AFK1648"), id)
								})
							} else await kill.reply(from, mess.failOCR(P_Scan.result), id)
						} else {
							if (!region == 'pt' && args.length < 2 || args.length == 0) return await kill.reply(from, mess.searchCar(), id)
							let scanType = region == 'pt' ? args[0] : args[1]
							await tools('buscas').carros(scanType, kill, message)
						}
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'phcom':
					if (args.length == 0 || !arks.includes('|')) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.' + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
					await kill.reply(from, mess.wait(), id)
					let thephComP = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.phub({
						username: arg.split('|')[0].replace(mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join(' '), ''),
						message: arg.split('|')[1],
						image: thephComP[0]
					}).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `pornhub.png`, '', id))
				break

				case 'ytcom':
					if (args.length == 0 || !arks.includes('|')) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.' + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
					await kill.reply(from, mess.wait(), id)
					let theYtComP = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.youtube({
						username: arg.split('|')[0].replace(mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join(' '), ''),
						content: arg.split('|')[1],
						avatar: theYtComP[0],
						dark: false
					}).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `youtube.png`, '', id))
				break

				case 'enviar':
					if (args.length == 0 || !arks.includes('|')) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.' + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
					try {
						const sendMess = async (id, arg, type, back) => {
							if (encryptMedia) {
								let mediaData = await decryptMedia(encryptMedia)
								if (isType('video') || isType('image')) {
									await kill.sendFile(id, tools('others').dataURI(encryptMedia.mimetype, mediaData), 'file.' + encryptMedia.mimetype, `_Mensagem >_\n"${arg.split('|')[1]} "` + '\n\n_Quem enviou =_ ' + '\n*"' + typeName + '"*' + '\n\n_Como responder:_')
								} else {
									await kill.sendFile(id, tools('others').dataURI(encryptMedia.mimetype, mediaData), 'file.' + encryptMedia.mimetype, '')
									await kill.sendText(id, `_Mensagem >_\n"${arg.split('|')[1]} "` + '\n\n_Quem enviou =_ ' + '\n*"' + typeName + '"*' + '\n\n_Como responder:_')
								}
							} else await kill.sendText(id, `_Mensagem >_\n"${arg.split('|')[1]} "` + '\n\n_Quem enviou =_ ' + '\n*"' + typeName + '"*' + '\n\n_Como responder:_')
							await kill.sendText(id, `${prefix}enviar ${type} ${back} | Coloque sua resposta aqui`)
							await kill.sendText(back, mess.maked())
						}
						if (argl[0] == '-gp') {
							await sendMess(`${args[1]}@g.us`, arg, typeChat, typeId)
						} else if (argl[0] == '-pv') {
							await sendMess(`${args[1]}@c.us`, arg, typeChat, typeId)
						} else await kill.reply(from, mess.enviar(), id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.noctt() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					}
				break

				case 'loli':
					await kill.sendFileFromUrl(from, `https://media.publit.io/file/Twintails/${tools('others').randomNumber(1, 145)}.jpg`, 'loli.jpg', mess.logomgs(), id)
				break

				case 'hug':
					let hugPeo = await axios.get("https://nekos.life/api/v2/img/hug")
					if (hugPeo.data.url.endsWith('.gif')) {
						await tools('ffmpeg').resize(hugPeo.data.url, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, hugPeo.data.url, stickerConfig)
				break

				case 'baguette':
					let filterBg = isActivated('nsfw') || isActivated('antiporn') ? duck.SafetyLevels.OFF : duck.SafetyLevels.STRICT
					const getBaguette = await duck.search('anime baguette girls', filterBg)
					await kill.sendFileFromUrl(from, tools('others').randVal(getBaguette.map(c => c.image)), `baguette.jpg`, '🥖', id)
				break

				case 'dva':
					let filterDva = isActivated('nsfw') || isActivated('antiporn') ? duck.SafetyLevels.OFF : duck.SafetyLevels.STRICT
					const getDVA = await duck.search('dva overwatch', filterDva)
					await kill.sendFileFromUrl(from, tools('others').randVal(getDVA.map(c => c.image)), `dva.jpg`, '😍', id)
				break

				case 'waifu':
					const waifu3 = await axios.get(`https://waifu.pics/api/sfw/waifu`)
					await kill.sendFileFromUrl(from, waifu3.data.url, '', 'hmmm...', id)
				break

				case 'husb':
					let filterHusb = isActivated('nsfw') || isActivated('antiporn') ? duck.SafetyLevels.OFF : duck.SafetyLevels.STRICT
					const getHusb = await duck.search('husbando anime boys', filterHusb)
					await kill.sendFileFromUrl(from, tools('others').randVal(getHusb.map(c => c.image)), `husb.jpg`, '-.-', id)
				break

				case 'iecchi':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const ecchi = await axios.get('http://api.nekos.fun:8080/api/' + tools('others').randVal(["gasm", "lewd", "spank", "feet", "lesbian"]))
					if (ecchi.data.image.endsWith('.gif')) {
						await tools('ffmpeg').resize(hugPeo.data.image, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, hugPeo.data.image, stickerConfig)
				break

				case 'tits':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const rtitsc = tools('others').randVal(["tits", "BestTits", "boobs", "BiggerThanYouThought", "smallboobs", "TinyTits", "SmallTitsHugeLoad", "amazingtits"])
					const tits = await axios.get('https://meme-api.herokuapp.com/gimme/' + rtitsc)
					await kill.sendFileFromUrl(from, `${tits.data.url}`, '', `${tits.data.title}`, id)
				break

				case 'milf':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const rmilfc = tools('others').randVal(["Bbwmilf", "milf"])
					const milf1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + rmilfc)
					await kill.sendFileFromUrl(from, `${milf1.data.url}`, '', `${milf1.data.title}`, id)
				break

				case 'bdsm':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const rbdsmc = tools('others').randVal(["BDSMPics", "bdsm", "TeenBDSM"])
					const bdsm1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + rbdsmc)
					await kill.sendFileFromUrl(from, `${bdsm1.data.url}`, '', `${bdsm1.data.title}`, id)
				break

				case 'ass':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const rassc = tools('others').randVal(["CuteLittleButts", "ass", "bigasses"])
					const bowass = await axios.get('https://meme-api.herokuapp.com/gimme/' + rassc)
					await kill.sendFileFromUrl(from, `${bowass.data.url}`, '', `${bowass.data.title}`, id)
				break

				case 'pussy':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const rpussyc = tools('others').randVal(["pussy", "ass", "LegalTeens"])
					const bows1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + rpussyc)
					await kill.sendFileFromUrl(from, `${bows1.data.url}`, '', `${bows1.data.title}`, id)
				break

				case 'blowjob':
				case 'boquete':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					let blowJobs = await axios.get(`	http://api.nekos.fun:8080/api/${tools('others').randVal(["bj", "blowjob"])}`)
					if (blowJobs.data.image.endsWith('.gif')) {
						await tools('ffmpeg').resize(blowJobs.data.image, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, blowJobs.data.image, stickerConfig)
				break

				case 'feet':
				case 'pezinho':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					let feetGet = await axios.get(`http://api.nekos.fun:8080/api/feet`)
					if (feetGet.data.url.endsWith('.gif')) {
						await tools('ffmpeg').resize(feetGet.data.url, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, feetGet.data.url, stickerConfig)
				break

				case 'hard':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					let hardGet = await axios.get(`http://api.nekos.fun:8080/api/spank`)
					if (hardGet.data.image.endsWith('.gif')) {
						await tools('ffmpeg').resize(hardGet.data.image, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, hardGet.data.image, stickerConfig)
				break
				
				case 'lol':
					let lolChamp = await shell.exec(`bash lib/functions/config.sh lol ${argl[0]}`, {
						silent: true
					})
					if (lolChamp.stdout == '') {
						await kill.reply(from, mess.fail(cmd, lolChamp.stderr, time), id)
						console.log(lolChamp.stderr)
					} else {
						if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, lolChamp.stdout, id)
						await translate(lolChamp.stdout, {
							to: region
						}).then(async (champ) => await kill.reply(from, champ.text, id))
					}
				break

				case 'boobs':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					let getboobs = await axios.get(`http://api.nekos.fun:8080/api/boobs`)
					if (getboobs.data.image.endsWith('.gif')) {
						await tools('ffmpeg').resize(getboobs.data.image, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, getboobs.data.image, stickerConfig)
				break

				case 'lick':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					let getlick = await axios.get(`http://api.nekos.fun:8080/api/lick`)
					if (getlick.data.image.endsWith('.gif')) {
						await tools('ffmpeg').resize(getlick.data.image, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, getlick.data.image, stickerConfig)
				break

				case 'femdom':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const femdom = await axios.get('http://api.nekos.fun:8080/api/lesbian')
					if (femdom.data.image.endsWith('.gif')) {
						await tools('ffmpeg').resize(femdom.data.image, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, femdom.data.image, stickerConfig)
				break

				case 'futanari':
				case 'trap':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const Get_FUTA = await duck.search('anime boy cute futanari trap hentai', duck.SafetyLevels.OFF)
					await kill.sendFileFromUrl(from, tools('others').randVal(Get_FUTA.map(c => c.image)), '', '', id)
				break

				case 'masturb':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const Get_Mastu = await duck.search('anime girls cute masturb', duck.SafetyLevels.OFF)
					await kill.sendFileFromUrl(from, tools('others').randVal(Get_Mastu.map(c => c.image)), '', '', id)
				break

				case 'anal':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					let getanal = await axios.get(`http://api.nekos.fun:8080/api/cum`)
					if (getanal.data.image.endsWith('.gif')) {
						await tools('ffmpeg').resize(getanal.data.image, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, getanal.data.image, stickerConfig)
				break

				case 'randomloli':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const Get_LOLI = await duck.search('petite anime girl naked', duck.SafetyLevels.OFF)
					await kill.sendFileFromUrl(from, tools('others').randVal(Get_LOLI.map(c => c.image)), '', '', id)
				break

				case 'nsfwicon':
				case 'face':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const icon = await axios.get('http://api.nekos.fun:8080/api/gasm')
					await kill.sendImageAsSticker(from, icon.data.image, stickerConfig)
				break

				case 'truth':
					const memean = await axios.get('https://nekos.life/api/v2/img/gecg')
					await kill.sendFileFromUrl(from, memean.data.url, '', '', id)
				break

				case 'icon':
					const avatarz = await axios.get('https://nekos.life/api/v2/img/avatar')
					await kill.sendImageAsSticker(from, avatarz.data.url, stickerConfig)
				break

				case 'corno':
					let corno = tools('others').getRandLine(2, './lib/config/Utilidades/corno.txt')
					let corno2 = (quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : sender.id)).replace('@c.us', '')
					await kill.sendTextWithMentions(from, `@${corno2} é ${lvpc}%...\n\n"${corno[0]}"\n\nE nas horas vagas ${100 - lvpc}%...\n\n"${corno[1]}" 😳.`)
				break

				case 'gamemode':
					if (args.length == 0) return await kill.reply(from, mess.cors(), id)
					if (argl[0] == '0' || argl[0] == 's' || argl[0] == 'survival') {
						await kill.sendTextWithMentions(from, mess.mine(sender.id) + 'survival.')
					} else if (argl[0] == '1' || argl[0] == 'c' || argl[0] == 'creative') {
						await kill.sendTextWithMentions(from, mess.mine(sender.id) + 'creative.')
					} else if (argl[0] == '2' || argl[0] == 'a' || argl[0] == 'adventure') {
						await kill.sendTextWithMentions(from, mess.mine(sender.id) + 'adventure.')
					} else if (argl[0] == '3' || argl[0] == 'spectator') {
						await kill.sendTextWithMentions(from, mess.mine(sender.id) + 'espectador.')
					} else await kill.reply(from, mess.cors(), id)
				break

				case 'ihentai':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					let ihentai = await axios.get(`	http://api.nekos.fun:8080/api/${tools('others').randVal(["hentai", "pussy", "cum"])}`)
					if (ihentai.data.image.endsWith('.gif')) {
						await tools('ffmpeg').resize(ihentai.data.image, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, ihentai.data.image, stickerConfig)
				break

				case 'yuri':
					let filterYu = isActivated('nsfw') || isActivated('antiporn') ? duck.SafetyLevels.OFF : duck.SafetyLevels.STRICT
					const getYuri = await duck.search('yuri anime kiss', filterYu)
					await kill.sendFileFromUrl(from, tools('others').randVal(getYuri.map(c => c.image)), `yuri.jpg`, 'Pro inferno com as Fujoshis ehehe!', id)
				break

				case 'randomneko':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const nekons = await axios.get(`http://api.nekos.fun:8080/api/${tools('others').randVal(["holo", "foxgirl", "animalears", "neko", "holoero", "nsfw_neko_gif"])}`)
					if (nekons.data.image.endsWith('.gif')) {
						await tools('ffmpeg').resize(nekons.data.image, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, nekons.data.image, stickerConfig)
				break

				case 'randomwall':
					const walnime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
					await kill.sendFileFromUrl(from, walnime.data.url, '', '', id)
				break

				case 'valor':
					if (args.length !== 2) return await kill.reply(from, mess.moneyerr(), id)
					const money = await axios.get(`https://${encodeURIComponent(args[0])}.rate.sx/${encodeURIComponent(args[1])}`)
					if (/^[0-9+]/.test(money.data)) return await kill.reply(from, mess.moneyerr(), id)
					await kill.reply(from, `*${args[1]}* → *${Number(money.data).toFixed(2)}* ${args[0]}`, id)
				break

				case 'dog':
					const list = await axios.get('https://shibe.online/api/shibes')
					await kill.sendFileFromUrl(from, list.data[0], '', '🐕', id)
				break

				case 'look':
					let getLook = await axios.get(`https://nekos.life/api/v2/img/smug`)
					if (getLook.data.url.endsWith('.gif')) {
						await tools('ffmpeg').resize(getLook.data.url, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, getLook.data.url, stickerConfig)
				break

				case 'holo':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					const holo = await axios.get('http://api.nekos.fun:8080/api/holo')
					await kill.sendFileFromUrl(from, holo.data.image, '', '', id)
				break

				case 'kisu':
					let getKisu = await axios.get(`https://nekos.life/api/v2/img/kiss`)
					if (getKisu.data.url.endsWith('.gif')) {
						await tools('ffmpeg').resize(getKisu.data.url, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, getKisu.data.url, stickerConfig)
				break

				case 'tapa':
					let getSlap = await axios.get(`https://nekos.life/api/v2/img/slap`)
					if (getSlap.data.url.endsWith('.gif')) {
						await tools('ffmpeg').resize(getSlap.data.url, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, getSlap.data.url, stickerConfig)
				break

				case 'gato':
				case 'cat':
					if (args.length !== 2 || isNaN(args[0]) || isNaN(args[1])) {
						const catu = await axios.get('https://nekos.life/api/v2/img/meow')
						await kill.sendFileFromUrl(from, catu.data.url, 'gato.jpg', mess.cats(), id)
					} else await kill.sendFileFromUrl(from, `https://placekitten.com/${args[0]}/${args[1]}`, 'neko.png', 'Nekooo', id)
				break

				case 'pokemon':
					if (args.length == 0) return await kill.sendFileFromUrl(from, `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${tools('others').randomNumber(1, 898)}.png`, 'Pokemon.png', mess.nopoke(), id)
					config.Language == 'es' ? Pokemon.setLanguage('spanish') : Pokemon.setLanguage('english')
					const pokemae = await Pokemon.getPokemon(args[0])
					if (pokemae == null) return await kill.reply(from, mess.noresult(), id)
					await kill.sendFileFromUrl(from, pokemae.sprites.front_default, 'pokemon.png', mess.pokemon(pokemae, `\n➸ ${pokemae.moves.join('\n➸ ')}`), id)
				break

				case 'screenshot':
					if (Default_APIS.API_NoFlash !== APIS.API_NoFlash) {
						if (args.length == 0 || !tools('others').isUrl(args[0])) return await kill.reply(from, mess.nolink(), id)
						await kill.sendFileFromUrl(from, `https://api.apiflash.com/v1/urltoimage?access_key=${APIS.API_NoFlash}&url=${args[0]}`, 'ss.jpeg', mess.noporn(), id)
					} else return await kill.reply(from, "Meu dono não configurou este comando, não posso executar pois causaria erros graves.", id)
				break

				case 'ship':
					let shipMent = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length >= 1 ? mentionedJidList[0] : (args.length >= 1 ? args[0] : botNumber))
					let mentShip = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length >= 2 ? mentionedJidList[1] : (args.length >= 2 && argl[0] !== argl[1] ? args[1] : sender.id))
					let shipCasal = (new Array('noval', shipMent, mentShip)).map(u => '@'.concat(u.replace('@c.us', '').replace('@', '')))
					let allUsg = [botNumber, args[0], args[1], sender.id, mentionedJidList[0], mentionedJidList[1]].filter(h => h !== null)
					for (let i of allUsg) {
						if (shipCasal[1] == shipCasal[2]) {
							shipCasal[1] = '@'.concat(i.replace('@c.us', '').replace('@', ''))
						}
					}
					await kill.sendTextWithMentions(from, mess.love(shipCasal, lvpc)).catch(async () => await kill.reply(from, mess.love(shipCasal, lvpc), id))
				break

				/*Se quiser por mais pra zoar, abra o arquivo LGBT e adicione 1 por linha*/
				case 'gay':
				case 'lgbt':
					var twgui = tools('others').getRandLine(2, './lib/config/Utilidades/lgbt.txt')
					await kill.reply(from, mess.wait(), id)
					let theLgBtic = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.rainbow(theLgBtic[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `gay.png`, mess.lgbt(lvpc, twgui[0], (100 - lvpc), twgui[1]), id))
				break

				case 'chance':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					await kill.reply(from, mess.botmonkey(body, lvpc), id)
				break

				case 'kiss':
					const getMeKiss = quotedMsg ? quotedMsgObj.sender.id.replace('@c.us', '') : (mentionedJidList.length !== 0 ? mentionedJidList[0] : sender.id)
					let getKissSt = async () => {
						let getKiss = await axios.get(`https://nekos.life/api/v2/img/kiss`)
						if (getKiss.data.url.endsWith('.gif')) {
							await tools('ffmpeg').resize(getKiss.data.url, cmd, kill, message)
						} else await kill.sendStickerfromUrl(from, getKiss.data.url, stickerConfig)
						await kill.sendTextWithMentions(from, mess.kiss(sender.id, getMeKiss))
					}
					if (married['all'].includes(sender.id) || married['all'].includes(getMeKiss) && getMeKiss !== sender.id) {
						let theMarry = Object.keys(married['persons']).filter(p => married['persons'][p].love == sender.id || married['persons'][p].request == sender.id)
						let marriedPer = ''
						if (theMarry.length >= 1) {
							if (sender.id == married['persons'][theMarry[0]].request) {
								marriedPer = married['persons'][theMarry[0]].love
							} else if (sender.id == married['persons'][theMarry[0]].love) {
								marriedPer = married['persons'][theMarry[0]].request
							}
							if (marriedPer == getMeKiss) return await getKissSt()
							await kill.sendTextWithMentions(married['persons'][theMarry[0]].place, mess.partCorno(marriedPer, sender, getMeKiss))
							await kill.sendTextWithMentions(from, mess.partCornoTwo(sender, marriedPer))
						} else await kill.reply(from, mess.notBetray(), id)
					} else await getKissSt()
				break

				case 'slap':
					const getMeSlap = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : sender.id)
					let getTapa = await axios.get(`https://nekos.life/api/v2/img/slap`)
					if (getTapa.data.url.endsWith('.gif')) {
						await tools('ffmpeg').resize(getTapa.data.url, cmd, kill, message)
					} else await kill.sendStickerfromUrl(from, getTapa.data.url, stickerConfig)
					await kill.sendTextWithMentions(from, mess.tapa(sender.id, getMeSlap))
				break

				case 'getmeme':
					var thememer = region == 'pt' ? 'memesbrasil' : (region == 'en' ? 'memes' : 'SpanishMeme')
					const response = await axios.get('https://meme-api.herokuapp.com/gimme/' + thememer)
					await kill.sendFileFromUrl(from, `${response.data.url}`, 'meme.jpg', `${response.data.title}`, id)
				break

				case 'date':
				case 'data':
					if (moment.tz.names().includes(args[0])) return await kill.reply(from, mess.dateNowOn(args[0]), id)
					await kill.reply(from, mess.allDatePlace()+Timezonesw.map(tz => `"${tz}" = "${moment.tz(tz).format('llll')}"\n\n`).join(''), id)
				break

				case 'menu':
					const userMenIf = tools('gaming').getValue(sender.id, nivel, chatId, null)
					if (sesConfig.Multi_Devices == false) {
						await kill.sendButtons(from, 'Atalhos →', [
							{
								"id": "1",
								"text": "/Menut"
							},
							{
								"id": "2",
								"text": "/Admins"
							},
							{
								"id": "3",
								"text": "/Legião"
							}
						], mess.menu(pushname, time, userMenIf.msg, userMenIf.xp, tools('gaming').LevelEXP(userMenIf.level), userMenIf.level, procTime, patente))
					} else await kill.reply(from, mess.menu(pushname, time, userMenIf.msg, userMenIf.xp, tools('gaming').LevelEXP(userMenIf.level), userMenIf.level, procTime, patente), id)
					//`Todos os comandos - All Commands\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${allCommands.toString()}`
				break
				
				// Menu "atualizado" feito para ser auto construído em forma de tabela, feito por Pedro Batistop
				case 'menut':
					let menuT = args.length == 0 || !commandslist.allMenus.includes(argl[0]) ? 'menu' : argl[0]
					if (args.length !== 0 && !tools('menu').getAllMenus().includes(menuT)) return await kill.reply(from, mess.noresult(), id)
					if (isGroupMsg && !isActivated('nsfw') && menuT == 'adult') return await kill.reply(from, mess.gpadulto(), id)
					let tableCMD = tools('menu').getMenu(menuT, isActivated('nsfw'), prefix)
					if (menuT == 'menu') {
						const usrInfo = tools('gaming').getValue(sender.id, nivel, chatId, null)
						let stats = `ᐳ _Olá -_ *"${pushname}"*!\nᐳ _Dia →_ *${time}*\nᐳ _Mensagens →_ *${usrInfo.msg}*\nᐳ _XP →_ *${usrInfo.xp}* / *${tools('gaming').LevelEXP(usrInfo.level)}*\nᐳ _Level →_ *${usrInfo.level}*\nᐳ _Rubi →_ *${usrInfo.rubi}*\nᐳ _Dima →_ *${usrInfo.dima}*\nᐳ _Coin →_ *${usrInfo.coin}*\nᐳ _Guilda →_ *${usrInfo.guild}*\nᐳ _Patente →_ *${patente}*\nᐳ _Ping →_ *${procTime}* _segundos_`
						let sup = tools('menu').getMenu('suporte', true, prefix)
						await kill.reply(from, tools('others').tablefy(stats) + '\n' + tools('others').tablefy(sup.menu, sup.name) + '\n' + tools('others').tablefy(tableCMD.menu, tableCMD.name), id)
					} else await kill.reply(from, tools('others').tablefy(tableCMD.menu, tableCMD.name), id)
				break

				case 'stickers':
					await kill.reply(from, mess.stickers(), id)
				break

				case 'otaku':
					await kill.reply(from, mess.anime(), id)
				break

				case 'games':
					await kill.reply(from, mess.games(), id)
				break
				
				case 'faket':
					if (args.length < 3 || argl[0] == '-help') return await kill.reply(from, mess.howFakeTweet(), id)
					let twitImg = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					let argSplited = arg.split('|').map(o => o.replace(/^ /g, '').replace(/ $/g, ''))
					let twFaker = await axios.get(`https://some-random-api.ml/canvas/tweet?avatar=${encodeURIComponent(twitImg[0]+' ')}&comment=${encodeURIComponent(argSplited[2]+' ')}&displayname=${encodeURIComponent(argSplited[1] + ' ')}&username=${encodeURIComponent(argSplited[0]+' ')}`, {
						responseType: 'arraybuffer'
					}).then(response => tools('others').dataURI('image/png', Buffer.from(response.data, 'binary')))
					await kill.sendFile(from, twFaker, 'tweet.png', 'Twitter é uma armadilha! ~Entendam!~', id)
				break

				case 'adult':
					if (isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
					await kill.reply(from, mess.adult(), id)
				break

				case 'down':
					await kill.reply(from, mess.down(), id)
				break

				case 'dados':
					await kill.reply(from, mess.dados(), id)
				break

				case 'midia':
					await kill.reply(from, mess.midia(), id)
				break

				case 'outros':
					await kill.reply(from, mess.outros(), id)
				break

				case 'maker':
					await kill.reply(from, mess.maker(), id)
				break

				case 'tudo':
					await kill.reply(from, (mess.stickers() + '\n\n' + mess.anime() + '\n\n' + mess.games() + '\n\n' + mess.adult() + '\n\n' + mess.down() + '\n\n' + mess.dados() + '\n\n' + mess.midia() + '\n\n' + mess.outros() + '\n\n' + mess.maker()).replace(' ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​', ''), id)
				break

				/*LEMBRE-SE, REMOVER CRÈDITO È CRIME E PROIBIDO!*/
				case 'termos':
					await kill.sendFileFromUrl(from, 'https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/license.png', 'licenca.png', mess.everhost() + '\n\n' + mess.tos(), id)
					await kill.sendPtt(from, `https://www.myinstants.com/media/sounds/resident-evil-4-merchant-thank-you.mp3`, id);
				break
				/*NÃO REMOVA ESSA PARTE!*/

				case 'mac':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'mac (ex: 70:B3:D5:03:62:A1).', id)
					await kill.reply(from, mess.wait(), id)
					const maclk = await axios.get(`https://api.macvendors.com/${encodeURIComponent(Sliced_Body)}`)
					await kill.reply(from, `📱 → ${maclk.data}.`, id)
				break

				case 'converter':
				case 'conv':
					if (args == 0) return await kill.reply(from, mess.conv(), id)
					try {
						if (isNaN(args[1])) return await kill.reply(from, mess.onlynumber(), id)
						let Fisic_Convert = tools('convert').Calculate(argl[0], argl[1])
						if (Fisic_Convert == false) {
							await kill.reply(from, mess.conv(), id)
						} else await kill.reply(from, `*${args[1]}* _(${Fisic_Convert.First}) =_ *${tools('others').toLargeNumber((Fisic_Convert.Result).toString())}* _(${Fisic_Convert.Second})._\n\n_Formula ->_ *"${Fisic_Convert.Form}"*`, id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.onlynumber() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					}
				break

				case 'scnpj':
					if (!region == 'pt') return await kill.reply(from, 'Brazil only/Brasil solamente!', id)
					if (args.length == 1) {
						const cnpj = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${encodeURIComponent(Sliced_Body)}`)
						if (cnpj.data.status == 'ERROR') return await kill.reply(from, cnpj.data.message, id)
						await kill.reply(from, `✪ CNPJ: ${cnpj.data.cnpj}\n\n✪ Tipo: ${cnpj.data.tipo}\n\n✪ Nome: ${cnpj.data.nome}\n\n✪ Região: ${cnpj.data.uf}\n\n✪ Telefone: ${cnpj.data.telefone}\n\n✪ Situação: ${cnpj.data.situacao}\n\n✪ Bairro: ${cnpj.data.bairro}\n\n✪ Logradouro: ${cnpj.data.logradouro}\n\n✪ CEP: ${cnpj.data.cep}\n\n✪ Casa N°: ${cnpj.data.numero}\n\n✪ Municipio: ${cnpj.data.municipio}\n\n✪ Abertura: ${cnpj.data.abertura}\n\n✪ Fantasia: ${cnpj.data.fantasia}\n\n✪ Jurisdição: ${cnpj.data.natureza_juridica}`, id)
					} else await kill.reply(from, 'Especifique um CNPJ sem os traços e pontos.', id)
				break

				case 'coins':
					await kill.reply(from, mess.coins(), id)
				break

				case 'allid':
				case 'grupos':
					let allMgps = await kill.getAllGroups()
					await kill.reply(from, allMgps.map(i => `\n➸ ${i.name} =\n${i.id.replace(/@g.us/g,'')}\n${i.participantsCount} Users\n`).join(''), id)
				break

				case 'help':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'motivo/razon/reason.', id)
					await kill.sendText(config.Owner[0], mess.advise(typeName, typeChat, sender.id, body, typeId) + '\n\n' + mess.thanks())
				break

				case 'level':
				case 'nivel':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					if (mentionedJidList.length !== 0) lvlusrph = await kill.getContact(mentionedJidList[0])
					var yourName = quotedMsg ? quotedMsgObj.sender.pushname : (mentionedJidList.length !== 0 ? lvlusrph.pushname : pushname)
					var wdfWho = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : sender.id)
					const userBase = tools('gaming').getValue(wdfWho, nivel, chatId, null)
					var ppLink = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					let rankCard = await tools('canvas').ranking(ppLink[0], userBase.xp, tools('gaming').LevelEXP(userBase.level), userBase.level, Object.keys(nivel[chatId]).indexOf(wdfWho), 0, `${tools('gaming').getPatent(userBase.level)} - ${userBase.guild.toUpperCase()}`, yourName)
					await kill.sendFile(from, rankCard, `${wdfWho.replace('@c.us', '')}_card.png`, `🔭 - ${yourName} - ${name}\n🎮 - ${userBase.xp} / ${tools('gaming').LevelEXP(userBase.level)} XP\n☄️ - Level ${userBase.level}\n⏱️ - ${userBase.msg} Mensagens\n🃏 - ${tools('gaming').getPatent(userBase.level)}\n💵 - ${userBase.coin} Í-coins\n⚔️ - ${userBase.guild}\n🔶 - ${userBase.rubi} Rubis\n💎 - ${userBase.dima} Diamantes`, id)
				break
				
				// Remade by Pedro B.
				case 'ranking':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					var rankingForm = false
					var rankLimit = false
					var board = ''
					if (!['coin', 'msg', 'level', 'rubi', 'dima', 'xp'].includes(argl[0])) {
						board = mess.specifyRank(rankingForm)
						rankingForm = 'xp'
						rankLimit = isNaN(argl[0]) || argl[0] == null || Number(argl[0]) < 3 ? 10 : Number(args[0])
					} else rankingForm = argl[0]
					rankLimit = rankLimit !== false ? rankLimit : (isNaN(argl[1]) || argl[1] == null || Number(argl[1]) < 3 ? 10 : Number(argl[1]))
					const rankingList = tools('others').sort(nivel[chatId], rankingForm)
					try {
						for (let i = 0; i < rankLimit && i < Object.keys(rankingList).length; i++) {
							if (Object.keys(rankingList)[i] !== null) {
								var aRandNe = await kill.getContact(Object.keys(rankingList)[i])
								if (aRandNe == null) {
									delete nivel[chatId][Object.keys(rankingList)[i]] // Deleta os inválidos do ranking, impedindo de dar BO depois
									return fs.writeFileSync('./lib/config/Gerais/level.json', JSON.stringify(nivel, null, "\t"))
								}
								let userInfo = tools('gaming').getValue(Object.keys(rankingList)[i], nivel, chatId, null)
								board += `${i} → *${aRandNe.pushname || 'wa.me/' + Object.keys(rankingList)[i].replace('@c.us', '')}*\n➸ *Mensagens*: ${userInfo.msg}\n➸ *XP*: ${userInfo.xp} / ${tools('gaming').LevelEXP(userInfo.level)}\n➸ *Level*: ${userInfo.level}\n➸ *Patente*: ${tools('gaming').getPatent(userInfo.level)}\n➸ *Í-Coin*: ${userInfo.coin}\n\n`
							}
						}
						await kill.reply(from, board, id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.tenpeo() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					}
				break

				case 'marcar':
					await kill.sendTextWithMentions(from, `@${sender.id.replace('@c.us', '')}`)
				break
				
				case 'value':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					if (!Object.keys(config).includes(args[0])) return await kill.reply(from, mess.valueChanger(), id)
					var newValue = false
					if (args[0] == "Owner" || args[0] == "DDI" || args[0] == "Prefix") {
						if (!body.includes('[')) {
							await kill.reply(from, `Isso requer uma array e o que você está inserindo não é uma, se quiser inserir um número apenas, use o comando enviado na outra mensagem, se quiser usar esse comando, siga isso:\n\nExemplo -> ${prefix}value ${args[0]} ["Valor 1", "Valor 2"]`, id)
							return await kill.reply(from, `${prefix}Exec config.${args[0]}.push("Valor");fs.writeFileSync('./lib/config/Settings/config.json', JSON.stringify(config, null, "\\t"))`, id)
						}
						var newValue = JSON.parse(body.slice(body.indexOf("["), body.indexOf("]")+1))
					} else if (args[1] == "true") {
						var newValue = true
					} else if (args[1] == "false") {
						var newValue = false
					} else if (!isNaN(args[1])) {
						var newValue = Number(args[1])
					} else if (typeof args[1] == 'string') {
						var newValue = String(args[1])
					} else if (args[1] !== null) {
						var newValue = args[1]
					}
					if (config[args[0]] == newValue) return await kill.reply(from, mess.hasSameValue(), id)
					if (args[0] == "Owner") {
						newValue = newValue.map(p => !p.includes("@c.us") ? p+"@c.us" : p)
					}
					var newObj = {
						"key": args[0],
						"value": newValue,
						"old": config[args[0]],
						"idButton": "Nothing"
					}
					if (sesConfig.Multi_Devices == true) {
						await kill.sendButtons(from, mess.buttonStop("Cancelar"), [
							{
								"id": "1",
								"text": "✔️ Sim ✔️"
							},
							{
								"id": "2",
								"text": "✖️ Não ✖️"
							}
						], mess.isThisKeyRight(newObj), mess.youHaveTSec()).then(b => newObj.idButton = b)
					} else {
						await kill.sendText(from, mess.isThisKeyRight(newObj))
					}
					var selectB = msgw => tools('others').filterMsg(msgw, sender.id, from, newObj.idButton, /sim|yes|no|nao/gi)
					await kill.awaitMessages(from, selectB, {
						max: 1,
						time: 30000,
						errors: ['time']
					}).then(async collected => {
						if (/sim|yes/gi.test(removeAccents(Array.from(collected)[0][1].body))) {
							config[newObj.key] = newObj.value
							fs.writeFileSync('./lib/config/Settings/config.json', JSON.stringify(config, null, "\t"))
							await kill.reply(from, mess.newValKeys(newObj), id)
						} else if (/no|nao/gi.test(removeAccents(Array.from(collected)[0][1].body))) {
							await kill.reply(from, mess.youCanceled(), id)
						}
					})
				break

				case 'letra':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'name of song/nome da música/nombre de música.', id)
					try {
						const liric = await axios.get(`https://some-random-api.ml/lyrics?title=${encodeURIComponent(Sliced_Body)}`)
						await kill.sendFileFromUrl(from, liric.data.thumbnail.genius, '', `*🎸*\n\n${liric.data.title}\n\n*🎵*\n\n${liric.data.lyrics}`, id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.noresult() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					}
				break

				case 'reedit':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'subreddit name/nombre/nome.', id)
					try {
						await kill.reply(from, mess.wait(), id)
						const reed = await axios.get(`https://meme-api.herokuapp.com/gimme/${encodeURIComponent(Sliced_Body)}`)
						if (reed.data.nsfw && isGroupMsg && !isActivated('nsfw')) return await kill.reply(from, mess.gpadulto(), id)
						await kill.sendFileFromUrl(from, reed.data.url, '', reed.data.title, id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.noresult() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					}
				break

				/*Obrigado pela base Jon*/
				case 'wallhaven':
				case 'wallpaper':
					if (Default_APIS.API_WallHaven !== APIS.API_WallHaven) {
						if (args.length == 0) return await kill.reply(from, mess.noargs() + 'wallpaper name/nome/nombre.', id)
						await kill.reply(from, mess.wait(), id)
						try {
							const wpphe = await axios.get(`https://wallhaven.cc/api/v1/search?apikey=${APIS.API_WallHaven}&q=${encodeURIComponent(Sliced_Body)}`)
							await kill.sendFileFromUrl(from, tools('others').randVal(wpphe.data.data.map(w => w.path)), 'WallHaven.jpg', '<3', id)
						} catch (error) {
							tools('others').reportConsole(cmd, error)
							await kill.reply(from, mess.noresult() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
						}
					} else return await kill.reply(from, "Meu dono não configurou este comando, não posso executar pois causaria erros graves.", id)
				break

				case 'decode':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'binary code/código binario.', id)
					await kill.reply(from, `${Sliced_Body}\n\n*→*\n\n${Sliced_Body.split(" ").map(x => String.fromCharCode(parseInt(x, 2))).join("")}`, id)
				break

				case 'encode':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.', id)
					await kill.reply(from, `${Sliced_Body}\n\n*→*\n\n${Sliced_Body.split('').map(function (char) { return char.charCodeAt(0).toString(2) }).join(' ')}`, id)
				break

				case 'covid':
					if (args.lenght == 0) return await kill.reply(from, mess.coviderr(), id)
					const covidnb = await axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${encodeURIComponent(Sliced_Body)}`)
					if (covidnb.data == 'Country not found') return await kill.reply(from, mess.coviderr(), id)
					await kill.reply(from, mess.covidata(covidnb), id)
				break

				case 'paises':
					await kill.reply(from, mess.covid(), id)
				break

				case 'reverter':
				case 'rev':
					await kill.reply(from, mess.wait(), id)
					let fodVey = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.invert(fodVey[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `rev.png`, 'Ah não, sou daltônica!', id))
				break

				case 'encurtar':
				case 'tinyurl':
					if (args.length == 0) return await kill.reply(from, mess.nolink(), id)
					const tinurl = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(args[0])}`)
					if (tinurl.data == 'Error') return await kill.reply(from, mess.nolink() + '\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n' + mess.fail(cmd, error, time), id)
					await kill.reply(from, `${args[0]} → ${tinurl.data}`, id)
				break

				case 'signo':
				case 'horoscopo':
					let signoSe = ["aries", "touro", "gemeos", "cancer", "leao", "virgem", "libra", "escorpiao", "sagitario", "capricornio", "aquario", "peixes"]
					if (!signoSe.includes(argl[0])) return await kill.reply(from, `❌ → ${args[0]} ← ❌!\n\n✔️ → ${signoSe.join(' --- ')}.`, id)
					let FMnews = await shell.exec(`bash lib/functions/config.sh signo ${argl[0]}`, {
						silent: true
					})
					if (FMnews.stdout == '') {
						await kill.reply(from, mess.fail(cmd, FMnews.stderr, time), id)
						console.log(FMnews.stderr)
					} else await kill.reply(from, FMnews.stdout, id)
				break

				case 'book':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'book name/nome do livro/nombre del libro.', id)
					const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(Sliced_Body)}&langRestrict=${region}`)
					const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`)
					await kill.sendFileFromUrl(from, `${getBook.data.volumeInfo.imageLinks.thumbnail}`, 'book.jpg', mess.book(getBook), id)
				break

				/*As piadas VEM DE SERVIDOR e NÃO CONTROLAMOS elas.*/
				case 'piada':
					const piada = await axios.get('https://some-random-api.ml/joke')
					if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, piada.data.joke, id)
					await translate(piada.data.joke, {
						to: region
					}).then(async (getPiada) => await kill.reply(from, getPiada.text, id))
				break

				case 'alarme':
					if (args.length == 0 || isNaN(args[0]) || !arks.includes('|')) return await kill.reply(from, mess.timealarm() + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
					await kill.reply(from, mess.alarmact(args), id)
					setTimeout(() => kill.reply(from, `⏰ - ${arg.split('|')[1]}!`, id), Number(arg.split('|')[0]) * 60000)
				break

				case 'hitler':
					await kill.reply(from, mess.wait(), id)
					let heilHitler = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.hitler(heilHitler[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `hitler.png`, '卍', id))
				break

				case 'trash':
					await kill.reply(from, mess.wait(), id)
					let school = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.trash(school[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `trash.png`, '🚮', id))
				break

				case 'shit':
					await kill.reply(from, mess.wait(), id)
					let bokupico = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.shit(bokupico[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `shit.png`, '💩💩💩', id))
				break

				case 'blur':
					await kill.reply(from, mess.wait(), id)
					let lifeistrange = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.blur(lifeistrange[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `blur.png`, '💡', id))
				break

				case 'rip':
					await kill.reply(from, mess.wait(), id)
					let narutof = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.rip(narutof[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `rip.png`, '☠️', id))
				break

				case 'github':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'Github Username.', id)
					await kill.reply(from, mess.wait(), id)
					const gitData = await axios.get(`https://api.github.com/users/${args[0]}`)
					const siteAdmin = gitData.data.site_admin == true ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					const companY = (gitData.data.company == null) ? tools('others').noAwnsers() : gitData.data.company
					const bloG = (gitData.data.blog == "") ? tools('others').noAwnsers() : gitData.data.blog
					const emaiL = (gitData.data.email == null) ? tools('others').noAwnsers() : gitData.data.email
					const tramPar = (gitData.data.hireable == null) ? tools('others').noAwnsers() : gitData.data.hireable
					if (gitData.data.message == 'Not Found') return await kill.reply(from, mess.noresult(), id)
					await kill.sendFileFromUrl(from, `${gitData.data.avatar_url}`, 'avatar.png', mess.github(siteAdmin, companY, bloG, emaiL, tramPar, gitData), id)
				break

				case 'roubar':
					if (isType('sticker')) {
						let infoStk = {}
						if (Object.keys(custom).includes(sender.id) && !arks.includes('|')) {
							if (custom[sender.id]['pack'] !== false && custom[sender.id]['author'] !== false) {
								infoStk['pack'] = custom[sender.id]['pack']
								infoStk['author'] = custom[sender.id]['author']
							} else return await kill.reply(from, mess.argsbar() + 'use 1 "|".\n\nLeia "${prefix}MyMsg -help".', id)
						} else if (arks.includes('|')) {
							infoStk['pack'] = arg.split('|')[0]
							infoStk['author'] = arg.split('|')[1]
						} else return await kill.reply(from, mess.argsbar() + 'use 1 "|".\n\nLeia "${prefix}MyMsg -help".', id)
						await kill.reply(from, mess.wait(), id)
						let mediaData = await decryptMedia(encryptMedia)
						await kill.sendImageAsSticker(from, tools('others').dataURI(quotedMsg.mimetype, mediaData), infoStk)
					} else await kill.reply(from, mess.onlyst() + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
				break

				/*Não deixe seus usuários floodarem, caso contrario a bot pode desligar*/
				case 'sound':
				case 'bass':
					if (isType('audio') || isType('ptt') || isType('video')) {
						var format = (isType('video')) ? 'mp4' : 'mp3'
						let mediaData = await decryptMedia(encryptMedia)
						await tools('ffmpeg').bass(mediaData, argl[0], argl[1], argl[2], argl[3], kill, message, format)
					} else await kill.reply(from, mess.onlyaudio(), id)
				break

				/*Não deixe seus usuários floodarem, caso contrario a bot pode desligar*/
				case 'nightcore':
					if (isType('audio') || isType('ptt') || isType('video')) {
						var format = (isType('video')) ? 'mp4' : 'mp3'
						let mediaData = await decryptMedia(encryptMedia)
						await tools('ffmpeg').nightcore(mediaData, argl[0], kill, message, format)
					} else await kill.reply(from, mess.onlyaudio(), id)
				break

				/*Não deixe seus usuários floodarem, caso contrario a bot pode desligar*/
				case 'audio':
					if (isType('video')) {
						let mediaData = await decryptMedia(encryptMedia)
						await tools('ffmpeg').audio(mediaData, kill, message, encryptMedia.mimetype)
					} else await kill.reply(from, mess.onlyvideo(), id)
				break

				case 'bew':
				case 'peb':
				case 'alpha':
				case 'gray':
					if (isType('video')) {
						var decryptedMedia = await decryptMedia(encryptMedia)
						await tools('ffmpeg').gray(decryptedMedia, kill, message)
					} else await kill.reply(from, mess.onlyvideo(), id)
				break

				case 'mutevideo':
				case 'mutev':
					if (isType('video')) {
						var decryptedMedia = await decryptMedia(encryptMedia)
						await tools('ffmpeg').mute(decryptedMedia, kill, message)
					} else await kill.reply(from, mess.onlyvideo(), id)
				break

				case 'vblur':
					if (isType('video')) {
						if (isNaN(Number(args[0])) && args.length != 0 || Number(args[0]) > 10 && args.length != 0) return await kill.reply(from, `Use este comando sem nada (Ex.: "/vblur") ou com um número de 1 até 10 para definir o quanto borrado ficará o vídeo (Ex.: "/vblur 5").`)
						var radius = args.length == 0 ? 20 : parseInt(Number(args[0]))
						var decryptedMedia = await decryptMedia(encryptMedia)
						await tools('ffmpeg').blur(decryptedMedia, kill, message, radius)
					} else await kill.reply(from, mess.onlyvideo(), id)
				break

				/*Não, não possuo interesse em criar um painel que puxe dados pessoais de pessoas, pare de fod** gente inocente.*/
				case 'cpf':
					if (!region == 'pt') return await kill.reply(from, 'Brazil only/Brasil solamente!', id)
					if (args.length == 0) return await kill.reply(from, 'Insira um CPF', id)
					await kill.reply(from, mess.wait(), id)
					await tools('buscas').cpf(args[0], kill, message)
				break

				case 'policia':
					await kill.reply(from, mess.policemenu(), id)
				break

				case '01':
					if (mentionedJidList.length == 0 && !quotedMsg) return await kill.reply(from, mess.howtololi(), id)
					var addedLolicon = quotedMsg ? quotedMsgObj.sender.pushname : pushname
					if (mentionedJidList.length !== 0) {
						let mentPush = await kill.getContact(mentionedJidList[0])
						addedLolicon = mentPush.pushname || ' - "Censored by Government"'
					}
					if (tools('others').randVal(['Inocente', 'Culpado']) == 'Culpado') {
						fs.appendFileSync('./lib/config/Utilidades/lolicon.txt', `\n\n${addedLolicon} - ${lvpc} Years/Anos 🔒`)
					} else fs.appendFileSync('./lib/config/Utilidades/lolicon.txt', `\n\n${addedLolicon} - Innocent/inocente 🔓`)
					await kill.reply(from, mess.fbi(), id)
				break

				case '02':
					if (tools('others').randVal(['Inocente', 'Culpado']) == 'Inocente') {
						fs.appendFileSync('./lib/config/Utilidades/entregados.txt', `\n\n${pushname} - Innocent/inocente 🔓`)
					} else fs.appendFileSync('./lib/config/Utilidades/entregados.txt', `\n\n${pushname} - ${lvpc} Years/Anos 🔒`)
					await kill.reply(from, mess.arrested(), id)
				break

				case '03':
					if (mentionedJidList.length == 0 && !quotedMsg) return await kill.reply(from, mess.howtoshota(), id)
					var takeChild = quotedMsg ? quotedMsgObj.sender.pushname : pushname
					if (mentionedJidList.length !== 0) {
						let mentPush = await kill.getContact(mentionedJidList[0])
						takeChild = mentPush.pushname || ' - "Censored by Government"'
					}
					if (tools('others').randVal(['Inocente', 'Culpado']) == 'Culpado') {
						fs.appendFileSync('./lib/config/Utilidades/reversecon.txt', `\n\n${takeChild} - ${lvpc} Years/Anos 🔒`)
					} else fs.appendFileSync('./lib/config/Utilidades/reversecon.txt', `\n\n${takeChild} - Innocent/inocente 🔓`)
					await kill.reply(from, mess.cia(), id)
				break

				case '04':
					if (mentionedJidList.length == 0 && !quotedMsg) return await kill.reply(from, mess.howtocrime(), id)
					var crimeNet = quotedMsg ? quotedMsgObj.sender.pushname : pushname
					if (mentionedJidList.length !== 0) {
						let mentPush = await kill.getContact(mentionedJidList[0])
						crimeNet = mentPush.pushname || ' - "Censored by Government"'
					}
					if (tools('others').randVal(['Inocente', 'Culpado']) == 'Culpado') {
						fs.appendFileSync('./lib/config/Utilidades/crimereport.txt', `\n\n${crimeNet} (${arg.split('|')[1] || '🤢'}) - ${lvpc} Years/Anos 🔒`)
					} else fs.appendFileSync('./lib/config/Utilidades/crimereport.txt', `\n\n${crimeNet} (${arg.split('|')[1] || '🤢'}) - Innocent/inocente 🔓`)
					await kill.reply(from, mess.stars(), id)
				break

				case '05':
					if (mentionedJidList.length == 0 && !quotedMsg) return await kill.reply(from, mess.howtolgbts(), id)
					var genderFuck = quotedMsg ? quotedMsgObj.sender.pushname : pushname
					if (mentionedJidList.length !== 0) {
						let mentPush = await kill.getContact(mentionedJidList[0])
						genderFuck = mentPush.pushname || ' - "Censored by Government"'
					}
					if (tools('others').randVal(['Inocente', 'Culpado']) == 'Culpado') {
						fs.appendFileSync('./lib/config/Utilidades/gaysreport.txt', `\n\n${genderFuck} [${tools('others').getRandLine(1, './lib/config/Utilidades/lgbt.txt')[0]}] - ${lvpc} Years/Anos 🔒`)
					} else fs.appendFileSync('./lib/config/Utilidades/gaysreport.txt', `\n\n${genderFuck} [${tools('others').getRandLine(1, './lib/config/Utilidades/lgbt.txt')[0]}] - Innocent/inocente 🔓`)
					await kill.reply(from, mess.bsaa(), id)
				break

				case 'fbi':
					const loliconList = fs.readFileSync('./lib/config/Utilidades/lolicon.txt').toString()
					await kill.reply(from, loliconList, id)
				break

				case 'rpd':
					const peopleCrz = fs.readFileSync('./lib/config/Utilidades/entregados.txt').toString()
					await kill.reply(from, peopleCrz, id)
				break

				case 'cia':
					const reversePedo = fs.readFileSync('./lib/config/Utilidades/reversecon.txt').toString()
					await kill.reply(from, reversePedo, id)
				break

				case 'bsaa':
					const gaysArrest = fs.readFileSync('./lib/config/Utilidades/gaysreport.txt').toString()
					await kill.reply(from, gaysArrest, id)
				break

				case 'stars':
					const aLotCrime = fs.readFileSync('./lib/config/Utilidades/crimereport.txt').toString()
					await kill.reply(from, aLotCrime, id)
				break

				/*Adicione mais no arquivo "desafio.txt" e "verdade.txt", mas em inglês.*/
				case 'tord':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					if (args.length == 0) return await kill.reply(from, mess.tordare(), id)
					if (argl[0] == '-dare') {
						const getDare = tools('others').randVal(fs.readFileSync('./lib/config/Utilidades/desafio.txt').toString().split('\n'))
						if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, getDare, id)
						await translate(getDare, {
							to: region
						}).then(async (darem) => await kill.reply(from, darem.text, id))
					} else if (argl[0] == '-truth') {
						const getTruth = tools('others').randVal(fs.readFileSync('./lib/config/Utilidades/verdade.txt').toString().split('\n'))
						if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, getTruth, id)
						await translate(getTruth, {
							to: region
						}).then(async (truthm) => await kill.reply(from, truthm.text, id))
					} else if (argl[0] == '-r') {
						await kill.reply(from, 'OK! Vamos outra!\nVerdade ou Desafio? (-truth or -dare)?', id)
					} else await kill.reply(from, mess.tordare(), id)
				break

				/*Adicione mais no arquivo "never.txt", mas em inglês.*/
				case 'nunca':
					if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/never.txt')[0], id)
					await translate(tools('others').getRandLine(1, './lib/config/Utilidades/never.txt')[0], {
						to: region
					}).then(async (willdo) => await kill.reply(from, willdo.text, id))
				break

				/*Adicione mais no arquivo "cantadas.txt", mas em inglês.*/
				case 'cantada':
					if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/cantadas.txt')[0], id)
					await translate(tools('others').getRandLine(1, './lib/config/Utilidades/cantadas.txt')[0], {
						to: region
					}).then(async (notHappy) => await kill.reply(from, notHappy.text, id))
				break

				case 'sort':
					if (args.length == 0 || !arks.includes('|')) return await kill.reply(from, mess.noargs() + 'palavras/words/números/numbers.' + '\n\n' + mess.argsbar(), id)
					await kill.reply(from, tools('others').randVal(arg.split('|')), id)
				break

				case 'biblia':
				case 'bible':
					try {
						if (argl[0] == '-g') {
							let biblin = await shell.exec(`bash -c "grep -i "${Sliced_Body.replace('-orig', '')}" lib/config/Utilidades/biblia.txt | shuf -n 1"`, {
								silent: true
							}).stdout
							if (biblin == '') {
								if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/biblia.txt')[0], id)
								await translate(tools('others').getRandLine(1, './lib/config/Utilidades/biblia.txt')[0], {
									to: region
								}).then(async (bible) => await kill.reply(from, bible.text, id))
							} else {
								if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, biblin, id)
								await translate(biblin, {
									to: region
								}).then(async (bible) => await kill.reply(from, bible.text, id))
							}
						} else {
							if (region == 'en' || arks.includes('-orig')) return await kill.reply(from, tools('others').getRandLine(1, './lib/config/Utilidades/biblia.txt')[0], id)
							await translate(tools('others').getRandLine(1, './lib/config/Utilidades/biblia.txt')[0], {
								to: region
							}).then(async (bible) => await kill.reply(from, bible.text, id))
						}
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'steal':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					if (mentionedJidList.length == 0 && !quotedMsg) return await kill.reply(from, mess.semmarcar(), id)
					if (tools('gaming').getLimit(sender.id, daily, chatId, false, 'steal')) return await kill.reply(from, mess.steal(), id)
					var theStealK = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : sender.id)
					if (theStealK == sender.id) return await kill.reply(from, mess.cmdfailed() + '\n\n' + usageHeAg, id)
					const checkStealer = tools('gaming').getValue(sender.id, nivel, chatId, null)
					const checkVictim = tools('gaming').getValue(theStealK, nivel, chatId, null)
					let arrTypesU = ['xp', 'coin', 'rubi', 'dima']
					var typeSteal = tools('others').randVal(arrTypesU)
					checkIfHave = (typeSteal) => {
						if (Number(config.Max_Steal) > Number(checkVictim[typeSteal])) {
							if (arrTypesU.length == 0) return false
							typeSteal = tools('others').randVal(arrTypesU.filter(k => k !== typeSteal))
							arrTypesU = arrTypesU.splice(typeSteal, 1)
							checkIfHave(typeSteal)
						} else return typeSteal
					}
					if (!checkIfHave(typeSteal)) return await kill.sendTextWithMentions(from, mess.notalvo(theStealK))
					let stealedValue = parseInt((Number(checkVictim[typeSteal]) / Number(config.Steal_Reduce_Limit)))
					if (stealedValue <= 10 && Number(Number(checkVictim[typeSteal])) > 10) stealedValue = stealedValue + Number(config.Min_Steal)
					var maxSteali = tools('others').randomNumber(Number(config.Min_Steal), stealedValue)
					if (maxSteali > Number(config.Max_Steal)) maxSteali = tools('others').randomNumber(parseInt(maxSteali/Number(config.Steal_Reduce_Limit)), Number(config.Max_Steal))
					if (Number(checkVictim[typeSteal]) > maxSteali || maxSteali > Number(config.Max_Steal)) maxSteali = tools('others').randomNumber(Number(config.Min_Steal), Number(config.Max_Steal)) + Number(config.Iris_Coin)
					if (lvpc > 70) {
						if (checkStealer.guild.toUpperCase() == 'THIEVES') maxSteali = parseInt((tools('others').randomNumber(maxSteali, Number(config.Max_Steal)))) // Thieves ganham mais no roubo
						if (Number(checkVictim[typeSteal]) > maxSteali || maxSteali > Number(config.Max_Steal)) maxSteali = tools('others').randomNumber(Number(config.Min_Steal), Number(config.Max_Steal)) + Number(config.Iris_Coin)
						if (maxSteali > Number(checkVictim[typeSteal]) || Number(checkVictim[typeSteal]) == 0) {
							typeSteal = 'xp'
							maxSteali = Number(checkVictim[typeSteal])
						}
						await kill.sendTextWithMentions(from, mess.stealwkd(theStealK, maxSteali, typeSteal.toUpperCase()))
						tools('gaming').addValue(sender.id, Number(maxSteali), nivel, chatId, typeSteal)
						tools('gaming').addValue(theStealK, Number(-maxSteali), nivel, chatId, typeSteal)
					} else {
						if (maxSteali > Number(checkStealer[typeSteal]) || Number(checkStealer[typeSteal]) == 0) {
							typeSteal = 'xp'
							maxSteali = Number(checkStealer[typeSteal])
						}	
						await kill.sendTextWithMentions(from, mess.stealfail(theStealK, maxSteali, typeSteal.toUpperCase()))
						tools('gaming').addValue(sender.id, Number(-maxSteali), nivel, chatId, typeSteal)
						tools('gaming').addValue(theStealK, Number(maxSteali), nivel, chatId, typeSteal)
					}
					if (objconfig.noLimits == 0) return tools('gaming').addLimit(sender.id, daily, chatId, 'steal')
				break

				case 'doar':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					if (objconfig.agiotas.includes(sender.id)) return await kill.reply(from, `Você agiotou ou foi agiotado por alguém, para fazer isso novamente aguarde que a agiotagem anterior termine.`, id)
					if (args.length <= 2 || argl[0] == 'coin' || argl[0] == 'xp' || argl[0] == 'dima' || argl[0] == 'rubi') {
						const checkValue = tools('gaming').getValue(sender.id, nivel, chatId, 'xp')
						if (mentionedJidList.length !== 0) xpUserGet = await kill.getContact(mentionedJidList[0])
						var sortFd = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? xpUserGet.id : null)
						if (sortFd == null) return await kill.reply(from, mess.cmdfailed(), id)
						var theAbsVal = quotedMsg ? args[1] : (mentionedJidList.length !== 0 ? args[2] : args[2])
						if (isNaN(theAbsVal) || !tools('others').isInt(theAbsVal) || Number(theAbsVal) > checkValue || theAbsVal < 1) return await kill.reply(from, mess.noxpalv(checkValue), id)
						tools('gaming').addValue(sender.id, Number(-theAbsVal), nivel, chatId, argl[0])
						tools('gaming').addValue(sortFd, Number(theAbsVal), nivel, chatId, argl[0])
						await kill.sendTextWithMentions(from, `Você doou com sucesso ${theAbsVal} ${argc[0]} para @${sortFd.replace('@c.us', '')}`)
					} else await kill.reply(from, mess.semmarcar() + `\n\nEx: ${prefix}doar <tipo> @user <value/valor> `, id)
				break

				case 'bang':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					var bangme = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : randomMember)
					await kill.sendStickerfromUrl(from, `https://steamuserimages-a.akamaihd.net/ugc/693902535301465982/17F72381587B6BE37BF2E36D159A75486CA097AA/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false`, stickerConfig)
					await kill.sendTextWithMentions(from, mess.lolibang(sender.id, bangme, tools('others').getRandLine(1, './lib/config/Utilidades/armas.txt')[0]), id)
				break

				case 'trends':
					var aFplaceOnEarth = args.length !== 0 ? args[0] : region == 'pt' ? 'brazil' : region == 'en' ? 'united-states' : 'spain'
					if (argl[0] == '-global') aFplaceOnEarth = ''
					const newsNow = await tools('trends').refs(`https://trends24.in/${aFplaceOnEarth}`)
					if (newsNow[0].length == 0) return await kill.reply(from, mess.noresult(), id)
					await kill.reply(from, `🌎 - Twitter Trendings [${aFplaceOnEarth.toUpperCase()}]\n\n${newsNow[0].join('\n\n#')}`, id)
				break

				/*Obrigado pela base Pedro Batistop*/
				case 'market':
					if (args.length == 0) return await kill.reply(from, mess.reMerchant(), id) /*Mude o MLB se desejar*/
					const getML = await axios.get(`https://api.mercadolibre.com/sites/${arg.split('|')[1] || 'MLB'}/search?q=${encodeURIComponent(arg.split('|')[1] || Sliced_Body)}&limit=1#json`)
					const isNewP = getML.data.results[0].condition == 'new' ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					const temLoja = getML.data.results[0].shipping.store_pick_up ? tools('others').yesAwnsers() : tools('others').noAwnsers()
					await kill.sendFileFromUrl(from, `${getML.data.results[0].thumbnail}`, 'produto.jpg', mess.theStore(getML, isNewP, temLoja), id)
				break

				/*Sem XP, por que precisamos de jogos livres também*/
				case 'jokenpo':
					const bigThree = tools('others').randomNumber(1, 3)
					const jokenPedra = ['pedra', '✊', '✊🏻', '✊🏼', '✊🏽', '✊🏾', 'rock', 'piedra', '🪨']
					const jokenLesb = ['tesoura', '✌️', '✌🏻', '✌🏼', '✌🏽', '✌🏾', '✌🏿', 'scissors', 'tijera', '✂️']
					const jokenPaper = ['papel', '✋', '✋🏻', '✋🏼', '✋🏽', '✋🏾', '✋🏿', 'paper', '🤚', '🤚🏻', '🤚🏼', '🤚🏽', '🤚🏾', '🤚🏿']
					if (!jokenPedra.includes(args[0]) && !jokenPaper.includes(args[0]) && !jokenLesb.includes(args[0])) return await kill.reply(from, mess.noargs() + 'pedra [✊🏻], papel [✋🏿] ou tesoura [✌️]', id)
					const needPlay = jokenPedra.includes(args[0]) ? 1 : jokenPaper.includes(args[0]) ? 2 : jokenLesb.includes(args[0]) ? 3 : false
					const theMove = bigThree == 1 ? '✊🏻 - Pedra/Rock/Piedra' : bigThree == 2 ? '✋🏿 - Papel/Paper' : bigThree == 3 ? '✌️ - Tesoura/Tijera/Scissors' : 'Algo'
					if (needPlay == bigThree) {
						await kill.reply(from, mess.nowinjoken(theMove), id)
					} else if (needPlay == 2 && bigThree == 1 || needPlay == 3 && bigThree == 2 || needPlay == 1 && bigThree == 3) {
						await kill.reply(from, mess.winjoken(theMove, args), id)
					} else await kill.reply(from, mess.losejoken(theMove, args), id)
				break

				case 'views':
					if (!quotedMsg) return await kill.reply(from, mess.nomark(), id)
					if (!quotedMsgObj.fromMe) return await kill.reply(from, mess.mymess(), id)
					const whoInpo = await kill.getMessageReaders(quotedMsg.id)
					if (whoInpo[0] == null) return kill.reply(from, mess.noviews(), id)
					await kill.reply(from, whoInpo.map(i => '👀 - Views - 👀\n'+`\n- ${i.pushname || '??? - Top secret name - ???'} - (wa.me/${i.id.replace('@c.us', '')})\n`).join(''), id)
				break

				case 'ctt':
					if (sesConfig.Multi_Devices == true) return await kill.reply(from, `Esta função não funciona em conjunto com o 'Multiple-Devices' do WhatsApp, mesmo que eu tentasse executar, iria receber erros de utilização, caso precise dessa função, desative o WhatsApp BETA e desfaça o modo de múltiplos dispositivos inseridos na minha configuração. - (config.json)`, id)
					if (args.length == 0 || !arks.includes('|')) return await kill.reply(from, mess.noargs(), id)
					await kill.sendVCard(from, `BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:${arg.split('|')[1]}\nTEL;TYPE=CELL,VOICE:${arg.split('|')[0]}\nEND:VCARD`)
				break

				case 'gerador':
					try {
						let fourDevs = await tools('fourDevs').generate()[0]
						let cardList = {
							'cvv': tools('others').randomArr(tools('others').newArray(100, 999, 0, 7)),
							'mouths': tools('others').randomArr(tools('others').newArray(Number(moment().add(3, 'month').format('MM')), 12, 0, 7)),
							'years': tools('others').randomArr(tools('others').newArray(Number(moment().add(1, 'years').format('YY')), Number(moment().add(8, 'years').format('YY')), 0, 7))
						}
						await kill.sendFileFromUrl(from, 'https://thispersondoesnotexist.com/image', 'image.jpg', `Nome -> ${fourDevs.nome}\n\nIdade -> ${fourDevs.idade}\n\nCPF -> ${fourDevs.cpf}\n\nRG -> ${fourDevs.rg}\n\nData de nascimento -> ${fourDevs.data_nasc}\n\nSexo -> ${fourDevs.sexo}\n\nSigno -> ${fourDevs.signo}\n\nMãe -> ${fourDevs.mae}\n\nPai -> ${fourDevs.pai}\n\nEmail -> ${fourDevs.email}\n\nSenha -> ${fourDevs.senha}\n\nCEP -> ${fourDevs.cep}\n\nEndereço -> ${fourDevs.endereco}\n\nNúmero -> ${fourDevs.numero}\n\nBairro -> ${fourDevs.bairro}\n\nCidade -> ${fourDevs.cidade}\n\nEstado -> ${fourDevs.estado}\n\nTelefone fixo -> ${fourDevs.telefone_fixo}\n\nCelular -> ${fourDevs.celular}\n\nAltura -> ${fourDevs.altura}\n\nSangue -> ${fourDevs.tipo_sanguineo}\n\nCor favorita -> ${fourDevs.cor}\n\nCartão de Crédito VISA ->\nCódigo -> "${creditCard.GenCC("Visa")}"\nValidade -> "${cardList.mouths[0]}/${cardList.years[0]}"\nCVV -> "#${cardList.cvv[0]}"\n\nCartão de Crédito MASTERCARD ->\nCódigo -> "${creditCard.GenCC()}"\nValidade -> "${cardList.mouths[1]}/${cardList.years[1]}"\nCVV -> "${cardList.cvv[1]}"\n\nCartão de Crédito AMEX ->\nCódigo -> "${creditCard.GenCC("Amex")}"\nValidade -> "${cardList.mouths[2]}/${cardList.years[2]}"\nCVV -> "${cardList.cvv[2]}"\n\nCartão de Crédito Discover ->\nCódigo -> "${creditCard.GenCC("Discover")}"\nValidade -> "${cardList.mouths[3]}/${cardList.years[3]}"\nCVV -> "${cardList.cvv[3]}"\n\nCartão de Crédito ENROUTE ->\nCódigo -> "${creditCard.GenCC("EnRoute")}"\nValidade -> "${cardList.mouths[4]}/${cardList.years[4]}"\nCVV -> "${cardList.cvv[4]}"\n\nCartão de Crédito JCB ->\nCódigo -> "${creditCard.GenCC("JCB")}"\nValidade -> "${cardList.mouths[5]}/${cardList.years[5]}"\nCVV -> "${cardList.cvv[5]}"\n\nCartão de Crédito VOYAGER ->\nCódigo -> "${creditCard.GenCC("Voyager")}"\nValidade -> "${cardList.mouths[6]}/${cardList.years[6]}"\nCVV -> "${cardList.cvv[6]}"`, id)
					} catch (error) {
						console.log(error)
						let genpeo = await shell.exec(`bash lib/functions/config.sh dados`, {
							silent: true
						})
						if (genpeo.stdout == '') {
							await kill.reply(from, mess.fail(cmd, genpeo.stderr, time), id)
							console.log(genpeo.stderr)
						} else await kill.sendFileFromUrl(from, 'https://thispersondoesnotexist.com/image', 'image.jpg', genpeo.stdout, id)
					}
				break

				case 'movie':
					if (Default_APIS !== APIS.API_TheMovieDB) {
						if (args.length == 0) return await kill.reply(from, mess.noargs() + 'movie Name/Nome de Filme.', id)
						const movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIS.API_TheMovieDB}&query=${encodeURIComponent(Sliced_Body)}&language=${region}`)
						if (movieInfo.data.total_results == 0) return await kill.reply(from, mess.noresult(), id)
						const fotoFilme = movieInfo.data.results[0].backdrop_path == null ? errorImg : `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`
						await kill.sendFileFromUrl(from, fotoFilme, 'filme.jpg', mess.movies(region, movieInfo), id)
					} else return await kill.reply(from, "Meu dono não configurou este comando, não posso executar pois causaria erros graves.", id)
				break

				case 'news':
					if (Default_APIS.API_NewsAPI !== APIS.API_NewsAPI) {
						if (args.length == 0) return await kill.reply(from, mess.noargs() + 'Theme/Tema.', id)
						await kill.reply(from, mess.wait(), id)
						const theNews = await axios.get(`https://newsapi.org/v2/everything?q=${args[0]}&sortBy=publishedAt&language=${region}&apiKey=${APIS.API_NewsAPI}`)
						let newsSends = theNews.data.articles.map(d => `${d.publishedAt.split('T').join(' - ').split('Z')[0]}\n\n${d.title} - ${d.author} [${d.source.name}]\n\n${d.description}\n\n${d.url}\n\n${d.content}\n\n--------- * ---------\n\n`).join('')
						await kill.reply(from, newsSends, id)
					} else return await kill.reply(from, "Meu dono não configurou este comando, não posso executar pois causaria erros graves.", id)
				break

				case 'tweet':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'Twitter @.', id)
					const twitterMsg = await axios.get(`https://decapi.me/twitter/latest/${args[0]}`).catch(async (e) => {
						await kill.reply(from, 'Nada encontrado', id)
					})
					await kill.reply(from, `${args[0]} → "${twitterMsg.data}".`, id)
				break

				case 'number':
					if (args.length == 0 || isNaN(args[0]) || isNaN(args[1])) return await kill.reply(from, mess.noargs() + `Min-Number Max-Number.\n\nEx: ${prefix}Number 1 10`, id)
					await kill.reply(from, `☘ - ${tools('others').randomNumber(args[0], args[1])} - ☘`, id)
				break

				case 'deezer':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'name of song/nome da música/nombre de música.', id)
					try {
						const musicFind = (await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(Sliced_Body)}`)).data
						if (musicFind.total == 0) return await kill.reply(from, mess.noresult(), id)
						await kill.sendFileFromUrl(from, musicFind.data[0].album.cover, 'cover.jpg', mess.musicdzr(musicFind.data[0]), id)
						await kill.sendAudio(from, musicFind.data[0].preview, id)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time) + '\n\n' + `Use ${prefix}Play.`, id)
					}
				break

				case 'dark':
					let onDark = await shell.exec(`bash lib/functions/config.sh onion ${encodeURIComponent(Sliced_Body)}`, {
						silent: true
					})
					if (onDark.stdout == '') {
						await kill.reply(from, mess.fail(cmd, onDark.stderr, time), id)
						console.log(onDark.stderr)
					} else await kill.reply(from, onDark.stdout, id)
				break

				case 'drink':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'Bebida/Drink.', id)
					const myDrink = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(Sliced_Body.replace('-orig', ''))}`)
					if (myDrink.data.drinks == null) return await kill.reply(from, mess.noresult(), id)
					let drinkDb = Object.fromEntries(Object.entries(myDrink.data.drinks[0]).filter(([key,val]) => val !== '' && val !== ' ' && val !== null))
					let ILength = Object.keys(drinkDb).filter(c => c.includes('Ingredient'))
					let moreInfo = ''
					qutdIng = 1
					for (let ing in ILength) {
						moreInfo += `Ingrediente ${qutdIng} -> ${drinkDb[ILength[ing]] || 'Nenhum ingrediente'} [ ${drinkDb[Object.keys(drinkDb).filter(c => c.includes('Measure'))[ing]] || 'Sem proporção'}]\n\n`
						qutdIng++
					}
					if (region == 'en' || arks.includes('-orig')) {
						moreInfo += drinkDb.strInstructions
					} else {
						await translate(drinkDb[Object.keys(drinkDb).filter(c => c.includes('Instructions'))[0]], {
							to: region
						}).then(info => addInfo += `${info.text}`)
					}
					await kill.sendFileFromUrl(from, drinkDb.strDrinkThumb, 'drink.jpg', `Nome -> ${drinkDb.strDrink} - #${drinkDb.idDrink || 'Sem ID'}\n\nNome alternativo -> ${drinkDb.strDrinkAlternate || 'Não possui.'}\n\nTags -> ${drinkDb.strTags || 'Sem tags.'}\n\nVideo -> ${drinkDb.strVideo || 'Sem video.'}\n\nCategoria -> ${drinkDb.strCategory || 'Não possui.'}\n\nIBA -> ${drinkDb.strIBA || 'Não possui.'}\n\nTipo -> ${drinkDb.strAlcoholic || 'Desconhecido.'}\n\nServido em -> ${drinkDb.strGlass || 'Copo qualquer.'}\n\nSource -> ${drinkDb.strSource}\n\n${moreInfo}`, id)
				break

				case 'meal':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'Food/Comida.', id)
					const sanjiOP = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(Sliced_Body.replace('-orig', ''))}`)
					if (sanjiOP.data.meals == null) return await kill.reply(from, mess.noresult(), id)
					let mealDb = Object.fromEntries(Object.entries(sanjiOP.data.meals[0]).filter(([key,val]) => val !== '' && val !== ' ' && val !== null))
					let Melen = Object.keys(mealDb).filter(c => c.includes('Ingredient'))
					let addInfo = ''
					mealQyd = 1
					for (let ing in Melen) {
						addInfo += `Ingrediente ${mealQyd} -> ${mealDb[Melen[ing]] || 'Nenhum ingrediente'} [ ${mealDb[Object.keys(mealDb).filter(c => c.includes('Measure'))[ing]] || 'Sem proporção'}]\n\n`
						mealQyd++
					}
					if (region == 'en' || arks.includes('-orig')) {
						addInfo += mealDb.strInstructions
					} else {
						await translate(mealDb[Object.keys(mealDb).filter(c => c.includes('Instructions'))[0]], {
							to: region
						}).then(info => addInfo += `${info.text}`)
					}
					await kill.sendFileFromUrl(from, mealDb.strMealThumb, 'meal.jpg', `Nome -> ${mealDb.strMeal} - #${mealDb.idMeal || 'Sem ID'}\n\nNome alternativo -> ${mealDb.strDrinkAlternate || 'Não possui.'}\n\nComum em -> ${mealDb.strArea || 'Mundo'}.\n\nTags -> ${mealDb.strTags || 'Sem tags.'}\n\nVideo -> ${mealDb.strYoutube || 'Sem video.'}\n\nCategoria -> ${mealDb.strCategory || 'Não possui.'}\n\nSource -> ${mealDb.strSource}\n\n${addInfo}`, id)
				break
				
				case 'artist':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'Banda/Artista.', id)
					const weAree = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(Sliced_Body)}`)
					if (weAree.data.artists == null) return await kill.reply(from, mess.noresult(), id)
					let artcDb = Object.fromEntries(Object.entries(weAree.data.artists[0]).filter(([key,val]) => val !== '' && val !== ' ' && val !== null))
					let photoBand = Object.keys(artcDb).filter(c => c.includes('strArtist') && c !== 'strArtist')
					let artInfo = ''
					artNmr = 1
					for (let ar in photoBand) {
						artInfo += `Arte #${artNmr} [${photoBand[ar]}] -> ${artcDb[photoBand[ar]]}\n\n`
						artNmr++
					}
					if (region == 'en') {
						artInfo += artcDb.strBiographyEN
					} else if (region == 'es') {
						artInfo += artcDb.strBiographyES
					} else artInfo += artcDb.strBiographyPT
					await kill.sendFileFromUrl(from, artcDb.strArtistThumb, 'art.jpg', `Nome -> ${artcDb.strArtist} - #${artcDb.idArtist || 'Sem ID'}\n\nNome alternativo -> ${artcDb.strArtistAlternate || 'Não possui.'}\n\nProdutora -> ${artcDb.strLabel || 'Não possui.'} - #${artcDb.idLabel || 'Sem ID'}\n\nAno de formação -> ${artcDb.intFormedYear || 'Sem informação.'}\n\nAno de nascimento -> ${artcDb.intBornYear || 'Sem informação.'}\n\nAno de mortes -> ${artcDb.intDiedYear || 'N/A - Vivo'}\n\nAno que acabou -> ${artcDb.strDisbanded || 'N/A - Ativo'}\n\nEstilo -> ${artcDb.strStyle || 'Desconhecido'} - ${artcDb.strGenre || 'Desconhecido'}\n\nEstado atual -> ${artcDb.strMood || 'Desconhecido'}\n\nSite -> ${artcDb.strWebsite || 'Não possui.'}\n\nFacebook -> ${artcDb.strFacebook || 'Não possui.'}\n\nTwitter -> ${artcDb.strTwitter || 'Não possui.'}\n\nGênero -> ${artcDb.strGender || 'Desconhecido.'}\n\nMembros -> ${artcDb.intMembers || 'Desconhecido - pra mim.'}\n\nPaís -> ${artcDb.strCountry || 'Desconhecido - pra mim.'} - ${artcDb.strCountryCode || '...'}\n\nUltimas músicas -> ${artcDb.strLastFMChart || 'Sem informação.'}\n\n${artInfo}`, id)
				break

				case 'mymsg':
					let helpMyM = `Para criar uma mensagem customizada, você deve inserir o comando, -msg, e então sua mensagem.\n\nExemplo -> "${prefix}MyMsg -msg I love lolis!"\n\nPara definir a descrição dos stickers automaticamente, quando você roubar um sticker, digite o comando, -sticker <Nome de autor> | <Nome do pack>.\n\nExemplo -> "${prefix}MyMsg -sticker Íris-BOT | Legião Z."`
					if (args.length == 0 || argl[0] == '-help') return await kill.reply(from, helpMyM, id)
					if (!Object.keys(custom).includes(sender.id)) {
						custom[sender.id] = {
							"msg": "Não há recados salvos para este usuário.",
							"author": false,
							"pack": false
						}
					}
					if (argl[0] == '-msg') {
						custom[sender.id]["msg"] = body.slice(cmd.length+6)
					} else if (argl[0] == '-sticker') {
						custom[sender.id]["author"] = arg.split('|')[0].replace('-sticker ', '')
						custom[sender.id]["pack"] = arg.split('|')[1]
					} else return await kill.reply(from, helpMyM, id)
					fs.writeFileSync('./lib/config/Gerais/custom.json', JSON.stringify(custom, null, "\t"))
					await kill.reply(from, mess.maked(), id)
				break

				case 'jail':
					await kill.reply(from, mess.wait(), id)
					var theJailPictu = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.jail(theJailPictu[0], true).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `jail.png`, '', id))
				break

				case 'beijo':
					if (mentionedJidList.length >= 1 || quotedMsg) {
						let kissxsis = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 2)
						await canvacord.Canvas.kiss(kissxsis[0], kissxsis[1]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `kiss.png`, '', id))
					} else await kill.reply(from, mess.semmarcar() + '\n2x.', id)
				break

				case 'bed':
					if (mentionedJidList.length >= 1 || quotedMsg) {
						let kaguyaf = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 2)
						await canvacord.Canvas.bed(kaguyaf[0], kaguyaf[1]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `bed.png`, '', id))
					} else await kill.reply(from, mess.semmarcar() + '\n2x.', id)
				break

				case 'clyde':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'Message/Mensagem.', id)
					await canvacord.Canvas.clyde(Sliced_Body).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `clyde.png`, '', id))
				break

				case 'spank':
					if (mentionedJidList.length >= 1 || quotedMsg) {
						let sailoree = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 2)
						await canvacord.Canvas.spank(sailoree[0], sailoree[1]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `spank.png`, '', id))
					} else await kill.reply(from, mess.semmarcar() + '\n2x.', id)
				break

				case 'batslap':
					if (mentionedJidList.length >= 1 || quotedMsg) {
						let batLeite = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 2)
						await canvacord.Canvas.slap(batLeite[0], batLeite[1]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `spank.png`, '', id))
					} else await kill.reply(from, mess.semmarcar() + '\n2x.', id)
				break

				case 'distract':
					if (mentionedJidList.length >= 1 || quotedMsg) {
						if (isType('image')) {
							let mediaData = await decryptMedia(encryptMedia)
							var theboyfriend = await tools('cloud').upload(mediaData)
							var theboyfriend2 = quotedMsg ? await kill.getProfilePicFromServer(quotedMsgObj.sender.id) : (mentionedJidList.length !== 0 ? await kill.getProfilePicFromServer(mentionedJidList[0]) : await kill.getProfilePicFromServer(sender.id))
							var theboyfriend3 = mentionedJidList.length !== 0 ? await kill.getProfilePicFromServer(mentionedJidList[1]) : personPhoto
						} else {
							if (mentionedJidList.length == 3) {
								var theboyfriend = await kill.getProfilePicFromServer(mentionedJidList[0])
								var theboyfriend2 = await kill.getProfilePicFromServer(mentionedJidList[1])
								var theboyfriend3 = await kill.getProfilePicFromServer(mentionedJidList[2])
							} else {
								var theboyfriend = mentionedJidList.length !== 0 ? await kill.getProfilePicFromServer(mentionedJidList[0]) : await kill.getProfilePicFromServer(sender.id)
								var theboyfriend2 = quotedMsg ? await kill.getProfilePicFromServer(quotedMsgObj.sender.id) : personPhoto
								var theboyfriend3 = await kill.getProfilePicFromServer(randomMember)
							}
							if (typeof theboyfriend == 'object' || !tools('others').isUrl(theboyfriend)) theboyfriend = personPhoto
							if (typeof theboyfriend2 == 'object' || !tools('others').isUrl(theboyfriend2)) theboyfriend2 = personPhoto
							if (typeof theboyfriend3 == 'object' || !tools('others').isUrl(theboyfriend3)) theboyfriend3 = personPhoto
						}
						await canvacord.Canvas.distracted(theboyfriend, theboyfriend2, theboyfriend3).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `distract.png`, '', id))
					} else await kill.reply(from, mess.semmarcar() + '\n3x.', id)
				break

				case 'joke':
					await kill.reply(from, mess.wait(), id)
					let whysoserious = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.jokeOverHead(whysoserious[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `joke.png`, '', id))
				break

				case 'mind':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'Message/Mensagem.', id)
					await canvacord.Canvas.changemymind(Sliced_Body).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `mind.png`, '', id))
				break

				case 'ohno':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'Message/Mensagem.', id)
					await canvacord.Canvas.ohno(Sliced_Body).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `ohno.png`, '', id))
				break

				case 'baby':
					await kill.reply(from, mess.wait(), id)
					let killthebaby = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.affect(killthebaby[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `baby.png`, '', id))
				break

				case 'fuse':
					if (mentionedJidList.length >= 1 || quotedMsg) {
						let gogeta = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 2)
						await canvacord.Canvas.fuse(gogeta[0], gogeta[1]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `fuse.png`, '', id))
					} else await kill.reply(from, mess.semmarcar() + '\n2x.', id)
				break

				case 'beauty':
					await kill.reply(from, mess.wait(), id)
					let linalis = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.beautiful(linalis[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `beautiful.png`, '', id))
				break

				case 'pixel':
					await kill.reply(from, mess.wait(), id)
					let mine144p = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.pixelate(mine144p[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `pixelate.png`, '', id))
				break

				case 'reward':
					await kill.reply(from, mess.wait(), id)
					let picapau = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.wanted(picapau[0]).then(async (buffer) => {
						await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `reward.png`, '', id)
					})
				break

				case 'sharp':
					await kill.reply(from, mess.wait(), id)
					let fosfo = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					let sharplvl = mentionedJidList.length !== 0 ? args[1] : args.length >= 1 && !isNaN(args[0]) ? args[0] : 1
					await canvacord.Canvas.sharpen(fosfo[0], Number(sharplvl)).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `sharp.png`, '', id))
				break

				case 'burn':
					await kill.reply(from, mess.wait(), id);
					let makeItBun = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					let burnlvl = mentionedJidList.length !== 0 ? args[1] : args.length >= 1 && !isNaN(args[0]) ? args[0] : 1
					await canvacord.Canvas.burn(makeItBun[0], Number(burnlvl)).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `burn.png`, '', id))
				break

				case 'shold':
					await kill.reply(from, mess.wait(), id)
					let paganmin = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					let iStayOrGO = mentionedJidList.length !== 0 ? Number(args[1]) : args.length >= 1 && !isNaN(args[0]) ? Number(args[0]) : 100
					await canvacord.Canvas.threshold(paganmin[0], Number(iStayOrGO)).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `threshold.png`, '', id))
				break

				case 'opnion':
					await kill.reply(from, mess.wait(), id)
					var theLGBTopn = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await canvacord.Canvas.opinion(theLGBTopn[0], Sliced_Body.replace(mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join(' '), '')).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `opnion.png`, '', id))
				break

				case 'surprise':
					const surpmother = fs.readFileSync('./lib/config/Utilidades/sounds.txt').toString().split('\n')
					try {
						await kill.sendFileFromUrl(from, `https://www.myinstants.com/media/sounds/${tools('others').randVal(surpmother)}`, 'audio.mp3', '', null, null, null, true, null, null)
					} catch (error) {
						await kill.sendPtt(from, 'https://www.myinstants.com/media/sounds/soviet-anthem-but-its-sung-by-a-loli-audiotrimmer.mp3')
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'casal':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					if (args.length == 0 || isNaN(args[0])) return await kill.reply(from, mess.casais(), id)
					var casaltop = `-----[ *❤️ TOP ${args[0]} CASAIS ❤️* ]----\n\n`
					for (let i = 0; i < Number(args[0]); i++) {
						let csl1 = await kill.getContact(tools('others').randVal(groupMembersId))
						let csl2 = await kill.getContact(tools('others').randVal(groupMembersId))
						casaltop += `${i + 1} - (${csl1.pushname || 'wa.me/' + csl1.id.replace('@c.us', '')}) + (${csl2.pushname || 'wa.me/' + csl2.id.replace('@c.us', '')})\n\n`
					}
					await kill.reply(from, casaltop, id)
				break

				case 'top':
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					if (args.length <= 1 || !arks.includes('|') || isNaN(arg.split('|')[0])) return await kill.reply(from, mess.noargs() + 'Max. Users | TOP' + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
					var umtoprps = `-----[ *# TOP ${arg.split('|')[0]} ${arg.split('|')[1]} #* ]----\n\n`
					for (let i = 0; i < Number(arg.split('|')[0]); i++) {
						let top1 = await kill.getContact(tools('others').randVal(groupMembersId))
						umtoprps += `${i + 1} - (${top1.pushname || 'wa.me/' + top1.id.replace('@c.us', '')})\n\n`
					}
					await kill.reply(from, umtoprps, id)
				break

				case 'custom':
					if (args.length <= 1 || !arks.includes('|')) return await kill.reply(from, mess.noargs() + 'CMD | MSG' + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
					if (Object.keys(cmds).includes(chatId) && Object.keys(cmds[chatId]).includes(removeAccents(arg.split('|')[0].replace(' ', '').toLowerCase()))) {
						await kill.reply(from, mess.cmdExist(), id)
					} else {
						if (!Object.keys(cmds).includes(chatId)) {
							cmds[chatId] = {}
						}
						cmds[chatId][removeAccents(arg.split('|')[0].replace(' ', '').toLowerCase())] = arg.split('|')[1]
						fs.writeFileSync('./lib/config/Gerais/cmds.json', JSON.stringify(cmds, null, "\t"))
						await kill.reply(from, mess.cmdAdded(arg), id)
					}
				break

				case 'run':
					if (args.length == 0) return await kill.reply(from, mess.onlyccmds(), id)
					if (Object.keys(cmds).includes(chatId) && Object.keys(cmds[chatId]).includes(argl[0])) {
						await kill.reply(from, cmds[chatId][argl[0]], id)
					} else if (Object.keys(cmds['global']).includes(argl[0])) {
						await kill.reply(from, cmds['global'][argl[0]], id)
					} else await kill.reply(from, mess.cmdnotfound(argl[0]))	
				break

				case 'cmds':
					if (Object.keys(cmds).includes(chatId)) {
						await kill.reply(from, `Custom CMDS ↓\n\n➸ ${Object.keys(cmds[chatId]).join('\n➸ ')}`, id)
					} else await kill.reply(from, mess.noresult(), id)
				break

				// Você pode jogar sozinho marcando a Íris de oponente, ela sabe jogar
				case 'tictac':
					if (args.length == 0 || argl[0] == '-help') return await kill.reply(from, mess.tictactoe(), id)
					const theplayer2 = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : null)
					const resetGameNew = () => {
						tttSet[chatId] = {
							thePlayerGame: 0,
							thePlayerGame2: 0,
							thePlayerGameOld: 0,
							thePlayerGameOld2: 0,
							xjogadas: [],
							ojogadas: [],
							waitJogo: 0,
							timesPlayed: 0,
							tictacplays: ['a1','a2','a3','b1','b2','b3','c1','c2','c3'],
							tttboard: {
								a1: '-',
								a2: '-',
								a3: '-',
								b1: '-',
								b2: '-',
								b3: '-',
								c1: '-',
								c2: '-',
								c3: '-'
							},
							finalAwnser: 0,
							isValidGame: 0
						}
					}
					const tboards = async () => {
						delete tttSet[chatId].tttboard.undefined // Caso alguma jogada por como erro
						let anamazs = await canvacord.Canvas.tictactoe(tttSet[chatId].tttboard, {
							bg: '#000000',
							bar: '#FFFFFF'
						})
						return anamazs
					}
					if (!Object.keys(tttSet).includes(chatId)) {
						resetGameNew()
					}
					if (argl[0] == '-show') return await kill.sendImageAsSticker(from, await tboards(), stickerConfig)
					if (theplayer2 !== null) {
						tttSet[chatId]['isValidGame'] = 1
					}
					if (sender.id == tttSet[chatId].thePlayerGameOld && argl[0] == '-cancel' || sender.id == tttSet[chatId].thePlayerGameOld2 && argl[0] == '-cancel') {
						await kill.reply(from, mess.cancelgame(), id)
						return resetGameNew()
					}
					if (tttSet[chatId].thePlayerGame == 0 && tttSet[chatId].waitJogo == 0 && tttSet[chatId].isValidGame == 1 || sender.id == tttSet[chatId].thePlayerGame && tttSet[chatId].waitJogo == 0 && tttSet[chatId].isValidGame == 1 || tttSet[chatId].thePlayerGame2 == sender.id && tttSet[chatId].waitJogo == 0 && tttSet[chatId].isValidGame == 1) {
						if (!tttSet[chatId].tictacplays.includes(argl[0])) return await kill.reply(from, `Parece que sua jogada não é valida, abaixo estão as jogadas validas, dê uma olhada e escolha com sabedoria hehehe...\n\n-> ${tttSet[chatId].tictacplays.join('\n-> ')}`, id)
						tttSet[chatId].waitJogo = 1
						tttSet[chatId].timesPlayed == 0 ? tttSet[chatId].thePlayerGame = sender.id : tttSet[chatId].thePlayerGame = tttSet[chatId].thePlayerGameOld
						tttSet[chatId].timesPlayed == 0 ? tttSet[chatId].thePlayerGame2 = theplayer2 : tttSet[chatId].thePlayerGame2 = tttSet[chatId].thePlayerGameOld2
						tttSet[chatId].thePlayerGameOld = tttSet[chatId].thePlayerGame
						tttSet[chatId].thePlayerGameOld2 = tttSet[chatId].thePlayerGame2
						if (sender.id == tttSet[chatId].thePlayerGameOld) {
							tttSet[chatId].xjogadas.push(argl[0])
							tttSet[chatId].tttboard[argl[0]] = 'X'
							tttSet[chatId].tictacplays = tttSet[chatId].tictacplays.filter(j => j !== argl[0])
						} else if (sender.id == tttSet[chatId].thePlayerGameOld2) {
							tttSet[chatId].ojogadas.push(argl[0])
							tttSet[chatId].tttboard[argl[0]] = 'O'
							tttSet[chatId].tictacplays = tttSet[chatId].tictacplays.filter(j => j !== argl[0])
						}
						if (tttSet[chatId].thePlayerGameOld2 == botNumber) {
							var model = ((new TicTacToe.Model(Object.values(tttSet[chatId].tttboard).join(''), 'O')).getRecommendation()).index
							let irisJog = (Object.keys(tttSet[chatId].tttboard)[model] || tools('others').randVal(tttSet[chatId]['tictacplays']))
							tttSet[chatId].ojogadas.push(irisJog)
							tttSet[chatId].tttboard[irisJog] = 'O'
							tttSet[chatId].tictacplays = tttSet[chatId].tictacplays.filter(j => j !== irisJog)
							//await kill.sendTextWithMentions(from, `Estou fazendo minha jogada, vou mandar o tabuleiro assim que eu terminar @${tttSet[chatId].thePlayerGameOld.replace('@c.us', '')}.`)
							tttSet[chatId].thePlayerGame = tttSet[chatId].thePlayerGameOld
							tttSet[chatId].thePlayerGame2 = 1
						}
						await kill.sendImageAsSticker(from, await tboards(), stickerConfig)
						if (tttSet[chatId].thePlayerGameOld == sender.id) {
							tttSet[chatId].thePlayerGame2 = tttSet[chatId].thePlayerGameOld2
							tttSet[chatId].thePlayerGame = 1
						} else if (tttSet[chatId].thePlayerGameOld2 == sender.id) {
							tttSet[chatId].thePlayerGame = tttSet[chatId].thePlayerGameOld
							tttSet[chatId].thePlayerGame2 = 1
						}
						if (tttSet[chatId].thePlayerGameOld2 == botNumber) {
							tttSet[chatId].thePlayerGame = tttSet[chatId].thePlayerGameOld
							tttSet[chatId].thePlayerGame2 = 1
						} else if (tttSet[chatId].thePlayerGameOld == botNumber) {
							tttSet[chatId].thePlayerGame2 = tttSet[chatId].thePlayerGameOld2
							tttSet[chatId].thePlayerGame = 1
						}
						tttSet[chatId].timesPlayed = 1
						tttSet[chatId].waitJogo = 0
						var theVeredict = tools('gaming').verify(tttSet, chatId)
						let winnerN = theVeredict == 1 ? "thePlayerGameOld" : (theVeredict == 2 ? "thePlayerGameOld2" : (theVeredict == 3 ? "draw" : false))
						if (winnerN !== false) {
							if (winnerN == "draw") {
								await kill.sendText(from, mess.draw())
							} else await kill.sendTextWithMentions(from, mess.playerWin(tttSet[chatId][winnerN]))
							return resetGameNew()
						}
					} else if (tttSet[chatId].thePlayerGameOld !== 0) {
						await kill.sendTextWithMentions(from, mess.someoneplay(tttSet[chatId].thePlayerGameOld.replace('@c.us', ''), tttSet[chatId].thePlayerGameOld2.replace('@c.us', '')), id)
					} else await kill.reply(from, mess.tictactoe(), id)
				break

				case 'detect':
					if (Default_APIS.Acr_Host !== APIS.Acr_Host && tools('others').isUrl(APIS.Acr_Host) && Default_APIS.Acr_Secret !== APIS.Acr_Secret && Default_APIS.Acr_Access !== APIS.Acr_Access) {
						if (isType('audio') || isType('ptt')) {
							let mediaData = await decryptMedia(encryptMedia)
							await tools('acrcloud').recognize(`./lib/media/audio/detect-${tools('others').randomString(10)}.mp3`, mediaData, kill, message)
						} else await kill.reply(from, mess.onlyaudio(), id)
					} else return await kill.reply(from, "Meu dono não configurou este comando, não posso executar pois causaria erros graves.", id)
				break

				// Se forem inteligentes, podem gastar icoins para comprar XP e ganhar mais Icoin's
				case 'agiotar':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					let usageHeAg = `Ops, parece que você está usando errado, esse comando deve ser utilizado da seguinte maneira -> "${prefix}Agiotar <type/tipo> @user <value/valor> <time/tempo>".\n\nExemplo -> "${prefix}Agiotar xp @user 500 5"`
					if (argl[0] == 'coin' || argl[0] == 'xp' || argl[0] == 'dima' || argl[0] == 'rubi') {
						if (objconfig.agiotas.includes(sender.id)) return await kill.reply(from, `Você agiotou ou foi agiotado por alguém, para fazer isso novamente aguarde que a agiotagem anterior termine.`, id)
						if (args.length < 2 || !quotedMsg && mentionedJidList.length == 0) return await kill.reply(from, mess.semmarcar() + '\n\n' + usageHeAg, id)
						let timeGain = quotedMsg ? args[2] : (mentionedJidList.length !== 0 ? args[3] : args[3])
						let fakeGain = parseInt(quotedMsg ? args[1] : (mentionedJidList.length !== 0 ? args[2] : args[2]))
						if (isNaN(fakeGain)) return await kill.reply(from, mess.onlynumber() + '\n\n' + usageHeAg, id)
						const Value_Exists = tools('gaming').getValue(sender.id, nivel, chatId, argl[0])
						if (isNaN(fakeGain) || !tools('others').isInt(fakeGain) || Number(fakeGain) > Value_Exists || fakeGain < 1) return await kill.reply(from, mess.maxAgiota(Value_Exists), id)
						if (mentionedJidList.length !== 0) agiMent = await kill.getContact(mentionedJidList[0])
						var pobreAlma = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? agiMent.id : sender.id)
						if (pobreAlma == sender.id) return await kill.reply(from, mess.cmdfailed() + '\n\n' + usageHeAg, id)
						tools('gaming').addValue(pobreAlma, Number(fakeGain), nivel, chatId, argl[0])
						tools('gaming').addValue(sender.id, Number(-fakeGain), nivel, chatId, argl[0])
						objconfig.agiotas.push(sender.id, pobreAlma)
						await kill.sendTextWithMentions(from, mess.moneyagi(fakeGain, pobreAlma, timeGain))
						await tools('others').sleep(Number(timeGain * 60000))
						await kill.sendTextWithMentions(from, mess.backmoney(fakeGain, sender.id, pobreAlma))
						tools('gaming').addValue(pobreAlma, Number(-fakeGain), nivel, chatId, argl[0])
						tools('gaming').addValue(sender.id, Number(fakeGain), nivel, chatId, argl[0])
						objconfig.agiotas = objconfig.agiotas.filter(v => v !== pobreAlma && v !== sender.id)
					} else return await kill.reply(from, usageHeAg, id)
				break

				case 'sepia':
					try {
						await kill.reply(from, mess.wait(), id)
						var sepiaUpl = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
						await canvacord.Canvas.invert(sepiaUpl[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `sepia.png`, '', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'guild':
				case 'guilda':
					let The_Limiter = tools('gaming').getLimit(sender.id, daily, chatId, true)
					if (The_Limiter['guild']['isLimit']) return await kill.reply(from, mess.waitNewGuild(The_Limiter['guild']), id)
					if (args.length == 0) return await kill.reply(from, mess.helpGuild(), id)
					if (functions.guild.includes(argc[0]) && tools('gaming').getValue(sender.id, nivel, chatId, 'guild') !== argc[0]) {
						tools('gaming').changeGuild(sender.id, nivel, chatId, argc[0])
						await kill.reply(from, mess.newGuild(), id)
						if (objconfig.noLimits == 0) return tools('gaming').addLimit(sender.id, daily, chatId, 'guild')
					} else await kill.reply(from, `A guilda informada não existe ou você já está nela.`, id)
				break

				case 'spoiler':
					await kill.reply(from, mess.spoiler(), id)
				break

				case 'myguild':
					if (args.length == 0) return await kill.reply(from, `Você esqueceu de inserir o nome da Guilda.`, id)
					if (!isGroupMsg) return await kill.reply(from, mess.sogrupo(), id)
					try {
						var guildTit = `----- [ *GUILDA ${argc[0]}* ] -----\n\n`
						let countS = 0
						for (let p of Object.keys(nivel[chatId])) {
							if (nivel[chatId][p]['guild'] == argc[0]) {
								countS++
								let skybor = await kill.getContact(p)
								guildTit += `${countS} -> *[${skybor.pushname || 'wa.me/' + p.replace('@c.us', '')}]*\n\n`
							}
						}
						await kill.sendText(from, guildTit)
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'ddd':
					if (!region == 'pt') return await kill.reply(from, 'Brazil only/Brasil solamente!', id)
					if (args.length == 0 || isNaN(args[0])) return await kill.reply(from, `Você esqueceu de inserir o DDD.`, id)
					const ddds = (await axios.get(`https://brasilapi.com.br/api/ddd/v1/${args[0]}`)).data
					if (ddds.type == 'ddd_error') return await kill.reply(from, ddds.message, id)
					await kill.reply(from, `Lista de Cidades de ${ddds.state} com este DDD [${ddds.cities.length}] >\n → ${ddds.cities.join('\n\n→ ')}`, id)
				break

				case 'newguild':
					if (args.length < 1) return await kill.reply(from, mess.noargs() + 'Guild.', id)
					if (functions.guild.includes(argc[0])) return await kill.reply(from, 'A guilda que você deseja criar já existe.', id)
					functions.guild.push(argc[0])
					tools('gaming').changeGuild(sender.id, nivel, chatId, argc[0])
					fs.writeFileSync('./lib/config/Gerais/functions.json', JSON.stringify(functions, null, "\t"))
					await kill.reply(from, `Guilda ${argc[0]} criada com sucesso, chame alguém para entrar com ${prefix}Guild ${argc[0]}!`, id)
				break

				case 'allguild':
					await kill.reply(from, `Guildas ↓\n\n${functions.guild.join('\n')}`, id)
				break

				case 'jogo':
				case 'jogos':
				case 'game':
					if (Default_APIS.API_Rawg !== APIS.API_Rawg) {
						if (args.length == 0) return await kill.reply(from, mess.noargs() + 'nome do jogo/game name/nombre de juego', id)
						const gamesearch = await axios.get(`https://api.rawg.io/api/games?key=${APIS.API_Rawg}&search=${encodeURIComponent(arg)}&page_size=1`)
						let esrb = gamesearch.data.results[0].esrb_rating === null ? 'Not Found' : gamesearch.data.results[0].esrb_rating.name
						let plataforms = ''
						for (let i in gamesearch.data.results[0].platforms) {
							plataforms += `${gamesearch.data.results[0].platforms[i].platform.name}, `
						}
						plataforms += `${gamesearch.data.results[0].platforms[gamesearch.data.results[0].platforms.length - 1].platform.name}`
						let whrtobuy = ''
						for (let i in gamesearch.data.results[0].stores) {
							whrtobuy += `${gamesearch.data.results[0].stores[i].store.name}, `
						}
						whrtobuy += `${gamesearch.data.results[0].stores[gamesearch.data.results[0].stores.length - 1].store.name}`
						if (gamesearch.data.results[0].genres.length === 0) {
							await kill.sendFile(from, gamesearch.data.results[0].background_image, 'game.png', mess.gameinfo(gamesearch.data.results[0].name, 'Not Found', plataforms, whrtobuy, gamesearch.data.results[0].playtime, gamesearch.data.results[0].released, gamesearch.data.results[0].rating, gamesearch.data.results[0].rating_top, esrb), id)
						} else {
							let genres = ''
							for (let i in gamesearch.data.results[0].genres) {
								genres += `${gamesearch.data.results[0].genres[i].name}, `
							}
							genres += `${gamesearch.data.results[0].genres[gamesearch.data.results[0].genres.length - 1].name}`
							await kill.sendFile(from, gamesearch.data.results[0].background_image, 'game.png', mess.gameinfo(gamesearch.data.results[0].name, genres, plataforms, whrtobuy, gamesearch.data.results[0].playtime, gamesearch.data.results[0].released, gamesearch.data.results[0].rating, gamesearch.data.results[0].rating_top, esrb), id)
						}
					} else return await kill.reply(from, "Meu dono não configurou este comando, não posso executar pois causaria erros graves.", id)
				break

				case '8d':
					if (isType('audio') || isType('ptt') || isType('video')) {
						var format = (isType('video')) ? 'mp4' : 'mp3'
						let mediaData = await decryptMedia(encryptMedia)
						await tools('ffmpeg').octasound(mediaData, argl[0], kill, message, format)
					} else await kill.reply(from, mess.onlyaudio(), id)
				break

				/*Feito por Pedro Batistop*/
				case 'petpet':
				case 'patpat':
				case 'pat':
				case 'pet':
					let entryPET = `./lib/media/img/petpet${sender.id.replace('@c.us', '')}${lvpc}.gif`
					let outPET = `./lib/media/img/petpet${sender.id.replace('@c.us', '')}${lvpc}.webp`
					const petPet = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					let animatedGif = await petPetGif(petPet[0])
					fs.writeFile(entryPET, animatedGif, async (err) => {
						if (err) return console.error(err)
						const resultwebp = webp.gwebp(entryPET, outPET, "-q 100", logging = "-v")
						await kill.sendImageAsSticker(from, outPET, stickerConfig)
						tools('others').clearFile(entryPET, 30000)
						tools('others').clearFile(outPET, 30000)
					})
				break

				case 'stt':
				case 'watson':
					if (Default_APIS.Watson_Model !== APIS.Watson_Model && Default_APIS.API_IBM_Watson !== APIS.API_IBM_Watson && Default_APIS.Watson_Host !== APIS.Watson_Host && tools('others').isUrl(APIS.Watson_Host)) {
						if (isType('audio') || isType('ptt')) {
							let BkMesa = quotedMsgObj ? quotedMsgObj : message
							if (BkMesa.duration > 60) return await kill.reply(from, mess.watsonmsg(), id)
							let watsonst = `./lib/media/audio/stt-${tools('others').randomString(10)}.ogg`
							let mediaData = await decryptMedia(encryptMedia)
							fs.writeFile(watsonst, mediaData, async (err) => {
								if (err) return console.error(err)
								const speechToText = new SpeechToTextV1({
									authenticator: new IamAuthenticator({
										apikey: APIS.API_IBM_Watson
									}),
									serviceUrl: APIS.Watson_Host,
									disableSslVerification: true
								})
								const recognizeStream = await speechToText.recognizeUsingWebSocket({
									objectMode: false,
									contentType: 'audio/ogg',
									model: APIS.Watson_Model
								})
								fs.createReadStream(watsonst).pipe(recognizeStream)
								recognizeStream.setEncoding('utf8')
								recognizeStream.on('data', async function(data, event) {
									await kill.reply(from, `🎙️ -> ${data}`, id)
								})
								recognizeStream.on('error', async function(error, event) {
									tools('others').reportConsole(cmd, error)
									await kill.reply(from, mess.fail(cmd, error, time), id)
								})
								recognizeStream.on('close', async function(event) {})
							})
							await kill.reply(from, mess.nobgms(), id)
							tools('others').clearFile(watsonst, 10000, false)
						} else await kill.reply(from, mess.onlyaudio(), id)
					} else return await kill.reply(from, "Meu dono não configurou este comando, não posso executar pois causaria erros graves.", id)
				break

				/*case 'time':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					const getlimit = tools('gaming').getLimit(sender.id, daily, 'games')
					if (getlimit !== undefined) {
						const whenminutes = Math.floor((Date.now() - getlimit) / 60000)
						const whenseconds = Math.floor(((Date.now() - getlimit) % 60000) / 1000) + 1
						const timeremainminutes = Math.abs(Math.floor((Number(config.Wait_to_Play)) - ((Date.now() - getlimit) / 60000)))
						const timeremainseconds = Math.abs(Math.floor(Number(config.Wait_to_Play) - (((Date.now() - getlimit) % 60000) / 1000)))
						if (whenminutes < Number(config.Wait_to_Play)) {
							await kill.reply(from, `⏱️ - Espere *${timeremainminutes} minutos* & *${timeremainseconds} segundos* para apostar novamente.\n\n🎮 - Apostou por último *${whenminutes} minutos* & *${whenseconds} segundos* atrás.`, id)
						} else await kill.reply(from, `⏱️ - Você pode apostar desde *${timeremainminutes} minutos* & *${timeremainseconds} segundos* atrás.\n\n🎮 - Apostou por último *"${whenminutes} minutos* & *${whenseconds} segundos"* atrás.`, id)
					} else await kill.reply(from, 'Você não jogou ainda?', id)
				break*/

				case 'mix':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					if (!Object.keys(gameconfig).includes(chatId)) {
						gameconfig[chatId] = {
							lives: 6,
							dicas: 0,
							forcw: 0,
							hint: 0,
							wordVsb: 0,
							wordOct: 0,
							word: 0,
							whoplay: chatId,
							gameFile: 0,
							forcFile: 0
						}
					}
					gameconfig[chatId]['gameFile'] = gameconfig[chatId]['gameFile'] == 0 ? tools('others').randVal(fileFor) : gameconfig[chatId]['gameFile']
					if (argl[0] == '-dica' && gameconfig[chatId]['word'] !== 0) {
						if (gameconfig[chatId]['hint'] !== 0) return await kill.reply(from, `Você já usou todas as dicas deste jogo atual, irei re-ordenar as letras!\n\n❗ - ${gameconfig[chatId]['gameFile'].toUpperCase()}\n\n❓ - "${tools('others').randomArr(gameconfig[chatId]['word'].split('').sort()).toString()}""`, id)
						if (gameconfig[chatId]['gameFile'] == 'empresa') {
							await kill.reply(from, `A palavra começa com as letras... "${gameconfig[chatId]['word'].slice(0, gameconfig[chatId]['word'].length / 2 + 1).toUpperCase()}"`, id)
						} else await kill.reply(from, `A palavra começa com as letras... "${gameconfig[chatId]['word'].slice(0, await tools('others').randomNumber(1, gameconfig[chatId]['word'].length / 2)).toUpperCase()}"`, id)
						gameconfig[chatId]['hint = 1']
					} else if (argl[0] == '-placar') {
						if (Object.keys(placar) == '') return await kill.reply(from, `Ninguém venceu até agora.\n\n❗ - ${gameconfig[chatId]['gameFile'].toUpperCase()}\n\n❓ - "${tools('others').randomArr(gameconfig[chatId]['word'].split('').sort()).toString()}"`, id)
						let score = ''
						for (let i of Object.keys(placar)) {
							score += `"wa.me/${i.replace('@c.us', '')}" = "${placar[i]}" Points\n\n`
						}
						await kill.reply(from, score, id)
					} else if (gameconfig[chatId]['word'] == 0 || argl[0] == '-new') {
						gameconfig[chatId]['word'] = fileFor.includes(argl[1]) ? tools('others').getRandLine(1, `./lib/config/Utilidades/${argl[1]}.txt`)[0] : tools('others').getRandLine(1, `./lib/config/Utilidades/${gameconfig[chatId]['gameFile']}.txt`)[0]
						gameconfig[chatId]['whoplay'] = chatId
						gameconfig[chatId]['hint'] = 0
						gameconfig[chatId]['gameFile'] = fileFor.includes(argl[1]) ? argl[1] : gameconfig[chatId]['gameFile']
						let wordMix = gameconfig[chatId]['word'].split(' ')
						wordMix = wordMix.length > 1 ? wordMix.map(w => '   ' + tools('others').randomArr(w.split(''))).toString().replace('   ', '') : tools('others').randomArr(wordMix[0].split('')).toString()
						await kill.reply(from, `❗ - ${gameconfig[chatId]['gameFile'].toUpperCase()}\n\n❓ - "${wordMix}"`, id)
					} else await kill.reply(from, `❗ - ${gameconfig[chatId]['gameFile'].toUpperCase()}\n\n❓ - "${tools('others').randomArr(gameconfig[chatId]['word'].split('').sort()).toString()}"`, id)
				break

				case '2d':
					if (args.length == 0) return await kill.reply(from, 'Insira um personagem de anime.', id)
					let charac = await axios.get(`https://www.animecharactersdatabase.com/api_series_characters.php?character_q=${encodeURIComponent(Sliced_Body)}`)
					if (charac.data == '-1') return await kill.reply(from, mess.noresult(), id)
					if (region == 'en' || arks.includes('-orig')) return await kill.sendFileFromUrl(from, `${charac.data.search_results[0].character_image}`, 'char.jpg', `${charac.data.search_results[0].name} - ${charac.data.search_results[0].gender}\n\n${charac.data.search_results[0].anime_name}\n\n${charac.data.search_results[0].desc}`)
					await translate(charac.data.search_results[0].desc, {
						to: region
					}).then(async (desc) => await kill.sendFileFromUrl(from, `${charac.data.search_results[0].character_image}`, 'char.jpg', `${charac.data.search_results[0].name} - ${charac.data.search_results[0].gender}\n\n${charac.data.search_results[0].anime_name}\n\n${desc.text}`))
				break

				case 'forca':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					if (!Object.keys(gameconfig).includes(chatId)) {
						gameconfig[chatId] = {
							lives: 6,
							dicas: 0,
							forcw: 0,
							hint: 0,
							wordVsb: 0,
							wordOct: 0,
							word: 0,
							whoplay: chatId,
							gameFile: 0,
							forcFile: 0
						}
					}
					gameconfig[chatId]['forcFile'] = gameconfig[chatId]['forcFile'] == 0 ? tools('others').randVal(fileFor) : gameconfig[chatId]['forcFile']
					let resetForca = () => {
						gameconfig[chatId]['forcw'] = 0
						gameconfig[chatId]['wordVsb'] = 0
						gameconfig[chatId]['wordOct'] = 0
						gameconfig[chatId]['whoplay'] = 0
						gameconfig[chatId]['lives'] = 0
						gameconfig[chatId]['forcFile'] = 0
					}
					let mandarFig = async (link) => {
						await kill.sendStickerfromUrl(from, link, {
							method: 'get'
						}, stickerConfig)
					}
					if (gameconfig[chatId]['forcw'] == 0 || argl[0] == '-new') {
						gameconfig[chatId]['forcw'] = tools('others').getRandLine(1, `./lib/config/Utilidades/${gameconfig[chatId]["forcFile"]}.txt`)[0]
						gameconfig[chatId]['wordVsb'] = gameconfig[chatId]['forcw'].replace(/[a-zA-Z]/g, '_ ').split(' ')
						gameconfig[chatId]['wordOct'] = gameconfig[chatId]['forcw'].split('')
						gameconfig[chatId]['whoplay'] = chatId
						await kill.reply(from, `❗ - ${gameconfig[chatId]['forcFile'].toUpperCase()}\n\n❓ - "${gameconfig[chatId]['wordVsb'].join(' ')}"`, id)
					} else if (argl.length >= 2 && argl[0] == '-r') {
						if (gameconfig[chatId]['wordVsb'].includes(argl[1].split('')[0])) return await kill.reply(from, 'Já possui esta letra.' + '\n\n' + gameconfig[chatId]["wordVsb"].join(' '), id)
						let awnserFind = 0
						for (let i = 0; i < gameconfig[chatId]['wordVsb'].length; i++) {
							if (gameconfig[chatId]['wordOct'][i] == argl[1][0]) {
								gameconfig[chatId]['wordVsb'][i] = gameconfig[chatId]['wordOct'][i]
								awnserFind = 1
							}
						}
						if (awnserFind == 1) {
							await kill.reply(from, 'Letra encontrada! > ' + gameconfig[chatId]['wordVsb'].join(' '), id)
							if (gameconfig[chatId]['wordVsb'].filter((a => a == '_')).length == 0) {
								await kill.reply(from, 'A palavra era -> "' + gameconfig[chatId]['wordVsb'].join(' ') + '", você venceu!' , id)
								resetForca()
							}
						} else {
							gameconfig[chatId]['lives'] -= 1
							if (gameconfig[chatId]['lives'] == 5) {
								await mandarFig('https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/1.png')
							} else if (gameconfig[chatId]['lives'] == 4) {
								await mandarFig('https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/2.png')
							} else if (gameconfig[chatId]['lives'] == 3) {
								await mandarFig('https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/3.png')
							} else if (gameconfig[chatId]['lives'] == 2) {
								await mandarFig('https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/4.png')
							} else if (gameconfig[chatId]['lives'] == 1) {
								await mandarFig('https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/5.png')
							} else if (gameconfig[chatId]['lives'] == 0) {
								await kill.sendFileFromUrl(from, 'https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Assets/6.jpg', 'lose.jpg', `Você perdeu! Não encontrei a letra "${argl[1].split('')[0].toUpperCase()}"\n\nA palavra era "${gameconfig[chatId]['forcw'].toUpperCase()}"`, id)
								return resetForca()
							}
							await kill.reply(from, `Não encontrei a letra ${argl[1].split('')[0].toUpperCase()}\n\n- "${gameconfig[chatId]['forcFile'].toUpperCase()}" - \n\n"${gameconfig[chatId]['wordVsb'].join(' ')}"`, id)
						}
					} else if (argl[0] == '-dica') {
						if (gameconfig[chatId]['dicas'] !== 0) return await kill.reply(from, `Você já usou todas as dicas deste jogo atual!\n\n"${gameconfig[chatId]['wordVsb'].join(' ')}"`, id)
						gameconfig[chatId]['dicas'] = 1
						let getDica = () => {
							let randNbr = tools('others').randomNumber(1, gameconfig[chatId]['wordVsb'].length)
							if (gameconfig[chatId]['wordVsb'][randNbr] !== '_') {
								randNbr = gameconfig[chatId]['wordVsb'].indexOf('_')
							}
							gameconfig[chatId]['wordVsb'][randNbr] = gameconfig[chatId]['wordOct'][randNbr]
						}
						if (gameconfig[chatId]['wordVsb'].length < 6) {
							getDica()
						} else {
							getDica()
							getDica()
						}
						await kill.reply(from, 'Aqui está uma letra, você só pode obter uma dica por jogo.\n' + gameconfig[chatId]['wordVsb'].join(' '), id)
					} else if (argl.length >= 2 && argl[0] == '-allin') {
						if (removeAccents(argl[1]) == gameconfig[chatId]['forcw']) {
							await kill.reply(from, `Parabéns!\nA palavra correta "${gameconfig[chatId]['forcw']}", você acertou em cheio!`, id)
						} else await kill.reply(from, `Você perdeu após apostar tudo, palavra correta = "${gameconfig[chatId]['forcw'].toUpperCase()}"`, id)
					} else return kill.reply(from, `❗ - ${gameconfig[chatId]['forcFile'].toUpperCase()}\n\n❓ - "${gameconfig[chatId]['wordVsb'].join(' ')}"`, id)
				break

				case 'shop':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					if (args.length < 1 || args.includes('-menu')) return await kill.reply(from, mess.shopping(), id)
					if (args[0] == '3' || args[0] == '4' || args[0] == '5') {
						if (mentionedJidList.length == 0 && !quotedMsg) return await kill.reply(from, `Mencione a pessoa neste comando.\nExemplo -> "${prefix}Shop 3 @User".`, id)
						let pforj = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : sender.id)
						await shop(kill, message, args, sender.id, nivel, chatId, pforj)
					} else await shop(kill, message, args, sender.id, nivel, chatId, false)
				break

				case 'fipe':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'código tabela FIPE.', id)
					let fipe = (await axios.get(`https://brasilapi.com.br/api/fipe/preco/v1/${args[0]}`)).data[0]
					await kill.reply(from, `🚗 ${fipe.marca} - ${fipe.modelo}\n\n📅 ${fipe.anoModelo}\n\n💸 ${fipe.valor}\n\n⛽ ${fipe.combustivel} [${fipe.siglaCombustivel}]`, id)
				break

				case 'feriados':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'ANO.', id)
					let ferias = (await axios.get(`https://brasilapi.com.br/api/feriados/v1/${args[0]}`)).data
					await kill.reply(from, ferias.map(res => `*"${res.name}"* [${res.date} / ${res.type}]`).join('\n\n'), id)
				break

				case 'loteria':
				case 'lotery':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					if (!Object.keys(lotery).includes(chatId)) {
						lotery[chatId] = {			
							"hasLast": false,
							"users": [],
							"lastUserPart": 0,
							"prize": {
								"coin": 0,
								"xp": 0,
								"rubi": 0,
								"dima": 0
							},
							"lastprize": {
								"coin": 0,
								"xp": 0,
								"rubi": 0,
								"dima": 0
							},
							"isStarted": false,
							"time": 0,
							"win": 0,
							"winner": 0,
							"lastTime": 0
						}
					}
					if (argl[0] == '-buy') {
						if (lotery[chatId]['users'].includes(sender.id)) return await kill.reply(from, `Você já está no sorteio, apenas espere que ele finalize para participar novamente.`, id)
						const icoinTick = parseInt(tools('gaming').getValue(sender.id, nivel, chatId, 'coin'))
						const xpPrize = parseInt(tools('gaming').getValue(sender.id, nivel, chatId, 'xp'))
						const rubiPrize = parseInt(tools('gaming').getValue(sender.id, nivel, chatId, 'rubi'))
						const diamoPrize = parseInt(tools('gaming').getValue(sender.id, nivel, chatId, 'dima'))
						if (Number(shopconf.Ticket_Price) > icoinTick) return await kill.reply(from, `Você precisa ter ${shopconf.Ticket_Price} I'Coin para participar, você tem apenas ${icoinTick}, junte mais antes que o tempo expire!`, id)
						lotery[chatId]['users'].push(sender.id)
						lotery[chatId]['prize']['coin'] += Math.abs(parseInt(icoinTick / Number(config.Max_Divider_Win)) + tools('others').randomNumber(10, 100))
						lotery[chatId]['prize']['xp'] += Math.abs(parseInt(xpPrize / Number(config.Max_Divider_Win)) + tools('others').randomNumber(10, 100))
						lotery[chatId]['prize']['rubi'] += Math.abs(parseInt(rubiPrize / Number(config.Max_Divider_Win)) + tools('others').randomNumber(10, 100))
						lotery[chatId]['prize']['dima'] += Math.abs(parseInt(diamoPrize / Number(config.Max_Divider_Win)) + tools('others').randomNumber(10, 100))
						tools('gaming').addValue(sender.id, Number(-shopconf.Ticket_Price), nivel, chatId, 'coin')
						if (lotery[chatId]['hasLast']) {
							const winner_contact = await kill.getContact(lotery[chatId]['winner'])
							let winner_name = winner_contact.pushname ? `${winner_contact.pushname} - [ https://wa.me/${lotery[chatId]['winner'].replace('@c.us', '')} ]` : `https://wa.me/${lotery[chatId]['winner'].replace('@c.us', '')}`
							await kill.sendTextWithMentions(from, `Atualmente os premios são de:\n\n- ${lotery[chatId]['prize']['coin']} I'coin.\n- ${lotery[chatId]['prize']['xp']} XP.\n- ${lotery[chatId]['prize']['rubi']} Rubis.\n- ${lotery[chatId]['prize']['dima']} Diamantes.\n\nOs premios aumentam conforme a quantidade de apostadores, atualmente existem ${lotery[chatId]['users'].length} apostadores, as chances de você ganhar são de ${parseFloat(100/Number(lotery[chatId]['users'].length)).toFixed(2)}%.\n\nPara comprar um ticket, digite "${prefix}loteria -buy", tenha certeza de ter ${shopconf.Ticket_Price} I'coins para comprar!\n\nUltimo sorteio foi as ${moment(lotery[chatId]['lasttime']).toString()}.\n\nUltimo ganhador foi "${winner_name}".\n\nGanhou ${Number(lotery[chatId]['lastprize'][lotery[chatId]['win']])} ${lotery[chatId]['win']}.\n\nHouveram ${Number(lotery[chatId]['lastUserPart'])} participantes.`)
						} else await kill.reply(from, `Atualmente os premios são de:\n\n- ${lotery[chatId]['prize']['coin']} I'coin.\n- ${lotery[chatId]['prize']['xp']} XP.\n- ${lotery[chatId]['prize']['rubi']} Rubis.\n- ${lotery[chatId]['prize']['dima']} Diamantes.\n\nOs premios aumentam conforme a quantidade de apostadores, atualmente existem ${lotery[chatId]['users'].length} apostadores, as chances de você ganhar são de ${parseFloat(100/Number(lotery[chatId]['users'].length)).toFixed(2)}%.\n\nPara comprar um ticket, digite \"${prefix}loteria -buy\", tenha certeza de ter ${shopconf.Ticket_Price} I'coins para comprar!`, id)
						if (!lotery[chatId]['isStarted']) {
							lotery[chatId]['isStarted'] = true
							lotery[chatId]['time'] = moment().add(shopconf.Lotery_Time, 'minutes').unix()
							await tools('others').sleep(shopconf.Lotery_Time * 60000)
							lotery[chatId]['win'] = tools('others').randVal(['xp', 'coin', 'rubi', 'dima'])
							lotery[chatId]['winner'] = tools('others').randVal(lotery[chatId]['users'])
							tools('gaming').addValue(lotery[chatId]['winner'], Number(lotery[chatId]['prize'][lotery[chatId]['win']]), nivel, chatId, lotery[chatId]['win'])
							await kill.sendTextWithMentions(from, `Parabéns @${lotery[chatId]['winner'].replace('@c.us','')}, você ganhou ${lotery[chatId]['prize'][lotery[chatId]['win']]} ${lotery[chatId]['win']}!`)
							lotery[chatId]['lastTime'] = Number(moment().unix())
							lotery[chatId]['lastUserPart'] = lotery[chatId]['users'].length
							lotery[chatId]['lastprize'] = {
								"coin": lotery[chatId]['prize']['coin'],
								"xp": lotery[chatId]['prize']['xp'],
								"rubi": lotery[chatId]['prize']['rubi'],
								"dima": lotery[chatId]['prize']['dima']
							}
							lotery[chatId]['users'] = []
							lotery[chatId]['prize'] = {
								"coin": 0,
								"xp": 0,
								"rubi": 0,
								"dima": 0
							}
							lotery[chatId]['isStarted'] = false
							lotery[chatId]['hasLast'] = true
						}
					} else if (argl[0] == '-time') {
						if (lotery[chatId]['isStarted']) {
							await kill.reply(from, `Faltam ${((lotery[chatId]['time'] - moment().unix()) / 60).toFixed(2)} minutos para o sorteio!`, id)
						} else return await kill.reply(from, `Nenhum sorteio está acontecendo no momento.`, id)
					} else await kill.reply(from, `Use com -buy ou -time.`, id)
				break

				case 'deleted':
					if (args.length == 0) return await kill.reply(from, `Para ativar esse recurso use "-log".\nPara desativar use "-nolog".\nPara listar as mensagens apagadas use "-show".`, id)
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						await kill.reply(from, `Isso apenas funciona se meu dono não estiver usando a função "Anti-Revoke" no WhatsApp.`, id)
						if (arks.includes('-log')) {
							if (deleted.log.includes(chatId)) return await kill.reply(from, mess.jaenabled(), id)
							deleted.log.push(from)
							fs.writeFileSync('./lib/config/Gerais/message.json', JSON.stringify(deleted, null, "\t"))
							await kill.reply(from, mess.enabled(), id)
						} else if (arks.includes('-nolog')) {
							if (!deleted.log.includes(chatId)) return await kill.reply(from, mess.jadisabled(), id)
							deleted.log = deleted.log.filter(g => g !== chatId)
							fs.writeFileSync('./lib/config/Gerais/message.json', JSON.stringify(deleted, null, "\t"))
							await kill.reply(from, mess.disabled(), id)
						} else if (arks.includes('-show')) {
							await kill.sendText(from, 'Mensagens apagadas:\n\n' + deleted.texts.map(msgdl => `De: "${msgdl.user.replace('@c.us', '')}"\nPara: "${msgdl.to}"\nQuando: "${msgdl.time}"\nMensagem: "${msgdl.message}"\n\n`).join(''))
						} else await kill.reply(from, `Para ativar esse recurso use "-log".\nPara desativar use "-nolog".\nPara listar as mensagens apagadas use "-show".`, id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'daily':
				case 'diario':
					if (!isActivated('rank')) return await kill.reply(from, mess.needxpon(), id)
					if (tools('gaming').getLimit(sender.id, daily, chatId, false, 'reward')) return await kill.reply(from, `Você já resgatou sua recompensa diaria, volte depois para ter acesso a outra, ela só pode ser obtida uma vez por dia, você pode obter o tempo restante digitando "${prefix[0]}Time".`, id)
					let winType = await tools('others').randVal(['xp', 'rubi', 'dima'])
					if (!Object.keys(reward).includes(sender.id)) {
						reward[sender.id] = {
							"rewards": 1,
							"dayWin": time,
							"prevWin": winType,
							"lastDate": time,
							"mouth": moment().format('YYYY-MM')
						}
					} else {
						if (moment(reward[sender.id]['mouth'], "YYYY-MM").daysInMonth() !== moment().daysInMonth() || reward[sender.id]["rewards"] >= moment(reward[sender.id]['mouth'], "YYYY-MM").daysInMonth()) {
							reward[sender.id]['mouth'] = moment().format('YYYY-MM')
							reward[sender.id]["rewards"] = 0
						}
						reward[sender.id]["rewards"]++,
						reward[sender.id]["lastDate"] = reward[sender.id]["dayWin"],
						reward[sender.id]["dayWin"] = time,
						reward[sender.id]["prevWin"] = winType
					}
					fs.writeFileSync('./lib/config/Gerais/rewards.json', JSON.stringify(reward, null, "\t"))
					var dailyReward = tools('others').randomNumber(config.Daily_Reward, config.Daily_Reward * reward[sender.id]["rewards"])
					var dailyIcoin = tools('others').randomNumber(config.Iris_Coin, config.Iris_Coin * reward[sender.id]["rewards"])
					if (randEven.eventOnline && randEven.eventType == winType) {
						dailyReward = parseInt(tools('others').randomNumber(dailyReward, dailyReward*randEven.events[randEven.eventIndex].multiplier)) /* Efeito de evento aleatorio */
					}
					if (randEven.eventOnline && randEven.eventType == 'coin') {
						dailyIcoin = parseInt(tools('others').randomNumber(dailyIcoin, dailyIcoin*randEven.events[randEven.eventIndex].multiplier)) /* Efeito de evento aleatorio */
					}
					tools('gaming').addValue(sender.id, Number(dailyReward), nivel, chatId, winType)
					tools('gaming').addValue(sender.id, Number(dailyIcoin), nivel, chatId, 'coin')
					await kill.reply(from, `Você resgatou com sucesso sua recompensa diaria de "${dailyReward} ${winType}" e "${dailyIcoin} I'coins", você possui ${reward[sender.id]["rewards"]} recompensas acumuladas, seus premios aumentam conforme você acumula.\nVocê recebeu "${reward[sender.id]["prevWin"].toUpperCase()}" na ultima vez em ${reward[sender.id]["lastDate"]}.`, id)
					tools('gaming').addLimit(sender.id, daily, chatId, 'reward')
				break

				case 'genshin':
					if (args.length == 0) return await kill.reply(from, `Escolha a opção que deseja e insira um nome!\n\nOpções = [-sets, -char, -weapon, -obj, -art, -food, -boss, -dom, -talent, -cos, -type, -tal]`, id)
					let stanLang = config.Language == 'en' ? 'English' : (config.Language == 'pt' ? 'Portuguese' : 'Spanish')
					if (argl[0] == '-sets') {
						let charList = await axios.get('https://raw.githubusercontent.com/KillovSky/Iris_Files/main/Genshin/sets.txt')
						if (!charList.data.toLowerCase().includes(argl[1]) || argl[1] == '-help') return await kill.reply(from, `Não temos um set deste personagem ainda, se ele existir, claro.\nPersonagens disponíveis:\n\n${charList.data}`, id)
						let charToSend = argl[1] == 'keqing' ? 'keqing.png' : argl[1]+'.jpg'
						await kill.sendFileFromUrl(from, `https://github.com/KillovSky/Iris_Files/raw/main/Genshin/${charToSend}`, charToSend, `Esta é a melhor 'configuração' para ${argl[1]}.`, id)
					} else if (argl[0] == '-char') {
						let impact = await genshin.characters(body.slice(cmd.length+7), {
							resultLanguage: stanLang
						})
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.sendFileFromUrl(from, (impact.images.card || impact.images.portrait || impact.images.cover1), 'card.png', `Nome -> ${impact.name}\n\nTitulo -> ${impact.title}\n\nDescrição -> ${impact.description}\n\nRaridade (estrelas) -> ${impact.rarity}\n\nElemento -> ${impact.element}\n\nArma -> ${impact.weapontype}\n\nSub-Status -> ${impact.substat}\n\nGenero -> ${impact.gender}\n\nCorpo de -> ${impact.body}\n\nAssociação -> ${impact.association}\n\nRegião -> ${impact.region}\n\nAfiliação -> ${impact.affiliation}\n\nAniversario -> ${impact.birthdaymmdd} [${impact.birthday}]\n\nConstelação -> ${impact.constellation}\n\nDublagem inglesa -> ${impact.cv.english}\n\nDublagem chinesa -> ${impact.cv.chinese}\n\nDublagem japonesa -> ${impact.cv.japanese}\n\nDublagem coreana -> ${impact.cv.korean}\n\nFandom -> ${impact.url.fandom}\n\nMateriais de Ascenção #1 ->\n${impact.costs.ascend1.map(as => `\n${as.count} ${as.name}`).join('')}\n\nMateriais de Ascenção #2 ->\n${impact.costs.ascend2.map(as => `\n${as.count} ${as.name}`).join('')}\n\nMateriais de Ascenção #3 ->\n${impact.costs.ascend3.map(as => `\n${as.count} ${as.name}`).join('')}\n\nMateriais de Ascenção #4 ->\n${impact.costs.ascend4.map(as => `\n${as.count} ${as.name}`).join('')}\n\nMateriais de Ascenção #5 ->\n${impact.costs.ascend5.map(as => `\n${as.count} ${as.name}`).join('')}\n\nMateriais de Ascenção #6 ->\n${impact.costs.ascend6.map(as => `\n${as.count} ${as.name}`).join('')}\n\nImagens para você:\n\n${impact.images.nameiconcard || 'Card'} -> ${impact.images.card || 'Não possui.'}\n\n${impact.images.namegachasplash || 'Retrato'} -> ${impact.images.portrait || 'Não possui.'}\n\n${impact.images.nameicon || 'Icon'} -> ${impact.images.icon || 'Não possui.'}\n\n${impact.images.namegachaslice || 'Icon Gacha'} -> ${impact.images.sideicon || 'Não possui.'}\n\nCover 1 -> ${impact.images.cover1 || 'Não possui'}\n\nCover 2 -> ${impact.images.cover2 || 'Não possui.'}\n\nAvatar no APP -> ${impact.images['hoyolab-avatar'] || 'Não possui.'}`, id)
					} else if (argl[0] == '-weapon') {
						let impact = await genshin.weapons(body.slice(cmd.length+9), {
							resultLanguage: stanLang
						})
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.sendFileFromUrl(from, impact.images.image, 'image.png', `Nome -> ${impact.name}\n\nDescrição -> ${impact.description}\n\nRaridade (estrelas) -> ${impact.rarity}\n\nBase-ATK -> ${impact.baseatk}\n\nSub-Status -> ${impact.substat}\n\nSub-Valor -> ${impact.subvalue}\n\nEfeito -> ${impact.effectname}\n\nDetalhes do efeito -> ${impact.effect}\n\nPoder do efeito em #R1 -> ${impact.r1.join(', ')}\n\nPoder do efeito em #R2 -> ${impact.r2.join(', ')}\n\nPoder do efeito em #R3 -> ${impact.r3.join(', ')}\n\nPoder do efeito em #R4 -> ${impact.r4.join(', ')}\n\nPoder do efeito em #R5 -> ${impact.r5.join(', ')}\n\nFeito de -> ${impact.weaponmaterialtype}\n\nMateriais de Ascenção #1 -> ${impact.costs.ascend1.map(as => `\n${as.count} ${as.name}`).join('')}\n\nMateriais de Ascenção #2 -> ${impact.costs.ascend2.map(as => `\n${as.count} ${as.name}`).join('')}\n\nMateriais de Ascenção #3 -> ${impact.costs.ascend3.map(as => `\n${as.count} ${as.name}`).join('')}\n\nMateriais de Ascenção #4 -> ${impact.costs.ascend4.map(as => `\n${as.count} ${as.name}`).join('')}\n\nMateriais de Ascenção #5 -> ${impact.costs.ascend5.map(as => `\n${as.count} ${as.name}`).join('')}\n\nMateriais de Ascenção #6 -> ${impact.costs.ascend6.map(as => `\n${as.count} ${as.name}`).join('')}\n\nImagens para você:\n\n${impact.images.namegacha || 'Imagem'} -> ${impact.images.image || 'Não possui.'}\n\n${impact.images.nameicon || 'Icon'} -> ${impact.images.icon || 'Não possui.'}\n\n${impact.images.nameawakenicon || 'Icon 2'} -> ${impact.images.awakenicon || 'Não possui.'}`, id)
					} else if (argl[0] == '-obj') {
						let impact = await genshin.materials(body.slice(cmd.length+6), {
							resultLanguage: stanLang
						})
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.sendFileFromUrl(from, (impact.images.redirect || impact.images.fandom), 'image.png', `Nome -> ${impact.name} #${impact.sortorder}\n\nDescrição -> ${impact.description}\n\nRaridade (estrelas) -> ${impact.rarity || 'Não possui.'}\n\nCategoria -> ${impact.category}\n\nTipo de material -> ${impact.materialtype}\n\nLocais -> ${impact.source.join(', ')}\n\nFandom -> ${impact.url.fandom}\n\nImagens para você:\n\n${impact.images.nameicon || 'Icon 1'} -> ${impact.images.redirect || 'Não possui.'}\n\nIcon 2 [Fandom] -> ${impact.images.fandom || 'Não possui.'}`, id)
					} else if (argl[0] == '-art') {
						let impact = await genshin.artifacts(body.slice(cmd.length+6), {
							resultLanguage: stanLang
						})
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.sendFileFromUrl(from, impact.images.flower, 'image.png', `Nome -> ${impact.name}\n\nRaridade (estrelas) -> ${impact.rarity.join(' / ')}\n\n2PC -> ${impact['2pc']}\n\n4PC -> ${impact['4pc']}\n\nFlor ->\n${impact.flower.name} - ${impact.flower.relictype}\nDescrição -> ${impact.flower.description}\n\nPena ->\n${impact.plume.name} - ${impact.plume.relictype}\nDescrição -> ${impact.plume.description}\n\nAmpulheta ->\n${impact.sands.name} - ${impact.sands.relictype}\nDescrição -> ${impact.sands.description}\n\nCalice ->\n${impact.goblet.name} - ${impact.goblet.relictype}\nDescrição -> ${impact.goblet.description}\n\nCoroa ->\n${impact.circlet.name} - ${impact.circlet.relictype}\nDescrição -> ${impact.circlet.description}\n\nFandom -> ${impact.url.fandom}\n\nImagens para você:\n\nFlor -> ${impact.images.flower || 'Não possui.'}\n\nPena -> ${impact.images.plume || 'Não possui.'}\n\nAmpulheta -> ${impact.images.sands || 'Não possui.'}\n\nCalice -> ${impact.images.goblet || 'Não possui.'}\n\nCoroa -> ${impact.images.circlet || 'Não possui.'}\n\n`, id)
					} else if (argl[0] == '-boss') {
						let impact = await genshin.enemies(body.slice(cmd.length+7), {
							resultLanguage: stanLang
						})
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.reply(from, `Nome -> ${impact.name}\n\nNome Especial -> ${impact.specialname}\n\nRaridade -> ${impact.enemytype}\n\nCategoria -> ${impact.category}\n\nDescrição -> ${impact.description}\n\nEspecie -> ${impact.investigation.name}\n\nDificuldade -> ${impact.investigation.category}\n\nDescrição Esp. -> ${impact.investigation.description}\n\nGanhos ->\n${impact.rewardpreview.map(re => `${re.name}\n`).join('')}`, id)
					} else if (argl[0] == '-food') {
						let impact = await genshin.foods(body.slice(cmd.length+7), {
							resultLanguage: stanLang
						})
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.reply(from, `Nome -> ${impact.name}\n\nRaridade (estrelas) -> ${impact.rarity}\n\nCategoria -> ${impact.foodtype}\n\nFiltrado por -> ${impact.foodfilter}\n\nCategoria -> ${impact.effect}\n\nDescrição -> ${impact.description}\n\nBad Food -> ${impact.suspicious.effect}\n${impact.suspicious.description}\n\nNormal Food -> ${impact.normal.effect}\n${impact.normal.description}\n\nDelicious Food -> ${impact.delicious.effect}\n${impact.delicious.description}\n\nFandom -> ${impact.url.fandom}\n\nIngredientes ->\n${impact.ingredients.map(re => `${re.count} ${re.name}\n`).join('')}`, id)
					} else if (argl[0] == '-dom') {
						let impact = await genshin.domains(body.slice(cmd.length+6), {
							resultLanguage: stanLang
						})
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.reply(from, `Nome -> ${impact.name}\n\nRegião -> ${impact.region}\n\nLocal -> ${impact.domainentrance}\n\nCategoria -> ${impact.domaintype}\n\nDescrição -> ${impact.description}\n\nLevel Recomendado -> ${impact.recommendedlevel}\n\nElementos Recomendados -> ${impact.recommendedelements.join(', ')}\n\nDias da Semana ->\n${impact.daysofweek.join('\n')}\n\nDebloqueia no Level -> ${impact.unlockrank}\n\nTipo de desordem ->\n${impact.disorder.join('\n')}\n\nLista de monstros ->\n${impact.monsterlist.join('\n')}\n\nGanhos ->\n${impact.rewardpreview.map(re => `${re.count || '?'} ${re.name}\n`).join('')}`, id)
					} else if (argl[0] == '-talent') {
						let impact = await genshin.talents(body.slice(cmd.length+9), {
							resultLanguage: stanLang
						})
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.reply(from, `Nome -> ${impact.name}\n\nCombate 1 -> ${impact.combat1.name}\nDescrição -> ${impact.combat1.info}\n\nCombate 2 -> ${impact.combat2.name}\nDescrição -> ${impact.combat2.info}\n\nCombate 3 -> ${impact.combat3.name}\nDescrição -> ${impact.combat3.info}\n\nPassivo 1 -> ${impact.passive1.name}\nDescrição -> ${impact.passive1.info}\n\nPassivo 2 -> ${impact.passive2.name}\nDescrição -> ${impact.passive2.info}\n\nPassivo 3 -> ${impact.passive3.name}\nDescrição -> ${impact.passive3.info}\n\nLevel 2 ->\n${impact.costs.lvl2.map(re => `${re.count || '?'} ${re.name}\n`).join('')}\nLevel 3 ->\n${impact.costs.lvl3.map(re => `${re.count || '?'} ${re.name}\n`).join('')}\nLevel 4 ->\n${impact.costs.lvl4.map(re => `${re.count || '?'} ${re.name}\n`).join('')}\nLevel 5 ->\n${impact.costs.lvl5.map(re => `${re.count || '?'} ${re.name}\n`).join('')}\nLevel 6 ->\n${impact.costs.lvl6.map(re => `${re.count || '?'} ${re.name}\n`).join('')}\nLevel 7 ->\n${impact.costs.lvl7.map(re => `${re.count || '?'} ${re.name}\n`).join('')}\nLevel 8 ->\n${impact.costs.lvl8.map(re => `${re.count || '?'} ${re.name}\n`).join('')}\nLevel 9 ->\n${impact.costs.lvl9.map(re => `${re.count || '?'} ${re.name}\n`).join('')}\nLevel 10 ->\n${impact.costs.lvl10.map(re => `${re.count || '?'} ${re.name}\n`).join('')}`, id)
					} else if (argl[0] == '-cos') {
						let impact = await genshin.constellations(body.slice(cmd.length+6), {
							resultLanguage: stanLang
						})
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.sendFileFromUrl(from, impact.images.c1, 'image.png', `Nome -> ${impact.name}\n\nC1 -> ${impact.c1.name}\nDescrição -> ${impact.c1.effect}\n\nC2 -> ${impact.c2.name}\nDescrição -> ${impact.c2.effect}\n\nC3 -> ${impact.c3.name}\nDescrição -> ${impact.c3.effect}\n\nC4 -> ${impact.c4.name}\nDescrição -> ${impact.c4.effect}\n\nC5 -> ${impact.c5.name}\nDescrição -> ${impact.c5.effect}\n\nC6 -> ${impact.c6.name}\nDescrição -> ${impact.c6.effect}`, id)
					} else if (argl[0] == '-ment') {
						let impact = await genshin.elements(body.slice(cmd.length+7))
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.sendFileFromUrl(from, (impact.images.base64 || impact.images.wikia), 'image.png', `Nome -> ${impact.name}\n\nTipo -> ${impact.type}\n\nCor HEX -> ${impact.color}\n\nCódigo emoji (Hoyolab) -> ${impact.emoji}\n\nRegião -> ${impact.region}\n\nArconte -> ${impact.archon}\n\nTema -> ${impact.theme}`, id)
					} else if (argl[0] == '-type') {
						let impact = await genshin.weaponmaterialtypes(body.slice(cmd.length+7))
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.reply(from, `Nome -> ${impact.name}\n\n2 Star -> ${impact['2starname']}\n\n3 Star -> ${impact['3starname']}\n\n4 Star -> ${impact['4starname']}\n\n5 Star -> ${impact['5starname']}\n\nOnde achar -> ${impact.location} - ${impact.region}\n\nNome do Local -> ${impact.domainofforgery}\n\nDias da semana ->\n${impact.day.join('\n')}`, id)
					} else if (argl[0] == '-tal') {
						let impact = await genshin.talentmaterialtypes(body.slice(cmd.length+6))
						if (impact == null) return await kill.reply(from, mess.noresult(), id)
						await kill.reply(from, `Nome -> ${impact.name}\n\n2 Star -> ${impact['2starname']}\n\n3 Star -> ${impact['3starname']}\n\n4 Star -> ${impact['4starname']}\n\n5 Star -> ${impact['5starname']}\n\nOnde achar -> ${impact.location} - ${impact.region}\n\nNome do Local -> ${impact.domainofforgery}\n\nDias da semana ->\n${impact.day.join('\n')}`, id)
					} else return await kill.reply(from, `Escolha a opção que deseja e insira um nome!\n\nOpções = [-sets, -char, -weapon, -obj, -art, -food, -boss, -dom, -talent, -cos, -type, -tal]`, id)
				break

				case 'chess':
					if (args.length == 0 || args[0] == '-help' || !Object.keys(chessGame).includes(chatId) && argl[0] !== '-new') return await kill.sendFileFromUrl(from, 'https://i.imgur.com/vIo4IAW.png', 'chess.png', `Esse é o tabuleiro de xadrez que utilizo para processar as jogadas de vocês.\n\nPara jogar insira o comando com o subsistema, pessoa e sua jogada.\nExemplo -> "${prefix}Chess -new @Iris a4"\n\nFunções -> ["-new", "-play", "-show", "-fen"].`, id)
					const chessglayer = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList.length !== 0 ? mentionedJidList[0] : null)
					var chessglate = new chessImageGenerator({
						size: 800,
						style: 'alpha'
					})
					const newGame = (chatId, user, user2) => {
						global.chessg = new chess.Chess()
						chessGame[chatId] = {
							'fen': chessg.fen(),
							'b': user2,
							'w': user
						}
					}
					const getGame = async (chatId, onlyShow) => {
						await chessglate.loadFEN(chessGame[chatId]['fen'])
						let imageBoard = await chessglate.generateBuffer()
						try {
							await kill.sendImageAsSticker(from, tools('others').dataURI('image/png', imageBoard), stickerConfig)
							if (onlyShow) await kill.sendTextWithMentions(from, `Informações da partida atual...\n\nA vez é de "@${chessGame[chatId][chessGame[chatId]['fen'].split(' ')[1]]}".\n\nAs jogadas possíveis são ->\n${chessg.moves().join(',  ')}\n\nPara obter a *"FEN"* digite "${prefix}Chess -fen".`)
							if (!onlyShow) await kill.sendTextWithMentions(from, `Fiz minha jogada, sua vez @${chessGame[chatId][chessGame[chatId]['fen'].split(' ')[1]]}.\n\nVocê pode jogar nas seguintes posições [Digite igual] ->\n\n${chessg.moves().join(',  ')}\n\nPara obter a *"FEN"* digite "${prefix}Chess -fen".`, id)
						} catch (error) {
							console.error(error)
							await kill.reply(from, mess.fail('CHESS', error, (new Date().toString())), id)
						}
					}
					if (argl[0] == '-fen') return await kill.reply(from, chessGame[chatId]['fen'], id)
					if (argl[0] == '-new') {
						if (args[2] == null) return await kill.reply(from, `Forneça uma jogada.\nJogadas possíveis ->\n${chessg.moves().join(',  ')}`, id)
						newGame(chatId, sender.id, chessglayer)
						let moved = (chessg.move(args[2]) == null ? 'Error' : 'Not Error')
						if (moved !== 'Not Error') return await kill.reply(from, `Sua jogada é invalida, jogadas possíveis ->\n${chessg.moves().join(',  ')}`, id)
						chessGame[chatId]['fen'] = chessg.fen()
						global.chessg = new chess.Chess(chessGame[chatId]['fen'])
					} else if (argl[0] == '-play') {
						if (chessGame[chatId] == null) return await kill.reply(from, `Você precisa iniciar uma partida com ${prefix}Chess -new`, id)
						if (chessGame[chatId]['w'] !== sender.id && chessGame[chatId]['b'] !== sender.id) return await kill.reply(from, `Você não é um jogador!`, id)
						global.chessg = new chess.Chess(chessGame[chatId]['fen'])
						let moved = (chessg.move(args[1]) == null ? 'Error' : 'Not Error')
						if (moved !== 'Not Error') return await kill.reply(from, `Sua jogada é invalida, jogadas possíveis ->\n${chessg.moves().join(',  ')}`, id)
						chessGame[chatId]['fen'] = chessg.fen()
						global.chessg = new chess.Chess(chessGame[chatId]['fen'])
					} else if (argl[0] == '-show') {
						global.chessg = new chess.Chess(chessGame[chatId]['fen'])
						return await getGame(chatId, true)
					} else if (argl[0] == '-moves') return await kill.reply(from, `Jogadas que podem ser executadas atualmente ->\n${chessg.moves().join(',  ')}`, id)
					global.chessg = new chess.Chess(chessGame[chatId]['fen'])
					if (chessGame[chatId][chessGame[chatId]['fen'].split(' ')[1]] == botNumber) {
						let chessMoves = chessg.moves().filter(h => h.includes('x'))
						chessMoves = chessMoves.length == 0 ? chessg.moves() : chessMoves
						var chessJog = tools('others').randVal(chessMoves)
						let moved = chessg.move(chessJog)
						chessGame[chatId]['fen'] = chessg.fen()
						global.chessg = new chess.Chess(chessGame[chatId]['fen'])
						await getGame(chatId, false)
					} else await getGame(chatId, false)
					if (chessGame[chatId] !== null) {
						if (chessg.game_over()) {
							if (chessg.in_draw()) return await kill.reply(from, `O jogo terminou em empate, inicie outro com "${prefix}Chess -new @User Uma_Jogada".`, id)
							if (chessg.in_stalemate()) return await kill.reply(from, `O jogo terminou em afogamento, inicie outro com "${prefix}Chess -new @User Uma_Jogada".`, id)
							if (chessg.insufficient_material()) return await kill.reply(from, `O jogo terminou em empate por falta de peças, inicie outro com "${prefix}Chess -new @User Uma_Jogada".`, id)
							if (chessg.in_checkmate()) return await kill.reply(from, `O jogo terminou em xeque-mate, inicie outro com "${prefix}Chess -new @User Uma_Jogada".`, id)
							if (chessg.in_check()) return await kill.reply(from, `Cuidado, você entrou em xeque!`, id)
							await kill.reply(from, `O jogo terminou, inicie outro com "${prefix}Chess -new @User Uma_Jogada"`, id)
						}
					}
				break
				
				case 'speed':
					if (encryptMedia) {
						var decryptedMedia = await decryptMedia(encryptMedia)
						var format = isType('video') ? 'mp4' : 'mp3'
						await tools('ffmpeg').speed(decryptedMedia, kill, message, Number(args[0]), format)
					} else await kill.reply(from, `Use esse comando com audios e vídeos, se tentar usar em outro tipo de mídia não funcionará (use marcando!).`, id)
				break
				
				case 'reverse':
					if (encryptMedia) {
						var decryptedMedia = await decryptMedia(encryptMedia)
						var format = isType('video') ? 'mp4' : 'mp3'
						await tools('ffmpeg').reverse(decryptedMedia, kill, message, args, format)
					} else await kill.reply(from, `Use esse comando com audios e vídeos, se tentar usar em outro tipo de mídia não funcionará (use marcando!).`, id)
				break
				
				case 'correios':
					if (args.length == 0) return await kill.reply(from, `Insira um código de rasteamento dos correios.`, id)
					let rasID = await axios.post('https://webservice.correios.com.br/service/rest/rastro/rastroMobile', `<rastroObjeto><usuario>MobileXect</usuario><tipo>L</tipo><resultado>T</resultado><objetos>${args[0]}</objetos><lingua>101</lingua></rastroObjeto>`, {
						headers: {
							'Content-Type': 'text/xml'
						}
					})
					if (rasID.data.objeto[0].categoria.includes('ERRO:')) return await kill.reply(from, mess.noresult(), id)
					await kill.reply(from, `Produto #${rasID.data.objeto[0].numero} - "${rasID.data.objeto[0].sigla}\n\nNome -> ${rasID.data.objeto[0].nome}\n\nCategoria -> ${rasID.data.objeto[0].categoria}\n\nQuantidade -> ${rasID.data.quantidade}\n\n----------------\n\n` + rasID.data.objeto[0].evento.map(a => `Movimento no dia -> ${a.data} - ${a.hora}\n\nLocalização no dia -> ${a.unidade.local} - ${a.unidade.cidade} - ${a.unidade.uf}\n\nDescrição -> ${a.descricao} - ${a.detalhe || 'Sem mais detalhes'}\n\nInformações da Unidade:\n\nTipo -> ${a.unidade.tipounidade}\n\nEndereço -> ${a.unidade.endereco.logradouro} - N° ${a.unidade.endereco.numero} - ${a.unidade.endereco.bairro} - ${a.unidade.endereco.localidade} - ${a.unidade.endereco.uf}\n\nCódigo da unidade recebedora -> #${a.unidade.codigo}\n\nSTO da Unidade -> #${a.unidade.sto}`).join(`\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n------------------\n*### AS INFORMAÇÕES ABAIXO SÃO DE ANTES DO DIA ${rasID.data.objeto[0].evento[0].data} - ${rasID.data.objeto[0].evento[0].hora} ###*\n------------------\n\n`), id)
				break

				case '21':
				if (args.length == 0) return await kill.reply(from, `Você está usando incorretamente, se quiser iniciar um jogo digite "${prefix}21 -Start".`, id)
				if (isGroupMsg) {
					let resetDeck = () => {
						bjConfig[chatId] = {
							isPlaying: false,
							players: [],
							startedAt: 0,
							atualPlayer: 0,
							oldPlayer: 0,
							haveDeck: [],
							deck: {},
							validPlayers: []
						}
					}
					if (!Object.keys(bjConfig).includes(chatId)) {
						resetDeck()
					}
					let checkPlayed = async () => {
						if (bjConfig[chatId].isPlaying == true) {
							bjConfig[chatId]['oldPlayer'] = bjConfig[chatId]['atualPlayer']
							bjConfig[chatId]['atualPlayer'] = bjConfig[chatId]['validPlayers'][bjConfig[chatId]['validPlayers'].indexOf(bjConfig[chatId]['oldPlayer']) + 1]
							if (bjConfig[chatId]['atualPlayer'] == null) {
								bjConfig[chatId]['atualPlayer'] = bjConfig[chatId]['validPlayers'][bjConfig[chatId]['validPlayers'].indexOf(bjConfig[chatId]['oldPlayer']) - 1]
							}
							if (!bjConfig[chatId].haveDeck.includes(bjConfig[chatId]['oldPlayer'])) {
								bjConfig[chatId]['validPlayers'] = bjConfig[chatId]['validPlayers'].filter(f => f !== bjConfig[chatId]['oldPlayer'])
								await kill.sendTextWithMentions(from, `O player @${bjConfig[chatId]['oldPlayer']} foi desclassificado por não ter feito uma jogada.\n\nA jogada agora é de @${bjConfig[chatId]['atualPlayer']}.`)
							} else {
								bjConfig[chatId].haveDeck.splice(bjConfig[chatId]['oldPlayer'], 1)
								await kill.sendTextWithMentions(from, `O jogo irá continuar, a jogada agora é de @${bjConfig[chatId]['atualPlayer']}, você tem 1 minuto para fazer a jogada, o jogo continuará após 1 minuto.\n\nVocê pode verificar suas cartas indo no meu privado e digitando "${prefix}21 -Mycard".\n\nQuando tiver finalizado, volte no grupo e escolha entre "stop", "drop", "pass" e "get".\n\nStop retira você do jogo, podendo vencer se tiver exatos 21.\n\nDrop dropará uma carta de sua escolha.\n\nPass faz com que você pule a rodada.\n\nGet faz você pegar uma carta.\n\nExemplo -> "${prefix}21 -Drop 2C"`)
								await tools('others').sleep(60000)
								checkPlayed()
							}
							if (bjConfig[chatId]['validPlayers'].length < 2) {
								await kill.sendTextWithMentions(from, `O número de jogadores validos com cartas não é o suficiente para o jogo, portanto, @${bjConfig[chatId]['validPlayers'][0].replace('@c.us', '')} venceu este jogo.`)
								return resetDeck()
							}
						}
					}
					if (argl[0] == '-start' && bjConfig[chatId].isPlaying == false) {
						bjConfig[chatId].players.push(sender.id)
						await kill.reply(from, `Partida iniciada, os participantes - exceto você - tem até 1 minutos para entrar no jogo, basta digitar "${prefix}21 -join".`, id) 
						bjConfig[chatId].startedAt = moment().add(1, 'minutes').unix()
						await tools('others').sleep(60000)
						if (bjConfig[chatId].players.length < 2) {
							await kill.reply(from, `O número de jogadores não é o suficiente para o jogo, cancelarei o jogo por falta de players.`, id)
							return resetDeck()
						} else {
							await kill.reply(from, `O jogo possui os requisitos, portanto, o jogo esta oficialmente aberto!\n\nVão ao meu privado e digitem "${prefix}21 -Mydeck" para receber suas cartas, vocês tem 1 minutos.`, id)
							bjConfig[chatId]['isPlaying'] = true
							await tools('others').sleep(60000)
							if (bjConfig[chatId].validPlayers.length < 2) {
								await kill.reply(from, `O número de jogadores validos com cartas não é o suficiente para o jogo, cancelarei o jogo por falta de players.`, id)
								return resetDeck()
							} else {
								bjConfig[chatId]['atualPlayer'] = bjConfig[chatId]['validPlayers'][0]
								await kill.sendTextWithMentions(from, `As preparações terminaram, a vez da jogada é de @${bjConfig[chatId]['atualPlayer']}, o jogador tem 1 minuto para fazer a jogada, o jogo continuará após 1 minuto.\n\nVocê pode verificar suas cartas indo no meu privado e digitando "${prefix}21 -Mycard".\n\nQuando tiver finalizado, volte no grupo e escolha entre "stop", "drop", "pass" e "get".\n\nStop retira você do jogo, podendo vencer se tiver exatos 21.\n\nDrop dropará uma carta de sua escolha.\n\nPass faz com que você pule a rodada.\n\nGet faz você pegar uma carta.\n\nExemplo -> "${prefix}21 -Drop 2C"\n\nJogadores validos:\n-> ${bjConfig[chatId].validPlayers.map(g => g.toString().replace('@c.us', '')).join('\n-> ')}`)
								await tools('others').sleep(60000)
								checkPlayed()
							}
						}
					} else if (argl[0] == '-stop' && bjConfig[chatId]['validPlayers'].includes(bjConfig[chatId]['atualPlayer']) && bjConfig[chatId]['atualPlayer'] == sender.id) {
						bjConfig[chatId].haveDeck.push(sender.id)
						let userVal = tools('blackjack').getValue(bjConfig[chatId], sender.id)
						if (userVal > 21) {
							await kill.sendTextWithMentions(from, `O jogador "@{sender.id.replace('@c.us', '')}" possui mais de 21 pontos, portanto, ele saiu sem ganhar.\nEspere o tempo para a próxima jogada.`)
						} else if (userVal == 21) {
							await kill.sendTextWithMentions(from, `O jogador "@${sender.id.replace('@c.us', '')}" possui exatos 21 pontos, portanto, ele venceu este jogo!`)
							return resetDeck()
						} else {
							await kill.sendTextWithMentions(from, `O jogador "@{sender.id.replace('@c.us', '')}" desistiu da partida antes de ter ou passar de 21.\n\nEspere o tempo para a próxima jogada.`)
						}
						bjConfig[chatId]['validPlayers'] = bjConfig[chatId]['validPlayers'].filter(f => f !== bjConfig[chatId]['atualPlayer'])
						if (bjConfig[chatId]['validPlayers'].length < 2) {
							await kill.sendTextWithMentions(from, `O número de jogadores validos com cartas não é o suficiente para o jogo, portanto, @${bjConfig[chatId]['validPlayers'][0].replace('@c.us', '')} venceu este jogo.`)
							return resetDeck()
						}
					} else if (argl[0] == '-drop' && bjConfig[chatId]['validPlayers'].includes(bjConfig[chatId]['atualPlayer']) && bjConfig[chatId]['atualPlayer'] == sender.id) {
						if (!bjConfig[chatId].deck[sender.id].includes(args[1])) return await kill.reply(from, `Você apenas pode dropar cartas que possui, você não possui a que informou, drope antes que o tempo acabe.`, id)
						if (bjConfig[chatId].deck[sender.id].length <= 2) return await kill.reply(from, `Você não pode dropar enquanto tiver apenas duas cartas, passe ou pegue uma.`, id)
						bjConfig[chatId].haveDeck.push(sender.id)
						bjConfig[chatId].deck[sender.id] = bjConfig[chatId].deck[sender.id].filter(h => h !== argc[1])
						await kill.sendStickerfromUrl(from, `https://github.com/KillovSky/Iris_Files/raw/main/Cards/${argc[1]}.png`, {
							method: 'get'
						}, stickerConfig)
						await kill.sendTextWithMentions(from, `O jogador "@${sender.id.replace('@c.us', '')}" dropou um "${args[1].toUpperCase()}".\n\nO Deck atual é: ${tools('blackjack').getDeck(bjConfig[chatId])}\nEspere o tempo para a próxima jogada.`)
					} else if (argl[0] == '-get' && bjConfig[chatId]['validPlayers'].includes(bjConfig[chatId]['atualPlayer']) && bjConfig[chatId]['atualPlayer'] == sender.id) {
						bjConfig[chatId].haveDeck.push(sender.id)
						let newCard = '5C'
						const getCheck = () => {
							newCard = tools('blackjack').randomDeck()[0]
							if (bjConfig[chatId].deck[sender.id].includes(newCard)) {
								getCheck()
							}
						}
						getCheck()
						bjConfig[chatId].deck[sender.id].push(newCard)
						let checkWin = tools('blackjack').getValue(bjConfig[chatId], sender.id)
						if (checkWin > 21) {
							await kill.sendStickerfromUrl(from, `https://github.com/KillovSky/Iris_Files/raw/main/Cards/${newCard}.png`, {
								method: 'get'
							}, stickerConfig)
							await kill.reply(from, `Você recebeu um "${newCard}" e seu valor passou de 21, você foi desclassificado por derrota.`, id)
							bjConfig[chatId]['validPlayers'] = bjConfig[chatId]['validPlayers'].filter(f => f !== bjConfig[chatId]['atualPlayer'])
							if (bjConfig[chatId]['validPlayers'].length < 2) {
								await kill.sendTextWithMentions(from, `O número de jogadores validos com cartas não é o suficiente para o jogo, portanto, @${bjConfig[chatId]['validPlayers'][0].replace('@c.us', '')} venceu este jogo.`)
								return resetDeck()
							}
						} else if (checkWin == 21) {
							await kill.sendStickerfromUrl(from, `https://github.com/KillovSky/Iris_Files/raw/main/Cards/${newCard}.png`, {
								method: 'get'
							}, stickerConfig)
							await kill.sendTextWithMentions(from, `O jogador @${bjConfig[chatId]['validPlayers'][0].replace('@c.us', '')} venceu este jogo pois adquiriu 21 pontos.`)
							return resetDeck()
						} else {
							await kill.sendStickerfromUrl(sender.id, `https://github.com/KillovSky/Iris_Files/raw/main/Cards/${newCard}.png`, {
								method: 'get'
							}, stickerConfig)
							await kill.sendText(sender.id, `Seu deck atual é:\n\n${bjConfig[chatId].deck[sender.id].join('-> ')}\n\nBoa sorte!`)
							await kill.reply(from, `Enviei sua carta/deck no privado, confira para planejar sua próxima jogada, o restante dos jogadores devem esperar o tempo acabar para que o jogo continue.\n\nDeck atual ->\n${tools('blackjack').getDeck(bjConfig[chatId])}`, id)
						}
					} else if (argl[0] == '-pass' && bjConfig[chatId]['validPlayers'].includes(bjConfig[chatId]['atualPlayer']) && bjConfig[chatId]['atualPlayer'] == sender.id) {
						bjConfig[chatId].haveDeck.push(sender.id)
						await kill.reply(from, `O jogador pulou a rodada, aguardem que o tempo termine para o jogo avançar.\n\nDeck atual ->\n${tools('blackjack').getDeck(bjConfig[chatId])}`, id)
					} else if (argl[0] == '-join' && bjConfig[chatId].isPlaying == false) {
						bjConfig[chatId].players.push(sender.id)
						await kill.reply(from, `Sua inscrição foi concluída com sucesso, aguarde ${((bjConfig[chatId].startedAt - moment().unix()) / 60).toFixed(2)} Minutos para o inicio do jogo!\n\nPlayers atualmente > ${bjConfig[chatId].players.length}`, id)
					} else await kill.reply(from, `Você usou uma função incorreta ou não é a sua vez.`, id)
				} else if (!isGroupMsg) {
					let playerExist = Object.keys(bjConfig).map(j => j).map(g => bjConfig[g].players.includes(sender.id)).indexOf(true)
					if (playerExist == -1) return await kill.reply(from, `Você não esta participando de nenhum jogo.`, id)
					let lugarJ = Object.keys(bjConfig)[playerExist]
					if (argl[0] == '-mydeck' && bjConfig[lugarJ].isPlaying == true && bjConfig[lugarJ].players.includes(sender.id) && !Object.keys(bjConfig[lugarJ].deck).includes(sender.id)) {
						bjConfig[lugarJ].validPlayers.push(sender.id)
						bjConfig[lugarJ].deck[sender.id] = tools('blackjack').randomDeck()
						await kill.reply(from, `Você recebeu suas duas cartas, elas são:\n\n-> ${bjConfig[lugarJ].deck[sender.id][0]}\n-> ${bjConfig[lugarJ].deck[sender.id][1]}\n\nVolte ao grupo e siga as instruções para que continue com sua jogada antes que o seu tempo de jogo acabe.`, id)
					} else if (!bjConfig[lugarJ].players.includes(sender.id)) {
						await kill.reply(from, `O tempo de inscrição já acabou.`, id)
					} else await kill.reply(from, `Tem certeza que essa jogada deve ser feita aqui?`, id)
				}
				break

				case 'couple':
					await kill.reply(from, mess.wait(), id)
					let theCouple = tools('others').randomNumber(1, 113)
					await kill.sendFileFromUrl(from, `https://github.com/KillovSky/Iris_Files/raw/main/Couple/${theCouple}.1.jpg`, 'couple.jpg', 'Você completa...', id)
					await kill.sendFileFromUrl(from, `https://github.com/KillovSky/Iris_Files/raw/main/Couple/${theCouple}.2.jpg`, 'couple.jpg', '...meu coração.', id)
				break

				// Feito por mim com ajuda de Pedro B.
				case 'nocmd':
					if (isGroupMsg && isGroupAdmins || isGroupMsg && isOwner || isGroupMsg && Can_Run_CMD(cmd)) {
						let failMessage = `Para desativar um comando insira o comando, subsistema e o comando a ser desativado, você também pode checar quais comandos estão desativados, abaixo segue exemplos.\n\n"${prefix}NoCMD off lolis" -> Desativa o comando "Lolis".\n\n"${prefix}NoCMD on lolis" -> Re-ativa o comando "Lolis".\n\n"${prefix}NoCMD show" -> Mostra comandos desativados.\n\n"${prefix}NoCMD disable waifu" -> Desativa o comando "Waifus" para todos os locais - somente dono.\n\n"${prefix}NoCMD enable waifu" -> Re-ativa o comando "Waifus" para todos os locais - somente dono.`
						if (!['on', 'off', 'disable', 'enable', 'show'].includes(argl[0])) return await kill.reply(from, failMessage, id)
						if (!allCommands.includes(argl[1]) || Object.keys(cmds['global']).includes(argl[1]) || blockcmd.no.includes(argl[1])) return await kill.reply(from, 'Não é possível desativar comandos inexistentes ou comandos importantes para o funcionamento geral.', id)
						if (!Object.keys(blockcmd.yes).includes(chatId)) {
							blockcmd.yes[chatId] = []
						}
						if (argl[0] == 'off') {
							if (blockcmd.yes[chatId].includes(argl[1])) return await kill.reply(from, mess.jadisabled(), id)
							blockcmd.yes[chatId].push(argl[1])
							await kill.reply(from, mess.disabled(), id)
							await fs.writeFileSync('./lib/config/Gerais/disable.json', JSON.stringify(blockcmd, null, "\t"))
						} else if (argl[0] == 'on') {
							if (!blockcmd.yes[chatId].includes(argl[1])) return await kill.reply(from, mess.jaenabled(), id)
							blockcmd.yes[chatId] = blockcmd.yes[chatId].filter(d => d !== argl[1])
							await kill.reply(from, mess.enabled(), id)
							await fs.writeFileSync('./lib/config/Gerais/disable.json', JSON.stringify(blockcmd, null, "\t"))
						} else if (argl[0] == 'disable') {
							if (!isOwner) return await kill.reply(from, mess.sodono(), id)
							if (blockcmd.global.includes(argl[1])) return await kill.reply(from, mess.jadisabled(), id)
							blockcmd.global.push(argl[1])
							await fs.writeFileSync('./lib/config/Gerais/disable.json', JSON.stringify(blockcmd, null, "\t"))
						} else if (argl[0] == 'enable') {
							if (!isOwner) return await kill.reply(from, mess.sodono(), id)
							if (!blockcmd.global.includes(argl[1])) return await kill.reply(from, mess.jaenabled(), id)
							blockcmd.global = blockcmd.global.filter(d => d !== argl[1])
							await kill.reply(from, mess.enabled(), id)
							await fs.writeFileSync('./lib/config/Gerais/disable.json', JSON.stringify(blockcmd, null, "\t"))
						} else if (argl[0] == 'show') {
							if (!blockcmd.yes[chatId].length == 0) return await kill.reply(from, `Não existem comandos desativados.`, id)
							await kill.reply(from, `Os comandos desativados no momento são:\n\n-> ${blockcmd.yes[chatId].join('-> ')}`, id)
						} else await kill.reply(from, failMessage, id)
					} else if (isGroupMsg) {
						await kill.reply(from, mess.soademiro(), id)
					} else await kill.reply(from, mess.sogrupo(), id)
				break

				case 'afk':
					let afkHelp = `Para ativar o modo AFK, escreva o comando, 'on' e sua mensagem.\nExemplo -> "${prefix}AFK on Estou dormindo".\n\nPara desativar seu modo AFK, digite o comando e 'off'.\nExemplo -> "${prefix}AFK off".`
					if (args.length == 0 || argl[0] == '-help') return await kill.reply(from, afkHelp, id)
					if (argl[0] == 'on') {
						if (args.length <= 1) {
							if (Object.keys(afk).includes(sender.id)) {
								afk[sender.id].enabled = true
							} else await kill.reply(from, afkHelp, id)
						} else {
							afk[sender.id] = {
								"name": (pushname || sender.id),
								"enabled": true,
								"message": body.slice(cmd.length+4)
							}
							fs.writeFileSync('./lib/config/Gerais/AFK.json', JSON.stringify(afk, null, "\t"))
							await kill.reply(from, mess.enabled(), id)
						}
					} else if (argl[0] == 'off') {
						if (!Object.keys(afk).includes(sender.id)) return await kill.reply(from, `Você não tem um AFK ativado.`, id)
						afk[sender.id]['enabled'] = false
						fs.writeFileSync('./lib/config/Gerais/AFK.json', JSON.stringify(afk, null, "\t"))
						await kill.reply(from, mess.disabled(), id)
					} else await kill.reply(from, afkHelp, id)
				break
				
				case 'event':
					await kill.reply(from, randEven.description, id)
				break

				case 'nostatus':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					let deleteSts = await kill.deleteAllStatus()
					if (deleteSts) {
						await kill.reply(from, mess.maked(), id)
					} else await kill.reply(from, `Não consegui deletar os status postados, talvez isso seja um engano ou não havia nenhum status para deletar.`, id)
				break

				case 'banner':
					if (isType('image')) {
						let mediaData = await decryptMedia(encryptMedia)
						await kill.sendBanner(from, tools('others').dataURI('image/png', mediaData))
					} else await kill.reply(from, mess.onlyimg(), id)
				break

				case 'sendmoji':
					if (args.length == 0) return await kill.reply(from, mess.noargs() + 'discord emoji-ID.', id)
					await kill.sendEmoji(from, args[0]).catch(async (e) => {
						await kill.reply(from, 'Não localizei esse emoji, tem certeza que ele existe no discord?', id)
					})
				break

				case 'ocr':
					if (isType('image')) {
						await kill.reply(from, mess.wait(), id)
						let mediaData = await decryptMedia(encryptMedia)
						const OCR_Scanned = await tools('OCR').scanImage(cmd, mediaData)
						if (OCR_Scanned.code == 'Emergence') {
							await kill.reply(from, mess.fail(cmd, OCR_Scanned.result, time), id)
						} else if (OCR_Scanned.code == true) {
							await kill.reply(from, mess.sucessOCR(OCR_Scanned.result), id)
						} else await kill.reply(from, mess.failOCR(OCR_Scanned.result), id)
					} else return await kill.reply(from, mess.onlyimg(), id)
				break

				// Agradecimentos ao "DUCK DEV - patulinomods" por me lembrar da construção desde comando
				case 'pin':
					if (!isOwner) return await kill.reply(from, mess.sodono(), id)
					let pinHelp = `Você pode obter o ID dos grupos com "${prefix}AllID" não esqueça de inserir '@g.us' no final do ID, por exemplo -> "${prefix}Pin on 5518...-165367181@g.us".\n\nPara fixar um privado basta inserir o número com '@c.us' no final, por exemplo, "${prefix}Pin on 5518...@c.us".`
					if (argl[0] == 'on') {
						if (args.length <= 1) {
							let pinWork = await kill.pinChat(chatId, true)
							if (pinWork == true) {
								await kill.reply(from, `Como nenhum chat foi especificado após o parâmetro 'on', fixei este chat com sucesso <3`, id)
							} else await kill.reply(from, `Não foi especificado nenhum chat após o parâmetro 'on', por isso, tentei fixar este chat mas não deu certo, pode especificar o ID do chat? ${pinHelp}\n\nLog -> "${pinWork}"`, id)
						} else {
							let pinWork = await kill.pinChat(argl[1], true)
							if (pinWork == true) {
								await kill.reply(from, `O chat "${argl[1]}" foi fixado sem erros, agora ele sempre estará em primeiro lugar da minha lista de mensagens.`, id)
							} else await kill.reply(from, `Tentei fixar o chat "${argl[1]}" mas obtive uma resposta negativa, verifique se você digitou tudo certinho e se o chat existe, se não souber a ID, digite "${prefix}Pin -help", se mesmo assim houver erros, tente enviar uma mensagem para o local que você quer fixar e rodar o comando novamente, desejo boa sorte! <3\n\nLog -> "${pinWork}"`, id)
						}
					} else if (argl[0] == 'off') {
						if (args.length <= 1) {
							let pinWork = await kill.pinChat(chatId, false)
							if (pinWork == true) {
								await kill.reply(from, `Como nenhum chat foi especificado após o parâmetro 'off', desfixei este chat das mensagens :c`, id)
							} else await kill.reply(from, `Não foi especificado nenhum chat após o parâmetro 'off', por isso, ~infelizmente~ tentei desafixar este chat da lista de mensagens, mas não deu certo, pode especificar o ID do chat? ${pinHelp}\n\nLog -> "${pinWork}"`, id)
						} else {
							let pinWork = await kill.pinChat(argl[1], false)
							if (pinWork == true) {
								await kill.reply(from, `O chat "${argl[1]}" foi desafixado sem erros, agora ele não será mais o número #1 da lista de mensagens.`, id)
							} else await kill.reply(from, `Tentei desafixar o chat "${argl[1]}" mas obtive uma resposta negativa, verifique se você digitou tudo certinho e se o chat existe, se não souber a ID, digite "${prefix}Pin -help", se mesmo assim houver erros, tente enviar uma mensagem para o local que você quer desafixar e rodar o comando novamente, desejo boa sorte! <3\n\nLog -> "${pinWork}"`, id)
						}
					} else await kill.reply(from, pinHelp, id)
				break
				
				case 'newchar':
					if (!args.includes("-name") || !args.includes("-gender") || !args.includes("-class") || !args.includes("-race")) return await kill.reply(from, `Especifique corretamente os valores para criação de um personagem!`, id)
					if (!rpgJson['gender'].includes(argl[argl.indexOf('-gender')+1])) return await kill.reply(from, `Este gênero não existe, lide com isso.`, id)
					if (!rpgJson['classes'].includes(argl[argl.indexOf('-class')+1])) return await kill.reply(from, `Esta classe não existe, use uma que existe.`, id)
					if (!rpgJson['races'].includes(argl[argl.indexOf('-race')+1])) return await kill.reply(from, `Esta raça não existe, não milite sobre.`, id)
					let Char_Done = false
					if (!Object.keys(CharInfo).includes(chatId)) {
						CharInfo[chatId] = {}
					}
					if (!Object.keys(CharInfo[chatId]).includes(sender.id)) {
						var skillG = tools('others').randVal(rpgJson.base.all)
						var weapoRar = tools('others').randVal(rpgJson.items.sword.types)
						var weaponName = tools('others').randVal(rpgJson.items.sword.names[weapoRar])
						var skillT = tools('others').randVal(rpgJson.skills[skillG].list)
						var actual_Place = tools('others').randVal(rpgJson.places.list)
						var Secondary_Place = tools('others').randVal(rpgJson.places[actual_Place]['list'])
						CharInfo[chatId][sender.id] = {
							"name": argl[argl.indexOf('-name')+1],
							"gender": argl[argl.indexOf('-gender')+1],
							"class": argl[argl.indexOf('-class')+1],
							"race": argl[argl.indexOf('-race')+1],
							"f_place": actual_Place,
							"s_place": Secondary_Place,
							"skill": skillT,
							"skill_type": skillG,
							"weapon": weaponName,
							"weapon_rar": weapoRar,
							"weapon_from": rpgJson.items.sword.desc[weapoRar][weaponName]['from'],
							"enemy": false,
							"vit": Number(rpgJson['base']['vit']) + Number(rpgJson['effect'][argl[argl.indexOf('-class')+1]]['vit']),
							"dex": Number(rpgJson['base']['dex']) + Number(rpgJson['effect'][argl[argl.indexOf('-class')+1]]['dex']),
							"int": Number(rpgJson['base']['int']) + Number(rpgJson['effect'][argl[argl.indexOf('-class')+1]]['int']),
							"per": Number(rpgJson['base']['per']) + Number(rpgJson['effect'][argl[argl.indexOf('-class')+1]]['per']),
							"car": Number(rpgJson['base']['car']) + Number(rpgJson['effect'][argl[argl.indexOf('-class')+1]]['car']),
							"str": Number(rpgJson['base']['str']) + Number(rpgJson['effect'][argl[argl.indexOf('-class')+1]]['str'])
						}
						fs.writeFileSync('./lib/config/Gerais/characters.json', JSON.stringify(CharInfo, null, "\t"))
						Char_Done = CharInfo[chatId][sender.id]
					} else {
						Char_Done = CharInfo[chatId][sender.id]
					}
					await kill.sendFileFromUrl(from, rpgJson.places[Char_Done['f_place']][Char_Done['s_place']]['image'], 'rpg.jpg', `📜 - Informações sobre você - 📜\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n📝 Você se chama "${Char_Done['name'].toUpperCase()}"\n\n🐕 Sua raça é "${Char_Done['race'].toUpperCase()}"\n\n⚥ Seu gênero é "${Char_Done['gender'].toUpperCase()}"\n\n📙 Sua classe é "${Char_Done['class'].toUpperCase()}"\n\n🏖️ Lugar atual -> "${Char_Done['f_place'].toUpperCase()} - ${Char_Done['s_place'].toUpperCase()}"\n\n💪 Forca [STR] -> "${Char_Done['str']}"\n\n🚄 Destreza [DEX] -> "${Char_Done['dex']}"\n\n💓 Vitalidade [VIT] -> "${Char_Done['vit']}"\n\n🧐 Inteligencia [INT] -> "${Char_Done['int']}"\n\n👀 Percepção [PER] -> "${Char_Done['per']}"\n\n🧙🏻‍♂️ Carisma [CAR] -> "${Char_Done['car']}"\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n⚔️ Arma -> "${Char_Done['weapon']}" - "${Char_Done['weapon_from']}"\n\n📚 Historia -> "${rpgJson.items.sword.desc[Char_Done['weapon_rar']][Char_Done['weapon']]['history']}"\n\n🩹 Dano -> "${rpgJson.items.sword.desc[Char_Done['weapon_rar']][Char_Done['weapon']]['power']}"\n\n🩸 Efeito -> "${rpgJson.items.sword.desc[Char_Done['weapon_rar']][Char_Done['weapon']]['effect']}"\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n💫 Seu presente foi a habilidade única "${Char_Done['skill']}"\n\n🔎 É uma habilidade do tipo "${Char_Done['skill_type'].toUpperCase()}"\n\n🦴 Historia -> ${rpgJson.skills[Char_Done['skill_type']].desc[Char_Done['skill']].desc}\n\n❗ Efeito -> ${rpgJson.skills[Char_Done['skill_type']].desc[Char_Done['skill']].effect} [${Char_Done['skill_type'].toUpperCase()} + 10]`, id)
				break
				
				case 'mychar':
					if (!Object.keys(CharInfo).includes(chatId)) {
						CharInfo[chatId] = {}
					}
					if (!Object.keys(CharInfo[chatId]).includes(sender.id)) return await kill.reply(from, `Use o comando "${prefix}NewChar" para criar um personagem primeiro.`, id)
					let Char_Get = CharInfo[chatId][sender.id]
					await kill.sendFileFromUrl(from, rpgJson.places[Char_Get['f_place']][Char_Get['s_place']]['image'], 'rpg.jpg', `📜 - Informações sobre você - 📜\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n📝 Você se chama "${Char_Get['name'].toUpperCase()}"\n\n🐕 Sua raça é "${Char_Get['race'].toUpperCase()}"\n\n⚥ Seu gênero é "${Char_Get['gender'].toUpperCase()}"\n\n📙 Sua classe é "${Char_Get['class'].toUpperCase()}"\n\n🏖️ Lugar atual -> "${Char_Get['f_place'].toUpperCase()} - ${Char_Get['s_place'].toUpperCase()}"\n\n💪 Forca [STR] -> "${Char_Get['str']}"\n\n🚄 Destreza [DEX] -> "${Char_Get['dex']}"\n\n💓 Vitalidade [VIT] -> "${Char_Get['vit']}"\n\n🧐 Inteligencia [INT] -> "${Char_Get['int']}"\n\n👀 Percepção [PER] -> "${Char_Get['per']}"\n\n🧙🏻‍♂️ Carisma [CAR] -> "${Char_Get['car']}"\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n⚔️ Arma -> "${Char_Get['weapon']}" - "${Char_Get['weapon_from']}"\n\n📚 Historia -> "${rpgJson.items.sword.desc[Char_Get['weapon_rar']][Char_Get['weapon']]['history']}"\n\n🩹 Dano -> "${rpgJson.items.sword.desc[Char_Get['weapon_rar']][Char_Get['weapon']]['power']}"\n\n🩸 Efeito -> "${rpgJson.items.sword.desc[Char_Get['weapon_rar']][Char_Get['weapon']]['effect']}"\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n💫 Seu presente foi a habilidade única "${Char_Get['skill']}"\n\n🔎 É uma habilidade do tipo "${Char_Get['skill_type'].toUpperCase()}"\n\n🦴 Historia -> ${rpgJson.skills[Char_Get['skill_type']].desc[Char_Get['skill']].desc}\n\n❗ Efeito -> ${rpgJson.skills[Char_Get['skill_type']].desc[Char_Get['skill']].effect} [${Char_Get['skill_type'].toUpperCase()} + 10]`, id)
				break
				
				case 'fight':
					if (!args.includes("-attack") && !args.includes("-show") && !args.includes("-run")) return await kill.reply(from, `Especifique se quer "-attack", "-show", "-run" para usar esse comando.`, id) // Para lembrete futuro = "-item" ou "-magia" | && !args.includes("-item") && !args.includes("-magia")
					if (!Object.keys(CharInfo).includes(chatId)) {
						CharInfo[chatId] = {}
					}
					if (!Object.keys(Fights).includes(chatId)) {
						Fights[chatId] = {}
					}
					if (!Object.keys(CharInfo[chatId]).includes(sender.id)) return await kill.reply(from, `Use o comando "${prefix}NewChar" para criar um personagem primeiro.`, id)
					let Char_Boss = CharInfo[chatId][sender.id]
					if (!Object.keys(Fights[chatId]).includes(sender.id)) {
						var choise_boss = tools('others').randVal(rpgJson.places[Char_Boss['f_place']][Char_Boss['s_place']]['bosses'])
						var The_Boss = rpgJson.places[Char_Boss['f_place']][Char_Boss['s_place']]['enemy'][choise_boss]
						CharInfo[chatId][sender.id]['enemy'] = choise_boss
						Fights[chatId][sender.id] = The_Boss
						fs.writeFileSync('./lib/config/Gerais/characters.json', JSON.stringify(CharInfo, null, "\t"))
						fs.writeFileSync('./lib/config/Gerais/fights.json', JSON.stringify(Fights, null, "\t"))
					} else var The_Boss = Fights[chatId][sender.id]
					if (args.includes("-show")) {
						await kill.sendFileFromUrl(from, The_Boss['image'], 'rpg.jpg', `📜 - Informações sobre seu oponente - 📜\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n📝 Ele/a se chama "${Char_Boss['enemy'].toUpperCase()}"\n\n🐕 Veio de "${The_Boss['from']}"\n\n💪 Forca [STR] -> "${The_Boss['stats']['str']}"\n\n🚄 Destreza [DEX] -> "${Number(rpgJson['base']['dex'])}"\n\n💓 Vitalidade [VIT] -> "${The_Boss['stats']['vit']}"\n\n🧐 Inteligencia [INT] -> "${Number(rpgJson['base']['int'])}"\n\n👀 Percepção [PER] -> "${Number(rpgJson['base']['per'])}"\n\n🧙🏻‍♂️ Carisma [CAR] -> "${Number(rpgJson['base']['car'])}"`, id)
					} else if (args.includes("-attack")) {
						let attack_power = tools('others').randomNumber(1, Number(Char_Boss['str']))
						let npc_act = tools('others').randVal(['fight', 'run', 'pass', 'cure'])
						if (npc_act == 'run') {
							if (The_Boss['stats']['vit'] >= 20) {
								npc_act = tools('others').randVal(['fight', 'pass', 'cure']) // So foge se a vida tiver abaixo de 20
							}
						}
						if (npc_act == 'pass') {
							if (The_Boss['stats']['vit'] <= 70) {
								npc_act = tools('others').randVal(['fight', 'pass', 'cure']) // So zomba do player se a vida tiver acima de 70
							}
						}
						rpgJson.places[Char_Boss['f_place']][Char_Boss['s_place']]['enemy'][Char_Boss['enemy']]
						let is_Fighter = `Você causou "${attack_power}" de dano em "${Char_Boss['enemy'].toUpperCase()}".`
						if (npc_act == 'fight') {
							let boss_pow = tools('others').randomNumber(1, Number(The_Boss['stats']['str']))
							The_Boss['stats']['vit'] = Number(The_Boss['stats']['vit']) - attack_power
							Char_Boss['vit'] = Number(Char_Boss['vit']) - boss_pow
							is_Fighter += `\n\n"${Char_Boss['enemy'].toUpperCase()}" escolheu dar um golpe de volta, causando "${boss_pow}" de danos em você.`
						} else if (npc_act == 'run') {
							await kill.reply(from, `O boss fugiu de você deixando algumas coisas para trás, você venceu a luta.`, id)
						} else if (npc_act == 'pass') {
							await kill.reply(from, `O boss zombou de você, ele acha que você não é uma ameaça e te deixou dar outro golpe.`, id)
						} else if (npc_act == 'cure') {
							let cure_level = tools('others').randomNumber(1, (Number(Char_Boss['vit']) / 2) + 10)
							The_Boss['stats']['vit'] = Number(The_Boss['stats']['vit']) + cure_level
							await kill.reply(from, `O Boss usou "CURA" e restaurou ${cure_level} pontos de vida.`, id)
						}
						await kill.sendText(from, `${is_Fighter}\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n📜 - Informações sobre seu oponente - 📜\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n💪 Forca [STR] -> "${The_Boss['stats']['str']}"\n\n🚄 Destreza [DEX] -> "${Number(rpgJson['base']['dex'])}"\n\n💓 Vitalidade [VIT] -> "${The_Boss['stats']['vit']}"\n\n🧐 Inteligencia [INT] -> "${Number(rpgJson['base']['int'])}"\n\n👀 Percepção [PER] -> "${Number(rpgJson['base']['per'])}"\n\n🧙🏻‍♂️ Carisma [CAR] -> "${Number(rpgJson['base']['car'])}"\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n📜 - Informações sobre você - 📜\n\n💪 Forca [STR] -> "${Char_Boss['str']}"\n\n🚄 Destreza [DEX] -> "${Char_Boss['dex']}"\n\n💓 Vitalidade [VIT] -> "${Char_Boss['vit']}"\n\n🧐 Inteligencia [INT] -> "${Char_Boss['int']}"\n\n👀 Percepção [PER] -> "${Char_Boss['per']}"\n\n🧙🏻‍♂️ Carisma [CAR] -> "${Char_Boss['car']}"`)
						if (The_Boss['stats']['vit'] <= 0) {
							await kill.reply(from, `Seu golpe destruiu o oponente, você venceu!`, id)
							delete Fights[chatId][sender.id]
						}
						if (Char_Boss['vit'] <= 0) {
							await kill.reply(from, `Você perdeu para seu oponente, crie um novo personagem.`, id)
							delete Fights[chatId][sender.id]
							delete CharInfo[chatId][sender.id]
						}
						fs.writeFileSync('./lib/config/Gerais/fights.json', JSON.stringify(Fights, null, "\t"))
					} else if (args.includes("-run")) {
						delete Fights[chatId][sender.id]
						await kill.reply(from, `Você fugiu do seu oponente, ele grita "frangote hahaha" ao fundo.`, id)
						fs.writeFileSync('./lib/config/Gerais/fights.json', JSON.stringify(Fights, null, "\t"))
					}
				break
				
				case 'casar':
					let helpDiv = `O casamento é uma coisa seria e muitas vezes difícil, se ainda assim quiser, utilize "${prefix}Casar @user minutos".\n\nExemplo -> "${prefix}Casar @User 60 | Voto".\n\nO tempo de casamento não pode exceder "60000" minutos [1000 horas] e o voto de casamento é opcional.`
					if (argl[0] == '-help' || args.length == 0) return await kill.reply(from, helpDiv, id)
					if (!quotedMsg && mentionedJidList.length == 0) return await kill.reply(from, mess.semmarcar(), id)
					var happyToYou = quotedMsg ? quotedMsgObj.sender.id : (mentionedJidList ? mentionedJidList[0] : false)
					let timeToEnd = quotedMsg ? argl[0] : (mentionedJidList ? argl[1] : argl[1])
					if (happyToYou == false || isNaN(timeToEnd) || Number(timeToEnd) > 60000) return await kill.reply(from, helpDiv, id)
					if (married['all'].includes(sender.id)) {
						await kill.reply(from, `Você já é casado, se quiser casar novamente faça um divorcio, não irei permitir quaisquer traição aqui!`, id)
					} else if (married['all'].includes(happyToYou)) {
						await kill.reply(from, `Infelizmente ela é casada e eu não irei aceitar ~comedores de casada~ traições, quem sabe você tenha mais sorte na próxima!`, id)
					} else if (marryOngoing.includes(sender.id)) {
						await kill.reply(from, `Você já está em um casamento, se quiser mudar de par, reze para que o par do atual casamento diga não.`, id)
					} else if (sender.id == happyToYou) {
						await kill.reply(from, `Você não pode casar consigo mesmo, veja se alguém no grupo aceitaria casar com você, se não sabe, use "${prefix}Random Quer casar comigo?".`, id)
					} else if (happyToYou == botNumber) {
						if (isOwner) return await kill.reply(from, `Eu já sou casada com você, só não estou no sistema, seu 'idiota'! <3`, id)
						await kill.sendTextWithMentions(from, `Estou lisonjeada, mas, não posso aceitar...eu sou total comprometida ao meu dono, nunca irei trair a pessoa que mais espera confiança de mim ❤️` + (config.Hide_Owner_Number ? '' : `\nEu te amo @${config.Owner[0].replace('@c.us', '')}`))
					} else {
						let votoCasa = arks.includes('|') ? arg.split('|')[1] : 'Prometo estar contigo na alegria e na tristeza, na saúde e na doença, na riqueza e na pobreza, amando-te, respeitando-te e sendo-te fiel em todos os dias de minha vida, até que a morte nos separe.'
						marryOngoing.push(sender.id, happyToYou)
						var The_Button = 'Nada Aqui'
						if (sesConfig.Multi_Devices == true) {
							await kill.sendTextWithMentions(from, `${votoCasa}\n\nVocê aceita os votos @${happyToYou.replace('@c.us', '')}?\n\nPara aceitar ou recusar, digite "sim" ou "não" no grupo dentro de 5 minutos, você pode escrever seus votos na mesma mensagem, o importante é conter "sim" ou "não".`)
						} else {
							await kill.sendTextWithMentions(from, `Você aceita os votos @${happyToYou.replace('@c.us', '')}?`)
							await kill.sendButtons(from, `"${votoCasa}"`, [
								{
									"id": "1",
									"text": "😍 Sim! ❤️"
								},
								{
									"id": "2",
									"text": "Não, ECA! 🤮"
								},
								{
									"id": "3",
									"text": "🏳️‍🌈 Desculpe, sou Gay 🏳️‍🌈"
								}
							], `Você pode escrever seus votos na mesma mensagem, o importante é conter "sim", "não" ou "gay".`, 'Escolha uma das opções abaixo ou digite "sim", "não" e "gay" no grupo, dentro de 5 minutos →').then(b => The_Button = b)
						}
						var isCorrect = msgw => tools('others').filterMsg(msgw, happyToYou, from, The_Button, /sim|nao|gay/gi)
						await kill.awaitMessages(from, isCorrect, {
							max: 1,
							time: 300000,
							errors: ['time']
						}).then(async col => {
							if (/sim/gi.test(removeAccents(Array.from(col)[0][1].body))) {
								await kill.sendTextWithMentions(from, `@${happyToYou.replace('@c.us', '')} aceitou!\n\nResposta -> "${Array.from(col)[0][1].body}"\n\nValidade -> "${moment().add(timeToEnd, 'minutes').format('llll')}" [${timeToEnd} minutos]\n\nVocê não poderá usar comandos como "kiss" com outras pessoas a não ser com @${happyToYou.replace('@c.us', '')}, caso utilize, o par será avisado e pode solicitar um divorcio, da qual dividirá os bens entre vocês, seu casamento será inserido no perfil e demais locais, feliz casamento @${sender.id.replace('@c.us', '')}, hehehe!`)
								married['all'].push(sender.id, happyToYou)
								married['persons'][sender.id] = {
									'place': chatId,
									'love': happyToYou,
									'request': sender.id,
									'startedAt': moment().unix(),
									'finishAt': moment().add(timeToEnd, 'minutes').unix(),
								}
								fs.writeFileSync('./lib/config/Gerais/marry.json', JSON.stringify(married, null, "\t"))
							} else await kill.sendTextWithMentions(from, `Infelizmente ela/ele recusou @${sender.id.replace('@c.us', '')}, não se sinta mal, ainda existem bilhões de pessoas no mundo...\n\n"${Array.from(col)[0][1].body}"`)
						}).catch(async collected => {
							await kill.sendTextWithMentions(from, `Tururu @${sender.id.replace('@c.us', '')}, posso considerar isso um não, afinal, seu par demorou demais pra responder, sinto muito...`)
						})
						marryOngoing = marryOngoing.filter(k => k !== sender.id && k !== happyToYou)
					}
				break
				
				case 'marry':
					if (Object.keys(married['persons']).length >= 1) {
						let coupleCa = Object.keys(married['persons']).map(i => `\n@${married['persons'][i].request.replace('@c.us', '')} esta casado com @${married['persons'][i].love.replace('@c.us', '')} de "${moment(Number(married['persons'][i].startedAt.toString().padEnd(moment.now().toString().length, '0'))).format('LLLL')}" até "${moment(Number(married['persons'][i].finishAt.toString().padEnd(moment.now().toString().length, '0'))).format('LLLL')}"\n`).join('')
						await kill.sendTextWithMentions(from, coupleCa)
					} else await kill.reply(from, `Nenhum casamento está em andamento, que tal se casar? Se quiser, veja o "${prefix}Casar -help" <3`, id)
				break
				
				case 'divorcio':
				case 'divorce':
				case 'acordo':
					if (onDivorce.includes(sender.id)) return await kill.reply(from, `Você já solicitou o divorcio, se quiser alterar alguma coisa, peça que seu par clique em "alterar" ou que ele espere 5 minutos para que seja automaticamente cancelado.`, id)
					if (argl[0] == '-help' || args.length == 0) return await kill.reply(from, `Para fazer um acordo de divorcio, use da seguinte forma -> "${prefix}Acordo Termos".\n\nExemplo -> "${prefix}Acordo Se quiser, a gente se divorcia e ninguém perde nada.".\n\nCaso seja recusado, o divorcio dividirá os bens de ambos em partes iguais.`, id)
					let isTrat = Object.keys(married['persons']).filter(p => married['persons'][p].love == sender.id || married['persons'][p].request == sender.id)
					if (isTrat.length >= 1) {
						let devilWork = ''
						if (sender.id == married['persons'][isTrat[0]].request) {
							devilWork = married['persons'][isTrat[0]].love
						} else if (sender.id == married['persons'][isTrat[0]].love) {
							devilWork = married['persons'][isTrat[0]].request
						}
						onDivorce.push(sender.id, devilWork)
						var buttID = 'Nothing here sir'
						if (sesConfig.Multi_Devices == true) {
							await kill.sendTextWithMentions(from, `Infelizmente um divorcio foi requisitado em nome de @${sender.id.replace('@c.us', '')}, todavia, ele pediu por um acordo, você pode aceitar ou recusar, mas, ao recusar, os bens serão divididos igualmente, você aceita o seguinte acordo @${devilWork.replace('@c.us', '')}?\n\n"${body.slice(8)}"\n\nPara aceitar ou recusar, digite "sim" ou "não" no grupo dentro de 5 minutos, você pode escrever algo na mesma mensagem, o importante é conter "sim" ou "não".\n\nSe quiser cancelar o divorcio ou alterar algo, basta digitar "alterar" ou esperar 5 minutos.`)
						} else {
							await kill.sendTextWithMentions(from, `@${devilWork.replace('@c.us', '')}`)
							await kill.sendButtons(from, `Infelizmente um divorcio foi requisitado em nome de seu par, todavia, ele pediu por um acordo, você pode aceitar ou recusar, mas, ao recusar, os bens serão divididos igualmente, você aceita o seguinte acordo?\n\n"${body.slice(8)}"`, [
								{
									"id": "1",
									"text": "✔️ Sim ✔️"
								},
								{
									"id": "2",
									"text": "✖️ Não ✖️"
								},
								{
									"id": "2",
									"text": "✖️ Alterar/Cancelar ✖️"
								}
							], `Pedido de divorcio requisitado!`, 'Escolha uma das opções abaixo ou digite "sim", "não" e "alterar" no grupo dentro de 5 minutos →').then(b => buttID = b)
						}
						var willAccept = msgw => tools('others').filterMsg(msgw, devilWork, from, buttID, /sim|nao|alterar/gi)
						await kill.awaitMessages(from, willAccept, {
							max: 1,
							time: 300000,
							errors: ['time']
						}).then(async col => {
							if (/sim/gi.test(removeAccents(Array.from(col)[0][1].body))) {
								await kill.sendTextWithMentions(from, `@${devilWork.replace('@c.us', '')} aceitou o acordo, estarei providenciando o divorcio sem fazer a separação de bens, sinto muito pela separação e espero que continuem amigos.\n\n"${Array.from(col)[0][1].body}"`)
							} else if (/alterar/gi.test(removeAccents(Array.from(col)[0][1].body))) {
								return await kill.sendTextWithMentions(from, `Uma alteração/cancelamento foi requisitado @${sender.id.replace('@c.us', '')}, se organizem e enviem o comando novamente quando estiverem prontos, rezo para que não seja necessário.\n\n"${Array.from(col)[0][1].body}"`)
							} else await kill.sendTextWithMentions(from, `O acordo foi recusado @${sender.id.replace('@c.us', '')}, irei separar os bens de vocês igualmente, sinto muito pela separação e espero que continuem amigos.\n\n"${Array.from(col)[0][1].body}"`)
							let maridUsr = tools('gaming').getValue(sender.id, nivel, chatId, null)
							let EsposUsr = tools('gaming').getValue(devilWork, nivel, chatId, null)
							let finalValuSep = {}
							Object.keys(maridUsr).filter(k => k !== 'guild').map(key => finalValuSep[key] = Number(parseInt(maridUsr[key] + EsposUsr[key]) / 2))
							tools('gaming').resetValue(sender.id, nivel, chatId)
							tools('gaming').resetValue(devilWork, nivel, chatId)
							Object.keys(maridUsr).filter(k => k !== 'guild' && k !== 'level' && k !== 'msg').map(val => {
								if (finalValuSep[val] !== 0) {
									tools('gaming').addValue(sender.id, parseInt(finalValuSep[val]), nivel, chatId, val)
									tools('gaming').addValue(devilWork, parseInt(finalValuSep[val]), nivel, chatId, val)
								}
							})
							married['all'] = married['all'].filter(i => i !== sender.id && i !== married['persons'][isTrat[0]].love && i !== married['persons'][isTrat[0]].request)
							delete married['persons'][isTrat[0]]
							fs.writeFileSync('./lib/config/Gerais/marry.json', JSON.stringify(married, null, "\t"))
						}).catch(async collected => {
							await kill.sendTextWithMentions(from, `Nenhuma resposta de @${devilWork.replace('@c.us', '')} foi enviada, estarei cancelando as ações, faça um novo pedido quando ela estiver online ou parar de ignorar @${sender.id.replace('@c.us', '')}.`)
						})
						onDivorce = onDivorce.filter(k => k !== sender.id && k !== devilWork)
					} else if (married['all'].includes(sender.id)) {
						married['all'] = married['all'].filter(i => i !== sender.id)
						fs.writeFileSync('./lib/config/Gerais/marry.json', JSON.stringify(married, null, "\t"))
						await kill.reply(from, `Você estava na lista de casados com divorcio em andamento, por isso, te tirei, agora você pode casar novamente.`, id)
					} else return await kill.reply(from, `Você não se casou para ter um divorcio, se estiver considerando se casar, verifique a sua compatibilidade com a morena/o usando "${prefix}Ship".`, id)
				break
				
				case 'morrepraga':
				case 'morre':
				case 'praga':
				case 'dieplague':
				case 'die':
				case 'plague':
					await kill.reply(from, mess.wait(), id)
					let plagueRE4 = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').morrepraga(plagueRE4[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `praga.png`, ``, id))
				break

				case 'invert':
					await kill.reply(from, mess.wait(), id)
					let hirakoBC = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').invert(hirakoBC[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `invert.png`, ``, id))
				break

				case 'drake':
					await kill.reply(from, mess.wait(), id)
					let xDrakeOP = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 2)
					await tools('canvas').drake(xDrakeOP[0], xDrakeOP[1]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `drake.png`, ``, id))
				break

				case 'bolso1':
					await kill.reply(from, mess.wait(), id)
					let bolso1 = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').bolso1(bolso1[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `bolso1.png`, '', id))
				break

				case 'bolso2':
					await kill.reply(from, mess.wait(), id)
					let bolso2 = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').bolso2(bolso2[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `bolso2.png`, '', id))
				break

				case 'bolso3':
					await kill.reply(from, mess.wait(), id)
					let bolso3 = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').bolso3(bolso3[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `bolso3.png`, '', id))
				break

				case 'bob':
				case 'esponja':
				case 'sponge':
					await kill.reply(from, mess.wait(), id)
					let spongebobo = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').sponge(spongebobo[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `bolso3.png`, '', id))
				break

				case 'briggs':
					await kill.reply(from, mess.wait(), id)
					let briggs = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').briggs(briggs[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `briggs.png`, '', id))
				break

				case 'ednaldo':
				case 'bandeira':
					await kill.reply(from, mess.wait(), id)
					let flag = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').ednaldoBandeira(flag[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `ednaldoEuTeAmo.png`, '', id))
				break

				case 'edit':
					if (args.length == 0) return await kill.reply(from, tools('others').tablefy('Se informado uma proporção X:Y no primeiro argumento redimensiona a imagem nessa proporção.\n*fit*: Centralizar a imagem redimensionada na proporção em um quadrado.\nSe não informada nenhuma proporção:\n*c/centre:* Corta na região central.\n*att/attention:* Corta na região de maior atenção.\n*ent/entropy:* Corta na região de maior entropia.\n*t/top*, *b/bottom*, *r/right* e *l/left*: Corta nas respectivas regiões.\n*fit:* Imagem no meio com fundo borrado.', 'Definição'), id)
					if (/at|attention|att/.test(arks)) {
						var position = 'attention'
					} else if (/ent|entropy/.test(arks)) {
						var position = 'entropy'
					} else if (/top|t/.test(arks)) {
						var position = 'top'
					} else if (/right|r/.test(arks)) {
						var position = 'right'
					} else if (/bottom|b/.test(arks)) {
						var position = 'bottom'	
					} else if (/centre|c/.test(arks)) {
						var position = 'centre'	
					} else var position = 'centre'
					let mediaData_edit = await decryptMedia(encryptMedia)
					if (arks.includes('fit') || args[0].includes(':')) {
						await tools('canvas').imgEditor(mediaData_edit, args[0].includes(':') ? args[0].split(':')[0] : 0, args[0].includes(':') ? args[0].split(':')[1] : 0, arks.includes('fit') ? true : false).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `scale-to-fit.png`, '', id))
					} else {
						const image = await sharp(mediaData_edit)
						image.metadata().then(metadata => {
							var width = metadata.width < metadata.height ? metadata.width : metadata.height
							var height = metadata.width < metadata.height ? metadata.width : metadata.height
							image.resize(width, height+2, {
								fit: sharp.fit.cover,
								position: position
							})
							.toFormat('png')
							.toBuffer()
							.then(async (resizedImageBuffer) => await kill.sendImage(from, tools('others').dataURI('image/png', resizedImageBuffer), 'sharpimage.png', '', id))
						})
					}
				break

				case 'ednaldotv':
				case 'tv':
				case 'televisao':
					await kill.reply(from, mess.wait(), id)
					let tv = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').ednaldoTV(tv[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `ednaldoEuTeAmo.png`, '', id))
				break

				case 'mark':
					await kill.reply(from, mess.wait(), id)
					let markinho = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').markSuckerberg(markinho[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `markinho.png`, '', id))
				break

				case 'paper':
					await kill.reply(from, mess.wait(), id)
					let passpaper = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').paper(passpaper[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `passingpaper.png`, '', id))
				break

				case 'pepe':
					await kill.reply(from, mess.wait(), id)
					let peped = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').pepe(peped[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `pepe.png`, '', id))
				break

				case 'shot':
					await kill.reply(from, mess.wait(), id)
					let shot = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').shotTV(shot[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `shotTV.png`, '', id))
				break

				case 'romero':
					await kill.reply(from, mess.wait(), id)
					let romero = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').romero(romero[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `romero.png`, '', id))
				break

				case 'wolverine':
					let garraGato = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').wolverine(garraGato[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `wolve.png`, ``, id))
				break

				case 'bolsonaro':
					let bolsonAro13 = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 2)
					await tools('canvas').bolsonero(bolsonAro13[0], bolsonAro13[1]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `bolsonaro.png`, ``, id))
				break

				case 'medal':
					try {
						await kill.reply(from, mess.wait(), id)
						const getMedal = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 2)
						await tools('canvas').medal(getMedal[0], getMedal[1]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `medal.png`, '', id))
					} catch (error) {
						tools('others').reportConsole(cmd, error)
						await kill.reply(from, mess.fail(cmd, error, time), id)
					}
				break

				case 'jooj':
					let terraForm = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').jooj(terraForm[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `jooj.png`, ``, id))
				break

				case 'ojjo':
					let ojjoImage = await tools('profile').getProfilePic(kill, isType('image'), encryptMedia, quotedMsg, quotedMsgObj, mentionedJidList, sender, botNumber, groupMembersId, 1)
					await tools('canvas').ojjo(ojjoImage[0]).then(async (buffer) => await kill.sendFile(from, tools('others').dataURI('image/png', buffer), `ojjo.png`, ``, id))
				break

				/*Para usar a base remova o "/*" e o "* /" e bote um nome dentro das aspas da case e em seguida sua mensagem dentro das aspas na frente do from */
				/*case 'Nome do comando sem espaços':
					await kill.reply(from, 'Sua mensagem', id)
				break*/

				// Se você fizer uma case ou inserir comandos com o custom que possua números, troque '[a-zA-Z]' por '[a-zA-Z0-9]+'
				default:
					if (isCmd && /[a-zA-Z]/.test(cmd)) {
						if (Object.keys(cmds).includes(chatId) && Object.keys(cmds[chatId]).includes(cmd)) {
							await kill.reply(from, cmds[chatId][cmd], id)
						} else if (Object.keys(theNewLine).includes(cmd)) {
							await kill.reply(from, theNewLine[cmd], id)
						} else if (Object.keys(cmds['global']).includes(cmd)) {
							await kill.reply(from, cmds['global'][cmd], id)
						} else {
							let cmdprew = await shell.exec(`bash -c "grep -i '${cmd.slice(0, 3)}' lib/config/Utilidades/Comandos_Automate.txt | shuf -n 1"`, {
								silent: true
							})
							if (!cmdprew.stdout == '') {
								if (sesConfig.Multi_Devices == true) return await kill.reply(from, mess.previewcmd() + ' → ' + `${prefix}${cmdprew}`, id)
								await kill.sendButtons(from, `${cmd} →`, [
									{
										"id": "1",
										"text": prefix + cmdprew
									}
								], mess.previewcmd())
							} else await kill.reply(from, mess.nocmd(cmd), id)
						}
					}
				break
				
			}

			// Sistema que roda múltiplos comandos de uma vez
			if (!config.Multitasking || !isOwner && i >= config.Max_Commands) {
				break
			}
			
		}
		
	} catch (error) {
		console.log(tools('others').color('[FALHA GERAL]', 'red'), error)
		await kill.reply(from, mess.fail(command, error, time), id)
	}

}
