const { Router } = require("express");
const req = require("express/lib/request");
const Character = require("../models/").character;

const router = new Router();

router.get("/characters", async (req, res) => {
  try {
    const allCharacters = await Character.findAll();
    res.status(200).send(allCharacters);
  } catch (e) {
    console.log("error", e);
  }
});

router.get("/characters/:id", async (req, res) => {
  try {
    const characterId = parseInt(req.params.id);
    const character = await Character.findByPk(characterId);
    res.status(200).send(character);
  } catch (e) {
    console.log("error", e);
  }
});

module.exports = router;
