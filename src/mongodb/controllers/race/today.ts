import { DateTime } from "luxon";

import Race from "src/mongodb/models/race";
import { byNoArchive } from "src/mongodb/utils/race";

export default async () => {
  const startOf = DateTime.now().startOf("day");
  const endOf = DateTime.now().endOf("day");

  const race = await Race.find({
    createdAt: {
      $gte: startOf.toJSDate(),
      $lte: endOf.toJSDate(),
    },
  })
    .populate({
      path: "raceTypeId userLink",
      select:
        "-__v -createdAt -password -email -tokens -phone -score -role -_id",
      findParams: { archive: { $ne: true } },
    })
    .select("-__v")
    .sort("time");

  return byNoArchive(race);
};
