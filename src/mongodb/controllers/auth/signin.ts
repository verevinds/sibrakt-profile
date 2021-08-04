import { NextApiRequest } from "next";
import jwt from "jsonwebtoken";

import User from "src/mongodb/models/user";

const SECRET_KEY = process.env.SECRET_KEY as string;

export default async (req: NextApiRequest) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password }).select("-__v");

  if (user) {
    return { accessToken: jwt.sign({ userId: user.id }, SECRET_KEY) };
  }

  throw { message: "Ошибка авторизации" };
};
