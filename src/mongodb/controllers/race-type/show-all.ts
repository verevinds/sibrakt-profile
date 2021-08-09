import { NextApiRequest } from "next";
import RaceType from "src/mongodb/models/race-type";

export default async (req: NextApiRequest) => {

   const findParams: { [key: string]: any } = {
     // "raceTypeId": {archive:{ $ne: true }},
   };

   if (req.query.archive === "false" || !req.query.archive) {
     findParams.archive = { $ne: !req.query.archive };
   }

  const raceType = await RaceType.find(findParams).select("-__v").sort("time");

  return raceType;
};
