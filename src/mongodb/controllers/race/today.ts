import { DateTime } from "luxon";
import { NextApiRequest } from "next";

import Race from "src/mongodb/models/race";
import { byNoArchive } from "src/mongodb/utils/race";

export default async (req: NextApiRequest) => {
  const params = req.query;


  const startOf = DateTime.now().startOf("day");
  const endOf = DateTime.now().endOf("day");

  const findParams: { [key: string]: any } = {
    createdAt: {
      $gte: startOf.toJSDate(),
      $lte: endOf.toJSDate(),
    },
  };

  if (params.raceTypeId) {
    findParams.raceTypeId = params.raceTypeId;
  }

  const race = await Race.find(findParams)
    .populate({
      path: "raceTypeId userLink",
      select:
        "-__v -createdAt -password -email -tokens -phone -score -role",
      findParams: { archive: { $ne: true } },
    })
    .select("-__v")
    .sort("time");

  return byNoArchive(race);
};
