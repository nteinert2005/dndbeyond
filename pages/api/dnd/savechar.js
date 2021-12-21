import connectDB from "../../../middleware/connectDB";
import DNDCharacter from "../../../models/DNDCharacter";
import User from "../../../models/User";

const handler = (req, res) => {
  const { data, uid } = req.body;

  console.log({ uid });

  const tempChar = new DNDCharacter({
    name: data.name,
    stats: [
      {
        name: "Strength",
        value: data.stats[0].value,
      },
      {
        name: "Dexterity",
        value: data.stats[1].value,
      },
      {
        name: "Constitution",
        value: data.stats[2].value,
      },
      {
        name: "Intelligence",
        value: data.stats[3].value,
      },
      {
        name: "Wisdom",
        value: data.stats[4].value,
      },
      {
        name: "Charisma",
        value: data.stats[5].value,
      },
    ],
    race: data.race.fullName,
    hair: data.hair,
    eyes: data.eyes,
    skin: data.skin,
    height: data.height,
    weight: data.weight,
    inspiration: data.inspiration,
    bonusHitPoints: data.bonusHitPoints,
    traits: data.traits,
    inventory: data.inventory,
    spellSlots: data.spellSlots,
    uuid: uid,
  });

  tempChar.save((err, character) => {
    if (character) {
      res.send("success");
    }
  });
};

export default connectDB(handler);
