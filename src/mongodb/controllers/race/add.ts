import Race from "src/mongodb/models/race";


export default async (race: any) => {
  const newRace = await new Race(race).save();

  return newRace;
};
