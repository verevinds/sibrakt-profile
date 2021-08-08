import Race from "src/mongodb/models/race";
import { DateTime } from "luxon";

export default async () => {
  const startOf = DateTime.now().startOf("day");
  const endOf = DateTime.now().endOf("day");

  const race = await Race.find({
    createdAt: {
      $gte: startOf.toJSDate(),
      $lte: endOf.toJSDate(),
    },
  })
    .populate({ path: "raceTypeId", select: "-__v -createdAt" })
    .select("-__v")
    .sort("time");

  return race;
};
