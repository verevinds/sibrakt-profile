import { NextApiRequest } from "next";
import User from "src/mongodb/models/user";

export default async (req: NextApiRequest) => {
  const params = req.query;
  console.log(params);
  const findParams: { [key: string]: any } = {
    // "raceTypeId": {archive:{ $ne: true }},
  };

  if (params.raceTypeId) {
    findParams.phone = params.phone;
  }

  const races = await User.findOne({ phone: params.phone })
    .select("-__v")
    .sort({ createdAt: -1 });
console.log(races);
  return { firstName: races.firstName, lastName: races.lastName };
};
