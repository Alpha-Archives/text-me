const express = require("express");
const router = express.Router();
const Nexmo = require("nexmo");

const nexmo = new Nexmo(
  {
    apiKey: process.env.API_KEY || "YOURAPIKEY",
    apiSecret: process.env.API_SECRET || "YOURAPISECRET"
  },
  { debug: process.env.DEBUGING || true }
);

const VIRTUAL_NUMBER = process.env.API_SECRET || "YOURVURTUALNUMBER";

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "TextMe" });
});

/* POST home page*/

router.post("/", (req, res) => {
  const { number, text } = req.body;

  nexmo.message.sendSms(VIRTUAL_NUMBER, number, text, { type: "unicode" }, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      const { messages } = responseData;
      const { ["message-id"]: id, ["to"]: number, ["error-text"]: error } = messages[0];
      console.dir(responseData);
      const data = {
        id,
        number,
        error
      };

      // Emit to the client
      io.emit("smsStatus", data);
    }
  });
});

module.exports = router;
