import Race from "src/mongodb/models/race";
import mongoose from "mongoose";
import User from "src/mongodb/models/user";
import { NextApiRequest } from "next";
import { RaceRequest } from "src/types/race";
import { ProfileData } from "src/types/user";

export default async (req: NextApiRequest) => {
  const race = req.body as RaceRequest;

  const user: ProfileData = await User.findOne({ phone: race.phone });
  const newRace = await new Race({
    ...race,
    userLink: user?._id ?? null,
    raceTypeId: mongoose.Types.ObjectId(race.raceTypeId),
  }).save();

  return newRace;
};
