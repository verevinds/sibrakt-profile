import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "src/mongodb";
import showAll from "src/mongodb/controllers/race/show-all";
import deleteAll from "src/mongodb/controllers/race/delete-all";
import { auth } from "src/mongodb/middleware/auth";

import MESSAGE from "src/utils/api/messages";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
        const races = await showAll(req);
        return res.status(200).send(races);
      case "DELETE":
        const racesDelete = await deleteAll();
        return res.status(200).send(racesDelete);
      default:
        return res.status(422).send({ message: MESSAGE["methodNoSupported"] });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default connectDB(auth(handler));
