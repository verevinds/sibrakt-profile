import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import User from "src/mongodb/models/user";

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
export const auth =
  (handler: Handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      //@ts-ignore
      const token = req.headers["authorization"].replace("Bearer ", "");
      const data = jwt.verify(token, process.env.SECRET_KEY!);

      //@ts-ignore
      const user = await User.findOne({ _id: data._id, "tokens.token": token });
      if (!user) {
        throw new Error();
      }
      //@ts-ignore
      req.user = user;
      //@ts-ignore
      req.token = token;
      handler(req, res);
    } catch (error) {
      res.status(401).send({ error: "Авторизируйтесь, чтобы получить доступ" });
    }
  };
