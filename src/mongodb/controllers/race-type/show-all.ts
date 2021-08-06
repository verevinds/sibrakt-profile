import RaceType from "src/mongodb/models/race-type";

export default async () => {
  const raceType = await RaceType.find().select("-__v").sort("time");

  return raceType.map((el: any) => {
    const id = el.id;
    delete el._doc._id;

    return { id, ...el._doc };
  });
};
