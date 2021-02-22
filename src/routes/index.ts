import * as express from "express";
const router = express.Router();

import Nexmo from "nexmo";

// Init Nexmo
const nexmo = new Nexmo(
  {
    apiKey: process.env.NEXMO_API_KEY || "YOURAPIKEY",
    apiSecret: process.env.NEXMO_API_SECRET || "YOURAPISECRET",
  },
  { debug: true }
);

/* GET home page. */
router.get("/", (req: express.Request, res: express.Response) => {
  res.render("index", { title: "Express" });
});

export default router;
