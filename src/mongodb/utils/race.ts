import { RaceData } from "src/types/race";

export const byNoArchive = (races: RaceData[]) =>
  races.filter((race: RaceData) => !race.raceTypeId.archive);
