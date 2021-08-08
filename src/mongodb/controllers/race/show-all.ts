import { NextApiRequest } from "next";
import Race from "src/mongodb/models/race";

export default async (req: NextApiRequest) => {
  const params = req.query;
  const findParams: { [key: string]: string | string[] } = {};

  if (params.raceTypeId) {
    findParams.raceTypeId = params.raceTypeId;
  }

  const race = await Race.find(findParams)
    .populate({ path: "raceTypeId", select: "-__v -createdAt" })
    .select("-__v")
    .sort("time");

  return race;
};
