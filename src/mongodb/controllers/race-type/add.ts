import RaceType from "src/mongodb/models/race-type";


export default async (race: any) => {
  const newRace = await new RaceType(race).save();

  return newRace;
};
