import connectDB from "../../../middleware/connectDB";
import DNDCharacter from "../../../models/DNDCharacter";

const handler = (req, res) => {
  const { id } = req.query;

  DNDCharacter.findOne(
    {
      id: id,
    },
    (err, character) => {
      if (err) throw new Error(err);
      if (character) res.send(character);
    }
  );
};

export default connectDB(handler);
