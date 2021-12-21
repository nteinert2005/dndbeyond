import connectDB from "../../middleware/connectDB";
import DNDCharacter from "../../models/DNDCharacter";
import User from "../../models/User";

const handler = (req, res) => {
  const { username, password, fullname, email } = req.body;

  //   console.log({username});
  //   console.log({password});
  //   console.log({fullname});

  if (
    username === undefined ||
    email === undefined ||
    password === undefined ||
    fullname === undefined
  ) {
    res.json({
      error: true,
      message: "Please fill out the rest of the form.",
    });
  } else {
    User.findOne(
      {
        username: username,
      },
      (err, user) => {
        if (err) {
          res.json({
            error: true,
            message: "Internal Error. Please try again.",
          });
        }
        if (user) {
          res.json({
            error: true,
            message: "Username is taken. Please try again.",
          });
        } else {
          var tempUser = new User({
            username: username,
            password: password,
            name: fullname,
            tokens: 20,
            email: email,
            characters: [],
          });

          tempUser.save();

          res.json({
            error: null,
            message: "created",
          });
        }
      }
    );
  }
};

export default connectDB(handler);
