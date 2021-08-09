import { NextApiRequest } from "next";
import RaceType from "src/mongodb/models/race-type";

export default async (req: NextApiRequest) => {
  const raceType = await RaceType.findByIdAndUpdate(
    { _id: req.body._id },
    { ...req.body }
  )
    .select("-__v")
    .sort("time");

  return raceType;
};
