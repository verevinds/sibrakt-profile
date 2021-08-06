import type { ApiError } from "next/dist/next-server/server/api-utils";
import { useQuery, UseQueryResult } from "react-query";
import type { ProfileShort } from "src/types/user";
import { useRequest } from "src/hooks/useRequest";
import { RaceType } from "src/types/race";

export const useRaceTypeView = (): UseQueryResult<RaceType[], ApiError> => {
  const request = useRequest();

  async function profile() {
    const { data } = await request.get("/api/race-type/all");

    return data;
  }

  return useQuery("race-type", profile, {
    retry: false,
    keepPreviousData: true,
  });
};
