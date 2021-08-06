import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "src/mongodb";
import showAll from "src/mongodb/controllers/race-type/show-all";
import { auth } from "src/mongodb/middleware/auth";

import MESSAGE from "src/utils/api/messages";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
        const result = await showAll();
        return res.status(200).send(result);
      default:
        return res.status(422).send({ message: MESSAGE["methodNoSupported"] });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default connectDB(auth(handler));
