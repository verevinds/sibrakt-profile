import Race from "src/mongodb/models/race";

export default async () => {
  const race = await Race.deleteMany();

  return race;
};
