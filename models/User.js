import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: String,
  password: String,
  tokens: Number,
  email: String,
  name: String,
  testingfield: String,
  savedGames: [String],
});

mongoose.models = {};

var User = mongoose.model("User", UserSchema);

export default User;
