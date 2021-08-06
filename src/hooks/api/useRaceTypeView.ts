import type { ApiError } from "next/dist/next-server/server/api-utils";
import { useQuery, UseQueryResult } from "react-query";
import { useRequest } from "src/hooks/useRequest";
import { RaceTypeData } from "src/types/race";

export const useRaceTypeView = (): UseQueryResult<RaceTypeData[], ApiError> => {
  const request = useRequest();

  async function queryFn() {
    const { data } = await request.get("/api/race-type/all");

    return data;
  }

  return useQuery("race-type", queryFn, {
    retry: false,
    keepPreviousData: true,
  });
};
