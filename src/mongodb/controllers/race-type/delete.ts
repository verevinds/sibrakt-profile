import { NextApiRequest } from "next";
import RaceType from "src/mongodb/models/race-type";

export default async (req: NextApiRequest) => {
  const raceType = await RaceType.findByIdAndDelete({ _id: req.body.id })
    .select("-__v")
    .sort("time");

  return raceType;
};
