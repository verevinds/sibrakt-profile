import Race from "src/mongodb/models/race";

export default async () => {
  const race = await Race.find().select("-__v").sort("time");

  return race.map((el: any) => {
    const id = el.id;
    delete el._doc._id;

    return { id, ...el._doc };
  });
};
