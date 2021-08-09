import mongoose from "mongoose";
import validator from "validator";
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
    validate: (value: string) => {
      if (!validator.isMobilePhone(value)) {
        throw { message: "Неверный формат номера телефона" };
      }
    },
    ref: "User",
  },
  raceTypeId: { type: Schema.Types.ObjectId, ref: "RaceType", required: true },
  time: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//@ts-ignore
mongoose.models = {};

var User = mongoose.model("Race", userSchema);

export default User;
