//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidpromise2003@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Mek-d1/X-bot";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VarIiQL5a24AU5ZCVV0G";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VarIiQL5a24AU5ZCVV0G";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/mx0z4n.jpg";
global.devs = "2349133354644";
global.sudo = process.env.SUDO || "2349133354644";
global.owner = process.env.OWNER_NUMBER || "2349133354644";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/mx0z4n.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2347013349642,234xxxxx";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://x-bot-session-generator.onrender.com";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dRdG5LR3g4UzB2eThPS3JMMml1WlBPMTNPY0kySnE5c3lGdkxrUmMzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFI2L3lkQTJ0T3VxYitvWGtCaFd0VnVTQUFobGRqVVgzUUtOV2lrMWduZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSW1kZzZlN1d0QnVld3dhbUlvMGVvL0VucTNHTHZGTGZtR0FSY21TcW5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZkZDQkgrUUVSRXFpTjNnR291ZmJlZkIrK0JVWGhSK2FTM1k4UXBWSmk4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DWkR0L09xWnBFZERNTjZNTnA4Qng2aEpuRmtpZmlzZmhhWmM0UjQ5M0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdNWVBzbkhpSEJrMXNHc0x4Z3RENCtmK2hpYUFFQXZZd3JNWXhXZDluRjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BtSmszUzk2dlRob3FaMVBtOWFTZEVPdkwrMEt4dW1UbG9OeUpGejJXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidk10UU9EWm91WmJ5bHNRTENqYzlNa3hrY2pmc1d0bEhxWDFXZHJFa3RXRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill3MTdSa2pmS0prNXk5amtqS0NOM25oN1lyZ2dLb3VlYUwrQjFhSkpNaXZIOE42VlR6ZFR5ZC82SkNyeUlka2xndXlERkE1anEzUXYvWUpITXBuSmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJlSnd0d3l6TzJ4ejl4UjBMeG0wTk10OE1mRENZbVZzOGhBQXYyUVpBM1pRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaUkhYbkFTa1IxZTlBQzZycjAxcUZnIiwicGhvbmVJZCI6IjI4NDZhMGRjLWFjMWYtNDZkYi1iNGI2LTZmODJjZTVlYTQzNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJramxPWitmMDkzS2M5UlBuSFV4ZkFNS0Q0Rzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmwyV21rRU5XRjFUTWxCOEd3S2hPSVptUHA0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhQWlFYWkZIIiwibWUiOnsiaWQiOiIyMzQ5MDQyOTcwMTM1OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJ1cmdlciBCb3QifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xIbmh0b0VFSzdEODdzR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImxEaXNDYmNsMlhQRHFVMStsZndEM0ZRWlRZN1JCWXNNa3NMdDA1Mlpwd0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhDVkxkV0J4bUg1dzcwYm5EbnVRbTFPWUFwSVNTaXk5aDBqeWV3N0tGK2FtTHJyd0l1NlBQYjJ1UHhOMGw1L2FiSnY5WHhIMHdxalRCUnhUNEh0WkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyemtmUSs1L1V5MDZvK2I5aG9oOUVJOXhnTTRlMzJHZDY4OTlhaXh6NjFYUEVEMXFFSjYvL2g4QzZ2RE83cjcrNU9IWDRHVWl3d3diZXM3djNmSGpqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNDI5NzAxMzU6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWlE0ckFtM0pkbHp3NmxOZnBYOEE5eFVHVTJPMFFXTERKTEM3ZE9kbWFjQiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjIzNzQ5OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDQVEifQ==
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©X-:bot",
  author: process.env.PACK_AUTHER || "X-bot",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "X-bot",
  ownername: process.env.OWNER_NAME || "-X-",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
