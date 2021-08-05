import type { ApiError } from "next/dist/next-server/server/api-utils";
import { useQuery, UseQueryResult } from "react-query";
import type { ProfileShort } from "src/types/user";
import { useRequest } from "src/hooks/useRequest";

export const useMeProfile = (): UseQueryResult<ProfileShort, ApiError> => {
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
