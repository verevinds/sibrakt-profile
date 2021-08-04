import User from "src/mongodb/models/user";

import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY as string;

export type User = {
  email: string;
  password: string;
};

export default async (user: User) => {
  const isUser = await User.findOne({ email: user.email }).select("-__v");
  if (isUser) throw {message: 'Электронная почта уже используется'};

  const newUser = await new User(user).save();

  return {
    ...newUser._doc,
    id: newUser._doc._id,
    accessToken: jwt.sign({ userId: newUser.id }, SECRET_KEY),
  };
};
