import connectDB from "../../middleware/connectDB";
import User from "../../models/User";
import DNDCharacter from "../../models/DNDCharacter";

const handler = (req, res) => {
  var { id } = req.query;

  User.findOne({ email: id }).exec((err, user) => {
    if (err) res.send(500);
    if (user) {
      DNDCharacter.find({ uuid: user._id }).exec((err, characters) => {
        if (characters) {
          var sentUser = {
            user: user,
            dndcharacters: characters,
          };
          console.log({ sentUser });
          res.send(sentUser);
        }
      });
    }
  });
};

export default connectDB(handler);
