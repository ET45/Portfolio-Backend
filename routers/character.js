const { Router } = require("express");
const req = require("express/lib/request");
const Character = require("../models/").character;
const Location = require("../models/").location;
const User = require("../models/").user;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/characters", async (req, res) => {
  try {
    const allCharacters = await Character.findAll({ include: User });
    res.status(200).send(allCharacters);
  } catch (e) {
    console.log("error", e);
  }
});

router.get("/characters/:id", async (req, res) => {
  try {
    const characterId = parseInt(req.params.id);
    const character = await Character.findByPk(characterId, {
      include: Location,
    });
    res.status(200).send(character);
  } catch (e) {
    console.log("error", e);
  }
});

router.post("/characters", authMiddleware, async (req, res) => {
  const { name, gender, hometown, image, skill } = req.body;
  /* const character = await Character.findByPk(userId, { include: Location }); */
  const userId = req.user.id;

  const newCharacter = await Character.create({
    userId: userId,
    name,
    gender,
    hometown,
    image,
    skill,
  });

  return res.status(200).send({ newCharacter });
});

module.exports = router;
