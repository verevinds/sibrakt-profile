import RaceType from "src/mongodb/models/race-type";

export default async () => {
  const raceType = await RaceType.find()
    .select("-__v")
    .sort("time");

  return raceType;
};
