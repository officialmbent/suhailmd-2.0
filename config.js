const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349154465190
";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_53_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcxLFxuICAgICAgICA3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDczLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgMjI4LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICA0NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICA4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNixcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMCxcbiAgICAgICAgNixcbiAgICAgICAgMTY2LFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjksXG4gICAgICAgIDY2LFxuICAgICAgICA5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVGV3aE5DVEdVRkpGY1pQWENkVXpFcXQ5cStWRyt4bDYyV0Z3N2pjZTNkbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieXhUZFJoVmtRbUtjWGZPSmJ4cXBKQVwiLFxuICBcInBob25lSWRcIjogXCI5NTlmNTg0ZS03Yzg0LTRiODYtODA1ZC1iYjFjOWE1OTFmMDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMTEzLFxuICAgICAgMjE5LFxuICAgICAgMTY5LFxuICAgICAgMjM0LFxuICAgICAgMTgzLFxuICAgICAgMTM2LFxuICAgICAgMTE4LFxuICAgICAgMTMzLFxuICAgICAgNzgsXG4gICAgICAyMDcsXG4gICAgICA3NSxcbiAgICAgIDIyNSxcbiAgICAgIDEzMyxcbiAgICAgIDE1MixcbiAgICAgIDE5NSxcbiAgICAgIDIxNSxcbiAgICAgIDc2LFxuICAgICAgOTksXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICA5MSxcbiAgICAgIDIyLFxuICAgICAgMjQ2LFxuICAgICAgMzUsXG4gICAgICAyNDksXG4gICAgICAyMDIsXG4gICAgICAxNTksXG4gICAgICAyNDksXG4gICAgICAxNzEsXG4gICAgICAxNDksXG4gICAgICAyMjMsXG4gICAgICAyNTUsXG4gICAgICA2NyxcbiAgICAgIDEzNyxcbiAgICAgIDI0NCxcbiAgICAgIDE1MyxcbiAgICAgIDE1NyxcbiAgICAgIDI0MixcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlZWjlRNFo3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU0NDY1MTkwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJjb2FjaCBtYXZlXCIsXG4gICAgXCJsaWRcIjogXCIxOTI3NDE0ODkyOTk2Mjg6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPemh0K29PRUxmdmlyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjEvRDM3Nmc5WlRiVnJTb1U1eDB6djVUV1ZkZEx2VVk4WUlPcnUrSURMVU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUtTTXBnZGx4ei91Sy9zYWJqM2lhSGoxM0RXWXk5RjZMVWZZWTQ4SmlTRVhtZmxLRnZtVDB2cTNCQzd6NytUK255a3VJUGo2MTRwWjJpY0FOSkl3aUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSHZ4TWpOS2FMMWJvSUVvS2xRV2FIVEI2VVFCdzZXcWQxMHVqVXZZTVQybzZ3d2NtNkI3MUoxSHFCMDZNMCtYUnNjbzJveWtwZ05VSHBTUWZsbXYzZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1NDQ2NTE5MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NTIyODExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTNZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFM1kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaWDJ6djVBeWtaUlpFUTRxa2RaclQwY1NYdDAvSmN1ZmZSbmZ5ckpoY1VzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM5ODEzMDgxNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDUyMjgxNzU5NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
