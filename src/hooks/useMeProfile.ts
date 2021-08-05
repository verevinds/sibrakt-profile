import { ApiError } from "next/dist/next-server/server/api-utils";
import { useQuery, UseQueryResult } from "react-query";
import { useRequest } from "./useRequest";

export const useMeProfile = (): UseQueryResult<any, ApiError> => {
  const request = useRequest();

  async function profile() {
    const { data } = await request.get("/api/profile/me");

    return data;
  }

  return useQuery("profile", profile, {
    retry: false,
    keepPreviousData: true,
  });
};
