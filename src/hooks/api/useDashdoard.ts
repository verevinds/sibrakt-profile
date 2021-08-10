import type { ApiError } from "next/dist/next-server/server/api-utils";
import { useQuery, UseQueryResult } from "react-query";
import { useRequest } from "src/hooks/useRequest";
import { RaceData } from "src/types/race";

export const useDashdoard = (): {
  races: RaceData[] | undefined;
  racesToday: RaceData[] | undefined;
} => {
  const request = useRequest();

  const queryFn = (route: string) => async () => {
    const { data } = await request.get(`/api/race/${route}`);

    return data;
  };

  const races = useQuery<RaceData[], ApiError>(
    ["race", "dashboard", 'all'],
    queryFn("all"),
    {
      retry: false,
      keepPreviousData: true,
    }
  );

  const racesToday = useQuery<RaceData[], ApiError>(
    ["race", "dashboard", "today"],
    queryFn("today"),
    {
      retry: false,
      keepPreviousData: true,
    }
  );

  return {
    races: races.data,
    racesToday: racesToday.data,
  };
};
