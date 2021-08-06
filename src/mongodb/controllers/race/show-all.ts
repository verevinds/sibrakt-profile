import Race from "src/mongodb/models/race";

export default async () => {
  const race = await Race.find()
    .populate({ path: "raceTypeId", select: "-__v -createdAt" })
    .select("-__v")
    .sort("time");

  return race;
};
