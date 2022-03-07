const { Router } = require("express");
const req = require("express/lib/request");
const Character = require("../models/").character;

const router = new Router();

router.get("/characters", async (req, res) => {
  const allCharacters = await Character.findAll();
  res.status(200).send(allCharacters);
});

module.exports = router;
