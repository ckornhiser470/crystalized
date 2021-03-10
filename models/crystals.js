const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const crystalSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    message: "Crystal already in DB",
  },
  purpose: [
    {
      type: String,
    },
  ],
  color: {
    type: String,
    required: [true, "A crystal must have a color"],
    enum: {
      values: [
        "brown",
        "red",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "black",
        "white",
        "orange",
      ],
      message:
        "Crystals can be brown, red, yellow, green, blue, purple, pink, black, or white",
    },
  },
  healing: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const Crystal = mongoose.model("Crystal", crystalSchema);
module.exports = Crystal;
