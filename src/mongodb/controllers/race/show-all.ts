import { NextApiRequest } from "next";
import Race from "src/mongodb/models/race";
import { byNoArchive } from "src/mongodb/utils/race";

export default async (req: NextApiRequest) => {
  const params = req.query;
  const findParams: { [key: string]: any } = {
    // "raceTypeId": {archive:{ $ne: true }},
  };

  if (params.raceTypeId) {
    findParams.raceTypeId = params.raceTypeId;
  }

  const races = await Race.find(findParams)
    .populate({
      path: "raceTypeId",
      select: "-__v -createdAt",
    })
    .select("-__v")
    .sort({ createdAt: -1 });

  return races;
};
