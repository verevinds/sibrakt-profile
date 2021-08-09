import { NextApiRequest } from "next";
import User from "src/mongodb/models/user";

export default async (req: NextApiRequest) => {

  console.log(req.body);
  const user = await User.findOneAndUpdate(
    //@ts-ignore
    { _id: req.user.id },
    { ...req.body }
  );
  return user;
};
