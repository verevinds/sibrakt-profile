import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "src/mongodb";
import signUp from "src/mongodb/controllers/auth/signup";

import MESSAGE from "src/utils/api/messages";

const handler = async (
  { method, body }: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    switch (method) {
      case "POST":
        const user = await signUp(body);

        return res.status(200).send(user);
      default:
        return res.status(422).send({ message: MESSAGE["methodNoSupported"] });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default connectDB(handler);
