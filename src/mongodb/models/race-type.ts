import mongoose from "mongoose";

var Schema = mongoose.Schema;

var raceType = new Schema({
  name: {
    type: String,
    required: true,
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
