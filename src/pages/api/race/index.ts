import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "src/mongodb";
import addRace from "src/mongodb/controllers/race/add";
import findByPhone from "src/mongodb/controllers/profile/find-by-phone";
import { auth } from "src/mongodb/middleware/auth";

import MESSAGE from "src/utils/api/messages";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "POST":
        const addRaceResponse = await addRace(req.body);

        return res.status(200).send(addRaceResponse);
      default:
        return res.status(422).send({ message: MESSAGE["methodNoSupported"] });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default connectDB(auth(handler));
