import { ApiError } from "next/dist/next-server/server/api-utils";
import User from "src/mongodb/models/user";

export type User = {
  userName: string;
  email: string;
  password: string;
};

export default async (user: User) => {
  const isUser = await User.findOne({ userName: user.userName }).select("-__v");
  if (isUser) throw {message: 'Пользователь с таким логином уже найден'};

  const newUser = await new User(user).save();

  return newUser;
};
