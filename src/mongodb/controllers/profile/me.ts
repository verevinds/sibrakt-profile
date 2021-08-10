import { DateTime } from "luxon";
import { NextApiRequest } from "next";
import Race from "src/mongodb/models/race";
import User from "src/mongodb/models/user";

export default async (req: NextApiRequest) => {
  //@ts-ignore
  const user = await User.findOne({ _id: req.user.id }).select(
    "-__v -password"
  );
  const findParams: { [key: string]: any } = {
    userLink: user._id,
  };
  const racesMe = await Race.find(findParams);
  user._doc.countRace = racesMe.length;

  const startOf = DateTime.now().startOf("day");
  const endOf = DateTime.now().endOf("day");

  findParams.createdAt = {
    $gte: startOf.toJSDate(),
    $lte: endOf.toJSDate(),
  };
  const racesMeToday = await Race.find(findParams);
  user._doc.countRaceToday = racesMeToday.length;

  return user;
};
