const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  port: process.env.PORT,
  twilioaccsid: process.env.TWILIOACCSID,
  twilioauthtoken: process.env.TWILIOAUTHTOKEN
};
