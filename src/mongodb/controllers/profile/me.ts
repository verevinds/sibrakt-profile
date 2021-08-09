import { NextApiRequest } from "next";
import User from "src/mongodb/models/user";

export default async (req: NextApiRequest) => {
  //@ts-ignore
  const user = await User.findOne({ _id: req.user.id });
  return user
}  ;
