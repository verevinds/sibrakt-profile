import type { ApiError } from "next/dist/next-server/server/api-utils";
import { useRouter } from "next/router";
import { useQuery, UseQueryResult } from "react-query";
import { useRequest } from "src/hooks/useRequest";
import { RaceData } from "src/types/race";

export const useRaceView = (): UseQueryResult<RaceData[], ApiError> => {
  const request = useRequest();
  const { query } = useRouter();

  async function queryFn() {
    const { data } = await request.get("/api/race/all", {
      params: { raceTypeId: query.raceType },
    });

    return data;
  }

  const queryKey = ["race", query.raceType ? query.raceType : "all"];

  return useQuery(queryKey, queryFn, {
    retry: false,
    keepPreviousData: true,
  });
};
