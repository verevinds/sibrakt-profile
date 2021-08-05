import mongoose from "mongoose";
import validator from "validator";
import { DateTime } from "luxon";

var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
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
