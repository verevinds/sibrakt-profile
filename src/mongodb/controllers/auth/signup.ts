import User from "src/mongodb/models/user";

export type User = {
  phone: string;
  password: string;
};

export default async (user: User) => {
  const isUser = await User.findOne({ phone: user.phone }).select("-__v");
  if (isUser) throw {message: 'Номер телефона уже используется'};

  const newUser = await new User(user).save();
  //@ts-ignore
  const accessToken = await newUser.generateAuthToken();

  return {
    ...newUser._doc,
    id: newUser._doc._id,
    accessToken,
  };
};
