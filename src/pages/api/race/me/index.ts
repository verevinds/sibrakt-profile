import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "src/mongodb";
import showAllMe from "src/mongodb/controllers/race/show-all-me";
import { auth } from "src/mongodb/middleware/auth";

import MESSAGE from "src/utils/api/messages";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
        const races = await showAllMe(req);
        return res.status(200).send(races);
      default:
        return res.status(422).send({ message: MESSAGE["methodNoSupported"] });
    }
  } catch (error) {
    console.error(error)
    return res.status(500).send(error);
  }
};

export default connectDB(auth(handler));
