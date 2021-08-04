import mongoose from "mongoose";
var Schema = mongoose.Schema;

var user = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  phone: {
    type: String,
  },
  bornAt: {
    type: Date,
  },
  score: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

//@ts-ignore
mongoose.models = {}

var User = mongoose.model("User", user);

export default User;