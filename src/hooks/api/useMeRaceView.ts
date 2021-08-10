import type { ApiError } from "next/dist/next-server/server/api-utils";
import { useQuery, UseQueryResult } from "react-query";
import { useRequest } from "src/hooks/useRequest";
import type { RaceData } from "src/types/race";

export const useMeRaceView = (): UseQueryResult<RaceData[], ApiError> => {
  const request = useRequest();

  async function queryFn() {
    const { data } = await request.get("/api/race/me");

    return data;
  }

  const queryKey = ["race", "me", "all"];

  return useQuery(queryKey, queryFn, {
    retry: 2,
    keepPreviousData: true,
  });
};
