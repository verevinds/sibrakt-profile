import Race from "src/mongodb/models/race";
import mongoose from 'mongoose'

export default async (race: any) => {
  const newRace = await new Race({
    ...race,
    raceTypeId: mongoose.Types.ObjectId(race.raceTypeId),
  }).save();

  return newRace;
};
