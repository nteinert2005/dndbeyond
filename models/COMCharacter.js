import mongoose, { Schema } from "mongoose";

const COMCharacter = new Schema({
  name: String,
  uuid: {
    ref: "Users",
    type: mongoose.Schema.Types.ObjectId,
  },
});

mongoose.models = [];

var COMCharacter = mongoose.model("COMCharacter", COMCharacterSchema);

export default COMCharacter;
