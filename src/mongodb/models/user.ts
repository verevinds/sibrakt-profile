import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

var Schema = mongoose.Schema;

var userSchema = new Schema({
  lastName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: (value: string) => {
      if (!validator.isEmail(value)) {
        throw { message: "Invalid Email address" };
      }
    },
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
    required: true,
    validate: (value: string) => {
      if (!validator.isMobilePhone(value)) {
        throw { message: "Неверный формат номера телефона" };
      }
    },
  },
  bornAt: {
    type: Date,
  },
  score: {
    type: Number,
    default: 0,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//@ts-ignore
mongoose.models = {};

userSchema.pre("save", async function (next) {
  // Hash the password before saving the user model
  const user = this;
  if (user.isModified("password")) {
    //@ts-ignore
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  // Generate an auth token for the user
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY!);
  //@ts-ignore
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (phone, password) => {
  // Search for a user by email and password.
  const user = await User.findOne({ phone });
  if (!user) {
    throw { message: "Неверный логин или пароль" };
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw { message: "Неверный логин или пароль" };
  }
  return user;
};

var User = mongoose.model("User", userSchema);

export default User;
