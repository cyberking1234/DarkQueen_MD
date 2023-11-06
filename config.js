const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",94767533889")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94767533889'
global.devs = '94715491788';
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝐃𝐚𝐫𝐤 𝐐𝐮𝐞𝐞𝐧 𝐌𝐃' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'X-Notiya' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? true : process.env.SESSION_ID,'DARK-QUEEN-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FYY1h6dXhzM0F0Q0VKRExHTms4L2NRSXUraThpYzQzQnhuV0JjV24yYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzYxUnNhME02UFJJZ3hXNCtXdG5MVGlJRldNZ01QVjFZVHIyeFVHeDNDYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRUo2YmVYZ1ZXYkdMYUZ3YlFEa0d1VWRCY0o5T3dUVHNvNCtHWG9hU1c4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpYXNWT3JITmtUWkNFRm5SMUJucXJrS3dvZDJ2ckZGVzc4SlppVmJhYlUwPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklFQms3RFlPTXl4blBMWFRXVzdCOVhRbndIcWl0LzdrS211NjhNTTB1bTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpKeWFJLzQ4SG4yZGplZTFSOVJoVjhXMG9UL21MamlLMjQxZ1JNRGFoSDg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWR1BOYXZESnNxcmFxaENpOXNZRFgzZCtFMUZCTmNZTmxKTnRRaGpmZkdoTnkyZkdOUUNKR05oZDIvd2lFSk1JQUloaDNYb01vdm03dWRoVE1EZktDUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIwOCwiYWR2U2VjcmV0S2V5IjoidS9ZOUJlZ1RpcEtYRmVMMmVqazRoMVNjTysvd1BVNEduSUZHdUEwKy9nUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiM3RscWFsX2tTbktsdGlRSTZTelhwdyIsInBob25lSWQiOiI2ODE2Yzc0NS1iY2MxLTRkZGItYmY2Yi03YTE4MjlkZmFiMDEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTM1cjRjMjlYNFlrRG5ydG1PbDhIUTRVaWdzPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLemxPMTE4WnhnOUVvdFQvOFJ6SHZmTHRFRUU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPV1d1dGNIRUk2bHBhb0dHQTg9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNySUJxa05xQVhWZGkwRG5PcGJsL1lqMWRFdW52ZnNLaE0xVnJodDFyR0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpOcDBFU3pOa29XOFVSeFM1LzZGMWdTTnpud090VjVLOWE1Y3M1QTRzMUI5eFBPZ0RsKzROaGRiOEVlSGpMb2ZYTjgyNGRrVlVHNXAwZlZrbmprQkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6d2ZNMVVsMmkwdUxXMkZYV1BtZ1lCMWdmSnRydDVRakMyZU5TaFhTNUtCNy9xbEVPNTFjaURma24wZmJ3MWdtZEQzY3NwdGdRV3NwQ3BjZXFqZVBBQT09In0sIm1lIjp7ImlkIjoiOTQ3Njc1MzM4ODk6MzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XmfCdl5/wnZeU8J2XrfCdl6wg8J2XnvCdl5zwnZeh8J2XmiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NzUzMzg4OTozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNnlBYXBEYWdGMVhZdEE1enFXNWYySTlYUkxwNzM3Q29UTlZhNGJkYXhoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk5MzA0MDgwfQ=='
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'X-Notiya' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'DarkQueen-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '91' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? [''] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'true' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'DARK-QUEEN',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
