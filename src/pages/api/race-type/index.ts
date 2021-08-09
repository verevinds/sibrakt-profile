import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "src/mongodb";
import addRaceType from "src/mongodb/controllers/race-type/add";
import deleteRaceType from "src/mongodb/controllers/race-type/delete";
import { auth } from "src/mongodb/middleware/auth";

import MESSAGE from "src/utils/api/messages";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "POST":
        const result = await addRaceType(req.body);

        return res.status(200).send(result);
      case "PUT":
        const resultDelete = await deleteRaceType(req);

        return res.status(200).send(resultDelete);
      default:
        return res.status(422).send({ message: MESSAGE["methodNoSupported"] });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default connectDB(auth(handler));
