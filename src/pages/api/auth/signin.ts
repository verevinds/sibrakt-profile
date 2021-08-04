import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "src/mongodb";
import signIn from "src/mongodb/controllers/auth/signin";

import MESSAGE from "src/utils/api/messages";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    switch (req.method) {
      case "POST":
        const signInResponse = await signIn(req);

        return res.status(200).send(signInResponse);
      default:
        return res.status(422).send({ message: MESSAGE["methodNoSupported"] });
    }
  } catch (error) {
    console.dir(error)
    return res.status(500).send(error);
  }
};

export default connectDB(handler);