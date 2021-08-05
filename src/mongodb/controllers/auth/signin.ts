import { NextApiRequest } from "next";
import jwt from "jsonwebtoken";

import User from "src/mongodb/models/user";

const SECRET_KEY = process.env.SECRET_KEY as string;

export default async (req: NextApiRequest) => {
  const { email, password } = req.body;
  //@ts-ignore
  const user = await User.findByCredentials(email, password);
  const accessToken = await user.generateAuthToken();

  if (user) {
    return {
      accessToken,
    };
  }

  throw { message: "Ошибка авторизации" };
};
