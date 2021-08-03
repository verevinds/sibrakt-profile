import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "src/mongodb";
import addUser from "src/mongodb/controler/users/add";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "POST":
        const user = await addUser(req.body);

        return res.status(200).send(user);
      default:
        return res
          .status(422)
          .send({ message: "Request method not supported" });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default connectDB(handler);
