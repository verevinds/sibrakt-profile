import User from "src/mongodb/models/user";

export type User = {
  email: string;
  password: string;
};

export default async (user: User) => {
  const isUser = await User.findOne({ email: user.email }).select("-__v");
  if (isUser) throw {message: 'Электронная почта уже используется'};

  const newUser = await new User(user).save();
  //@ts-ignore
  const accessToken = await newUser.generateAuthToken();

  return {
    ...newUser._doc,
    id: newUser._doc._id,
    accessToken,
  };
};
