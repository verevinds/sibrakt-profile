import type { ApiError } from "next/dist/next-server/server/api-utils";
import { useQuery, UseQueryResult } from "react-query";
import { useRequest } from "src/hooks/useRequest";
import { RaceData } from "src/types/race";

export const useRaceTodayView = (): UseQueryResult<RaceData[], ApiError> => {
  const request = useRequest();

  async function queryFn() {
    const { data } = await request.get("/api/race/today");

    return data;
  }

  return useQuery("race/today", queryFn, {
    retry: false,
    keepPreviousData: true,
  });
};
