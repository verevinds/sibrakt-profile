import { NextApiRequest } from "next";
import Race from "src/mongodb/models/race";
import { RaceData } from "src/types/race";
import { ProfileData } from "src/types/user";

export default async (req: NextApiRequest) => {
  //@ts-ignore
  const user = req.user as ProfileData;
  const findParams: { [key: string]: any } = {
    userLink: user._id,
  };
  const races: RaceData[] = await Race.find({
    phone: user.phone,
    $or: [
      { firstName: { $ne: user.firstName } },
      { lastName: { $ne: user.lastName } },
    ],
  });

  races.forEach(async (race) => {
    await Race.findByIdAndUpdate(race._id, {
      userLink: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  });

  const racesMe = await Race.find(findParams)
    .populate({
      path: "raceTypeId",
      select: "-__v -createdAt",
    })
    .select(
      "-__v -password -email -tokens -phone -score -role -firstName -lastName -name -userLink"
    )
    .sort({ createdAt: -1 })
    .skip(req.query.offset ?? 0)
    .limit(req.query.limit ?? 10);

  return racesMe;
};
