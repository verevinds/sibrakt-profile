import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "src/mongodb";
import changePassword from "src/mongodb/controllers/auth/change-password";
import { auth } from "src/mongodb/middleware/auth";

import MESSAGE from "src/utils/api/messages";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "PUT":
        const changePasswordResponse = await changePassword(req);

        return res.status(200).send(changePasswordResponse);
      default:
        return res.status(422).send({ message: MESSAGE["methodNoSupported"] });
    }
  } catch (error) {
    console.dir(error);
    return res.status(500).send(error);
  }
};

export default connectDB(auth(handler));
