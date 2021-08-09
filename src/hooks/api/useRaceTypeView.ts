import type { ApiError } from "next/dist/next-server/server/api-utils";
import { useRouter } from "next/router";
import { useQuery, UseQueryResult } from "react-query";
import { useRequest } from "src/hooks/useRequest";
import { RaceTypeData } from "src/types/race";

export const useRaceTypeView = (): UseQueryResult<RaceTypeData[], ApiError> => {
  const request = useRequest();
  const { query } = useRouter();

  async function queryFn() {
    const { data } = await request.get("/api/race-type/all", {
      params: { ...query },
    });

    return data;
  }

  const queryKey = [
    "race-type",
    query.archive === "false" || !query.archive ? "false" : "true",
  ];

  return useQuery(queryKey, queryFn, {
    retry: false,
    keepPreviousData: true,
  });
};
