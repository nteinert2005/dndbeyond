import mongoose, { Schema } from "mongoose";

const DNDCharacterSchema = new Schema({
  name: String,
  uuid: {
    ref: "Users",
    type: mongoose.Schema.Types.ObjectId,
  },
  stats: [
    {
      name: String,
      value: Number,
    },
  ],
  race: String,
  hair: String,
  eyes: String,
  skin: String,
  height: String,
  weight: String,
  inspiration: Boolean,
  bonusHitPoints: Number,
  traits: [
    {
      personalityTraits: String,
      ideals: String,
      bonds: String,
      flaws: String,
      appearance: String,
    },
  ],
  inventory: [
    {
      definition: {
        armorClass: Number,
        baseArmorName: String,
        damage: {
          diceCount: Number,
          diceValue: Number,
          diceMultiplier: Number,
          diceString: String,
        },
      },
    },
  ],
  spellSlots: [
    {
      level: Number,
      used: Number,
      available: Number,
    },
  ],
});

mongoose.models = [];

var DNDCharacter = mongoose.model("DNDCharacter", DNDCharacterSchema);

export default DNDCharacter;
