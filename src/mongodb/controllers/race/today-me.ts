import { DateTime } from "luxon";
import { NextApiRequest } from "next";

import Race from "src/mongodb/models/race";
import { byNoArchive } from "src/mongodb/utils/race";

export default async (req: NextApiRequest) => {
  //@ts-ignore
  const user = req.user as ProfileData;

  const startOf = DateTime.now().startOf("day");
  const endOf = DateTime.now().endOf("day");

  const findParams: { [key: string]: any } = {
    userLink: user._id,
    createdAt: {
      $gte: startOf.toJSDate(),
      $lte: endOf.toJSDate(),
    },
  };

  const race = await Race.find(findParams)
    .populate({
      path: "raceTypeId userLink",
      select: "-__v -createdAt -password -email -tokens -phone -score -role",
      findParams: { archive: { $ne: true } },
    })
    .select("-__v")
    .sort("time");

  return byNoArchive(race);
};
