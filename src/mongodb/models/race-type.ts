import mongoose from "mongoose";

var Schema = mongoose.Schema;

var raceType = new Schema({
  name: {
    type: String,
    required: true,
  },
  archive: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//@ts-ignore
mongoose.models = {};

var RaceType = mongoose.model("RaceType", raceType);

export default RaceType;
