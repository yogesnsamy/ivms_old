var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("alert/notify", { title: "Alert" });
});

router.post("/", function(req, res, next) {
  // Download the helper library from https://www.twilio.com/docs/node/install
  // Your Account Sid and Auth Token from twilio.com/console
  // DANGER! This is insecure. See http://twil.io/secure
  const accountSid = "ACbeb5f1735912ccca7b43014f4bc848dd";
  const authToken = "91a8e25209fe9184abcaa5a4550d18e8";
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body:
        "Your Yummy Cupcakes Company order of 1 dozen frosted cupcakes has shipped and should be delivered on July 10, 2019. Details: http://www.yummycupcakes.com/",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+60137080203"
    })
    .then(message => console.log(message.sid))
    .catch(err => console.log(err))
    .done();

  res.render("alert/notify", { title: "Posted" });
});

module.exports = router;
