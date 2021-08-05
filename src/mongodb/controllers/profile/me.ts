import { NextApiRequest } from "next";
import User from "src/mongodb/models/user";

export default (req: NextApiRequest) => {
  console.log(req)
};