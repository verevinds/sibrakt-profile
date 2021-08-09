import type { ApiError } from "next/dist/next-server/server/api-utils";
import { UseQueryResult, useMutation } from "react-query";
import type { ProfileOnlyName } from "src/types/user";
import { useRequest } from "src/hooks/useRequest";

export const useNameByPhone = () => {
  const request = useRequest();

  async function queryFn(phone: string) {
    const { data } = await request.get("/api/profile", { params: { phone } });

    return data;
  }

  const queryKey = ["profile", "onlyName"];
  return useMutation(queryKey, queryFn, {
    retry: false,
  });
};
